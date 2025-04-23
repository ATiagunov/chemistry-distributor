import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { ChatWindow } from "@/components/chat-window"
import { OrcLogo } from "@/components/orc-logo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ORC Chemicals - Premium Chemistry Products",
  description: "Your trusted partner for high-quality chemicals, laboratory equipment, and scientific supplies."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          {children}
          <footer className="w-full border-t bg-background">
            <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
              <div className="flex items-center gap-2">
                <OrcLogo size={40} fontSize="text-[8px]" />
                <p className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} ORC Chemicals. All rights reserved.
                </p>
              </div>
              <div className="flex gap-4 md:gap-6">
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
                <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </div>
            </div>
          </footer>
          <ChatWindow />
        </div>
      </body>
    </html>
  )
}
