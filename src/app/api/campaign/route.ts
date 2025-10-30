import { NextRequest, NextResponse } from 'next/server';

const SALES_UAE_API_BASE_URL = process.env.SALES_UAE_API_BASE_URL;
const SALES_UAE_API_KEY = process.env.SALES_UAE_API_KEY;

if (!SALES_UAE_API_BASE_URL || !SALES_UAE_API_KEY) {
  throw new Error('Missing required environment variables: SALES_UAE_API_BASE_URL and SALES_UAE_API_KEY');
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message } = await request.json();

    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const getSectorFromRequest = (req: NextRequest): string | undefined => {
      try {
        const referer = req.headers.get('referer') || '';
        if (referer) {
          const url = new URL(referer);
          const path = url.pathname.toLowerCase();
          if (path.startsWith('/flow')) return 'Klaim Flow';
          if (path.startsWith('/estate')) return 'Klaim Estate';
          if (path.startsWith('/health')) return 'Klaim Health';
        }
      } catch {}
      return undefined;
    };
    
    const sector = getSectorFromRequest(request);
    const originalMessage = message?.trim() || '';
    const description = sector
      ? `[${sector}]: ${originalMessage}`
      : originalMessage;

    const response = await fetch(`${SALES_UAE_API_BASE_URL}/public-api/lead/campaign`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': SALES_UAE_API_KEY!,
      },
      body: JSON.stringify({
        data: [{
          contact_name: name.trim(),
          email_from: email.trim(),
          partner_name: company.trim(),
          phone: phone.trim(),
          description: description.replace(/\n/g, '<br/>'),
        }]
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
        { success: false, message: 'Failed to submit campaign lead. Please try again later.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    
    return NextResponse.json({
      success: true,
      message: 'Campaign lead submitted successfully!',
      data: result
    });

  } catch (error) {
    console.error('Campaign API Error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}