"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Instagram, Twitter, Linkedin, ExternalLink } from "lucide-react"

interface SocialMediaPost {
  id: string
  platform: "instagram" | "twitter" | "linkedin"
  content: string
  image?: string
  link: string
  date: string
  likes: number
  comments?: number
  shares?: number
}

interface SocialMediaFeedProps {
  title?: string
  subtitle?: string
  maxPosts?: number
}

export function SocialMediaFeed({ title = "Latest Updates", subtitle, maxPosts = 6 }: SocialMediaFeedProps) {
  const [posts, setPosts] = useState<SocialMediaPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activePlatform, setActivePlatform] = useState<"all" | "instagram" | "twitter" | "linkedin">("all")

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we'll use mock data
    const mockPosts: SocialMediaPost[] = [
      {
        id: "1",
        platform: "instagram",
        content: "Just finished this UI design for a fintech app. What do you think?",
        image: "/placeholder.svg?height=400&width=400",
        link: "https://instagram.com/post/1",
        date: "2025-06-15",
        likes: 245,
        comments: 18,
      },
      {
        id: "2",
        platform: "twitter",
        content:
          "Excited to share my latest case study on redesigning the user onboarding experience for @techcorp! Check it out on my portfolio.",
        link: "https://twitter.com/post/2",
        date: "2025-06-12",
        likes: 42,
        comments: 5,
        shares: 12,
      },
      {
        id: "3",
        platform: "linkedin",
        content:
          "I'm thrilled to announce that I'll be speaking at the UX Design Conference next month about creating accessible digital experiences. Looking forward to sharing insights and connecting with fellow designers!",
        link: "https://linkedin.com/post/3",
        date: "2025-06-10",
        likes: 87,
        comments: 14,
      },
      {
        id: "4",
        platform: "instagram",
        content: "Behind the scenes of my design process. Sketching ideas for a new project.",
        image: "/placeholder.svg?height=400&width=400",
        link: "https://instagram.com/post/4",
        date: "2025-06-08",
        likes: 189,
        comments: 12,
      },
      {
        id: "5",
        platform: "twitter",
        content:
          "Just published a new article on my blog about the importance of user research in the design process. Link in bio!",
        link: "https://twitter.com/post/5",
        date: "2025-06-05",
        likes: 31,
        comments: 3,
        shares: 7,
      },
      {
        id: "6",
        platform: "linkedin",
        content:
          "I'm excited to share that my recent project for HealthTech Inc. has been featured in the Design Awards 2025! It was a challenging but rewarding experience to redesign their patient portal with a focus on accessibility and ease of use.",
        link: "https://linkedin.com/post/6",
        date: "2025-06-01",
        likes: 124,
        comments: 21,
      },
    ]

    // Simulate API fetch delay
    setTimeout(() => {
      setPosts(mockPosts.slice(0, maxPosts))
      setLoading(false)
    }, 1000)
  }, [maxPosts])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const filteredPosts = activePlatform === "all" ? posts : posts.filter((post) => post.platform === activePlatform)

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram className="w-5 h-5 text-[#E1306C]" />
      case "twitter":
        return <Twitter className="w-5 h-5 text-[#1DA1F2]" />
      case "linkedin":
        return <Linkedin className="w-5 h-5 text-[#0A66C2]" />
      default:
        return null
    }
  }

  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
          </AnimatedElement>
        </div>
      )}

      {/* Platform filter */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#1a1a1d] rounded-lg p-1">
          <button
            onClick={() => setActivePlatform("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activePlatform === "all" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActivePlatform("instagram")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activePlatform === "instagram" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            Instagram
          </button>
          <button
            onClick={() => setActivePlatform("twitter")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activePlatform === "twitter" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            Twitter
          </button>
          <button
            onClick={() => setActivePlatform("linkedin")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activePlatform === "linkedin" ? "bg-white/10 text-white" : "text-neutral-400 hover:text-white"
            }`}
          >
            LinkedIn
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-2 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <AnimatedElement key={post.id} variant="fadeInUp" delay={index * 0.1}>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#1a1a1d] border border-white/10 rounded-xl overflow-hidden hover:border-accent-blue/50 transition-all duration-300 h-full"
                >
                  {post.image && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {getPlatformIcon(post.platform)}
                        <span className="text-sm font-medium capitalize">{post.platform}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-neutral-500" />
                    </div>
                    <p className="text-neutral-300 mb-4">{post.content}</p>
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span>{formatDate(post.date)}</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                          <span>{post.likes}</span>
                        </div>
                        {post.comments !== undefined && (
                          <div className="flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>{post.comments}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedElement>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
              <p className="text-neutral-400">No posts found for this platform.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
