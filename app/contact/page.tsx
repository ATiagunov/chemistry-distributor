"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Factory, Warehouse, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Location data
const locations = [
  {
    id: 1,
    name: "Novosibirsk",
    country: "Russia",
    position: { top: "88%", left: "43%" },
    type: "factory",
    address: "Industrial Zone, Building 42, Novosibirsk, Russia",
    email: "novosibirsk@orcchemicals.com",
    phone: "+7 (383) 123-4567",
    description: "Main production facility specializing in high-quality chemical products.",
  },
]

export default function ContactPage() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  const handleLocationClick = (id: number) => {
    setSelectedLocation(selectedLocation === id ? null : id)
  }

  const closeLocationInfo = () => {
    setSelectedLocation(null)
  }

  return (
    <main className="flex-1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
      <PageHeader
        title="Our Global Presence"
        description="ORC Chemicals operates internationally with key facilities in strategic locations."
      />
      </motion.div>


      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="relative w-full aspect-[16/9]">
          <img
            src="/Russia-gray.svg"
            alt="Russia Map"
            className="w-full h-full object-cover"
          />

            {/* Location markers */}
            {locations.map((location) => (
              <div
                key={location.id}
                className="absolute"
                style={{ top: location.position.top, left: location.position.left }}
              >
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleLocationClick(location.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Flower-shaped marker */}
                  <div className="relative">
                  <svg className="w-[50px] h-[50px]" viewBox="-100 -100 400 400" xmlns="http://www.w3.org/2000/svg">
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

                    {/* Icon in the middle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {location.type === "factory" ? (
                        <Factory className="h-5 w-5 text-orc-dark" />
                      ) : (
                        <Warehouse className="h-5 w-5 text-orc-dark" />
                      )}
                    </div>
                  </div>

                  {/* Location name */}
                  <motion.div
                    className="mt-1 text-orc-dark font-medium text-sm bg-white/80 px-2 py-0.5 rounded-md"
                    animate={{
                      scale: selectedLocation === location.id ? 1.1 : 1,
                    }}
                  >
                    {location.name}
                  </motion.div>
                </motion.div>
              </div>
            ))}

            {/* Location information popup */}
            <AnimatePresence>
              {selectedLocation !== null && (
                <motion.div
                  className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="bg-white shadow-lg border-orc-medium">
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          {locations.find((l) => l.id === selectedLocation)?.type === "factory" ? (
                            <Factory className="h-5 w-5 text-orc-medium mr-2" />
                          ) : (
                            <Warehouse className="h-5 w-5 text-orc-medium mr-2" />
                          )}
                          <h3 className="text-lg font-bold text-orc-dark">
                            {locations.find((l) => l.id === selectedLocation)?.name},{" "}
                            {locations.find((l) => l.id === selectedLocation)?.country}
                          </h3>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={closeLocationInfo}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {locations.find((l) => l.id === selectedLocation)?.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="font-medium">Address:</div>
                        <div className="text-gray-600">{locations.find((l) => l.id === selectedLocation)?.address}</div>

                        <div className="font-medium">Contact:</div>
                        <div className="text-gray-600">
                          Email: {locations.find((l) => l.id === selectedLocation)?.email}
                          <br />
                          Phone: {locations.find((l) => l.id === selectedLocation)?.phone}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Global Inquiries</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For general inquiries, product information, or to discuss how ORC Chemicals can meet your specific needs,
              please contact our international customer service team.
            </p>
            <div className="mt-4">
              <p>Email: info@orcchemicals.com</p>
              <p>International Phone: +1 (800) 555-0123</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
