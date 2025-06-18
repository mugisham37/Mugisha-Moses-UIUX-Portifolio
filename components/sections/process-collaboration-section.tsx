import Image from "next/image"

export function ProcessCollaborationSection() {
  const collaborationSteps = [
    {
      title: "Kickoff Meeting",
      description:
        "We begin with a comprehensive kickoff meeting to align on project goals, scope, timeline, and success metrics.",
      participants: ["Client stakeholders", "Project manager", "UX designer (me)"],
      outcomes: ["Project brief", "Timeline", "Communication plan"],
    },
    {
      title: "Regular Check-ins",
      description:
        "Throughout the project, we maintain regular check-ins to review progress, address questions, and ensure alignment.",
      participants: ["Client point of contact", "UX designer (me)"],
      outcomes: ["Progress updates", "Issue resolution", "Next steps"],
    },
    {
      title: "Design Reviews",
      description:
        "At key milestones, we conduct formal design reviews to gather feedback and validate design decisions.",
      participants: ["Client stakeholders", "End users (when possible)", "UX designer (me)"],
      outcomes: ["Feedback documentation", "Design iterations", "Approval decisions"],
    },
    {
      title: "Handoff & Knowledge Transfer",
      description:
        "At project completion, we ensure a smooth transition with comprehensive documentation and knowledge transfer.",
      participants: ["Client stakeholders", "Development team", "UX designer (me)"],
      outcomes: ["Design specifications", "Asset delivery", "Implementation guidance"],
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Collaboration Approach</h2>
          <p className="text-lg text-neutral-400 mb-6">
            I believe that great design happens through close collaboration with clients and stakeholders. My process is
            transparent, inclusive, and focused on clear communication.
          </p>
          <p className="text-neutral-400 mb-8">
            Throughout our project, you'll have visibility into progress, regular opportunities for feedback, and a
            direct line of communication with me. I'm not just a designer—I'm a partner in your success.
          </p>

          <div className="relative rounded-xl2 overflow-hidden aspect-video">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Collaboration session"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="space-y-8">
            {collaborationSteps.map((step, index) => (
              <div key={step.title} className="bg-surface-foreground rounded-lg p-6 border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-medium">{step.title}</h3>
                </div>
                <p className="text-neutral-400 mb-4 text-sm">{step.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-xs text-neutral-500 mb-2">Participants</h4>
                    <ul className="space-y-1">
                      {step.participants.map((participant) => (
                        <li key={participant} className="text-xs text-neutral-300 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-accent-blue"></div>
                          {participant}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs text-neutral-500 mb-2">Outcomes</h4>
                    <ul className="space-y-1">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="text-xs text-neutral-300 flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-accent-purple"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
