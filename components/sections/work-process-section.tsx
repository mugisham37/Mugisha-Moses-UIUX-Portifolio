import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WorkProcessSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">My Design Process</h2>
          <p className="text-lg text-neutral-400 mb-6">
            Every successful project follows a structured yet flexible process that ensures we deliver exceptional
            results that meet both user needs and business goals.
          </p>
          <p className="text-neutral-400 mb-8">
            From initial discovery to final delivery, I maintain clear communication and collaborative approach
            throughout the entire journey.
          </p>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover"
          >
            Learn More About My Process
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="animate-on-scroll">
          <div className="bg-surface-foreground rounded-xl2 p-8 border border-white/5">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Discovery & Research</h3>
                  <p className="text-sm text-neutral-400">
                    Understanding your business, users, and goals through stakeholder interviews and market research.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center text-accent-purple font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Strategy & Planning</h3>
                  <p className="text-sm text-neutral-400">
                    Defining the project scope, creating user personas, and mapping out the user journey.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Design & Prototyping</h3>
                  <p className="text-sm text-neutral-400">
                    Creating wireframes, visual designs, and interactive prototypes for testing and feedback.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-400/20 flex items-center justify-center text-orange-400 font-medium">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Testing & Refinement</h3>
                  <p className="text-sm text-neutral-400">
                    Conducting usability tests, gathering feedback, and iterating on the design to perfection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
