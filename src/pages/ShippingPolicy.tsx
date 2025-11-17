import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Clock, MapPin } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Shipping Policy</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            1. Shipping Coverage
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Life Biotech delivers pharmaceutical products across India. We currently ship to all serviceable pin codes covered by our logistics partners.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pan-India delivery available</li>
            <li>Urban and metro cities: 3-5 business days</li>
            <li>Remote areas: 7-10 business days</li>
            <li>Check serviceability by entering your pin code at checkout</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            2. Processing Time
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Order processing times vary based on product type and prescription verification:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>OTC (Over-the-counter) products:</strong> 1-2 business days</li>
            <li><strong>Prescription medications:</strong> 2-3 business days (after prescription verification)</li>
            <li><strong>Temperature-controlled products:</strong> 2-4 business days</li>
            <li>Orders placed before 2 PM IST on business days are processed the same day</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            3. Shipping Methods
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold mb-2">Standard Delivery</h3>
              <p className="text-sm text-muted-foreground">3-7 business days | Free for orders above ₹500</p>
            </div>
            
            <div className="border-l-4 border-secondary pl-4">
              <h3 className="font-semibold mb-2">Express Delivery</h3>
              <p className="text-sm text-muted-foreground">2-3 business days | Additional ₹99</p>
            </div>
            
            <div className="border-l-4 border-accent pl-4">
              <h3 className="font-semibold mb-2">Cold Chain Delivery</h3>
              <p className="text-sm text-muted-foreground">For temperature-sensitive products | Additional charges may apply</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>4. Shipping Charges</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <p><strong>Free Shipping:</strong> Orders above ₹500</p>
            <p><strong>Standard Shipping:</strong> ₹50 for orders below ₹500</p>
            <p><strong>Express Shipping:</strong> ₹99 (additional)</p>
            <p><strong>Remote Area Surcharge:</strong> ₹30-50 (if applicable)</p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            5. Order Tracking
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Track your order in real-time:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tracking number sent via email and SMS once shipped</li>
            <li>Track order status in "My Orders" section</li>
            <li>Real-time updates on shipment location</li>
            <li>Delivery notifications via email and SMS</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>6. Packaging</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We ensure safe and secure packaging for all pharmaceutical products:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Tamper-proof and discreet packaging</li>
            <li>Temperature-controlled packaging for sensitive medications</li>
            <li>Cushioned packaging to prevent damage</li>
            <li>Eco-friendly materials where possible</li>
            <li>Invoice and product information included</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>7. Delivery Confirmation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To ensure safe delivery:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Signature required for high-value orders</li>
            <li>ID verification may be required for prescription medications</li>
            <li>Photo proof of delivery provided</li>
            <li>OTP-based delivery for added security (where available)</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>8. Delivery Issues</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If you experience any delivery issues:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Damaged package:</strong> Refuse delivery and contact us immediately</li>
            <li><strong>Missing items:</strong> Report within 24 hours of delivery</li>
            <li><strong>Delayed delivery:</strong> Contact our support team for assistance</li>
            <li><strong>Wrong address:</strong> Contact us within 2 hours of placing order</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>9. Special Instructions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Someone must be available to receive the delivery</li>
            <li>Products cannot be left unattended</li>
            <li>Ensure correct address with landmark information</li>
            <li>Provide alternative contact number if possible</li>
            <li>Check products immediately upon receipt</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>10. Holidays and Delays</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Please note that delivery may be delayed during:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>National holidays and Sundays</li>
            <li>Adverse weather conditions</li>
            <li>Natural disasters or emergencies</li>
            <li>Strikes or other unforeseen circumstances</li>
          </ul>
          <p className="text-sm text-muted-foreground">
            We will notify you of any significant delays.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>11. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            For shipping-related queries, contact:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p><strong>Life Biotech</strong></p>
            <p>Email: lifebiotech.org@gmail.com</p>
            <p>Phone: +91-9198476276</p>
            <p>Support Hours: Monday-Saturday, 9 AM - 6 PM IST</p>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Last Updated:</strong> November 17, 2025
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShippingPolicy;
