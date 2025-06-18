interface CaseStudyChallengeProps {
  challenge?: string
  solution?: string
  challenges?: string[]
  goals?: string[]
}

export function CaseStudyChallenge({ challenge, solution, challenges, goals }: CaseStudyChallengeProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">The Challenge</h2>
          {challenge ? (
            <p className="text-lg text-neutral-400">{challenge}</p>
          ) : challenges ? (
            <ul className="space-y-3">
              {challenges.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent-blue"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">{goals ? 'Goals' : 'The Solution'}</h2>
          {solution ? (
            <p className="text-lg text-neutral-400">{solution}</p>
          ) : goals ? (
            <ul className="space-y-3">
              {goals.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-accent-blue"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  )
}
