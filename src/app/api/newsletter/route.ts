import { NextRequest, NextResponse } from 'next/server';

const SALES_UAE_API_BASE_URL = process.env.SALES_UAE_API_BASE_URL;
const SALES_UAE_API_KEY = process.env.SALES_UAE_API_KEY;

if (!SALES_UAE_API_BASE_URL || !SALES_UAE_API_KEY) {
  throw new Error('Missing required environment variables: SALES_UAE_API_BASE_URL and SALES_UAE_API_KEY');
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

    const response = await fetch(`${SALES_UAE_API_BASE_URL}/public-api/lead/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': SALES_UAE_API_KEY!,
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