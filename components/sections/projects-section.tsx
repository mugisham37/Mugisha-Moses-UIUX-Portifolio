"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ux", label: "UX Design" },
    { id: "ui", label: "UI Design" },
    { id: "product", label: "Product Design" },
    { id: "systems", label: "Design Systems" },
  ]

  const projects = [
    {
      id: 1,
      title: "FinanceFlow - Banking App Redesign",
      description:
        "Complete UX overhaul of a fintech platform resulting in 43% increase in user engagement and 28% boost in conversion rates.",
      tags: ["UX Design", "UI Design", "Prototyping"],
      categories: ["ux", "ui"],
      image: "/placeholder.svg?height=400&width=600",
      gradient: "from-accent-blue/20 to-accent-purple/20",
      featured: true,
      metrics: ["43% ↑ Engagement", "28% ↑ Conversion", "65% ↓ Support Tickets"],
      year: "2024",
    },
    {
      id: 2,
      title: "EcoShop - E-commerce Platform",
      description: "Sustainable shopping experience with intuitive product discovery and seamless checkout flow.",
      tags: ["Product Design", "User Research"],
      categories: ["product", "ux"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-accent-teal/20 to-accent-blue/20",
      metrics: ["35% ↑ Sales", "50% ↓ Cart Abandonment"],
      year: "2024",
    },
    {
      id: 3,
      title: "MedConnect - Healthcare Dashboard",
      description: "Simplifying complex medical data visualization for healthcare professionals and patients.",
      tags: ["UI Design", "Design System"],
      categories: ["ui", "systems"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-accent-purple/20 to-accent-teal/20",
      metrics: ["60% ↓ Task Time", "90% User Satisfaction"],
      year: "2023",
    },
    {
      id: 4,
      title: "TravelBuddy - Travel Planning App",
      description: "All-in-one travel companion app with itinerary planning, booking, and local recommendations.",
      tags: ["UX Design", "UI Design"],
      categories: ["ux", "ui"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-orange-400/20 to-accent-purple/20",
      metrics: ["4.8/5 App Store Rating", "2M+ Downloads"],
      year: "2023",
    },
    {
      id: 5,
      title: "Enterprise Design System",
      description:
        "Comprehensive design system for a Fortune 500 company, unifying 12 products under one visual language.",
      tags: ["Design Systems", "Documentation"],
      categories: ["systems"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-accent-blue/20 to-accent-teal/20",
      metrics: ["70% ↑ Development Speed", "90% Component Reuse"],
      year: "2022",
    },
    {
      id: 6,
      title: "FitTrack - Fitness Tracking App",
      description: "Personalized fitness experience with goal setting, progress tracking, and social features.",
      tags: ["Product Design", "UX Research"],
      categories: ["product", "ux"],
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-accent-purple/20 to-orange-400/20",
      metrics: ["85% User Retention", "45% ↑ Workout Frequency"],
      year: "2022",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 animate-on-scroll">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeFilter === filter.id
                ? "bg-accent-blue text-white"
                : "bg-surface-foreground text-neutral-400 hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card relative group bg-surface-foreground/80 flex flex-col justify-end overflow-hidden animate-on-scroll bg-gradient-to-br rounded-xl2 shadow-card backdrop-blur-md border border-white/5 h-[400px]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 p-6">
              <div className="flex items-center justify-between mb-3">
                {project.featured && (
                  <span className="text-xs font-medium text-accent-blue bg-accent-blue/20 px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
                <span className="text-xs text-neutral-500">{project.year}</span>
              </div>

              <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-sm text-neutral-300 mb-4">{project.description}</p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.map((metric) => (
                  <span key={metric} className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-1 rounded-full">
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition group"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
