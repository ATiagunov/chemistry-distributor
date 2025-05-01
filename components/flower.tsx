"use client"

import { useEffect, useRef } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Flower({ showFlower }: { showFlower: boolean }) {
  const flowerRef = useRef<SVGSVGElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Determine size based on screen width
  const svgSize = isMobile ? 250 : 350

  useEffect(() => {
    if (!flowerRef.current) return

    const svg = flowerRef.current

    // Get all petal groups - now all outer petals are green
    const outerPetals = svg.querySelectorAll('g[fill="rgb(30,159,94)"] use')
    const innerPetals = svg.querySelectorAll('g[fill="rgb(2, 51, 22)"] use')
    const textElement = svg.querySelector("text")

    // Reset all elements
    outerPetals.forEach((petal) => {
      const el = petal as SVGUseElement
      el.style.opacity = "0"
    })

    innerPetals.forEach((petal) => {
      const el = petal as SVGUseElement
      el.style.opacity = "0"
    })

    if (textElement) {
      textElement.style.opacity = "0"
    }

    if (showFlower) {
      // Show outer petals one by one in clockwise sequence
      outerPetals.forEach((petal, index) => {
        setTimeout(() => {
          ;(petal as SVGUseElement).style.opacity = "1"
        }, index * 100)
      })

      const innerPetalsDelay = outerPetals.length * 100 + 200

      setTimeout(() => {
        innerPetals.forEach((petal) => {
          ;(petal as SVGUseElement).style.opacity = "1"
        })
      }, innerPetalsDelay)

      // Show "ORC" text after inner petals appear
      if (textElement) {
        setTimeout(() => {
          textElement.style.opacity = "1"
        }, innerPetalsDelay + 500) // Add delay after inner petals
      }
    } else {
      // Hide text first
      if (textElement) {
        textElement.style.opacity = "0"
      }

      // Hide all inner petals together
      setTimeout(() => {
        innerPetals.forEach((petal) => {
          ;(petal as SVGUseElement).style.opacity = "0"
        })
      }, 200)

      // Hide outer petals in reverse order
      setTimeout(() => {
        ;[...outerPetals].reverse().forEach((petal, index) => {
          setTimeout(() => {
            ;(petal as SVGUseElement).style.opacity = "0"
          }, index * 50)
        })
      }, 500)
    }
  }, [showFlower])

  return (
    <svg
      ref={flowerRef}
      style={{
          width: `${svgSize}px`,
          height: `${svgSize}px`,
          maxWidth: "100%",
        }}
      viewBox="-100 -100 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hovered" transform="translate(100, 100)">
        <defs>
          <path id="petal" d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
        </defs>

        {/* Outer petals - All Green now */}
        <g fill="rgb(30,159,94)">
          <use
            href="#petal"
            transform="rotate(0) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(22.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(45) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(67.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(90) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(112.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(135) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(157.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(180) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(202.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(225) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(247.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(270) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(292.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(315) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(337.5) translate(0,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
        </g>

        {/* Inner petals - Dark Green */}
        <g fill="rgb(2, 51, 22)" fillOpacity="0.85">
          <use
            href="#petal"
            transform="rotate(11.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(33.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(56.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(78.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(101.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(123.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(146.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(168.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(191.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(213.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(236.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(258.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(281.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(303.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(326.25) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
          <use
            href="#petal"
            transform="rotate(348.75) scale(0.85) translate(-20,-50)"
            style={{ transition: "opacity 0.5s ease", opacity: 0 }}
          />
        </g>

        {/* ORC Text */}
        <text
          textAnchor="middle"
          dominantBaseline="middle"
          y="0"
          fill="white"
          fontWeight="bold"
          fontSize="60px"
          style={{ transition: "opacity 0.5s ease", opacity: 0 }}
        >
          ORC
        </text>
      </g>
    </svg>
  )
}
