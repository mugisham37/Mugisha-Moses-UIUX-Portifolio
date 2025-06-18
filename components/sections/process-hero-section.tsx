export function ProcessHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
          My Design <span className="text-accent-blue">Process</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
          A proven methodology that combines strategic thinking, user research, and iterative design to create
          exceptional digital experiences that drive measurable business results and delight users at every touchpoint.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-blue"
              >
                <path d="M9 11H1v3h8v3l3-4-3-4v2z" />
                <path d="M22 12h-7" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">User-Centered</h3>
            <p className="text-sm text-neutral-400">Every design decision is based on real user needs, behaviors, and pain points identified through thorough research</p>
          </div>

          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-purple"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Data-Driven</h3>
            <p className="text-sm text-neutral-400">Design decisions backed by qualitative research, quantitative analytics, and rigorous A/B testing</p>
          </div>

          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-teal/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-teal"
              >
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Iterative</h3>
            <p className="text-sm text-neutral-400">Continuous refinement through user feedback, usability testing, and performance metrics to achieve optimal results</p>
          </div>
        </div>
      </div>
    </section>
  )
}
