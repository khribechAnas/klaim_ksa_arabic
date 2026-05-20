import { NextRequest, NextResponse } from 'next/server';
import { getSalesUaeApiConfig } from '@/lib/sales-uae-api';

export async function POST(request: NextRequest) {
  const salesUaeApi = getSalesUaeApiConfig();
  if (!salesUaeApi) {
    console.error(
      'Missing required environment variables: SALES_UAE_API_BASE_URL and SALES_UAE_API_KEY'
    );
    return NextResponse.json(
      { success: false, message: 'Service is not configured. Please try again later.' },
      { status: 503 }
    );
  }

  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const response = await fetch(`${salesUaeApi.baseUrl}/public-api/lead/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': salesUaeApi.apiKey,
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