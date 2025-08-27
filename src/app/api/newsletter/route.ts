import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.KLAIM_API_URL || process.env.NEXT_PUBLIC_KLAIM_API_URL;
const LEGACY_API_BASE_URL = process.env.KLAIM_LEGACY_API_URL || process.env.NEXT_PUBLIC_KLAIM_LEGACY_API_URL || API_BASE_URL;
const API_KEY = process.env.KLAIM_API_KEY || process.env.NEXT_PUBLIC_KLAIM_API_KEY;
const LEGACY_API_KEY = process.env.KLAIM_LEGACY_API_KEY || process.env.NEXT_PUBLIC_KLAIM_LEGACY_API_KEY || API_KEY;

if (!API_BASE_URL || !API_KEY) {
  throw new Error('Missing required environment variables: KLAIM_API_URL and KLAIM_API_KEY');
}

export async function POST(request: NextRequest) {
  console.log('🚀 [NEWSLETTER API] Request received:', {
    timestamp: new Date().toISOString(),
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(request.headers.entries()),
  });

  try {
    const { email } = await request.json();
    
    console.log('📧 [NEWSLETTER API] Email received:', {
      email: email,
      timestamp: new Date().toISOString(),
    });

    if (!email || !email.includes('@')) {
      console.log('❌ [NEWSLETTER API] Invalid email format:', email);
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const getCompanyIdFromRequest = (req: NextRequest): number | undefined => {
      try {
        const referer = req.headers.get('referer') || '';
        console.log('🔍 [NEWSLETTER API] Referer header:', referer);
        
        if (referer) {
          const url = new URL(referer);
          const path = url.pathname.toLowerCase();
          console.log('📍 [NEWSLETTER API] Path from referer:', path);
          
          if (path.startsWith('/flow')) {
            console.log('🏢 [NEWSLETTER API] Company ID determined: 1 (Flow)');
            return 1;
          }
          if (path.startsWith('/estate')) {
            console.log('🏢 [NEWSLETTER API] Company ID determined: 2 (Estate)');
            return 2;
          }
          if (path.startsWith('/health')) {
            console.log('🏢 [NEWSLETTER API] Company ID determined: 3 (Health)');
            return 3;
          }
        }
      } catch (error) {
        console.log('⚠️ [NEWSLETTER API] Error parsing referer:', error);
      }
      console.log('🏢 [NEWSLETTER API] No company ID determined, using legacy endpoint');
      return undefined;
    };

    const companyId = getCompanyIdFromRequest(request);
    
    console.log('🔧 [NEWSLETTER API] Environment variables:', {
      API_BASE_URL: API_BASE_URL ? `${API_BASE_URL.substring(0, 20)}...` : 'NOT_SET',
      LEGACY_API_BASE_URL: LEGACY_API_BASE_URL ? `${LEGACY_API_BASE_URL.substring(0, 20)}...` : 'NOT_SET',
      API_KEY: API_KEY ? 'SET' : 'NOT_SET',
      LEGACY_API_KEY: LEGACY_API_KEY ? 'SET' : 'NOT_SET',
    });

    let targetEndpoint: string;
    let requestBody: { data: { company_id: number; source: string; email_from: string }[] } | { data: { email_from: string }[] };
    
    if (companyId) {
      targetEndpoint = `${API_BASE_URL}/public-api/lead`;
      requestBody = {
        data: [{
          company_id: companyId,
          source: 'Website Newsletter',
          email_from: email.trim(),
        }]
      };
      console.log('🎯 [NEWSLETTER API] Using NEW API endpoint:', targetEndpoint);
      console.log('📦 [NEWSLETTER API] Request body:', requestBody);
    } else {
      targetEndpoint = `${LEGACY_API_BASE_URL}/public-api/lead/newsletter`;
      requestBody = {
        data: [{ email_from: email.trim() }]
      };
      console.log('🎯 [NEWSLETTER API] Using LEGACY API endpoint:', targetEndpoint);
      console.log('📦 [NEWSLETTER API] Request body:', requestBody);
    }

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

    console.log('📡 [NEWSLETTER API] External API response:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      endpoint: targetEndpoint,
      timestamp: new Date().toISOString(),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => 'Unknown error');
      console.error('❌ [NEWSLETTER API] Klaim API Error:', {
        status: response.status,
        statusText: response.statusText,
        errorText,
        endpoint: targetEndpoint,
        timestamp: new Date().toISOString(),
      });
      
      return NextResponse.json(
        { success: false, message: 'Failed to subscribe. Please try again later.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('✅ [NEWSLETTER API] Success response from external API:', {
      result,
      endpoint: targetEndpoint,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      data: result
    });

  } catch (error) {
    console.error('💥 [NEWSLETTER API] Newsletter API Error:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}