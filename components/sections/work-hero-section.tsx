export function WorkHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
          Selected <span className="text-accent-blue">Work</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
          A curated collection of projects that showcase my approach to solving complex design challenges and creating
          impactful digital experiences.
        </p>

        <div className="flex flex-wrap gap-3 justify-center animate-on-scroll">
          <span className="text-sm px-4 py-2 rounded-full bg-accent-blue/20 text-accent-blue">UX Design</span>
          <span className="text-sm px-4 py-2 rounded-full bg-accent-purple/20 text-accent-purple">UI Design</span>
          <span className="text-sm px-4 py-2 rounded-full bg-accent-teal/20 text-accent-teal">Product Design</span>
          <span className="text-sm px-4 py-2 rounded-full bg-orange-400/20 text-orange-400">Design Systems</span>
        </div>
      </div>
    </section>
  )
}
