import { CheckCircle } from "lucide-react"

interface CaseStudyResultsProps {
  results: string[]
}

export function CaseStudyResults({ results }: CaseStudyResultsProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Results & Impact</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          The redesign delivered significant improvements across key metrics and user satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-surface-foreground rounded-lg p-6 border border-white/5 flex items-center gap-4 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-accent-blue" />
            </div>
            <p className="text-lg">{result}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
