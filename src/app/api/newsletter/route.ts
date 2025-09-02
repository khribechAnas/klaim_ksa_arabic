import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.KLAIM_API_URL || process.env.NEXT_PUBLIC_KLAIM_API_URL;
const LEGACY_API_BASE_URL = process.env.KLAIM_LEGACY_API_URL || process.env.NEXT_PUBLIC_KLAIM_LEGACY_API_URL || API_BASE_URL;
const API_KEY = process.env.KLAIM_API_KEY || process.env.NEXT_PUBLIC_KLAIM_API_KEY;
const LEGACY_API_KEY = process.env.KLAIM_LEGACY_API_KEY || process.env.NEXT_PUBLIC_KLAIM_LEGACY_API_KEY || API_KEY;

if (!API_BASE_URL || !API_KEY) {
  throw new Error('Missing required environment variables: KLAIM_API_URL and KLAIM_API_KEY');
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const getCompanyIdFromRequest = (req: NextRequest): number | undefined => {
      try {
        const referer = req.headers.get('referer') || '';
        if (referer) {
          const url = new URL(referer);
          const path = url.pathname.toLowerCase();
          if (path.startsWith('/flow')) return 1;
          if (path.startsWith('/estate')) return 2;
          if (path.startsWith('/health')) return 3;
        }
      } catch {}
      return undefined;
    };

    const companyId = getCompanyIdFromRequest(request);

    const response = companyId
      ? await fetch(`${API_BASE_URL}/public-api/lead`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': API_KEY!,
          },
          body: JSON.stringify({
            data: [{
              company_id: companyId,
              source: 'Website Newsletter',
              email_from: email.trim(),
            }]
          }),
        })
      : await fetch(`${LEGACY_API_BASE_URL}/public-api/lead/newsletter`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'API-KEY': LEGACY_API_KEY!,
          },
          body: JSON.stringify({
            data: [{ email_from: email.trim() }]
          }),
        });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('Klaim API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText
      });
      
      return NextResponse.json(
        { success: false, message: 'Failed to subscribe. Please try again later.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: result
    });

  } catch (error) {
    console.error('Newsletter API Error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}