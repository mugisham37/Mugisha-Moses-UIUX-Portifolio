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
          {/* Google */}
          <div className="h-10 px-4 glass-morphism rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-neutral-300">
              <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
          </div>
          {/* Adobe */}
          <div className="h-10 px-4 glass-morphism rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-neutral-300">
              <path fill="currentColor" d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"/>
            </svg>
          </div>
          {/* Spotify */}
          <div className="h-10 px-4 glass-morphism rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-neutral-300">
              <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          {/* Airbnb */}
          <div className="h-10 px-4 glass-morphism rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-neutral-300">
              <path fill="currentColor" d="M12 6.864a2.28 2.28 0 1 0 0 4.56 2.28 2.28 0 0 0 0-4.56zm-6.12 8.34c.082-.42.15-.864.27-1.26.336-1.14 1.054-2.25 1.95-3.36l.03-.03c1.488-1.8 3.132-3.63 4.83-5.34l.06-.06c.21-.21.433-.39.69-.54.6-.39 1.38-.39 1.98 0 .257.15.48.33.69.54l.06.06c1.698 1.71 3.342 3.54 4.83 5.34l.03.03c.896 1.11 1.614 2.25 1.95 3.36.12.396.188.84.27 1.26.21 1.17-.15 2.28-.96 3.15-.81.9-1.95 1.41-3.3 1.41-.75 0-1.44-.15-2.1-.45-.615-.27-1.2-.66-1.74-1.11-.54.45-1.125.84-1.74 1.11-.66.3-1.35.45-2.1.45-1.35 0-2.49-.51-3.3-1.41-.81-.87-1.17-1.98-.96-3.15zm15.57-.03c-.12-.39-.18-.78-.3-1.14-.36-1.17-1.17-2.4-2.13-3.57l-.03-.03c-1.5-1.8-3.06-3.57-4.74-5.16l-.06-.06c-.36-.33-.75-.63-1.2-.81-1.08-.57-2.46-.57-3.54 0-.45.18-.84.48-1.2.81l-.06.06c-1.68 1.59-3.24 3.36-4.74 5.16l-.03.03c-.96 1.17-1.77 2.4-2.13 3.57-.12.36-.21.75-.3 1.14-.33 1.59.15 3.09 1.29 4.2 1.08 1.08 2.7 1.74 4.47 1.74.9 0 1.83-.21 2.7-.57.75-.36 1.47-.84 2.13-1.38.66.54 1.38 1.02 2.13 1.38.87.36 1.8.57 2.7.57 1.77 0 3.39-.66 4.47-1.74 1.14-1.11 1.62-2.61 1.29-4.2zm-1.59-9.03c0 1.89-1.53 3.42-3.42 3.42s-3.42-1.53-3.42-3.42 1.53-3.42 3.42-3.42 3.42 1.53 3.42 3.42zm-4.56 0c0-.63.51-1.14 1.14-1.14.63 0 1.14.51 1.14 1.14 0 .63-.51 1.14-1.14 1.14-.63 0-1.14-.51-1.14-1.14z"/>
            </svg>
          </div>
          {/* Slack */}
          <div className="h-10 px-4 glass-morphism rounded flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-neutral-300">
              <path fill="currentColor" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
