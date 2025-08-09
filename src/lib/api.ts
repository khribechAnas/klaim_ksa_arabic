// API utility functions for Klaim CRM integration

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export async function submitNewsletterLead(email: string): Promise<ApiResponse> {
  if (!email || !email.includes('@')) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.trim() }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to subscribe. Please try again later.',
      };
    }

    return {
      success: true,
      message: result.message || 'Thank you for subscribing to our newsletter!',
      data: result.data,
    };
  } catch (error) {
    console.error('Newsletter submission error:', error);
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