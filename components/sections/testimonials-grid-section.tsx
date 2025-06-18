"use client"

import { useState } from "react"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsGridSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Testimonials" },
    { id: "ux", label: "UX Design" },
    { id: "ui", label: "UI Design" },
    { id: "product", label: "Product Design" },
    { id: "systems", label: "Design Systems" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      quote:
        "Alex transformed our user experience completely. The new design increased our conversion rate by 40% and user satisfaction scores went through the roof. Her attention to detail and strategic thinking made all the difference.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "E-commerce Platform Redesign",
      categories: ["ux", "ui"],
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      quote:
        "Working with Alex was a game-changer for our startup. Her strategic approach to UX design helped us secure our Series A funding. The investors were impressed by the user-centered design and clear value proposition.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "SaaS Platform Design",
      categories: ["product", "ux"],
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "HealthTech Inc",
      quote:
        "Alex's expertise in healthcare UX was invaluable. She simplified complex workflows and made our medical software intuitive for healthcare professionals. The feedback from our users has been overwhelmingly positive.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "Healthcare Dashboard",
      categories: ["ui", "systems"],
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "FinanceApp",
      quote:
        "The design system Alex created has transformed how our team works. We've reduced design inconsistencies by 90% and accelerated our development cycles significantly. Her documentation is exceptional.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "Enterprise Design System",
      categories: ["systems"],
    },
    {
      name: "Jessica Taylor",
      role: "Head of Product",
      company: "RetailBrand",
      quote:
        "Alex's redesign of our mobile app led to a 35% increase in user engagement and a significant boost in sales. She has a remarkable ability to balance business goals with user needs.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "Mobile App Redesign",
      categories: ["ui", "product"],
    },
    {
      name: "Thomas Wilson",
      role: "Founder",
      company: "EdTech Startup",
      quote:
        "As a startup founder, I needed a designer who could understand our vision and translate it into an intuitive product. Alex exceeded all expectations and delivered a design that our users love.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "Educational Platform Design",
      categories: ["ux", "product"],
    },
  ]

  const filteredTestimonials =
    activeFilter === "all"
      ? testimonials
      : testimonials.filter((testimonial) => testimonial.categories.includes(activeFilter))

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 animate-on-scroll">
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

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>

            <div className="mb-6">
              <Quote className="w-8 h-8 text-accent-blue/50 mb-2" />
              <p className="text-neutral-300 italic">"{testimonial.quote}"</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-neutral-500">
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className="text-xs text-accent-blue mt-1">{testimonial.project}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
