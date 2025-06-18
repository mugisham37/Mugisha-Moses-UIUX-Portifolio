"use client"

import { useState } from "react"

export function ResourcesCategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Resources", count: 24 },
    { id: "templates", label: "Templates", count: 8 },
    { id: "guides", label: "Guides", count: 6 },
    { id: "tools", label: "Tools", count: 4 },
    { id: "checklists", label: "Checklists", count: 3 },
    { id: "wireframes", label: "Wireframes", count: 3 },
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
