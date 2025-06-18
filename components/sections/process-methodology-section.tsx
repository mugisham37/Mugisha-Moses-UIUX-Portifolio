import { Check } from "lucide-react"

export function ProcessMethodologySection() {
  const methodologies = [
    {
      name: "Design Thinking",
      description:
        "A human-centered approach that prioritizes understanding user needs, challenging assumptions, and redefining problems to identify alternative strategies and solutions.",
      principles: [
        "Empathize with users",
        "Define clear problems",
        "Ideate multiple solutions",
        "Prototype rapidly",
        "Test and iterate",
      ],
      color: "accent-blue",
    },
    {
      name: "Lean UX",
      description:
        "A methodology that focuses on reducing waste and increasing efficiency by validating assumptions early and often through rapid experimentation and continuous feedback.",
      principles: [
        "Build-Measure-Learn cycles",
        "Minimum viable products",
        "Validated learning",
        "Cross-functional collaboration",
        "Continuous discovery",
      ],
      color: "accent-purple",
    },
    {
      name: "Jobs-to-be-Done",
      description:
        "A framework that focuses on understanding the tasks users are trying to accomplish, rather than their demographics or attributes, to create more effective solutions.",
      principles: [
        "Focus on user goals",
        "Understand contextual needs",
        "Identify progress metrics",
        "Map competitive solutions",
        "Uncover unmet needs",
      ],
      color: "accent-teal",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Design Methodologies</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          I draw from established design frameworks and adapt them to each project's unique needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {methodologies.map((methodology, index) => (
          <div
            key={methodology.name}
            className="bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-12 h-12 rounded-lg bg-${methodology.color}/20 flex items-center justify-center mb-6`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`w-6 h-6 text-${methodology.color}`}
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>

            <h3 className="text-xl font-medium mb-3">{methodology.name}</h3>
            <p className="text-neutral-400 text-sm mb-6">{methodology.description}</p>

            <h4 className="text-sm font-medium mb-3">Key Principles</h4>
            <ul className="space-y-2">
              {methodology.principles.map((principle) => (
                <li key={principle} className="flex items-center gap-2 text-sm text-neutral-300">
                  <Check className={`w-4 h-4 text-${methodology.color} flex-shrink-0`} />
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
