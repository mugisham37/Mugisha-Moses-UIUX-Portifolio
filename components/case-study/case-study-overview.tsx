import Image from "next/image"

interface CaseStudyOverviewProps {
  description: string
}

export function CaseStudyOverview({ description }: CaseStudyOverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Project Overview</h2>
          <p className="text-lg text-neutral-400">{description}</p>
        </div>

        <div className="animate-on-scroll">
          <div className="relative rounded-xl2 overflow-hidden aspect-video">
            <Image src="/placeholder.svg?height=600&width=800" alt="Project overview" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
