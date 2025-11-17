// Email service - calls backend server or Vercel API to send OTP
const getEmailApiUrl = () => {
  // In production (Vercel), use /api endpoint
  // In development, use local server
  return import.meta.env.VITE_API_URL 
    ? `${import.meta.env.VITE_API_URL}/send-otp-email`
    : '/api/send-otp-email';
};

export const sendOTPEmail = async (email: string, otp: string) => {
  console.log('Sending OTP email via server...', { email });

  try {
    const response = await fetch(getEmailApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error(errorData.message || `Failed to send email (${response.status})`);
    }

    const result = await response.json();
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
