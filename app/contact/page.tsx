import { ContactHeroSection } from "@/components/sections/contact-hero-section"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { ContactInfoSection } from "@/components/sections/contact-info-section"
import { NextStepsSection } from "@/components/sections/next-steps-section"
import { FAQSection } from "@/components/sections/faq-section"
import { Divider } from "@/components/ui/divider"

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <Divider />
      <ContactFormSection />
      <Divider />
      <ContactInfoSection />
      <Divider />
      <NextStepsSection />
      <Divider />
      <FAQSection />
    </>
  )
}
