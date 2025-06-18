import type { Metadata } from "next"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CaseStudyOverview } from "@/components/case-study/case-study-overview"
import { CaseStudyChallenge } from "@/components/case-study/case-study-challenge"
import { CaseStudyProcess } from "@/components/case-study/case-study-process"
import { CaseStudyGallery } from "@/components/case-study/case-study-gallery"
import { CaseStudyResults } from "@/components/case-study/case-study-results"
import { CaseStudyTestimonial } from "@/components/case-study/case-study-testimonial"
import { CaseStudyNextProject } from "@/components/case-study/case-study-next-project"
import { ImageComparison } from "@/components/ui/image-comparison"
import { ThreeDCard } from "@/components/ui/3d-card"
import { TextReveal } from "@/components/ui/text-reveal"
import { AnimatedElement } from "@/components/ui/animated-element"
import { ParallaxElement } from "@/components/ui/parallax-element"
import Image from "next/image"

export const metadata: Metadata = {
  title: "FinanceFlow App Redesign | Mugisha Moses Portfolio",
  description: "Case study of the FinanceFlow banking app redesign that increased user engagement by 43%",
}

export default function EnhancedCaseStudyPage() {
  return (
    <>
      <CaseStudyHero
        title="FinanceFlow Banking App Redesign"
        subtitle="Transforming the digital banking experience"
        category="UX/UI Design"
        year="2024"
        client="FinanceFlow Inc."
        image="/placeholder.svg?height=600&width=1200"
      />

      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <AnimatedElement variant="fadeInUp" className="mb-16">
          <TextReveal
            text="The Challenge: Redesigning a complex banking app to improve user engagement and satisfaction while maintaining robust security and compliance requirements."
            className="text-3xl md:text-4xl font-bricolage font-medium max-w-4xl"
          />
        </AnimatedElement>

        <CaseStudyOverview
          overview="FinanceFlow approached me to redesign their banking application which was suffering from poor user engagement and high drop-off rates. The existing app was functional but difficult to navigate, visually outdated, and lacke personalization features that modern users expect."
          duration="12 weeks"
          team="Lead Designer, 2 UI Designers, 1 UX Researcher, 3 Developers"
          role="Lead UX/UI Designer"
          deliverables="UX Research, User Flows, Wireframes, UI Design, Interactive Prototype, Design System"
        />

        <div className="mt-20">
          <AnimatedElement variant="fadeIn">
            <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-8">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ImageComparison
                beforeImage="/placeholder.svg?height=600&width=800"
                afterImage="/placeholder.svg?height=600&width=800"
                beforeLabel="Before"
                afterLabel="After"
                height={400}
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-medium mb-4">Key Improvements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-blue"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Simplified navigation reducing steps by 40%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-blue"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Personalized dashboard with customizable widgets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-blue"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Biometric authentication for faster secure access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center mt-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-blue"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </div>
                    <span>Visual spending insights with interactive charts</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <CaseStudyChallenge
          challenges={[
            "Complex financial data visualization that needed to be both accurate and understandable",
            "Strict security and compliance requirements that limited certain UX patterns",
            "Wide user demographic with varying levels of technical proficiency",
            "Legacy systems integration requiring backward compatibility",
          ]}
          goals={[
            "Increase user engagement by 30%",
            "Reduce customer support calls related to app usage by 25%",
            "Improve app store ratings from 3.2 to 4.5+",
            "Increase feature discovery and usage across all user segments",
          ]}
        />

        <div className="mt-20">
          <AnimatedElement variant="fadeIn">
            <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-8">Interactive Prototype</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ThreeDCard className="p-6 bg-[#1a1a1d]">
                <div className="aspect-[9/16] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=800&width=450"
                    alt="Dashboard screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Personalized Dashboard</h3>
                <p className="text-sm text-neutral-400">
                  Customizable widgets and smart insights based on spending patterns
                </p>
              </ThreeDCard>
              <ThreeDCard className="p-6 bg-[#1a1a1d]">
                <div className="aspect-[9/16] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=800&width=450"
                    alt="Transaction history screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Smart Transactions</h3>
                <p className="text-sm text-neutral-400">
                  Categorized transactions with intelligent search and filtering
                </p>
              </ThreeDCard>
              <ThreeDCard className="p-6 bg-[#1a1a1d]">
                <div className="aspect-[9/16] relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/placeholder.svg?height=800&width=450"
                    alt="Budget planning screen"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">Budget Planning</h3>
                <p className="text-sm text-neutral-400">
                  Interactive budget creation with predictive spending analysis
                </p>
              </ThreeDCard>
            </div>
          </AnimatedElement>
        </div>

        <CaseStudyProcess
          process={[
            {
              title: "Discovery & Research",
              description:
                "Conducted user interviews, competitive analysis, and heuristic evaluation of the existing app to identify pain points and opportunities.",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "User Journey Mapping",
              description:
                "Created detailed user journeys for different personas to understand their needs, goals, and frustrations when using banking apps.",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Wireframing & Testing",
              description:
                "Developed low and mid-fidelity wireframes and conducted usability testing to validate navigation and information architecture.",
              image: "/placeholder.svg?height=400&width=600",
            },
            {
              title: "Visual Design & Prototyping",
              description:
                "Created a modern visual design system and interactive prototypes for key user flows, incorporating feedback from stakeholders.",
              image: "/placeholder.svg?height=400&width=600",
            },
          ]}
        />

        <div className="mt-20">
          <AnimatedElement variant="fadeIn">
            <h2 className="text-2xl md:text-3xl font-bricolage font-semibold mb-8">Design System</h2>
            <ParallaxElement direction="up" speed={0.1} className="rounded-xl2 overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="FinanceFlow design system"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl2"
              />
            </ParallaxElement>
          </AnimatedElement>
        </div>

        <CaseStudyGallery
          images={[
            {
              src: "/placeholder.svg?height=600&width=800",
              alt: "Onboarding screens",
              width: 800,
              height: 600,
            },
            {
              src: "/placeholder.svg?height=600&width=800",
              alt: "Account management screens",
              width: 800,
              height: 600,
            },
            {
              src: "/placeholder.svg?height=600&width=800",
              alt: "Payment flow screens",
              width: 800,
              height: 600,
            },
            {
              src: "/placeholder.svg?height=600&width=800",
              alt: "Investment dashboard screens",
              width: 800,
              height: 600,
            },
          ]}
        />

        <CaseStudyResults
          results={[
            {
              metric: "User Engagement",
              value: "+43%",
              description: "Increase in daily active users and session duration",
            },
            {
              metric: "App Store Rating",
              value: "4.7/5",
              description: "Improved from previous 3.2/5 rating",
            },
            {
              metric: "Support Calls",
              value: "-38%",
              description: "Reduction in app-related customer support inquiries",
            },
            {
              metric: "Feature Adoption",
              value: "+65%",
              description: "Increase in usage of previously undiscovered features",
            },
          ]}
        />

        <CaseStudyTestimonial
          quote="Mugisha's redesign of our banking app completely transformed the user experience. Not only did it look better, but it fundamentally changed how our customers interact with their finances. The metrics speak for themselves - higher engagement, better ratings, and happier customers."
          author="Sarah Johnson"
          role="Chief Digital Officer, FinanceFlow Inc."
          image="/placeholder.svg?height=100&width=100"
        />

        <CaseStudyNextProject
          title="E-commerce Mobile App"
          description="Designing a seamless shopping experience for a luxury fashion brand"
          link="/work/ecommerce-app"
          image="/placeholder.svg?height=400&width=600"
        />
      </section>
    </>
  )
}
