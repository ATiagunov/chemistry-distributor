"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Leaf, Users } from "lucide-react"
import { Flower } from "@/components/flower"

export default function AboutPage() {
  const [showFlower, setShowFlower] = useState(true)

  return (
    <main className="flex-1 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <PageHeader
          title="About ORC Chemicals"
          description="Your trusted partner for high-quality chemical products since 1995."
        />
      </motion.div>

      <section className="py-6 md:py-10 relative z-10">
        <div className="container px-2 md:px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Left side - Text content */}
            <div className="w-full md:w-2/3 md:pr-2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground mb-6">
                  At ORC Chemicals, we are a leading supplier of high-quality chemical products and solutions that
                  enable our customers to innovate and succeed in their respective industries. Founded in 1995, we have
                  grown from a small laboratory chemicals provider to a comprehensive chemical solutions company serving
                  clients worldwide.
                </p>
                <p className="text-muted-foreground">
                  Our team consists of experienced chemists, engineers, and industry specialists who are passionate
                  about chemistry and committed to delivering excellence. We combine scientific expertise with
                  customer-focused service to provide solutions that meet the evolving needs of our diverse client base.
                </p>
              </div>
            </div>

            {/* Right side - Animated Flower SVG */}
            <div className="w-full md:w-1/3 flex justify-center mt-2 md:mt-0 relative">
              {/* <div className="w-full max-w-[400px] aspect-square"> */}
                <Flower showFlower={showFlower} />
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Award className="h-6 w-6 text-orc-medium" />
                <CardTitle className="text-lg">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We maintain the highest standards in our products and services, ensuring consistency, purity, and
                  reliability in everything we deliver.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Leaf className="h-6 w-6 text-orc-medium" />
                <CardTitle className="text-lg">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We are committed to environmentally responsible operations, continuously seeking ways to reduce our
                  ecological footprint and promote sustainable chemistry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Globe className="h-6 w-6 text-orc-medium" />
                <CardTitle className="text-lg">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We continuously improve our products and processes, embracing new technologies and approaches to
                  better serve our customers and advance the field of chemistry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <Users className="h-6 w-6 text-orc-medium" />
                <CardTitle className="text-lg">Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We build long-term relationships with our customers and suppliers based on trust, transparency, and
                  mutual benefit, working together to achieve shared success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
