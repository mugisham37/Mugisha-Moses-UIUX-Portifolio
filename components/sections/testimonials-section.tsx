"use client"

import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content:
        "Alex transformed our user experience completely. The new design increased our conversion rate by 40% and user satisfaction scores went through the roof. Her attention to detail and strategic thinking made all the difference.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "E-commerce Platform Redesign",
      results: ["40% ↑ Conversion Rate", "85% ↑ User Satisfaction", "25% ↓ Support Tickets"],
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content:
        "Working with Alex was a game-changer for our startup. Her strategic approach to UX design helped us secure our Series A funding. The investors were impressed by the user-centered design and clear value proposition.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "SaaS Platform Design",
      results: ["Series A Funding Secured", "300% ↑ User Signups", "50% ↓ Churn Rate"],
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "HealthTech Inc",
      content:
        "Alex's expertise in healthcare UX was invaluable. She simplified complex workflows and made our medical software intuitive for healthcare professionals. The feedback from our users has been overwhelmingly positive.",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
      project: "Healthcare Dashboard",
      results: ["60% ↓ Task Completion Time", "95% User Adoption", "90% Satisfaction Score"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Client Testimonials</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll">What clients say about working with me</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Testimonial */}
        <div className="lg:col-span-2">
          <div className="bg-surface-foreground rounded-xl2 p-8 shadow-card animate-on-scroll border border-white/5">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="w-8 h-8 text-accent-blue flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-neutral-200 leading-relaxed mb-4">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[activeTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-neutral-500">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm text-accent-blue font-medium">{testimonials[activeTestimonial].project}</p>
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-neutral-500 mb-3">Project Results:</p>
              <div className="flex flex-wrap gap-2">
                {testimonials[activeTestimonial].results.map((result) => (
                  <span key={result} className="text-xs bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                activeTestimonial === index
                  ? "bg-accent-blue/20 border border-accent-blue/30"
                  : "bg-surface-foreground border border-white/5 hover:bg-surface-foreground/80"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-sm">{testimonial.name}</h5>
                  <p className="text-xs text-neutral-500">{testimonial.company}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
