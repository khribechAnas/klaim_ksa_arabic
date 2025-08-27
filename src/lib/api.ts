// API utility functions for Klaim CRM integration

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export async function submitNewsletterLead(email: string): Promise<ApiResponse> {
  console.log('📧 [CLIENT API] Newsletter submission started:', {
    email: email,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server-side',
  });

  if (!email || !email.includes('@')) {
    console.log('❌ [CLIENT API] Invalid email format:', email);
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    console.log('🌐 [CLIENT API] Making request to /api/newsletter');
    
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim() }),
    });

    console.log('📡 [CLIENT API] Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      timestamp: new Date().toISOString(),
    });

    const result = await response.json();
    
    console.log('📄 [CLIENT API] Response body:', {
      result,
      timestamp: new Date().toISOString(),
    });
    
    if (!response.ok) {
      console.log('❌ [CLIENT API] Request failed:', {
        status: response.status,
        message: result.message,
        timestamp: new Date().toISOString(),
      });
      
      return {
        success: false,
        message: result.message || 'Failed to subscribe. Please try again later.',
      };
    }

    console.log('✅ [CLIENT API] Newsletter submission successful');
    
    return {
      success: true,
      message: result.message || 'Thank you for subscribing to our newsletter!',
      data: result.data,
    };
  } catch (error) {
    console.error('💥 [CLIENT API] Newsletter submission error:', {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });
    
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

export async function submitContactLead(contactData: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}): Promise<ApiResponse> {
  if (!contactData.name || !contactData.email || !contactData.company) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  if (!contactData.email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: contactData.name.trim(),
        email: contactData.email.trim(),
        company: contactData.company.trim(),
        phone: contactData.phone?.trim() || '',
        message: contactData.message?.trim() || '',
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again later.',
      };
    }

    return {
      success: true,
      message: result.message || 'Thank you for contacting us! We\'ll get back to you soon.',
      data: result.data,
    };
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

export async function submitCampaignLead(campaignData: {
  name: string;
  email: string;
  company: string;
  phone: string;
}): Promise<ApiResponse> {
  if (!campaignData.name || !campaignData.email || !campaignData.company || !campaignData.phone) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  if (!campaignData.email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    const response = await fetch('/api/campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: campaignData.name.trim(),
        email: campaignData.email.trim(),
        company: campaignData.company.trim(),
        phone: campaignData.phone.trim(),
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to submit. Please try again later.',
      };
    }

    return {
      success: true,
      message: result.message || 'Thank you for your interest! We\'ll contact you soon.',
      data: result.data,
    };
  } catch (error) {
    console.error('Campaign submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}