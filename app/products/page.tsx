"use client"

import { PageHeader } from "@/components/page-header"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useAnimation, type PanInfo } from "framer-motion"
import { CircularMenu } from "@/components/circular-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowUp, ChevronLeft, ChevronRight } from "lucide-react"
import { CategorySelector } from "@/components/category-selector"
import { RequestQuoteModal } from "@/components/request-quote-modal"
import { useMediaQuery } from "@/hooks/use-media-query"

const productCategories = ["Acids", "Alkalis", "Glycols", "Polymers", "Surfactants", "Ethanolamines"]

// Sample product data
const products = [
  {
    id: 1,
    name: "Monoethanolamine (MEA)",
    category: "Ethanolamines",
    description: "High purity monoethanolamine for gas treatment, detergents, and personal care products.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$45.00 - $1,200.00",
  },
  {
    id: 2,
    name: "Diethanolamine (DEA)",
    category: "Ethanolamines",
    description: "High quality diethanolamine for gas purification and as a surfactant intermediate.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$48.00 - $1,300.00",
  },
  {
    id: 3,
    name: "Triethanolamine (TEA)",
    category: "Ethanolamines",
    description: "Pure triethanolamine used in cement production, cosmetics, and as a corrosion inhibitor.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$52.00 - $1,400.00",
  },
  {
    id: 4,
    name: "Sodium Lauryl Sulfate",
    category: "Surfactants",
    description: "Effective anionic surfactant used in cleaning and hygiene products.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$32.00 - $950.00",
  },
  {
    id: 5,
    name: "Sodium Laureth Sulfate",
    category: "Surfactants",
    description: "Mild anionic surfactant for personal care and household cleaning products.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$36.00 - $980.00",
  },
  {
    id: 6,
    name: "Cocamidopropyl Betaine",
    category: "Surfactants",
    description: "Amphoteric surfactant used in personal care products for its mildness and foam enhancement.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$40.00 - $1,050.00",
  },
  {
    id: 7,
    name: "Sulfuric Acid",
    category: "Acids",
    description: "Industrial grade sulfuric acid for various chemical processes and manufacturing.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$28.00 - $850.00",
  },
  {
    id: 8,
    name: "Hydrochloric Acid",
    category: "Acids",
    description: "High purity hydrochloric acid for laboratory and industrial applications.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$25.00 - $780.00",
  },
  {
    id: 9,
    name: "Nitric Acid",
    category: "Acids",
    description: "Concentrated nitric acid for metal processing, fertilizer production, and laboratory use.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$30.00 - $900.00",
  },
  {
    id: 10,
    name: "Sodium Hydroxide",
    category: "Alkalis",
    description: "Pure sodium hydroxide pellets for industrial applications and chemical synthesis.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$35.00 - $780.00",
  },
  {
    id: 11,
    name: "Potassium Hydroxide",
    category: "Alkalis",
    description: "High quality potassium hydroxide for soap making, biodiesel production, and chemical processes.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$38.00 - $820.00",
  },
  {
    id: 12,
    name: "Calcium Hydroxide",
    category: "Alkalis",
    description: "Fine calcium hydroxide powder for water treatment, construction, and food processing.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$32.00 - $750.00",
  },
  {
    id: 13,
    name: "Propylene Glycol",
    category: "Glycols",
    description: "USP grade propylene glycol for pharmaceutical, food, and cosmetic applications.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$42.00 - $1,100.00",
  },
  {
    id: 14,
    name: "Ethylene Glycol",
    category: "Glycols",
    description: "Industrial grade ethylene glycol for antifreeze, polyester resins, and heat transfer applications.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$38.00 - $980.00",
  },
  {
    id: 15,
    name: "Diethylene Glycol",
    category: "Glycols",
    description: "High purity diethylene glycol for solvent applications, gas drying, and plasticizers.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$45.00 - $1,200.00",
  },
  {
    id: 16,
    name: "Polyvinyl Alcohol",
    category: "Polymers",
    description: "Water-soluble synthetic polymer for adhesives, paper coating, and textile applications.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$55.00 - $1,500.00",
  },
  {
    id: 17,
    name: "Polyethylene Glycol",
    category: "Polymers",
    description: "Versatile polymer used in pharmaceuticals, cosmetics, and industrial applications.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$50.00 - $1,350.00",
  },
  {
    id: 18,
    name: "Polyacrylamide",
    category: "Polymers",
    description: "High molecular weight polymer for water treatment, paper making, and enhanced oil recovery.",
    image: "/placeholder.svg?height=300&width=533",
    price: "$60.00 - $1,600.00",
  },
]

