// Email service - calls backend server or Vercel API to send OTP
const getEmailApiUrl = () => {
  // In production (Vercel), use /api endpoint
  // In development, use local server
  return import.meta.env.VITE_API_URL 
    ? `${import.meta.env.VITE_API_URL}/send-otp-email`
    : '/api/send-otp-email';
};

export const sendOTPEmail = async (email: string, otp: string) => {
  const apiUrl = getEmailApiUrl();
  console.log('Sending OTP email via server...', { email, apiUrl });

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });

    console.log('Response status:', response.status);
    
    // Try to get response text first
    const responseText = await response.text();
    console.log('Response text:', responseText);

    if (!response.ok) {
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch {
        // If response is not JSON, throw with the text
        throw new Error(`Server error: ${responseText.substring(0, 100)}`);
      }
      console.error('Resend API error:', errorData);
      throw new Error(errorData.message || errorData.error || `Failed to send email (${response.status})`);
    }

    const result = JSON.parse(responseText);
    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error: any) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
};

// Generate 6-digit OTP
export const generateOTP = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
