import { Suspense } from "react"
import { CaseStudyHero } from "@/components/case-study/case-study-hero"
import { CaseStudyOverview } from "@/components/case-study/case-study-overview"
import { CaseStudyChallenge } from "@/components/case-study/case-study-challenge"
import { CaseStudyProcess } from "@/components/case-study/case-study-process"
import { CaseStudyResults } from "@/components/case-study/case-study-results"
import { CaseStudyGallery } from "@/components/case-study/case-study-gallery"
import { CaseStudyTestimonial } from "@/components/case-study/case-study-testimonial"
import { CaseStudyNextProject } from "@/components/case-study/case-study-next-project"
import { Divider } from "@/components/ui/divider"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

// This would typically come from a CMS or API
// Moved to a separate function for better caching
async function getCaseStudy(id: string) {
  // Simulate a small delay to demonstrate loading state
  // In a real app, this would be a fetch call to an API
  // await new Promise(resolve => setTimeout(resolve, 100))
  
  const caseStudies = [
    {
      id: "1",
      title: "FinanceFlow - Banking App Redesign",
      subtitle: "Transforming the digital banking experience",
      client: "FinanceFlow Inc.",
      year: "2024",
      duration: "4 months",
      role: "Lead UX/UI Designer",
      description:
        "A complete redesign of a digital banking platform to improve user engagement, simplify complex financial tasks, and increase conversion rates.",
      challenge:
        "FinanceFlow's existing app had high abandonment rates and poor user satisfaction scores. Users found it difficult to complete basic banking tasks, and the complex UI was causing frustration.",
      solution:
        "I led a comprehensive redesign focused on simplifying the user journey, improving information architecture, and creating a more intuitive interface with clear visual hierarchy.",
      process: [
        {
          title: "User Research",
          description:
            "Conducted interviews with 20 users, analyzed app usage data, and created user personas to understand pain points and needs.",
        },
        {
          title: "Information Architecture",
          description:
            "Restructured the app's navigation and content organization to create more intuitive user flows and reduce cognitive load.",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Created low and high-fidelity wireframes, followed by interactive prototypes for user testing and stakeholder feedback.",
        },
        {
          title: "Visual Design",
          description:
            "Developed a clean, modern visual language with strong accessibility considerations and a focus on clear data visualization.",
        },
        {
          title: "Testing & Iteration",
          description:
            "Conducted usability testing with 15 participants, gathered feedback, and made iterative improvements to the design.",
        },
      ],
      results: [
        "43% increase in user engagement",
        "28% boost in conversion rates",
        "65% reduction in support tickets",
        "92% user satisfaction score (up from 67%)",
      ],
      testimonial: {
        quote:
          "Alex's redesign of our banking app transformed our digital presence. The intuitive interface and streamlined user flows have significantly improved our customer satisfaction and business metrics.",
        author: "Sarah Johnson",
        role: "Chief Digital Officer, FinanceFlow Inc.",
      },
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: {
        id: "2",
        title: "EcoShop - E-commerce Platform",
      },
    },
    {
      id: "2",
      title: "EcoShop - E-commerce Platform",
      subtitle: "Sustainable shopping made simple",
      client: "EcoShop Inc.",
      year: "2023",
      duration: "3 months",
      role: "UX/UI Designer",
      description:
        "A modern e-commerce platform focused on sustainable products with advanced filtering and search capabilities.",
      challenge:
        "EcoShop needed a user-friendly platform that would showcase their sustainable products while making it easy for users to find exactly what they're looking for.",
      solution:
        "I designed an intuitive e-commerce experience with advanced filtering options, clear product categorization, and a streamlined checkout process.",
      process: [
        {
          title: "Competitive Analysis",
          description:
            "Analyzed top e-commerce platforms to identify best practices and opportunities for improvement.",
        },
        {
          title: "User Flows",
          description:
            "Created detailed user flows for browsing, searching, filtering, and checkout processes.",
        },
        {
          title: "Wireframing",
          description:
            "Developed wireframes for key pages including home, category, product, cart, and checkout.",
        },
        {
          title: "Visual Design",
          description:
            "Created a clean, nature-inspired design system that reflected the brand's sustainable values.",
        },
        {
          title: "Usability Testing",
          description:
            "Conducted testing with 12 participants to validate the design and identify areas for improvement.",
        },
      ],
      results: [
        "52% increase in conversion rate",
        "35% reduction in cart abandonment",
        "48% increase in average order value",
        "95% positive user feedback on new filtering system",
      ],
      testimonial: {
        quote:
          "The new platform has transformed our business. Customers can now easily find products that match their sustainability values, and our sales have increased significantly.",
        author: "Michael Chen",
        role: "Founder, EcoShop Inc.",
      },
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      nextProject: {
        id: "3",
        title: "HealthTrack - Mobile App",
      },
    },
    // Additional case studies would be here
  ]

  return caseStudies.find((study) => study.id === id) || caseStudies[0]
}

// Generate static params for the most common case studies
export async function generateStaticParams() {
  // In a real app, this would fetch all possible IDs from an API
  return [{ id: "1" }, { id: "2" }]
}

// Loading component for better UX
function CaseStudyLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  )
}

export default async function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = await getCaseStudy(params.id)

  return (
    <Suspense fallback={<CaseStudyLoading />}>
      <CaseStudyHero
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        client={caseStudy.client}
        year={caseStudy.year}
        duration={caseStudy.duration}
        role={caseStudy.role}
      />
      <Divider />
      <CaseStudyOverview description={caseStudy.description} />
      <Divider />
      <CaseStudyChallenge challenge={caseStudy.challenge} solution={caseStudy.solution} />
      <Divider />
      <CaseStudyProcess process={caseStudy.process} />
      <Divider />
      <CaseStudyGallery images={caseStudy.images} />
      <Divider />
      <CaseStudyResults results={caseStudy.results} />
      <Divider />
      <CaseStudyTestimonial
        quote={caseStudy.testimonial.quote}
        author={caseStudy.testimonial.author}
        role={caseStudy.testimonial.role}
      />
      <Divider />
      <CaseStudyNextProject id={caseStudy.nextProject.id} title={caseStudy.nextProject.title} />
    </Suspense>
  )
}
