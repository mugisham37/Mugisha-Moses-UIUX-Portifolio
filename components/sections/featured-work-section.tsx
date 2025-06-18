import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

export function FeaturedWorkSection() {
  const projects = [
    {
      id: 1,
      title: "FinanceFlow - Banking App Redesign",
      description:
        "Complete UX overhaul of a fintech platform resulting in 43% increase in user engagement and 28% boost in conversion rates.",
      tags: ["UX Research", "UI Design", "Prototyping"],
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
      image: "/placeholder.svg?height=300&width=400",
      gradient: "from-accent-purple/20 to-accent-teal/20",
      metrics: ["60% ↓ Task Time", "90% User Satisfaction"],
      year: "2023",
    },
  ]

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <h2 className="text-3xl font-bricolage font-semibold animate-on-scroll">Featured Work</h2>
        <p className="text-neutral-400 animate-on-scroll">
          Selected projects that showcase my design process and impact
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card relative group bg-surface-foreground/80 ${
              project.featured ? "lg:col-span-2 lg:row-span-2" : ""
            } flex flex-col justify-end overflow-hidden animate-on-scroll bg-gradient-to-br ${project.gradient} rounded-xl2 p-6 shadow-card backdrop-blur-md border border-white/5`}
            style={{ animationDelay: `${1.2 + index * 0.2}s` }}
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

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 mt-auto">
              <div className="flex items-center justify-between mb-3">
                {project.featured && (
                  <span className="text-xs font-medium text-accent-blue bg-accent-blue/20 px-3 py-1 rounded-full">
                    Featured Project
                  </span>
                )}
                <span className="text-xs text-neutral-500">{project.year}</span>
              </div>

              <h3
                className={`${project.featured ? "text-2xl" : "text-xl"} font-medium mb-3 group-hover:text-white transition-colors`}
              >
                {project.title}
              </h3>

              <p className={`text-neutral-300 mb-4 ${project.featured ? "max-w-lg text-base" : "text-sm"}`}>
                {project.description}
              </p>

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
                <button className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition">
                  <ExternalLink className="w-4 h-4" />
                  Live Site
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center animate-on-scroll" style={{ animationDelay: "1.8s" }}>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  )
}
