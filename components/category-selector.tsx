"use client"

interface CategorySelectorProps {
  categories: string[]
  activeCategory: string | null
  onSelectCategory: (category: string) => void
}

export function CategorySelector({ categories, activeCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap justify-center items-start gap-8 py-4 text-center">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center cursor-pointer transition-all duration-300 p-4 ${
            activeCategory === category ? "scale-110" : "opacity-70 hover:opacity-100"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {/* Flower-like icon for each category - using the original flower design with 30deg rotation */}
          <div className="w-20 h-20 mb-3 relative">
            <svg
              viewBox="-100 -100 400 400"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-full h-full transition-transform duration-300 ${
                activeCategory === category ? "drop-shadow-lg" : ""
              }`}
              style={{ transform: "rotate(30deg)" }}
            >
              <g className="hovered" transform="translate(100, 100)">
                <defs>
                  <path id={`category-petal-${index}`} d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
                </defs>

                {/* Outer petals - Green */}
                <g fill="rgb(30,159,94)">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <use
                      key={i}
                      href={`#category-petal-${index}`}
                      transform={`rotate(${angle}) translate(0,-50)`}
                      fill={i === index % 6 ? "rgb(255, 230, 0)" : undefined}
                    />
                  ))}
                </g>

                {/* Center circle */}
                <circle r="20" fill={activeCategory === category ? "#065C2A" : "#0D8A3F"} />
              </g>
            </svg>
          </div>
          {/* Category name */}
          <span
            className={`text-base font-medium text-center ${
              activeCategory === category ? "text-orc-dark font-bold" : "text-gray-600"
            }`}
          >
            {category}
          </span>
        </div>
      ))}
    </div>
  )
}
