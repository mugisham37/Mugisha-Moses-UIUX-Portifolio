import { ServicesHeroSection } from "@/components/sections/services-hero-section"
import { ServicePackagesSection } from "@/components/sections/service-packages-section"
import { ServiceProcessSection } from "@/components/sections/service-process-section"
import { ServiceFAQSection } from "@/components/sections/service-faq-section"
import { ServiceTestimonialsSection } from "@/components/sections/service-testimonials-section"
import { ServiceCTASection } from "@/components/sections/service-cta-section"
import { Divider } from "@/components/ui/divider"

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <Divider />
      <ServicePackagesSection />
      <Divider />
      <ServiceProcessSection />
      <Divider />
      <ServiceFAQSection />
      <Divider />
      <ServiceTestimonialsSection />
      <ServiceCTASection />
    </>
  )
}
