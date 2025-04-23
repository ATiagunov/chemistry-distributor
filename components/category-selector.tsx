"use client"

interface CategorySelectorProps {
  categories: string[]
  activeCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export function CategorySelector({ categories, activeCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="category-selector">
      <div
        className={`category-item ${activeCategory === null ? "active" : ""}`}
        onClick={() => onSelectCategory(null)}
      >
        <div className="category-icon">
          <svg viewBox="-100 -100 400 400" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(100, 100)">
              <defs>
                <path id="category-petal" d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
              </defs>
              <g fill="rgb(30,159,94)">
                <use href="#category-petal" transform="rotate(0) translate(0,-50)" />
                <use href="#category-petal" transform="rotate(60) translate(0,-50)" />
                <use href="#category-petal" transform="rotate(120) translate(0,-50)" />
                <use href="#category-petal" transform="rotate(180) translate(0,-50)" />
                <use href="#category-petal" transform="rotate(240) translate(0,-50)" />
                <use href="#category-petal" transform="rotate(300) translate(0,-50)" />
              </g>
            </g>
          </svg>
        </div>
        <div className="category-name">All Products</div>
      </div>

      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${activeCategory === category ? "active" : ""}`}
          onClick={() => onSelectCategory(category)}
        >
          <div className="category-icon">
            <svg viewBox="-100 -100 400 400" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(100, 100)">
                <defs>
                  <path id={`category-petal-${index}`} d="M 20 50 Q 100 0, 160 50 Q 100 100, 20 50 Z" />
                </defs>
                <g fill="rgb(30,159,94)">
                  {Array.from({ length: 6 }).map((_, i) => {
                    const isHighlighted = i === index % 6
                    return (
                      <use
                        key={i}
                        href={`#category-petal-${index}`}
                        transform={`rotate(${i * 60}) translate(0,-50)`}
                        fill={isHighlighted ? "rgb(255, 230, 0)" : "rgb(30,159,94)"}
                      />
                    )
                  })}
                </g>
              </g>
            </svg>
          </div>
          <div className="category-name">{category}</div>
        </div>
      ))}
    </div>
  )
}
