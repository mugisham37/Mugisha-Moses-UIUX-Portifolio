import { Suspense } from "react"
import { WorkHeroSection } from "@/components/sections/work-hero-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { WorkProcessSection } from "@/components/sections/work-process-section"
import { WorkCTASection } from "@/components/sections/work-cta-section"
import { WorkProjectsGrid } from "@/components/work/work-projects-grid"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

// Server Component for better performance
export default function WorkPage() {
  return (
    <main>
      <WorkHeroSection />

      <section className="py-20 bg-[#111112]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex justify-center py-20">
              <LoadingSpinner size="lg" />
            </div>
          }>
            <WorkProjectsGrid />
          </Suspense>
        </div>
      </section>

      <ClientsSection />
      <WorkProcessSection />
      <WorkCTASection />
    </main>
  )
}
