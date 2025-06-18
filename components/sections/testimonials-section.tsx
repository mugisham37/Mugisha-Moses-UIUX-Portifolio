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
      company: "Google",
      content:
        "Mugisha transformed our user experience completely. The new design increased our conversion rate by 43% and user satisfaction scores went through the roof. His attention to detail, strategic thinking, and data-driven approach made all the difference in our product's success.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      project: "E-commerce Platform Redesign",
      results: ["43% ↑ Conversion Rate", "85% ↑ User Satisfaction", "32% ↓ Support Tickets"],
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Spotify",
      content:
        "Working with Mugisha was a game-changer for our startup. His strategic approach to UX design helped us secure our Series A funding. The investors were impressed by the user-centered design, clear value proposition, and the thoughtful design system that would scale with our growth.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      project: "SaaS Platform Design",
      results: ["Series A Funding Secured", "320% ↑ User Signups", "58% ↓ Churn Rate"],
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Microsoft",
      content:
        "Mugisha's expertise in healthcare UX was invaluable. He simplified complex workflows and made our medical software intuitive for healthcare professionals. His research-driven approach and ability to translate technical requirements into user-friendly interfaces resulted in overwhelmingly positive feedback from our users.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
      project: "Healthcare Dashboard",
      results: ["67% ↓ Task Completion Time", "98% User Adoption", "92% Satisfaction Score"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Client Testimonials</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll">What industry leaders say about working with me and the results we've achieved together</p>
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
