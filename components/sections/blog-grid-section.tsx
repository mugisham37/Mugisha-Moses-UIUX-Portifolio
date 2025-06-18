import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogGridSection() {
  const articles = [
    {
      id: 1,
      title: "The Psychology Behind Effective UX Design",
      excerpt:
        "Understanding how users think and behave is crucial for creating interfaces that feel intuitive and natural.",
      category: "UX Design",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Design Systems",
      excerpt: "A comprehensive guide to creating design systems that grow with your product and team.",
      category: "Design Systems",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 3,
      title: "Micro-interactions That Delight Users",
      excerpt: "Small details that make a big difference in user experience and engagement.",
      category: "UI Design",
      readTime: "6 min read",
      publishDate: "Dec 5, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 4,
      title: "Case Study: Redesigning a Fintech App",
      excerpt: "How we increased user engagement by 43% through strategic UX improvements.",
      category: "Case Studies",
      readTime: "15 min read",
      publishDate: "Nov 28, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 5,
      title: "Essential Figma Plugins for 2024",
      excerpt: "Boost your design workflow with these must-have Figma plugins and tools.",
      category: "Tools & Tips",
      readTime: "5 min read",
      publishDate: "Nov 20, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
    {
      id: 6,
      title: "Accessibility in Modern Web Design",
      excerpt: "Creating inclusive digital experiences that work for everyone.",
      category: "UX Design",
      readTime: "10 min read",
      publishDate: "Nov 15, 2024",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
    },
  ]

  const featuredArticle = articles.find((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      {/* Featured Article */}
      {featuredArticle && (
        <div className="mb-16">
          <div className="bg-surface-foreground rounded-xl2 overflow-hidden border border-white/5 animate-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-accent-blue">{featuredArticle.category}</span>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Calendar className="w-4 h-4" />
                    {featuredArticle.publishDate}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-500">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bricolage font-semibold mb-4">{featuredArticle.title}</h2>
                <p className="text-neutral-400 mb-6">{featuredArticle.excerpt}</p>
                <Link
                  href={`/blog/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-blue/80 transition group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularArticles.map((article, index) => (
          <article
            key={article.id}
            className="bg-surface-foreground rounded-xl2 overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 animate-on-scroll group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-sm text-accent-blue">{article.category}</span>
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </div>
              </div>
              <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">
                <Link href={`/blog/${article.id}`}>{article.title}</Link>
              </h3>
              <p className="text-neutral-400 text-sm mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-neutral-500">
                  <Calendar className="w-4 h-4" />
                  {article.publishDate}
                </div>
                <Link href={`/blog/${article.id}`} className="text-accent-blue hover:text-accent-blue/80 transition">
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
