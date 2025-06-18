import { Share2, Bookmark } from "lucide-react"

interface BlogPostContentProps {
  content: string
  tags: string[]
}

export function BlogPostContent({ content, tags }: BlogPostContentProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar */}
        <div className="lg:col-span-2">
          <div className="sticky top-8 space-y-6">
            <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-8">
          <div
            className="prose prose-invert prose-lg max-w-none animate-on-scroll"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-medium mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-foreground rounded-full text-sm text-neutral-300 hover:bg-accent-blue/20 hover:text-accent-blue transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="lg:col-span-2">
          <div className="sticky top-8">
            <h3 className="text-lg font-medium mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              <a href="#cognitive-load" className="block text-sm text-neutral-400 hover:text-white transition">
                Cognitive Load Theory
              </a>
              <a href="#color-psychology" className="block text-sm text-neutral-400 hover:text-white transition">
                Psychology of Color
              </a>
              <a href="#gestalt" className="block text-sm text-neutral-400 hover:text-white transition">
                Gestalt Principles
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
