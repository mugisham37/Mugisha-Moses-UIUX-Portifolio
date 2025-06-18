import { Heart, Users, Lightbulb, Target } from "lucide-react"

export function PhilosophySection() {
  const principles = [
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Every design decision starts with understanding real user needs, behaviors, and pain points through empathetic research and continuous feedback.",
      color: "accent-blue",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Great design happens when diverse perspectives come together to solve complex problems, bringing stakeholders and users into the creative process.",
      color: "accent-purple",
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Pushing boundaries while maintaining usability to create breakthrough experiences that balance creativity with practical implementation.",
      color: "accent-teal",
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Beautiful design means nothing without measurable impact on business metrics and user satisfaction, always designing with clear objectives in mind.",
      color: "orange-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Design Philosophy</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          My approach to design is grounded in empathy, collaboration, and a relentless focus on creating meaningful
          impact that transforms user experiences and drives business growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className="text-center animate-on-scroll group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`w-16 h-16 rounded-xl bg-${principle.color}/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-${principle.color}/30 transition`}
            >
              <principle.icon className={`w-8 h-8 text-${principle.color}`} />
            </div>
            <h3 className="text-lg font-medium mb-3">{principle.title}</h3>
            <p className="text-neutral-400 text-sm">{principle.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll">
        <blockquote className="text-xl text-neutral-200 text-center italic mb-4">
          "Good design solves problems. Great design anticipates them. But exceptional design creates an emotional connection
          that transforms how people interact with technology, making complex experiences feel intuitive and delightful."
        </blockquote>
        <p className="text-center text-neutral-500">— Mugisha Moses, Design Philosophy</p>
      </div>
    </section>
  )
}
