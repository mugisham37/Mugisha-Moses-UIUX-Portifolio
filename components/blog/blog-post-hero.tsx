import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

interface BlogPostHeroProps {
  title: string
  subtitle: string
  category: string
  publishDate: string
  readTime: string
  author: string
  image: string
}

export function BlogPostHero({ title, subtitle, category, publishDate, readTime, author, image }: BlogPostHeroProps) {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition group mb-8"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
          Back to Blog
        </Link>

        <div className="max-w-3xl">
          <span className="text-accent-blue font-medium mb-4 block">{category}</span>
          <h1 className="text-5xl font-bricolage font-semibold tracking-tight mb-4 animate-on-scroll">{title}</h1>
          <p className="text-xl text-neutral-400 mb-8 animate-on-scroll">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 animate-on-scroll">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {publishDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {readTime}
            </div>
          </div>
        </div>
      </div>

      <div className="relative rounded-xl2 overflow-hidden aspect-video animate-on-scroll">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
    </section>
  )
}
