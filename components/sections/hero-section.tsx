import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl parallax-element"
          data-speed="0.3"
        ></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl parallax-element"
          data-speed="0.5"
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-accent-teal/10 rounded-full blur-3xl parallax-element"
          data-speed="0.4"
        ></div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 relative z-10">
        {/* Left headline */}
        <h1
          className="lg:max-w-lg sm:text-6xl leading-tight animate-on-scroll text-5xl font-semibold tracking-tight"
          style={{ animationDelay: "0.2s" }}
        >
          I Design Digital
          <br className="hidden lg:block" />
          Experiences That
          <br className="hidden lg:block" />
          <span className="gradient-text">Convert</span>
        </h1>

        {/* Copy */}
        <div className="lg:max-w-md animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-neutral-400 mb-6">
            UI/UX designer specializing in creating intuitive, engaging, and conversion-focused digital experiences that
            solve real user problems and drive business growth.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
              <span className="text-sm text-neutral-300">User Research</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
              <span className="text-sm text-neutral-300">UI Design</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent-teal"></div>
              <span className="text-sm text-neutral-300">Prototyping</span>
            </div>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-medium text-accent-blue hover:text-accent-blue/80 transition group magnetic-hover"
          >
            View My Work
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>

      {/* Social proof */}
      <div className="mt-16 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
        <p className="text-sm text-neutral-500 mb-4">Trusted by innovative companies</p>
        <div className="flex flex-wrap items-center gap-8">
          <div className="h-8 px-4 glass-morphism rounded flex items-center text-neutral-400 text-sm font-medium">
            TECHCORP
          </div>
          <div className="h-8 px-4 glass-morphism rounded flex items-center text-neutral-400 text-sm font-medium">
            INNOVATE
          </div>
          <div className="h-8 px-4 glass-morphism rounded flex items-center text-neutral-400 text-sm font-medium">
            STARTUP
          </div>
          <div className="h-8 px-4 glass-morphism rounded flex items-center text-neutral-400 text-sm font-medium">
            AGENCY
          </div>
        </div>
      </div>
    </section>
  )
}
