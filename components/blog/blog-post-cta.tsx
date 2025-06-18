import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogPostCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-12 glass-morphism animate-on-scroll">
        <div className="text-center">
          <h2 className="text-3xl font-bricolage font-semibold mb-4">Enjoyed This Article?</h2>
          <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
            If you found this helpful, you might be interested in working together on your next project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
            >
              Start a Project
              <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 text-white px-8 py-4 rounded-xl font-medium transition group magnetic-hover"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
