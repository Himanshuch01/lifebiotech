import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle, XCircle, Clock } from "lucide-react";
import SEO from "@/components/SEO";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <SEO
        title="Cancellations and Refunds Policy - LifeBiotech"
        description="LifeBiotech refund and cancellation policy. Learn about our return process, refund timeline, and eligibility criteria for pharmaceutical products. Full refund for damaged or defective products."
        keywords="refund policy, cancellation policy, return policy, LifeBiotech refund, pharmaceutical refund policy, order cancellation"
        url="https://lifebiotech.in/refund-policy"
      />
      <h1 className="text-4xl font-bold mb-8">Cancellations and Refunds Policy</h1>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5" />
          <p className="text-sm text-yellow-700">
            <strong>Important:</strong> Due to the nature of pharmaceutical products and regulatory requirements, 
            our cancellation and refund policy is subject to specific conditions.
          </p>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            1. Order Cancellation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="font-semibold">Before Shipment:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders can be cancelled within 2 hours of placing the order</li>
            <li>Full refund will be processed within 5-7 business days</li>
            <li>Cancellation can be done through "My Orders" section</li>
            <li>Or contact customer support with your order number</li>
          </ul>

          <h3 className="font-semibold mt-4">After Shipment:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Orders cannot be cancelled once shipped</li>
            <li>You may refuse delivery or follow the return process</li>
            <li>Shipping charges are non-refundable for customer-initiated cancellations</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            2. Eligible for Refund
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Refunds are provided in the following cases:</p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">Damaged Products</h3>
              <p className="text-sm text-muted-foreground">Products received with physical damage, broken seals, or leakage</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">Defective Products</h3>
              <p className="text-sm text-muted-foreground">Manufacturing defects or quality issues</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">Wrong Products</h3>
              <p className="text-sm text-muted-foreground">Received different products than ordered</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">Missing Items</h3>
              <p className="text-sm text-muted-foreground">Incomplete order or items missing from package</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-700">Expired Products</h3>
              <p className="text-sm text-muted-foreground">Products with less than 6 months validity at the time of delivery</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-500" />
            3. NOT Eligible for Refund
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg space-y-2">
            <p className="font-semibold text-red-700">The following cases are NOT eligible for refund:</p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>Change of mind or no longer needed</li>
              <li>Products opened, used, or tampered with</li>
              <li>Products without original packaging or labels</li>
              <li>Prescription medications (unless damaged/defective)</li>
              <li>Products ordered by mistake</li>
              <li>Adverse reactions or side effects (consult your doctor)</li>
              <li>Claims made after 48 hours of delivery</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            4. Return Process
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="font-semibold">Step-by-Step Return Process:</p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold">Report Issue</h4>
                <p className="text-sm text-muted-foreground">
                  Contact us within 48 hours of delivery via email or phone with order number and photos of the issue
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold">Verification</h4>
                <p className="text-sm text-muted-foreground">
                  Our team will verify the issue and approve the return request
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold">Product Pickup</h4>
                <p className="text-sm text-muted-foreground">
                  We'll arrange pickup of the product from your address (no cost to you)
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold">Inspection</h4>
                <p className="text-sm text-muted-foreground">
                  Quality team inspects the returned product
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                5
              </div>
              <div>
                <h4 className="font-semibold">Refund Processing</h4>
                <p className="text-sm text-muted-foreground">
                  Refund initiated within 2-3 business days after inspection
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>5. Refund Timeline</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Credit/Debit Card:</span>
              <span className="text-muted-foreground">5-7 business days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Net Banking:</span>
              <span className="text-muted-foreground">5-7 business days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">UPI:</span>
              <span className="text-muted-foreground">3-5 business days</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Wallet:</span>
              <span className="text-muted-foreground">24-48 hours</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            * Timeline starts after return approval and quality inspection
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>6. Refund Method</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Refunds are processed to the original payment method</li>
            <li>For failed transactions, refund is automatic within 5-7 days</li>
            <li>Store credit option available for faster processing</li>
            <li>Refund confirmation sent via email and SMS</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>7. Replacement Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            For damaged or defective products, we offer replacement instead of refund:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Free replacement for damaged/defective items</li>
            <li>Replacement processed within 3-5 business days</li>
            <li>Subject to stock availability</li>
            <li>If out of stock, full refund will be processed</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>8. Important Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="list-disc pl-6 space-y-2">
            <li>Please record unboxing video for high-value orders (recommended)</li>
            <li>Do not accept damaged or tampered packages from delivery person</li>
            <li>Keep original packaging and invoice for returns</li>
            <li>Partial refunds not available - entire order must be returned</li>
            <li>Shipping charges are non-refundable unless error on our part</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>9. Contact Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            For cancellations, returns, or refund queries:
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

export default RefundPolicy;
