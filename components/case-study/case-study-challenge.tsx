interface CaseStudyChallengeProps {
  challenge: string
  solution: string
}

export function CaseStudyChallenge({ challenge, solution }: CaseStudyChallengeProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">The Challenge</h2>
          <p className="text-lg text-neutral-400">{challenge}</p>
        </div>

        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">The Solution</h2>
          <p className="text-lg text-neutral-400">{solution}</p>
        </div>
      </div>
    </section>
  )
}
