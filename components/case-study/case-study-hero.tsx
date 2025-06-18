import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface CaseStudyHeroProps {
  title: string
  subtitle: string
  client: string
  year: string
  category?: string
  image?: string
  duration?: string
  role?: string
}

export function CaseStudyHero({ title, subtitle, client, year, category, image, duration, role }: CaseStudyHeroProps) {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="mb-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition group mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
          Back to All Projects
        </Link>

        <h1 className="text-5xl font-semibold tracking-tight mb-4 animate-on-scroll">{title}</h1>
        <p className="text-xl text-neutral-400 mb-8 animate-on-scroll">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-on-scroll">
        <div className="bg-surface-foreground rounded-lg p-6 border border-white/5">
          <h3 className="text-sm text-neutral-500 mb-2">Client</h3>
          <p className="font-medium">{client}</p>
        </div>
        <div className="bg-surface-foreground rounded-lg p-6 border border-white/5">
          <h3 className="text-sm text-neutral-500 mb-2">Year</h3>
          <p className="font-medium">{year}</p>
        </div>
        {category && (
          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5">
            <h3 className="text-sm text-neutral-500 mb-2">Category</h3>
            <p className="font-medium">{category}</p>
          </div>
        )}
        {duration && (
          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5">
            <h3 className="text-sm text-neutral-500 mb-2">Duration</h3>
            <p className="font-medium">{duration}</p>
          </div>
        )}
        {role && (
          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5">
            <h3 className="text-sm text-neutral-500 mb-2">My Role</h3>
            <p className="font-medium">{role}</p>
          </div>
        )}
      </div>
    </section>
  )
}
