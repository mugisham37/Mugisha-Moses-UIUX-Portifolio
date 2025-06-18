export function TestimonialsStatsSection() {
  const stats = [
    {
      metric: "40%",
      description: "Average increase in conversion rates",
      color: "accent-blue",
    },
    {
      metric: "35%",
      description: "Average increase in user engagement",
      color: "accent-purple",
    },
    {
      metric: "90%",
      description: "Client satisfaction rate",
      color: "accent-teal",
    },
    {
      metric: "85%",
      description: "Projects resulting in measurable business impact",
      color: "orange-400",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Results That Speak</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          My design work consistently delivers measurable business impact and improved user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-surface-foreground rounded-xl2 p-8 border border-white/5 text-center animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`text-4xl font-bold mb-2 text-${stat.color}`}>{stat.metric}</div>
            <p className="text-neutral-400">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll">
        <div className="text-center">
          <h3 className="text-xl font-medium mb-6">Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-blue mb-2">43%</div>
              <p className="text-sm text-neutral-400">
                Increase in conversion rate for FinanceFlow's banking app redesign
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-purple mb-2">65%</div>
              <p className="text-sm text-neutral-400">
                Reduction in support tickets after healthcare dashboard redesign
              </p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-accent-teal mb-2">70%</div>
              <p className="text-sm text-neutral-400">Faster development cycles with enterprise design system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
