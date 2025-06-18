"use client"

import { useState } from "react"

export function BlogCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Articles", count: 24 },
    { id: "ux-design", label: "UX Design", count: 8 },
    { id: "ui-design", label: "UI Design", count: 6 },
    { id: "design-systems", label: "Design Systems", count: 4 },
    { id: "case-studies", label: "Case Studies", count: 3 },
    { id: "tools", label: "Tools & Tips", count: 3 },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
      <div className="flex flex-wrap gap-4 justify-center animate-on-scroll">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
              activeCategory === category.id
                ? "bg-accent-blue text-white"
                : "bg-surface-foreground text-neutral-400 hover:text-white"
            }`}
          >
            {category.label}
            <span className="text-xs opacity-70">({category.count})</span>
          </button>
        ))}
      </div>
    </section>
  )
}
