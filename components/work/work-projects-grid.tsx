"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { WorkFilter } from "@/components/ui/work-filter"
import { AnimatedElement } from "@/components/ui/animated-element"

// Mock project data - moved to a separate component for better organization
const allProjects = [
  {
    id: "1",
    title: "FinanceFlow Dashboard Redesign",
    description: "A complete overhaul of the user interface for a financial analytics platform, resulting in 43% increase in user engagement.",
    image: "https://cdn.dribbble.com/userupload/7697500/file/original-a7a4762f2d6a4a7fe8a9d3c7748e4c2b.png?compress=1&resize=1600x1200",
    category: "web",
    industry: "finance",
    year: "2024",
    tags: ["UI Design", "UX Research", "Dashboard"],
  },
  {
    id: "2",
    title: "MedConnect Healthcare App",
    description: "Patient-centered mobile application for healthcare appointment management and medical records access.",
    image: "https://cdn.dribbble.com/userupload/7583089/file/original-6d3a5c2b6c5a5c5c5c5c5c5c5c5c5c5c.png?compress=1&resize=1600x1200",
    category: "mobile",
    industry: "healthcare",
    year: "2023",
    tags: ["Mobile Design", "UX Design", "Healthcare"],
  },
  {
    id: "3",
    title: "EcoShop E-commerce Platform",
    description: "Sustainable shopping experience with intuitive product discovery and seamless checkout flow.",
    image: "https://cdn.dribbble.com/userupload/7583135/file/original-e0d4d7d5b6f8c6127a3a9c1a1f2a2f1a.png?compress=1&resize=1600x1200",
    category: "web",
    industry: "ecommerce",
    year: "2023",
    tags: ["Web Design", "E-commerce", "UI Design"],
  },
  {
    id: "4",
    title: "LearnHub Educational Platform",
    description: "Complete brand identity and UI design for an online learning platform focused on accessibility.",
    image: "https://cdn.dribbble.com/userupload/7697498/file/original-a7a4762f2d6a4a7fe8a9d3c7748e4c2b.jpg?compress=1&resize=1600x1200",
    category: "branding",
    industry: "education",
    year: "2022",
    tags: ["Branding", "UI Design", "Accessibility"],
  },
  {
    id: "5",
    title: "NexAI Startup Website",
    description: "Modern website design for a technology startup in the AI space with interactive data visualizations.",
    image: "https://cdn.dribbble.com/userupload/7697499/file/original-a7a4762f2d6a4a7fe8a9d3c7748e4c2b.png?compress=1&resize=1600x1200",
    category: "web",
    industry: "tech",
    year: "2024",
    tags: ["Web Design", "Interaction Design", "Data Visualization"],
  },
  {
    id: "6",
    title: "SecurePay Banking App",
    description: "User experience improvement for a mobile banking application with focus on security and ease of use.",
    image: "https://cdn.dribbble.com/userupload/7697501/file/original-a7a4762f2d6a4a7fe8a9d3c7748e4c2b.png?compress=1&resize=1600x1200",
    category: "mobile",
    industry: "finance",
    year: "2023",
    tags: ["Mobile Design", "Banking", "UX Design"],
  },
]

// Memoized ProjectCard component for better performance
const ProjectCard = memo(({ project }: { 
  project: {
    id: string
    title: string
    description: string
    image: string
    category: string
    industry: string
    year: string
    tags: string[]
  }
}) => {
  return (
    <div className="group">
      <Link
        href={`/work/${project.id}`}
        className="block bg-[#1a1a1d] border border-white/10 rounded-xl overflow-hidden hover:border-accent-blue/50 transition-colors"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy" // Add lazy loading for better performance
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1d] to-transparent opacity-60"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-2 py-1 bg-black/50 backdrop-blur-sm text-xs rounded-full text-white/80">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-medium mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
          <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{project.description}</p>
          <div className="flex items-center justify-between text-xs text-neutral-500">
            <span>{project.industry}</span>
            <span>{project.year}</span>
          </div>
        </div>
      </Link>
    </div>
  )
})

ProjectCard.displayName = "ProjectCard"

// Main component with optimized filtering logic
export function WorkProjectsGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({})
  const [sortBy, setSortBy] = useState("newest")
  const [filteredProjects, setFilteredProjects] = useState(allProjects)

  // Memoized filter function to prevent unnecessary recalculations
  const filterProjects = useCallback(() => {
    let result = [...allProjects]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category/industry/year filters
    if (Object.keys(activeFilters).length > 0) {
      result = result.filter((project) => {
        // Check each filter group
        for (const [groupId, selectedOptions] of Object.entries(activeFilters)) {
          if (selectedOptions.length > 0) {
            // If the project doesn't match any selected option in this group, filter it out
            if (!selectedOptions.includes(project[groupId as keyof typeof project] as string)) {
              return false
            }
          }
        }
        return true
      })
    }

    // Apply sorting
    switch (sortBy) {
      case "newest":
        result.sort((a, b) => Number.parseInt(b.year) - Number.parseInt(a.year))
        break
      case "oldest":
        result.sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))
        break
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "za":
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
      default:
        break
    }

    return result
  }, [searchQuery, activeFilters, sortBy])

  // Update filtered projects when filter criteria change
  useEffect(() => {
    const result = filterProjects()
    setFilteredProjects(result)
  }, [filterProjects])

  // Reset filters handler
  const handleResetFilters = useCallback(() => {
    setSearchQuery("")
    setActiveFilters({})
    setSortBy("newest")
  }, [])

  return (
    <>
      <WorkFilter
        onSearch={setSearchQuery}
        onFilter={setActiveFilters}
        onSort={setSortBy}
        totalProjects={allProjects.length}
        filteredCount={filteredProjects.length}
      />

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <AnimatedElement key={project.id} variant="fadeIn" options={{ delay: 100 * Number(project.id) % 6 }}>
              <ProjectCard project={project} />
            </AnimatedElement>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-neutral-400 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium transition-all hover:bg-white/15"
          >
            Reset Filters
          </button>
        </div>
      )}
    </>
  )
}
