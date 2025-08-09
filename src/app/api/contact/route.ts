import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.KLAIM_API_URL || process.env.NEXT_PUBLIC_KLAIM_API_URL;
const API_KEY = process.env.KLAIM_API_KEY || process.env.NEXT_PUBLIC_KLAIM_API_KEY;

if (!API_BASE_URL || !API_KEY) {
  throw new Error('Missing required environment variables: KLAIM_API_URL and KLAIM_API_KEY');
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, message } = await request.json();

    if (!name || !email || !company) {
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

    const response = await fetch(`${API_BASE_URL}/public-api/lead/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': API_KEY!,
      },
      body: JSON.stringify({
        data: [{
          contact_name: name.trim(),
          email_from: email.trim(),
          partner_name: company.trim(),
          phone: phone?.trim() || '',
          description: message?.trim() || '',
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
        { success: false, message: 'Failed to send message. Please try again later.' },
        { status: response.status }
      );
    }

    const result = await response.json();
    
    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
      data: result
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}