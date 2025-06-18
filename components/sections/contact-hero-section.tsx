import Link from "next/link"
import { ArrowDown } from "lucide-react"

export function ContactHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="flex flex-col items-center text-center">
        <h1
          className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll max-w-3xl"
          style={{ animationDelay: "0.2s" }}
        >
          Let's Create Something <span className="text-accent-blue">Amazing Together</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll max-w-2xl" style={{ animationDelay: "0.4s" }}>
          I'm currently accepting new projects for Q3 2025. Whether you have a specific project in mind or just want to
          explore possibilities, I'd love to hear from you.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue/90 transition font-medium magnetic-hover"
          >
            Get in Touch
            <ArrowDown className="w-4 h-4" />
          </a>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 hover:bg-surface-foreground transition font-medium magnetic-hover"
          >
            View My Process
          </Link>
        </div>
      </div>
    </section>
  )
}
