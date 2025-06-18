import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudyNextProjectProps {
  id?: string
  title: string
  description?: string
  link?: string
  image?: string
}

export function CaseStudyNextProject({ id, title, description, link, image }: CaseStudyNextProjectProps) {
  // Use link if provided, otherwise construct from id
  const projectLink = link || (id ? `/work/${id}` : '/work');
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center animate-on-scroll">
        <p className="text-neutral-400 mb-2">Next Project</p>
        <h2 className="text-3xl font-bricolage font-semibold mb-3">{title}</h2>
        {description && <p className="text-lg text-neutral-400 mb-6 max-w-2xl mx-auto">{description}</p>}
        {image && (
          <div className="mb-6 max-w-2xl mx-auto rounded-xl overflow-hidden">
            <img src={image} alt={title} className="w-full h-auto" />
          </div>
        )}
        <Link
          href={projectLink}
          className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
        >
          View Project
          <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  )
}
