import { CheckCircle, Clock, Users, Rocket } from "lucide-react"

export function NextStepsSection() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Initial Consultation",
      description: "We'll have a 30-minute call to discuss your project goals, requirements, and timeline.",
      duration: "30 minutes",
      color: "accent-blue",
    },
    {
      icon: Clock,
      title: "Proposal & Timeline",
      description: "I'll create a detailed proposal with project scope, timeline, and investment breakdown.",
      duration: "2-3 days",
      color: "accent-purple",
    },
    {
      icon: Users,
      title: "Project Kickoff",
      description: "Once approved, we'll schedule a kickoff meeting to align on expectations and begin work.",
      duration: "1 week",
      color: "accent-teal",
    },
    {
      icon: Rocket,
      title: "Design & Delivery",
      description: "I'll execute the project according to our agreed timeline with regular check-ins and updates.",
      duration: "4-8 weeks",
      color: "orange-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">What Happens Next?</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Here's what you can expect after reaching out. I believe in transparency and clear communication throughout
          our collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="bg-surface-foreground rounded-xl2 p-6 border border-white/5 text-center animate-on-scroll relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative mb-6">
              <div
                className={`w-16 h-16 rounded-xl bg-${step.color}/20 flex items-center justify-center mx-auto group-hover:bg-${step.color}/30 transition`}
              >
                <step.icon className={`w-8 h-8 text-${step.color}`} />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface border-2 border-surface flex items-center justify-center text-xs font-bold text-neutral-400">
                {index + 1}
              </div>
            </div>

            <h3 className="text-lg font-medium mb-3">{step.title}</h3>
            <p className="text-neutral-400 text-sm mb-4">{step.description}</p>
            <div className={`text-xs px-3 py-1 rounded-full bg-${step.color}/20 text-${step.color} inline-block`}>
              {step.duration}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-4">Ready to Get Started?</h3>
          <p className="text-neutral-400 mb-6 max-w-2xl mx-auto">
            The best projects start with great communication. I'm here to answer any questions and help you understand
            how we can work together to achieve your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <CheckCircle className="w-4 h-4 text-accent-blue" />
              Free initial consultation
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <CheckCircle className="w-4 h-4 text-accent-blue" />
              No obligation proposal
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300">
              <CheckCircle className="w-4 h-4 text-accent-blue" />
              Transparent pricing
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
