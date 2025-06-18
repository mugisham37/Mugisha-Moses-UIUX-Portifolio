import { Check, Star } from "lucide-react"
import Link from "next/link"

export function ServicePackagesSection() {
  const packages = [
    {
      name: "UX Audit",
      price: "$2,500",
      duration: "1-2 weeks",
      description: "Comprehensive analysis of your current product with actionable recommendations.",
      features: [
        "Heuristic evaluation",
        "User journey analysis",
        "Competitive analysis",
        "Detailed report with recommendations",
        "1-hour strategy call",
      ],
      popular: false,
      color: "accent-blue",
    },
    {
      name: "Complete Redesign",
      price: "$8,500",
      duration: "6-8 weeks",
      description: "Full product redesign from research to high-fidelity prototypes.",
      features: [
        "User research & personas",
        "Information architecture",
        "Wireframing & prototyping",
        "Visual design & UI",
        "Design system creation",
        "Usability testing",
        "Developer handoff",
      ],
      popular: true,
      color: "accent-purple",
    },
    {
      name: "Design System",
      price: "$5,500",
      duration: "4-6 weeks",
      description: "Scalable design system with components, guidelines, and documentation.",
      features: [
        "Component library",
        "Design tokens",
        "Usage guidelines",
        "Documentation site",
        "Team training session",
      ],
      popular: false,
      color: "accent-teal",
    },
  ]

  return (
    <section id="packages" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Service Packages</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Choose the package that best fits your needs, or let's create a custom solution for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={pkg.name}
            className={`relative bg-surface-foreground rounded-xl2 p-8 border animate-on-scroll ${
              pkg.popular ? "border-accent-purple/50 shadow-card-hover" : "border-white/5"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent-purple text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-xl font-medium mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-2">{pkg.price}</div>
              <div className="text-sm text-neutral-500">{pkg.duration}</div>
            </div>

            <p className="text-neutral-400 mb-6 text-center">{pkg.description}</p>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <Check className={`w-4 h-4 text-${pkg.color} flex-shrink-0`} />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition magnetic-hover ${
                pkg.popular
                  ? "bg-accent-purple hover:bg-accent-purple/90 text-white"
                  : "bg-white/10 hover:bg-white/15 text-white"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 animate-on-scroll">
        <p className="text-neutral-400 mb-4">Need something custom?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover"
        >
          Let's discuss your project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
