import { ProcessHeroSection } from "@/components/sections/process-hero-section"
import { ProcessTimelineSection } from "@/components/sections/process-timeline-section"
import { ProcessMethodologySection } from "@/components/sections/process-methodology-section"
import { ProcessToolsSection } from "@/components/sections/process-tools-section"
import { ProcessCollaborationSection } from "@/components/sections/process-collaboration-section"
import { ProcessCTASection } from "@/components/sections/process-cta-section"
import { Divider } from "@/components/ui/divider"

export default function ProcessPage() {
  return (
    <>
      <ProcessHeroSection />
      <Divider />
      <ProcessTimelineSection />
      <Divider />
      <ProcessMethodologySection />
      <Divider />
      <ProcessToolsSection />
      <Divider />
      <ProcessCollaborationSection />
      <ProcessCTASection />
    </>
  )
}
