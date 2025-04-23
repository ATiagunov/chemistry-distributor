import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Truck, Clock, Building, FileText } from "lucide-react"

export default function PaymentDeliveryPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Payment & Delivery"
        description="Information about our payment methods, delivery options, and terms of service."
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="payment" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="payment">Payment Methods</TabsTrigger>
              <TabsTrigger value="delivery">Delivery Options</TabsTrigger>
            </TabsList>
            <TabsContent value="payment" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <CreditCard className="h-6 w-6 text-orc-medium" />
                    <CardTitle className="text-xl">Credit Card</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We accept all major credit cards including Visa, Mastercard, and American Express. Secure payment
                      processing with immediate order confirmation.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Building className="h-6 w-6 text-orc-medium" />
                    <CardTitle className="text-xl">Bank Transfer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Direct bank transfers are available for business customers. Orders are processed once payment is
                      confirmed, typically within 1-2 business days.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <FileText className="h-6 w-6 text-orc-medium" />
                    <CardTitle className="text-xl">Invoice Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Available for established business customers with approved credit terms. Standard payment terms
                      are net 30 days from invoice date.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="delivery" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Truck className="h-6 w-6 text-orc-medium" />
                    <CardTitle className="text-xl">Standard Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our standard delivery service for most chemical products. Typical delivery times:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orc-medium" />
                        <span>Domestic: 3-5 business days</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orc-medium" />
                        <span>International: 7-14 business days</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Truck className="h-6 w-6 text-orc-medium" />
                    <CardTitle className="text-xl">Express Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Expedited shipping option for urgent orders. Available for most products with some restrictions
                      for hazardous materials.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orc-medium" />
                        <span>Domestic: 1-2 business days</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-orc-medium" />
                        <span>International: 3-5 business days</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-orc-bg rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Special Handling Information</h3>
                <p className="text-muted-foreground mb-4">
                  Some chemical products require special handling and shipping arrangements due to regulatory
                  requirements:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orc-medium" />
                    <span>Hazardous materials may require additional documentation and special carriers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orc-medium" />
                    <span>Temperature-sensitive products are shipped with appropriate temperature control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orc-medium" />
                    <span>International shipments may be subject to customs clearance and import duties</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}
