import { Users, Palette, Lightbulb, Clock, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "User Experience Design",
      description: "Comprehensive user research, strategic wireframing, iterative user testing, and creating intuitive user flows that solve real problems and enhance user satisfaction.",
      timeline: "3-6 weeks",
      price: "Starting at $5,000",
      color: "accent-blue",
      features: [
        "User Research & Behavioral Analysis",
        "Information Architecture & User Flows",
        "Interactive Wireframing & Prototyping",
        "Comprehensive Usability Testing",
        "Accessibility Implementation",
      ],
    },
    {
      icon: Palette,
      title: "User Interface Design",
      description: "Pixel-perfect visual design, scalable design systems, high-fidelity prototyping, and creating beautiful interfaces that engage users and reinforce brand identity.",
      timeline: "2-4 weeks",
      price: "Starting at $3,500",
      color: "accent-purple",
      features: [
        "Visual Design & Brand Integration", 
        "Comprehensive Design Systems", 
        "Advanced Interactive Prototypes", 
        "Responsive & Adaptive Design",
        "Micro-interactions & Animation"
      ],
    },
    {
      icon: Lightbulb,
      title: "Design Consultation",
      description:
        "Expert advice on improving existing products, comprehensive design audits, conversion optimization, and strategic planning for digital experiences that drive business growth.",
      timeline: "1-2 weeks",
      price: "Starting at $1,500",
      color: "accent-teal",
      features: [
        "Comprehensive Design Audits", 
        "UX Strategy & Roadmapping", 
        "Team Training & Workshops", 
        "Design System Review & Optimization",
        "Conversion Rate Optimization"
      ],
    },
  ]

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div>
          <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">My Services</h2>
          <p className="text-neutral-400 animate-on-scroll">Comprehensive design solutions tailored to elevate your digital products and drive measurable results</p>
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover animate-on-scroll"
        >
          View All Services
          <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="service-card bg-surface-foreground rounded-xl2 p-6 shadow-card animate-on-scroll hover:shadow-card-hover transition-all duration-300 group border border-white/5"
            style={{ animationDelay: `${3.3 + index * 0.1}s` }}
          >
            <div
              className={`w-12 h-12 rounded-lg ${
                service.color === "accent-blue"
                  ? "bg-accent-blue/20"
                  : service.color === "accent-purple"
                    ? "bg-accent-purple/20"
                    : "bg-accent-teal/20"
              } flex items-center justify-center mb-6 ${
                service.color === "accent-blue"
                  ? "group-hover:bg-accent-blue/30"
                  : service.color === "accent-purple"
                    ? "group-hover:bg-accent-purple/30"
                    : "group-hover:bg-accent-teal/30"
              } transition`}
            >
              <service.icon
                className={`w-6 h-6 ${
                  service.color === "accent-blue"
                    ? "text-accent-blue"
                    : service.color === "accent-purple"
                      ? "text-accent-purple"
                      : "text-accent-teal"
                }`}
              />
            </div>

            <h3 className="text-xl font-medium mb-3 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-neutral-400 mb-4">{service.description}</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-neutral-500">
                <Clock className="w-4 h-4" />
                <span>Timeline: {service.timeline}</span>
              </div>
              <div className="text-lg font-semibold text-white">{service.price}</div>
            </div>

            <ul className="space-y-2 text-sm text-neutral-400 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    className={`w-3 h-3 ${
                      service.color === "accent-blue"
                        ? "text-accent-blue"
                        : service.color === "accent-purple"
                          ? "text-accent-purple"
                          : "text-accent-teal"
                    } flex-shrink-0`}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full ${
                service.color === "accent-blue"
                  ? "bg-accent-blue/20 hover:bg-accent-blue/30 text-accent-blue"
                  : service.color === "accent-purple"
                    ? "bg-accent-purple/20 hover:bg-accent-purple/30 text-accent-purple"
                    : "bg-accent-teal/20 hover:bg-accent-teal/30 text-accent-teal"
              } px-4 py-2 rounded-lg font-medium transition magnetic-hover`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
