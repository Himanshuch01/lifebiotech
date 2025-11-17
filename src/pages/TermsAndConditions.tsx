import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            By accessing and using the Life Biotech website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>2. Product Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            All pharmaceutical products sold on our platform are:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Genuine and sourced from authorized manufacturers</li>
            <li>Subject to regulatory approvals and licensing requirements</li>
            <li>Sold in accordance with applicable laws and regulations</li>
            <li>Described as accurately as possible, though we do not warrant that product descriptions are error-free</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>3. Ordering and Payment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>All orders are subject to acceptance and availability</li>
            <li>We reserve the right to refuse or cancel any order</li>
            <li>Prices are subject to change without notice</li>
            <li>Payment must be made in full at the time of order</li>
            <li>We accept payments through Razorpay (credit card, debit card, UPI, net banking)</li>
            <li>All transactions are processed securely</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>4. Prescription Requirements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            For prescription medications:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A valid prescription from a licensed medical practitioner is required</li>
            <li>Prescriptions must be uploaded or submitted before order processing</li>
            <li>We reserve the right to verify prescriptions with the issuing doctor</li>
            <li>Orders may be cancelled if prescriptions are invalid or cannot be verified</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>5. Shipping and Delivery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Delivery timelines are estimates and not guaranteed</li>
            <li>Risk of loss passes to you upon delivery to the carrier</li>
            <li>You must inspect packages upon delivery and report any damage immediately</li>
            <li>Temperature-sensitive products are shipped with appropriate packaging</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>6. Returns and Refunds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Please refer to our Cancellations and Refunds Policy for detailed information. Generally:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pharmaceutical products cannot be returned due to safety and regulatory reasons</li>
            <li>Refunds are provided for damaged, defective, or incorrect products</li>
            <li>Claims must be made within 48 hours of delivery</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>7. User Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>You are responsible for maintaining the confidentiality of your account</li>
            <li>You must provide accurate and complete information</li>
            <li>You must be at least 18 years old to create an account</li>
            <li>We reserve the right to suspend or terminate accounts for violations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>8. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Life Biotech shall not be liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Adverse reactions or side effects from product use</li>
            <li>Delays or failures due to circumstances beyond our control</li>
            <li>Misuse of products or failure to follow instructions</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>9. Medical Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The information provided on this website is for informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult your physician or healthcare provider before starting any new medication.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>10. Intellectual Property</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Life Biotech and protected by copyright and intellectual property laws.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>11. Governing Law</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City], India.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>12. Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            For questions about these Terms and Conditions, please contact:
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

export default TermsAndConditions;
