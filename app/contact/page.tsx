import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex-1">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for product inquiries, technical support, or to request a quote."
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Phone
                  </label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Company
                  </label>
                  <Input id="company" placeholder="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <Input id="subject" placeholder="Product Inquiry" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <Button type="submit" className="w-full bg-orc-medium hover:bg-orc-dark">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Phone className="h-5 w-5 text-orc-medium" />
                    <CardTitle>Phone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sales: +1 (800) 555-0123
                      <br />
                      Support: +1 (800) 555-0124
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Mail className="h-5 w-5 text-orc-medium" />
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Sales: sales@orcchemicals.com
                      <br />
                      Support: support@orcchemicals.com
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <MapPin className="h-5 w-5 text-orc-medium" />
                    <CardTitle>Address</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      123 Science Park,
                      <br />
                      Innovation City, CA 94103,
                      <br />
                      United States
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <Clock className="h-5 w-5 text-orc-medium" />
                    <CardTitle>Business Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Monday - Friday: 9:00 AM - 5:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 h-64 w-full rounded-lg overflow-hidden">
                {/* This would be replaced with an actual map component */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
