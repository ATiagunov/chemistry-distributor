"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { CircularMenu } from "@/components/circular-menu"
import { CategorySelector } from "@/components/category-selector"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample product data
const products = [
  {
    id: 1,
    name: "Monoethanolamine (MEA)",
    category: "Ethanolamines",
    description: "High purity monoethanolamine for gas treatment, detergents, and personal care products.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$45.00 - $1,200.00",
  },
  {
    id: 2,
    name: "Sodium Lauryl Sulfate",
    category: "Surfactants",
    description: "Effective anionic surfactant used in cleaning and hygiene products.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$32.00 - $950.00",
  },
  {
    id: 3,
    name: "Sulfuric Acid",
    category: "Acids",
    description: "Industrial grade sulfuric acid for various chemical processes and manufacturing.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$28.00 - $850.00",
  },
  {
    id: 4,
    name: "Sodium Hydroxide",
    category: "Alkalis",
    description: "Pure sodium hydroxide pellets for industrial applications and chemical synthesis.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$35.00 - $780.00",
  },
  {
    id: 5,
    name: "Propylene Glycol",
    category: "Glycols",
    description: "USP grade propylene glycol for pharmaceutical, food, and cosmetic applications.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$42.00 - $1,100.00",
  },
  {
    id: 6,
    name: "Polyvinyl Alcohol",
    category: "Polymers",
    description: "Water-soluble synthetic polymer for adhesives, paper coating, and textile applications.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$55.00 - $1,500.00",
  },
  {
    id: 7,
    name: "Diethanolamine (DEA)",
    category: "Ethanolamines",
    description: "High quality diethanolamine for gas purification and as a surfactant intermediate.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$48.00 - $1,300.00",
  },
  {
    id: 8,
    name: "Sodium Laureth Sulfate",
    category: "Surfactants",
    description: "Mild anionic surfactant for personal care and household cleaning products.",
    image: "/placeholder.svg?height=300&width=300",
    price: "$36.00 - $980.00",
  },
]

// Product categories
const productCategories = ["Ethanolamines", "Surfactants", "Acids", "Alkalis", "Glycols", "Polymers"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [showProducts, setShowProducts] = useState(false)

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setShowProducts(true)
  }

  const handleCategorySelectorSelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products

  return (
    <main className="flex-1">
      <PageHeader
        title="Our Products"
        description="Browse our comprehensive range of high-quality chemical products for various industrial and research applications."
      />

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          {!showProducts ? (
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-2xl font-bold mb-8">Select a Product Category</h2>
              <CircularMenu categories={productCategories} onCategorySelect={handleCategorySelect} />
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Product Categories</h2>
                <CategorySelector
                  categories={productCategories}
                  activeCategory={selectedCategory}
                  onSelectCategory={handleCategorySelectorSelect}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-2 bg-orc-medium hover:bg-orc-dark">{product.category}</Badge>
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{product.price}</span>
                        <Button size="sm" className="bg-orc-medium hover:bg-orc-dark">
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-orc-medium hover:bg-orc-dark">
              View Full Catalog
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
