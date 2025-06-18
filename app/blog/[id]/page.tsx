import { BlogPostHero } from "@/components/blog/blog-post-hero"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostNavigation } from "@/components/blog/blog-post-navigation"
import { BlogPostCTA } from "@/components/blog/blog-post-cta"
import { Divider } from "@/components/ui/divider"

// This would typically come from a CMS or API
const getBlogPost = (id: string) => {
  const posts = [
    {
      id: "1",
      title: "The Psychology Behind Effective UX Design",
      subtitle: "Understanding how users think and behave",
      category: "UX Design",
      publishDate: "December 15, 2024",
      readTime: "8 min read",
      author: "Alex Morgan",
      image: "/placeholder.svg?height=400&width=800",
      content: `
        <p>Understanding how users think and behave is crucial for creating interfaces that feel intuitive and natural. In this article, we'll explore the psychological principles that drive effective UX design.</p>
        
        <h2>Cognitive Load Theory</h2>
        <p>Cognitive load theory suggests that our working memory has limited capacity. When designing interfaces, we must be mindful of how much mental effort we're asking users to expend.</p>
        
        <h2>The Psychology of Color</h2>
        <p>Colors evoke emotional responses and can significantly impact user behavior. Understanding color psychology helps designers create more effective interfaces.</p>
        
        <h2>Gestalt Principles</h2>
        <p>These principles explain how users perceive and organize visual information. They're fundamental to creating clear, organized designs.</p>
      `,
      tags: ["UX Design", "Psychology", "User Behavior"],
    },
  ]

  return posts.find((post) => post.id === id) || posts[0]
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return (
    <>
      <BlogPostHero
        title={post.title}
        subtitle={post.subtitle}
        category={post.category}
        publishDate={post.publishDate}
        readTime={post.readTime}
        author={post.author}
        image={post.image}
      />
      <Divider />
      <BlogPostContent content={post.content} tags={post.tags} />
      <Divider />
      <BlogPostNavigation />
      <BlogPostCTA />
    </>
  )
}
