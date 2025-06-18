"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Star, Twitter, Linkedin, Quote } from "lucide-react"

interface SocialPost {
  id: string
  platform: "twitter" | "linkedin"
  author: {
    name: string
    handle: string
    avatar: string
  }
  content: string
  date: string
  likes: number
  comments?: number
  shares?: number
}

interface SocialProofProps {
  title?: string
  subtitle?: string
  maxPosts?: number
}

export function SocialProof({ title = "What People Are Saying", subtitle, maxPosts = 6 }: SocialProofProps) {
  const [posts, setPosts] = useState<SocialPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo purposes, we'll use mock data
    const mockPosts: SocialPost[] = [
      {
        id: "1",
        platform: "twitter",
        author: {
          name: "Sarah Johnson",
          handle: "@sarahjdesign",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "Just finished working with @alexmorgan on our website redesign and I'm blown away by the results! The attention to detail and user-focused approach made all the difference. Highly recommend!",
        date: "2025-06-15",
        likes: 42,
        comments: 5,
        shares: 12,
      },
      {
        id: "2",
        platform: "linkedin",
        author: {
          name: "Michael Chen",
          handle: "Head of Product at TechCorp",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "I had the pleasure of collaborating with Alex Morgan on our product redesign. His strategic approach to UX and ability to translate complex requirements into intuitive interfaces is remarkable. Our user engagement metrics have improved by 35% since launch.",
        date: "2025-06-10",
        likes: 87,
        comments: 14,
      },
      {
        id: "3",
        platform: "twitter",
        author: {
          name: "Emily Rodriguez",
          handle: "@emilyuxwriter",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "If you're looking for a designer who truly understands both aesthetics AND functionality, @alexmorgan is your person. Just explored the new app he designed for us and it's getting rave reviews from users already!",
        date: "2025-06-08",
        likes: 31,
        comments: 3,
        shares: 7,
      },
      {
        id: "4",
        platform: "linkedin",
        author: {
          name: "David Park",
          handle: "CEO at StartupVision",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "Working with Alex was a game-changer for our startup. He didn't just deliver beautiful designs - he helped us clarify our product vision and create an experience that resonates with our target audience. The investment in quality design has paid off tremendously in user acquisition and retention.",
        date: "2025-06-05",
        likes: 124,
        comments: 21,
      },
      {
        id: "5",
        platform: "twitter",
        author: {
          name: "Jessica Lee",
          handle: "@jessicaproduct",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "Our team has worked with many designers over the years, but @alexmorgan stands out for his collaborative approach and strategic thinking. He's not just executing tasks - he's solving real business problems through design.",
        date: "2025-06-01",
        likes: 56,
        comments: 8,
        shares: 15,
      },
      {
        id: "6",
        platform: "linkedin",
        author: {
          name: "Robert Williams",
          handle: "Marketing Director at GlobalBrand",
          avatar: "/placeholder.svg?height=100&width=100",
        },
        content:
          "Alex's redesign of our customer portal has transformed how our clients interact with our services. The intuitive navigation and streamlined workflows have reduced support tickets by 40% and increased self-service usage. A true professional who delivers measurable results.",
        date: "2025-05-28",
        likes: 93,
        comments: 11,
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

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-2 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedElement key={post.id} variant="fadeInUp" delay={index * 0.1}>
              <div className="bg-[#1a1a1d] border border-white/10 rounded-xl p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">{post.author.name}</p>
                      <p className="text-xs text-neutral-500">{post.author.handle}</p>
                    </div>
                  </div>
                  {post.platform === "twitter" ? (
                    <Twitter className="w-5 h-5 text-[#1DA1F2]" />
                  ) : (
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="relative mb-4">
                    <Quote className="w-8 h-8 text-accent-blue/20 absolute -top-2 -left-2 -z-10" />
                    <p className="text-neutral-300 text-sm leading-relaxed">{post.content}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-500 mt-4 pt-4 border-t border-white/10">
                  <span>{formatDate(post.date)}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
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
                    {post.shares !== undefined && (
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
                          <circle cx="18" cy="5" r="3"></circle>
                          <circle cx="6" cy="12" r="3"></circle>
                          <circle cx="18" cy="19" r="3"></circle>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        <span>{post.shares}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      )}
    </div>
  )
}
