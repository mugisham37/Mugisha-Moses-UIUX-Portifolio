import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedWorkSection } from "@/components/sections/featured-work-section"
import { StatsSection } from "@/components/sections/stats-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProcessSection } from "@/components/sections/process-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { ContactSection } from "@/components/sections/contact-section"
import { CTASection } from "@/components/sections/cta-section"
import { Divider } from "@/components/ui/divider"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Divider />
      <FeaturedWorkSection />
      <Divider />
      <StatsSection />
      <Divider />
      <AboutSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <ProcessSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <ContactSection />
      <CTASection />
    </>
  )
}
