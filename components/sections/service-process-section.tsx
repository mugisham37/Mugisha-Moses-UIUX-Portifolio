export function ServiceProcessSection() {
  const phases = [
    {
      phase: "Discovery",
      duration: "Week 1",
      activities: [
        "Stakeholder interviews",
        "User research planning",
        "Competitive analysis",
        "Project scope definition",
      ],
      deliverables: ["Research plan", "Project timeline", "Success metrics"],
      color: "accent-blue",
    },
    {
      phase: "Research",
      duration: "Week 2-3",
      activities: ["User interviews", "Surveys and analytics review", "Persona development", "Journey mapping"],
      deliverables: ["User personas", "Journey maps", "Research insights"],
      color: "accent-purple",
    },
    {
      phase: "Design",
      duration: "Week 4-6",
      activities: ["Information architecture", "Wireframing", "Visual design", "Prototyping"],
      deliverables: ["Wireframes", "High-fidelity designs", "Interactive prototype"],
      color: "accent-teal",
    },
    {
      phase: "Validation",
      duration: "Week 7-8",
      activities: ["Usability testing", "Stakeholder feedback", "Design iteration", "Final handoff"],
      deliverables: ["Test results", "Final designs", "Design system", "Documentation"],
      color: "orange-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">My Process</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          A structured approach that ensures every project delivers exceptional results through collaboration and
          iteration.
        </p>
      </div>

      <div className="space-y-12">
        {phases.map((phase, index) => (
          <div
            key={phase.phase}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-${phase.color}/20 flex items-center justify-center text-${phase.color} font-bold`}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium">{phase.phase}</h3>
                  <p className="text-sm text-neutral-500">{phase.duration}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h4 className="font-medium mb-3">Activities</h4>
              <ul className="space-y-2">
                {phase.activities.map((activity) => (
                  <li key={activity} className="text-sm text-neutral-400 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${phase.color}`}></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <h4 className="font-medium mb-3">Deliverables</h4>
              <div className="flex flex-wrap gap-2">
                {phase.deliverables.map((deliverable) => (
                  <span
                    key={deliverable}
                    className={`text-xs px-3 py-1 rounded-full bg-${phase.color}/20 text-${phase.color}`}
                  >
                    {deliverable}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
