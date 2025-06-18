import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function BlogPostNavigation() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          href="/blog/2"
          className="group bg-surface-foreground rounded-xl2 p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <ArrowLeft className="w-4 h-4 text-accent-blue group-hover:-translate-x-1 transition" />
            <span className="text-sm text-neutral-500">Previous Article</span>
          </div>
          <h3 className="font-medium group-hover:text-white transition-colors">Building Scalable Design Systems</h3>
        </Link>

        <Link
          href="/blog/3"
          className="group bg-surface-foreground rounded-xl2 p-6 border border-white/5 hover:border-white/10 transition-all duration-300 text-right"
        >
          <div className="flex items-center justify-end gap-3 mb-3">
            <span className="text-sm text-neutral-500">Next Article</span>
            <ArrowRight className="w-4 h-4 text-accent-blue group-hover:translate-x-1 transition" />
          </div>
          <h3 className="font-medium group-hover:text-white transition-colors">
            Micro-interactions That Delight Users
          </h3>
        </Link>
      </div>
    </section>
  )
}
