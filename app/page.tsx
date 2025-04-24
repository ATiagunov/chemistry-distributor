"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CircularMenu } from "@/components/circular-menu"
import { BadgeCheck, Truck, ChevronRight, Mail, Phone, MapPin } from "lucide-react"

const productCategories = ["Acids", "Alkalis", "Glycols", "Polymers", "Ethanolamines", "Surfactants"]

export default function Home() {

  return (
    <main className="flex-1">
      {/* Combined Hero Section with Circular Menu */}
      <section className="w-full py-12 md:py-12 lg:py-24 bg-gradient-to-b from-white to-orc-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="space-y-4 max-w-[800px]">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Premium Chemistry Products for Industry & Research
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Your trusted partner for high-quality chemicals, laboratory equipment, and scientific supplies with
                expert support and reliable delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Circular Menu - Left side on desktop, top on mobile */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="w-full max-w-[500px]">
                <CircularMenu
                  categories={productCategories}
                  initialCategory="Glycols"
                  onCategoryClick={(category) => {
                    // Navigate to products page with selected category
                    window.location.href = `/products?category=${category}#products-section`
                  }}
                />
              </div>
            </div>

            {/* Content - Right side on desktop, bottom on mobile */}
            <div className="flex flex-col space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-orc-bg px-3 py-1 text-sm text-orc-dark">
                  Explore Our Categories
                </div>
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Comprehensive Chemical Solutions</h2>
                <p className="text-muted-foreground">
                  We offer a wide range of high-quality chemicals and laboratory supplies for various industries and
                  research applications. Use our interactive selector to explore our product categories.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/products">
                  <Button size="lg" className="bg-orc-medium hover:bg-orc-dark">
                    Browse Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-orc-medium text-orc-medium hover:bg-orc-bg">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-orc-bg px-3 py-1 text-sm text-orc-dark">Our Services</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">More Than Just a Supplier</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                We provide comprehensive solutions to support your operations, from technical consultation to logistics
                management.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-orc-medium" />
                  <span>Technical consultation and product selection assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-orc-medium" />
                  <span>Custom packaging and labeling solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-orc-medium" />
                  <span>Inventory management and just-in-time delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-orc-medium" />
                  <span>Regulatory compliance support and documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="h-5 w-5 text-orc-medium" />
                  <span>Quality assurance and analytical testing</span>
                </li>
              </ul>
              <Button className="mt-4 bg-orc-medium hover:bg-orc-dark">Learn About Our Services</Button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Chemistry professional providing consultation"
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

  <section className="w-full py-12 md:py-24 lg:py-32 bg-orc-bg">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted By Industry Leaders</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              We serve clients across pharmaceuticals, biotechnology, education, manufacturing, and research sectors.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 lg:grid-cols-5 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
            <Image
              src="/placeholder-logo.svg"
              width="140"
              height="70"
              alt="Client Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/placeholder-logo.svg"
              width="140"
              height="70"
              alt="Client Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/placeholder-logo.svg"
              width="140"
              height="70"
              alt="Client Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/placeholder-logo.svg"
              width="140"
              height="70"
              alt="Client Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
            <Image
              src="/placeholder-logo.svg"
              width="140"
              height="70"
              alt="Client Logo"
              className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Contact our team for product inquiries, technical support, or to request a quote.
            </p>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-orc-medium" />
                <span>+1 (800) 555-0123</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-orc-medium" />
                <span>sales@orcchemicals.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orc-medium" />
                <span>123 Science Park, Innovation City, CA 94103</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-background p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
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
                  htmlFor="company"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Company
                </label>
                <Input id="company" placeholder="Acme Inc." />
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
        </div>
      </section>
    </main>
  )
}
