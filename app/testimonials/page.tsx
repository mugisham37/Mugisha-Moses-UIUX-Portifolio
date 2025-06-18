import { TestimonialsHeroSection } from "@/components/sections/testimonials-hero-section"
import { TestimonialsGridSection } from "@/components/sections/testimonials-grid-section"
import { TestimonialsStatsSection } from "@/components/sections/testimonials-stats-section"
import { TestimonialsCTASection } from "@/components/sections/testimonials-cta-section"
import { Divider } from "@/components/ui/divider"

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHeroSection />
      <Divider />
      <TestimonialsGridSection />
      <Divider />
      <TestimonialsStatsSection />
      <TestimonialsCTASection />
    </>
  )
}
