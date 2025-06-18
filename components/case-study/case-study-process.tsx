interface ProcessStep {
  title: string
  description: string
  image?: string
}

interface CaseStudyProcessProps {
  process: ProcessStep[]
}

export function CaseStudyProcess({ process }: CaseStudyProcessProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-12 animate-on-scroll">Design Process</h2>

      <div className="space-y-12">
        {process.map((step, index) => (
          <div key={step.title} className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-on-scroll">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center text-accent-blue font-medium">
                  {index + 1}
                </div>
                <h3 className="text-xl font-medium">{step.title}</h3>
              </div>
              {step.image && (
                <div className="mt-4 rounded-lg overflow-hidden">
                  <img src={step.image} alt={step.title} className="w-full h-auto" />
                </div>
              )}
            </div>
            <div className="lg:col-span-8">
              <p className="text-neutral-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
