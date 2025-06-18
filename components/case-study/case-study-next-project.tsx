import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudyNextProjectProps {
  id: string
  title: string
}

export function CaseStudyNextProject({ id, title }: CaseStudyNextProjectProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center animate-on-scroll">
        <p className="text-neutral-400 mb-2">Next Project</p>
        <h2 className="text-3xl font-bricolage font-semibold mb-6">{title}</h2>
        <Link
          href={`/work/${id}`}
          className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
        >
          View Project
          <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </section>
  )
}
