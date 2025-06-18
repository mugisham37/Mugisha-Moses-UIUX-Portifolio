import { Star } from "lucide-react"

export function TestimonialsHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
          Client <span className="text-accent-blue">Testimonials</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
          Don't just take my word for it. Here's what clients have to say about working with me and the results we've
          achieved together.
        </p>

        <div className="flex items-center justify-center gap-1 mb-8 animate-on-scroll">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          <div className="bg-surface-foreground rounded-lg p-4 border border-white/5">
            <div className="text-2xl font-bold text-accent-blue">30+</div>
            <div className="text-sm text-neutral-400">Happy Clients</div>
          </div>
          <div className="bg-surface-foreground rounded-lg p-4 border border-white/5">
            <div className="text-2xl font-bold text-accent-purple">50+</div>
            <div className="text-sm text-neutral-400">Completed Projects</div>
          </div>
          <div className="bg-surface-foreground rounded-lg p-4 border border-white/5">
            <div className="text-2xl font-bold text-accent-teal">95%</div>
            <div className="text-sm text-neutral-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
