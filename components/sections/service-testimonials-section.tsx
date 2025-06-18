import { Star } from "lucide-react"
import Image from "next/image"

export function ServiceTestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Alex's UX audit revealed critical issues we hadn't noticed. Her recommendations led to a 40% increase in conversions within just two months of implementation.",
      author: "Sarah Chen",
      role: "Product Manager",
      company: "TechFlow",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      service: "UX Audit",
    },
    {
      quote:
        "The complete redesign Alex delivered exceeded our expectations. Our user satisfaction scores improved dramatically, and the design system she created has streamlined our entire development process.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      service: "Complete Redesign",
    },
    {
      quote:
        "Working with Alex on our design system was transformative. She created a comprehensive system that our entire team can use confidently. The documentation is exceptional.",
      author: "Emily Watson",
      role: "Design Lead",
      company: "StartupCo",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      service: "Design System",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">What Clients Say</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Real feedback from clients who have experienced the impact of strategic design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-surface-foreground rounded-xl2 p-6 border border-white/5 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>

            <p className="text-neutral-300 mb-6 italic">"{testimonial.quote}"</p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{testimonial.author}</h4>
                <p className="text-sm text-neutral-500">
                  {testimonial.role} at {testimonial.company}
                </p>
                <p className="text-xs text-accent-blue mt-1">{testimonial.service}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
