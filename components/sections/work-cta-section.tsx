import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WorkCTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center animate-on-scroll">
        <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-12 glass-morphism">
          <h2 className="text-3xl font-bricolage font-semibold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create a digital experience that delights your users and drives business results.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
          >
            Start a Project
            <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </section>
  )
}
