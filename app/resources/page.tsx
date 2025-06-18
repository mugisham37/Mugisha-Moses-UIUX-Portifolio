import { ResourcesHeroSection } from "@/components/sections/resources-hero-section"
import { ResourcesGridSection } from "@/components/sections/resources-grid-section"
import { ResourcesCategoriesSection } from "@/components/sections/resources-categories-section"
import { ResourcesCTASection } from "@/components/sections/resources-cta-section"
import { Divider } from "@/components/ui/divider"

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHeroSection />
      <Divider />
      <ResourcesCategoriesSection />
      <Divider />
      <ResourcesGridSection />
      <ResourcesCTASection />
    </>
  )
}
