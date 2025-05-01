"use client"

import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck, Download, FileText } from "lucide-react"
import { motion } from "framer-motion"
// Sample certificates data
const certificates = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Quality Management System Certification",
    image: "/placeholder.svg?height=200&width=300",
    issueDate: "January 15, 2022",
    expiryDate: "January 14, 2025",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description: "Environmental Management System Certification",
    image: "/placeholder.svg?height=200&width=300",
    issueDate: "March 10, 2022",
    expiryDate: "March 9, 2025",
  },
  {
    id: 3,
    title: "ISO 45001:2018",
    description: "Occupational Health and Safety Management System",
    image: "/placeholder.svg?height=200&width=300",
    issueDate: "June 5, 2022",
    expiryDate: "June 4, 2025",
  },
  {
    id: 4,
    title: "REACH Compliance",
    description: "Registration, Evaluation, Authorization and Restriction of Chemicals",
    image: "/placeholder.svg?height=200&width=300",
    issueDate: "September 20, 2022",
    expiryDate: "Ongoing",
  },
]

export default function CertificatesPage() {
  return (
    <main className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
      <PageHeader
        title="Certificates & Compliance"
        description="Our commitment to quality, safety, and environmental responsibility is backed by internationally recognized certifications."
      />
      </motion.div>


      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate) => (
              <Card key={certificate.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-orc-medium" />
                    {certificate.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{certificate.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Issue Date:</p>
                      <p>{certificate.issueDate}</p>
                    </div>
                    <div>
                      <p className="font-medium">Expiry Date:</p>
                      <p>{certificate.expiryDate}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Certificate
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-orc-bg rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Product-Specific Certifications</h2>
                <p className="text-muted-foreground">
                  In addition to our company certifications, we provide product-specific documentation:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orc-medium" />
                    <span>Certificates of Analysis (CoA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orc-medium" />
                    <span>Safety Data Sheets (SDS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orc-medium" />
                    <span>Technical Data Sheets (TDS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orc-medium" />
                    <span>Regulatory Compliance Documentation</span>
                  </li>
                </ul>
                <Button className="mt-2 bg-orc-medium hover:bg-orc-dark">Request Documentation</Button>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  width={300}
                  height={300}
                  alt="Product documentation"
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
