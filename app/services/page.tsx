"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"
import { motion } from "framer-motion"

// Sample services data
const services = [
  {
    id: 1,
    title: "Technical Consultation",
    description: "Expert guidance on product selection and application to meet your specific requirements.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Custom Formulation",
    description: "Tailored chemical formulations developed to your exact specifications and performance needs.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "Quality Testing",
    description: "Comprehensive analytical testing services to ensure product quality and performance.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    title: "Regulatory Support",
    description: "Assistance with regulatory compliance documentation and requirements for chemical products.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    title: "Inventory Management",
    description: "Just-in-time delivery and inventory management solutions to optimize your supply chain.",
    icon: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    title: "Technical Training",
    description: "Specialized training programs on product handling, application, and safety procedures.",
    icon: "/placeholder.svg?height=80&width=80",
  },
]

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
      <PageHeader
        title="Our Services"
        description="We provide comprehensive solutions to support your operations, from technical consultation to logistics management."
      />
      </motion.div>


      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-2 hover:border-orc-medium transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full bg-orc-bg flex items-center justify-center">
                    <BadgeCheck className="h-6 w-6 text-orc-medium" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-orc-bg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Need a Custom Service?</h2>
                <p className="text-muted-foreground">
                  Our team of experts is ready to develop tailored solutions to meet your specific business needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-orc-medium" />
                    <span>Personalized approach to your unique challenges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-orc-medium" />
                    <span>Flexible service packages to fit your budget</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-orc-medium" />
                    <span>Ongoing support and consultation</span>
                  </li>
                </ul>
                <Button className="mt-2 bg-orc-medium hover:bg-orc-dark">Contact Our Team</Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Custom services"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
