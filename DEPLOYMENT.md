# Deployment Guide

## Current Setup
- Frontend: Hosted on Vercel
- Backend API: Vercel Serverless Functions (in `/api` folder)
- Database: Supabase
- Payments: Razorpay (Test Mode)
- Email: Resend

## Environment Variables in Vercel

You need to add these environment variables in your Vercel project settings:

### Go to: Vercel Dashboard → Your Project → Settings → Environment Variables

1. **Supabase** (already set):
   - `VITE_SUPABASE_URL` = https://qswcrbblnjblejqwxgjn.supabase.co
   - `VITE_SUPABASE_ANON_KEY` = your_anon_key

2. **Razorpay Test Mode**:
   - `RAZORPAY_KEY_ID` = your_test_key_id
   - `RAZORPAY_KEY_SECRET` = your_test_key_secret
   - `VITE_RAZORPAY_KEY_ID` = your_test_key_id (same as above)

3. **Resend Email**:
   - `RESEND_API_KEY` = your_resend_api_key

4. **DO NOT ADD** `VITE_API_URL` in Vercel (it should be empty in production)

## Going Live with Razorpay

### When you get Live/Production API Keys from Razorpay:

1. **In Vercel Environment Variables**, replace:
   - `RAZORPAY_KEY_ID` = your_LIVE_key_id
   - `RAZORPAY_KEY_SECRET` = your_LIVE_key_secret
   - `VITE_RAZORPAY_KEY_ID` = your_LIVE_key_id

2. **In your local `.env.local`**, replace:
   - Same keys as above

3. **That's it!** No code changes needed.

## Testing Payments

### Test Mode (Current):
- Use Razorpay test card: `4111 1111 1111 1111`
- Any future expiry date
- Any CVV (e.g., 123)
- Any name

### Live Mode:
- Real credit/debit cards
- Real transactions
- Real money processed

## Local Development

1. Start the backend server:
   ```
   cd server
   npm run dev
   ```

2. Start the frontend (in another terminal):
   ```
   npm run dev
   ```

3. Make sure `.env.local` has `VITE_API_URL=http://localhost:4242`

## Production Deployment

1. **Push to GitHub**:
   ```
   git add .
   git commit -m "Update payment and OTP system"
   git push origin main
   ```

2. **Vercel Auto-deploys** (if connected to GitHub)
   - Or manually deploy: `vercel --prod`

3. **Verify Environment Variables** are set in Vercel Dashboard

## Email Sending - Going Live

### Current (Test Mode):
- Can only send to: himansingh8511@gmail.com
- Using: onboarding@resend.dev

### For Production:
1. Go to resend.com/domains
2. Add your domain: lifebiotech.in
3. Add DNS records (provided by Resend)
4. Wait for verification (few hours)
5. Update `api/send-otp-email.js`:
   - Change `from: 'lifebiotech <onboarding@resend.dev>'`
   - To: `from: 'Life Biotech <noreply@lifebiotech.in>'`

## Important Notes

- ✅ Test payments work with test keys
- ✅ Production payments need live keys
- ✅ Only API keys need to be changed (no code changes)
- ✅ Change keys in BOTH Vercel and local `.env.local`
- ⚠️ Never commit `.env.local` to GitHub
- ⚠️ Test with test keys before going live
