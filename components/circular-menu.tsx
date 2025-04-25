"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface CircularMenuProps {
  categories?: string[]
  onCategorySelect?: (category: string) => void
  onCategoryClick?: (category: string) => void
  variant?: "default" | "products" | "products-hero"
  initialCategory?: string
}

export function CircularMenu({
  categories = [],
  onCategorySelect,
  onCategoryClick,
  variant = "default",
  initialCategory,
}: CircularMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const flowerRef = useRef<SVGSVGElement>(null)
  const centerLabelRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory || null)

  // Default categories if none provided
  const defaultCategories = ["Acids", "Alkalis", "Glycols", "Polymers", "Surfactants", "Ethanolamines"]

  const displayCategories = categories.length > 0 ? categories : defaultCategories

  useEffect(() => {
    const menu = menuRef.current
    const flower = flowerRef.current

    if (!menu || !flower) return

    const positions = [30, 90, 150, 210, 270, 330]
    const categoryPositions: Record<string, number> = {}

    // Map categories to their positions
    displayCategories.forEach((category, index) => {
      categoryPositions[category] = positions[index % positions.length]
    })

    // If initialCategory is provided, rotate the flower to that position
    if (initialCategory && !activeCategory) {
      const index = displayCategories.indexOf(initialCategory)
      if (index !== -1) {
        const angle = index * 60
        flower.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
        setActiveCategory(initialCategory)
        if (onCategorySelect) {
          onCategorySelect(initialCategory)
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = menu.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const angleRad = Math.atan2(e.clientY - centerY, e.clientX - centerX)
      let angleDeg = angleRad * (180 / Math.PI)
      if (angleDeg < 0) angleDeg += 360

      const closest = positions.reduce((prev, curr) =>
        Math.abs(curr - angleDeg) < Math.abs(prev - angleDeg) ? curr : prev,
      )

      flower.style.transform = `translate(-50%, -50%) rotate(${closest}deg)`

      // Find which category corresponds to the closest position
      const hoveredCategory =
        Object.keys(categoryPositions).find((category) => categoryPositions[category] === closest) || null

      if (hoveredCategory !== activeCategory) {
        setActiveCategory(hoveredCategory)
        if (hoveredCategory && onCategorySelect) {
          onCategorySelect(hoveredCategory)
        }
      }
    }

    const handleMouseLeave = () => {
      // Don't reset rotation if initialCategory is set
      if (!initialCategory) {
        flower.style.transform = "translate(-50%, -50%) rotate(0deg)"
        setActiveCategory(null)
      }
    }

    menu.addEventListener("mousemove", handleMouseMove)
    menu.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      menu.removeEventListener("mousemove", handleMouseMove)
      menu.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [displayCategories, activeCategory, onCategorySelect, initialCategory])

  const handleCategoryClick = (category: string, index: number) => {
    if (onCategoryClick) {
      onCategoryClick(category)
    }
  }

  let menuClass = "circle-menu"
  if (variant === "products") {
    menuClass = "circle-menu-products"
  } else if (variant === "products-hero") {
    menuClass = "circle-menu-products-hero"
  }

  return (
    <div className="relative w-full max-w-[500px] mx-auto">
      <div ref={menuRef} className={`${menuClass} w-full aspect-square`}>
        {displayCategories.map((category, index) => (
          <div
            key={index}
            className={`button ${activeCategory === category ? "active" : ""}`}
            style={
              {
                transform: `rotate(${index * 60}deg)`,
                "--angle": `${index * 60}deg`,
              } as React.CSSProperties
            }
            onClick={() => handleCategoryClick(category, index)}
          >
            <span style={{ transform: `rotate(${-index * 60}deg)` }}>{category}</span>
          </div>
        ))}

        <div ref={centerLabelRef} className={`center-label ${activeCategory ? "active" : ""}`}>
          {"ORC"}
        </div>

        <svg
          ref={flowerRef}
          className="flower"
          width="100"
          height="100"
          viewBox="-100 -100 400 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="hovered" transform="translate(100, 100)">
            <defs>
              <path id="petal" d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
            </defs>

            {/* Outer petals - Yellow */}
            <g fill="rgb(255, 230, 0)">
              <use href="#petal" transform="rotate(0) translate(0,-50)" />
            </g>

            {/* Outer petals - Green */}
            <g fill="rgb(30,159,94)">
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
            <g fill="rgb(2, 51, 22)" fillOpacity="0.85">
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
      </div>
    </div>
  )
}
