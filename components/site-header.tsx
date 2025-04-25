"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { OrcLogo } from "@/components/orc-logo"
import { RequestQuoteModal } from "@/components/request-quote-modal"

export function SiteHeader() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <OrcLogo size={50} fontSize="text-[10px]" />
          </Link>
          <nav className="hidden md:flex items-center h-full">
            <ul className="flex items-center h-full gap-6">
              <li className="flex items-center h-full">
                <Link
                  href="/products"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  Our Products
                </Link>
              </li>
              <li className="flex items-center h-full">
                <Link
                  href="/services"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center h-full">
                <Link
                  href="/payment-delivery"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  Payment and Delivery
                </Link>
              </li>
              <li className="flex items-center h-full">
                <Link
                  href="/certificates"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  Certificates
                </Link>
              </li>
              <li className="flex items-center h-full">
                <Link
                  href="/about"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  About Company
                </Link>
              </li>
              <li className="flex items-center h-full">
                <Link
                  href="/contact"
                  className="flex items-center h-full text-sm font-medium transition-colors hover:text-orc-medium"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-orc-medium hover:bg-orc-dark" onClick={() => setModalOpen(true)}>
            Contact Sales
          </Button>
        </div>
      </div>
      <RequestQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} productName="General Inquiry" />

    </header>
  )
}
