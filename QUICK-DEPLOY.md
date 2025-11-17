# 🚀 Quick Deployment Checklist

## ✅ Before Pushing to GitHub

1. **Check your `.env.local` file has Razorpay keys**:
   ```
   VITE_RAZORPAY_KEY_ID=rzp_test_xxxxx
   ```

2. **Check your `server/.env` file has Razorpay keys**:
   ```
   RAZORPAY_KEY_ID=rzp_test_xxxxx
   RAZORPAY_KEY_SECRET=xxxxx
   ```

3. **Verify `.gitignore` is protecting secrets** (already done ✓):
   - `.env.local` won't be committed
   - `server/.env` won't be committed

---

## 🔧 Vercel Environment Variables Setup

### Go to: [Vercel Dashboard](https://vercel.com/dashboard) → Your Project → Settings → Environment Variables

Add these **4 environment variables**:

| Variable Name | Value | Where to get it |
|--------------|-------|-----------------|
| `VITE_SUPABASE_URL` | `https://qswcrbblnjblejqwxgjn.supabase.co` | Already in your `.env.local` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Already in your `.env.local` |
| `RAZORPAY_KEY_ID` | `rzp_test_xxxxx` | [Razorpay Dashboard](https://dashboard.razorpay.com/app/website-app-settings/api-keys) - Test Mode |
| `RAZORPAY_KEY_SECRET` | Your secret key | Razorpay Dashboard - Test Mode |
| `VITE_RAZORPAY_KEY_ID` | `rzp_test_xxxxx` | Same as RAZORPAY_KEY_ID |
| `RESEND_API_KEY` | `re_Fm3YNFr2_Th4gssDP6EwoDnfEhJV8biFi` | Already in `server/.env` |

**Important**: Apply to "Production", "Preview", and "Development" environments.

---

## 📤 Deploy to Vercel

```bash
# 1. Commit your changes
git add .
git commit -m "Add OTP authentication and fix payment integration"
git push origin main

# 2. Vercel will auto-deploy (if GitHub connected)
# Or manually: vercel --prod
```

---

## 🎯 Going Live with Razorpay

### When you get Production API Keys:

**Step 1:** Get Live Keys from Razorpay
- Go to https://dashboard.razorpay.com/app/website-app-settings/api-keys
- Switch to "Live Mode" (toggle in top-right)
- Generate Live API Keys

**Step 2:** Update Vercel Environment Variables
- Replace `RAZORPAY_KEY_ID` → Live key
- Replace `RAZORPAY_KEY_SECRET` → Live secret
- Replace `VITE_RAZORPAY_KEY_ID` → Live key

**Step 3:** Update Local `.env.local`
- Same replacements as above
- For local testing with production keys

**✅ That's it! No code changes needed.**

---

## 🧪 Testing Payments

### Test Mode (Current):
```
Card Number: 4111 1111 1111 1111
Expiry: Any future date (e.g., 12/25)
CVV: Any 3 digits (e.g., 123)
Name: Any name
```

### Live Mode:
- Real cards only
- Real money processed
- Test thoroughly before going live!

---

## 📧 Email Sending - Production Setup

### Current Limitation:
- Resend test mode can only send to: `himansingh8511@gmail.com`

### To Send to Any Email:

**Option 1: Verify Your Domain** (Recommended)
1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter: `lifebiotech.in`
4. Add the DNS records to your domain provider:
   - SPF record
   - DKIM record
   - DMARC record
5. Wait for verification (usually few hours)
6. Update `api/send-otp-email.js`:
   ```javascript
   from: 'Life Biotech <noreply@lifebiotech.in>'
   ```

**Option 2: Upgrade Resend Plan**
- Paid plans can send to any email

---

## 🔍 Troubleshooting

### Payment not working:
- Check Vercel environment variables are set
- Check browser console for errors
- Verify Razorpay keys are correct (test vs live mode)

### OTP emails not sending:
- Check RESEND_API_KEY in Vercel
- Verify recipient email is `himansingh8511@gmail.com` (test mode)
- Check Vercel function logs

### Local development issues:
- Make sure `server` is running: `cd server && npm run dev`
- Make sure frontend is running: `npm run dev`
- Check `VITE_API_URL=http://localhost:4242` in `.env.local`

---

## 📝 Quick Commands

```bash
# Local development
npm run dev                    # Start frontend
cd server && npm run dev       # Start backend (separate terminal)

# Build for production
npm run build                  # Creates optimized build in /dist

# Deploy to Vercel
vercel --prod                  # Manual deploy
git push origin main           # Auto-deploy (if connected)
```

---

## ✨ Summary

**You're ready to deploy!** 

Just ensure:
1. ✅ Razorpay keys are in Vercel environment variables
2. ✅ All 6 environment variables are set in Vercel
3. ✅ Push to GitHub (auto-deploys)
4. ✅ Test payment flow on production
5. ✅ When going live: Just swap test keys → live keys (no code changes!)

**No issues when pushing** - all secrets are in `.gitignore` ✓
