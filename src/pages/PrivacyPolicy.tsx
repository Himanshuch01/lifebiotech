import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            At Life Biotech, we collect information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address, phone number, and shipping address</li>
            <li>Payment information (processed securely through Razorpay)</li>
            <li>Order history and purchase information</li>
            <li>Communication preferences and customer support interactions</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and fulfill your orders</li>
            <li>Send order confirmations and shipping updates</li>
            <li>Respond to your questions and provide customer support</li>
            <li>Send marketing communications (with your consent)</li>
            <li>Improve our products and services</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>3. Information Sharing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Payment Processors:</strong> Razorpay for secure payment processing</li>
            <li><strong>Shipping Partners:</strong> To deliver your orders</li>
            <li><strong>Service Providers:</strong> Who assist in operating our website and business</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>4. Data Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are processed through secure payment gateways.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>5. Cookies and Tracking</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>6. Your Rights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>7. Children's Privacy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>8. Changes to This Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated "Last Updated" date.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>9. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p><strong>Life Biotech</strong></p>
            <p>Email: lifebiotech.org@gmail.com</p>
            <p>Phone: +91-8601748352</p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Last Updated:</strong> November 17, 2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
