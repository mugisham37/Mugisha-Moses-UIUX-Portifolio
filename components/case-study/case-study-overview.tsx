import Image from "next/image"

interface CaseStudyOverviewProps {
  overview?: string
  description?: string
  duration?: string
  team?: string
  role?: string
  deliverables?: string
}

export function CaseStudyOverview({ overview, description, duration, team, role, deliverables }: CaseStudyOverviewProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Project Overview</h2>
          <p className="text-lg text-neutral-400">{overview || description}</p>
          
          {(duration || team || role || deliverables) && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {duration && (
                <div>
                  <h3 className="text-sm text-neutral-500 mb-1">Duration</h3>
                  <p className="font-medium">{duration}</p>
                </div>
              )}
              {team && (
                <div>
                  <h3 className="text-sm text-neutral-500 mb-1">Team</h3>
                  <p className="font-medium">{team}</p>
                </div>
              )}
              {role && (
                <div>
                  <h3 className="text-sm text-neutral-500 mb-1">My Role</h3>
                  <p className="font-medium">{role}</p>
                </div>
              )}
              {deliverables && (
                <div>
                  <h3 className="text-sm text-neutral-500 mb-1">Deliverables</h3>
                  <p className="font-medium">{deliverables}</p>
                </div>
              )}
            </div>
          )}
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
