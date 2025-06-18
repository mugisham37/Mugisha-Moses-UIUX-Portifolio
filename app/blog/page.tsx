import { BlogHeroSection } from "@/components/sections/blog-hero-section"
import { BlogGridSection } from "@/components/sections/blog-grid-section"
import { BlogCategoriesSection } from "@/components/sections/blog-categories-section"
import { BlogNewsletterSection } from "@/components/sections/blog-newsletter-section"
import { Divider } from "@/components/ui/divider"

export default function BlogPage() {
  return (
    <>
      <BlogHeroSection />
      <Divider />
      <BlogCategoriesSection />
      <Divider />
      <BlogGridSection />
      <Divider />
      <BlogNewsletterSection />
    </>
  )
}
