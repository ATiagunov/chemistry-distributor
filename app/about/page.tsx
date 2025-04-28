"use client"

import { useEffect, useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Leaf, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    // Delay showing the ORC text
    const timer = setTimeout(() => {
      setShowText(true)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex-1 relative overflow-hidden">
      <PageHeader
        title="About ORC Chemicals"
        description="Your trusted partner for high-quality chemical products since 1995."
      />

      {/* Main content with flower on the right */}
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

            {/* Right side - Flower SVG */}
            <div className="w-full md:w-1/3 flex justify-center mt-2 md:mt-0 relative">
              <div className="w-[400px] h-[400px] relative">
                <svg className="w-full h-full" viewBox="-100 -100 400 400" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(100, 100)">
                    <defs>
                      <path id="petal" d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
                    </defs>

                    {/* Outer petals - Green */}
                    <g fill="rgba(30,159,94,0.8)">
                      <use href="#petal" transform="rotate(0) translate(0,-50)" />
                      <use href="#petal" transform="rotate(22.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(45) translate(0,-50)" />
                      <use href="#petal" transform="rotate(67.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(90) translate(0,-50)" />
                      <use href="#petal" transform="rotate(112.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(135) translate(0,-50)" />
                      <use href="#petal" transform="rotate(157.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(180) translate(0,-50)" />
                      <use href="#petal" transform="rotate(202.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(225) translate(0,-50)" />
                      <use href="#petal" transform="rotate(247.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(270) translate(0,-50)" />
                      <use href="#petal" transform="rotate(292.5) translate(0,-50)" />
                      <use href="#petal" transform="rotate(315) translate(0,-50)" />
                      <use href="#petal" transform="rotate(337.5) translate(0,-50)" />
                    </g>

                    {/* Inner petals - Dark Green */}
                    <g fill="rgba(13, 97, 55, 0.8)">
                      <use href="#petal" transform="rotate(11.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(33.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(56.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(78.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(101.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(123.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(146.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(168.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(191.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(213.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(236.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(258.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(281.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(303.75) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(326.25) scale(0.85) translate(-20,-50)" />
                      <use href="#petal" transform="rotate(348.75) scale(0.85) translate(-20,-50)" />
                    </g>
                  </g>
                </svg>

                {/* Animated ORC text */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showText ? 1 : 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-white font-bold text-6xl">ORC</span>
                </motion.div>
              </div>
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
