import { Search } from "lucide-react"

export function BlogHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
          Design <span className="text-accent-blue">Insights</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
          Thoughts on design, user experience, and the future of digital products. Learn from real projects and industry
          insights.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto animate-on-scroll">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
          />
        </div>
      </div>
    </section>
  )
}