// Product categories with descriptions
const categoryDescriptions = {
  Ethanolamines:
    "Versatile compounds used in a wide range of applications including gas treatment, detergents, personal care products, and as chemical intermediates. Our high-purity ethanolamines meet the most demanding industry specifications.",
  Surfactants:
    "Surface-active agents that reduce surface tension between liquids, solids, and gases. Our surfactants portfolio includes anionic, cationic, non-ionic, and amphoteric varieties for cleaning products, personal care, and industrial processes.",
  Acids:
    "Essential chemicals for numerous industrial processes. We offer a comprehensive range of high-quality inorganic and organic acids in various concentrations for applications in manufacturing, water treatment, and laboratory use.",
  Alkalis:
    "Basic compounds crucial for neutralization reactions and many industrial processes. Our alkali products include hydroxides and carbonates of various metals, available in different forms and concentrations.",
  Glycols:
    "Important chemical intermediates and solvents with excellent hygroscopic properties. Our glycol products serve industries from automotive to pharmaceuticals, with applications in antifreeze, polyester resins, and personal care.",
  Polymers:
    "Large molecules composed of repeating structural units that provide unique physical properties. Our polymer range includes water-soluble varieties, resins, and specialty formulations for diverse industrial applications.",
}

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Acids")
  const [previousCategory, setPreviousCategory] = useState<string>("Acids")
  const [showProducts, setShowProducts] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"up" | "down" | "left" | "right">("down")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<string>("")
  const mainRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLElement>(null)
  const descriptionControls = useAnimation()

  // Check if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Determine the direction of transition based on category change
  const determineTransitionDirection = (prev: string, current: string) => {
    const prevIndex = productCategories.indexOf(prev)
    const currentIndex = productCategories.indexOf(current)

    if (prevIndex === currentIndex) return isMobile ? "right" : "down"
    // Handle wrap-around cases
    if (prevIndex === productCategories.length - 1 && currentIndex === 0) {
      return isMobile ? "left" : "down"    }
    if (prevIndex === 0 && currentIndex === productCategories.length - 1) {
      return isMobile ? "right" : "up"
    }
    if (isMobile) {
      return currentIndex > prevIndex ? "left" : "right"
    }

    return currentIndex > prevIndex ? "down" : "up"
  }

  const handleCategorySelect = (category: string) => {
    setPreviousCategory(selectedCategory)
    const direction = determineTransitionDirection(selectedCategory, category)
    setTransitionDirection(direction)
    setSelectedCategory(category)
  }

  const handleCategoryClick = (category: string) => {
    handleCategorySelect(category)
    setShowProducts(true)
    // Scroll to products section with smooth animation
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleViewProducts = () => {
    setShowProducts(true)
    // Scroll to products section with smooth animation
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleRequestQuote = (productName: string) => {
    setSelectedProduct(productName)
    setModalOpen(true)
  }

  const handleSwipe = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isMobile) return

    const { offset } = info

    // Determine swipe direction
    if (Math.abs(offset.x) > 50) {
      // Threshold for swipe
      const currentIndex = productCategories.indexOf(selectedCategory)
      let newIndex

      if (offset.x > 0) {
        // Swiped right - go to previous category
        newIndex = currentIndex === 0 ? productCategories.length - 1 : currentIndex - 1
      } else {
        // Swiped left - go to next category
        newIndex = currentIndex === productCategories.length - 1 ? 0 : currentIndex + 1
      }

      handleCategorySelect(productCategories[newIndex])
    }
  }

  // Navigate to next category
  const handleNextCategory = () => {
    const currentIndex = productCategories.indexOf(selectedCategory)
    const nextIndex = currentIndex === productCategories.length - 1 ? 0 : currentIndex + 1
    handleCategorySelect(productCategories[nextIndex])
  }

  // Navigate to previous category
  const handlePrevCategory = () => {
    const currentIndex = productCategories.indexOf(selectedCategory)
    const prevIndex = currentIndex === 0 ? productCategories.length - 1 : currentIndex - 1
    handleCategorySelect(productCategories[prevIndex])
  }

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => product.category === selectedCategory)

  // Handle scroll for parallax effects and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Show scroll-to-top button when scrolled down to products section
      if (productsRef.current) {
        const productsPosition = productsRef.current.getBoundingClientRect().top
        setShowScrollTop(productsPosition < 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check for URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get("category")

    if (categoryParam && productCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam)

      // If there's a hash in the URL, scroll to that section
      if (window.location.hash === "#products-section" && productsRef.current) {
        setTimeout(() => {
          productsRef.current?.scrollIntoView({ behavior: "smooth" })
          setShowProducts(true)
        }, 500)
      }
    }
  }, [])

  const swipeVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? -300 : 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? 300 : -300,
      opacity: 0,
    }),
  }

  // Animation variants for desktop
  const desktopVariants = {
    enter: (direction: "up" | "down") => ({
      y: direction === "down" ? -20 : 20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: "up" | "down") => ({
      y: direction === "down" ? 20 : -20,
      opacity: 0,
    }),
  }

  return (
    <main ref={mainRef} className="flex-1 overflow-x-hidden">
      <PageHeader title="Products"
        description="Information about our products."
      />
      {/* Hero Section with Circle Menu and Category Description */}
      <section className="min-h-[70vh] md:min-h-screen flex flex-col relative">
        <div className="flex-1 container px-4 md:px-6 py-6 md:py-12 flex flex-col md:flex-row items-center">
          {/* Left side - Circle Menu */}
          <motion.div
            className="w-full md:w-1/2 hidden md:flex justify-center mb-8 md:mb-0 relative md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-full max-w-[500px] hover:text-orc-dark">
              <CircularMenu
                categories={productCategories}
                onCategorySelect={handleCategorySelect}
                onCategoryClick={handleCategoryClick}
                variant="products"
                initialCategory="Ethanolamines"
              />
            </div>
          </motion.div>

          {/* Decorative Line - without circle */}
          <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-y-1/2 h-[60%] w-[2px]">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-orc-medium to-transparent"></div>
          </div>

          {isMobile && (
            <div className="w-full mb-6 flex justify-center">
              <div className="flex items-center space-x-2">
                {productCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      category === selectedCategory ? "bg-orc-medium" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Right side */}
          <motion.div
            className="w-full md:w-1/2 md:pl-8 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <AnimatePresence mode="wait" custom={transitionDirection}>
              <motion.div
                key={selectedCategory}
                custom={transitionDirection}
                variants={isMobile ? swipeVariants : desktopVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="bg-orc-bg rounded-3xl p-8 shadow-md border-2 border-orc-medium mx-auto"
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleSwipe}
              >
                <h2 className="text-3xl font-bold mb-4 text-orc-dark">{selectedCategory}</h2>
                <p className="text-gray-700 text-xl">
                  {categoryDescriptions[selectedCategory as keyof typeof categoryDescriptions]}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* View Products Button */}
        <motion.div
          className="flex justify-center mb-12 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={handleViewProducts}
            className="group flex flex-col items-center bg-transparent hover:bg-transparent text-orc-medium hover:text-orc-dark"
          >
            <span className="mb-2 text-lg font-medium">View Products</span>
            <ChevronDown className="h-12 w-12 animate-bounce" />
          </Button>
        </motion.div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} id="products-section" className="bg-gray-50 pt-2 md:pt-8 pb-16">
        {/* Banner with Category Selector */}
        <div className="sticky top-16 z-10 bg-white shadow-md hidden md:block">
          <div className="container px-4 md:px-6 py-4">
            <CategorySelector
              categories={productCategories}
              activeCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </div>

        {isMobile && (
          <div className="container px-4 py-2">
            <h2 className="text-xl font-bold text-orc-dark text-center">{selectedCategory} Products</h2>
          </div>
        )}

        {/* Products Grid */}
        <div className="container px-4 md:px-6 mt-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 product-card"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105 product-image"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{product.price}</span>
                      <Button
                        size="sm"
                        className="bg-orc-medium hover:bg-orc-dark transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        onClick={() => handleRequestQuote(product.name)}
                      >
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button - Positioned higher */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-50"
          >
            <Button
              onClick={handleScrollToTop}
              size="icon"
              className="rounded-full w-12 h-12 bg-orc-medium hover:bg-orc-dark shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Request Quote Modal */}
      <RequestQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} productName={selectedProduct} />
    </main>
  )
}
