import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

export function ResourcesCTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-12 glass-morphism animate-on-scroll">
        <div className="text-center">
          <Mail className="w-12 h-12 text-accent-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bricolage font-semibold mb-4">Want More Resources?</h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get notified when I release new templates, guides, and design resources.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
            >
              Request Custom Resource
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
