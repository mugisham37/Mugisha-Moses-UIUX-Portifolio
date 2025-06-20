import { Search, Layout, PenTool, CheckCircle, ArrowRight } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Research",
      description:
        "Understanding users, business goals, and market landscape through comprehensive research, data analysis, and stakeholder interviews to build a solid foundation for design decisions.",
      color: "accent-blue",
      details: ["In-depth User Interviews", "Competitive Analysis", "Market & Trend Research", "Collaborative Stakeholder Workshops"],
    },
    {
      icon: Layout,
      title: "Define",
      description: "Creating detailed user personas, comprehensive journey maps, and clearly defining the core problems we're solving to establish measurable success criteria.",
      color: "accent-purple",
      details: ["Detailed User Personas", "Comprehensive Journey Mapping", "Clear Problem Definition", "Measurable Success Metrics"],
    },
    {
      icon: PenTool,
      title: "Design",
      description: "Wireframing, interactive prototyping, and creating high-fidelity designs that solve user problems elegantly while maintaining brand consistency and accessibility standards.",
      color: "accent-teal",
      details: ["Low to High-fidelity Wireframing", "Brand-aligned Visual Design", "Interactive Prototyping", "Scalable Design Systems"],
    },
    {
      icon: CheckCircle,
      title: "Validate",
      description: "Testing with real users, gathering quantitative and qualitative feedback, and iterating designs to perfection before launch, ensuring optimal user experience and business impact.",
      color: "orange-400",
      details: ["Moderated Usability Testing", "Data-driven A/B Testing", "Comprehensive Feedback Analysis", "Rapid Design Iteration"],
    },
  ]

  return (
    <section id="process" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">My Design Process</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          A proven methodology refined over years of experience that ensures every project delivers exceptional results through 
          strategic thinking, user-centered design principles, and data-driven decision making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="text-center animate-on-scroll group"
            style={{ animationDelay: `${3.8 + index * 0.1}s` }}
          >
            <div className="relative mb-6">
              <div
                className={`w-16 h-16 rounded-xl ${
                  step.color === "accent-blue"
                    ? "bg-accent-blue/20 group-hover:bg-accent-blue/30"
                    : step.color === "accent-purple"
                      ? "bg-accent-purple/20 group-hover:bg-accent-purple/30"
                      : step.color === "accent-teal"
                        ? "bg-accent-teal/20 group-hover:bg-accent-teal/30"
                        : "bg-orange-400/20 group-hover:bg-orange-400/30"
                } flex items-center justify-center mx-auto transition floating-animation`}
              >
                <step.icon
                  className={`w-8 h-8 ${
                    step.color === "accent-blue"
                      ? "text-accent-blue"
                      : step.color === "accent-purple"
                        ? "text-accent-purple"
                        : step.color === "accent-teal"
                          ? "text-accent-teal"
                          : "text-orange-400"
                  }`}
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-surface-foreground border-2 border-surface flex items-center justify-center text-xs font-bold text-neutral-400">
                {index + 1}
              </div>
            </div>

            <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{step.title}</h3>
            <p className="text-neutral-400 text-sm mb-4">{step.description}</p>

            <ul className="text-xs text-neutral-500 space-y-1">
              {step.details.map((detail) => (
                <li key={detail} className="flex items-center justify-center gap-1">
                  <div
                    className={`w-1 h-1 rounded-full ${
                      step.color === "accent-blue"
                        ? "bg-accent-blue"
                        : step.color === "accent-purple"
                          ? "bg-accent-purple"
                          : step.color === "accent-teal"
                            ? "bg-accent-teal"
                            : "bg-orange-400"
                    }`}
                  ></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Process Flow Visualization */}
      <div className="relative">
        <div className="hidden lg:block absolute top-8 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-accent-blue via-accent-purple via-accent-teal to-orange-400"></div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 bg-surface-foreground px-4 py-2 rounded-full text-sm text-neutral-400">
            <ArrowRight className="w-4 h-4" />
            Iterative & Collaborative Process
          </div>
        </div>
      </div>
    </section>
  )
}
