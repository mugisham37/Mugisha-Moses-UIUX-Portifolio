import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function AboutHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        {/* Profile Image */}
        <div className="lg:w-1/3 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="w-full aspect-square rounded-xl2 overflow-hidden bg-surface-foreground shadow-card">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Mugisha Moses"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl2 bg-accent-blue flex items-center justify-center text-white floating-animation">
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
                className="w-10 h-10"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* About Intro */}
        <div className="lg:w-2/3 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-5xl font-semibold tracking-tight mb-6">
            UI/UX Designer with a passion for <span className="text-accent-blue">human-centered design</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            I'm Mugisha Moses, a UI/UX designer with 7+ years of experience creating intuitive digital experiences that
            solve real user problems and drive business growth. My approach combines strategic thinking, empathy, and a
            keen eye for detail.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent-blue hover:bg-accent-blue/90 transition font-medium group magnetic-hover"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 hover:bg-surface-foreground transition font-medium magnetic-hover"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
