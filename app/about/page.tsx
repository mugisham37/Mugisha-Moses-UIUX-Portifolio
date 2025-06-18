import { AboutHeroSection } from "@/components/sections/about-hero-section"
import { JourneySection } from "@/components/sections/journey-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { ToolsSection } from "@/components/sections/tools-section"
import { BeyondDesignSection } from "@/components/sections/beyond-design-section"
import { AboutCTASection } from "@/components/sections/about-cta-section"
import { Divider } from "@/components/ui/divider"

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <Divider />
      <JourneySection />
      <Divider />
      <SkillsSection />
      <Divider />
      <PhilosophySection />
      <Divider />
      <ToolsSection />
      <Divider />
      <BeyondDesignSection />
      <AboutCTASection />
    </>
  )
}
