import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export function ServicesHeroSection() {
  const highlights = [
    "7+ years of experience",
    "50+ successful projects",
    "User-centered approach",
    "Data-driven decisions",
  ]

  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
            Design Services That <span className="text-accent-blue">Drive Results</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
            I offer comprehensive UX/UI design services that transform your digital products into user-friendly,
            conversion-focused experiences that your customers will love.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8 animate-on-scroll">
            {highlights.map((highlight, index) => (
              <div key={highlight} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-blue flex-shrink-0" />
                <span className="text-sm text-neutral-300">{highlight}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-on-scroll">
            <Link
              href="#packages"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue/90 transition font-medium group magnetic-hover"
            >
              View Packages
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:bg-surface-foreground transition font-medium magnetic-hover"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>

        <div className="animate-on-scroll">
          <div className="bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-8 glass-morphism">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
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
                    <path d="M9 12l2 2 4-4" />
                    <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1" />
                    <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1" />
                    <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1" />
                    <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">User Research</h3>
                  <p className="text-sm text-neutral-400">Deep user insights</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center">
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
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">UI Design</h3>
                  <p className="text-sm text-neutral-400">Beautiful interfaces</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-teal/20 flex items-center justify-center">
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
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Prototyping</h3>
                  <p className="text-sm text-neutral-400">Interactive experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
