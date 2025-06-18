"use client"

import { useState } from "react"
import Image from "next/image"

export function ProcessToolsSection() {
  const [activeCategory, setActiveCategory] = useState("research")

  const toolCategories = {
    research: {
      title: "Research & Discovery",
      description: "Tools I use to understand users, gather insights, and define problems.",
      tools: [
        {
          name: "Maze",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Remote user testing and research platform",
          usage: "Usability testing, surveys, card sorting",
        },
        {
          name: "Miro",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Collaborative whiteboarding platform",
          usage: "User journey mapping, affinity diagrams, workshops",
        },
        {
          name: "Hotjar",
          logo: "/placeholder.svg?height=60&width=60",
          description: "User behavior analytics and feedback",
          usage: "Heatmaps, session recordings, feedback polls",
        },
        {
          name: "Dovetail",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Research repository and analysis",
          usage: "Interview transcription, insight management, research ops",
        },
      ],
    },
    design: {
      title: "Design & Prototyping",
      description: "Tools I use to create wireframes, visual designs, and interactive prototypes.",
      tools: [
        {
          name: "Figma",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Collaborative design platform",
          usage: "UI design, prototyping, design systems",
        },
        {
          name: "Adobe XD",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Vector-based design tool",
          usage: "UI design, prototyping, design specs",
        },
        {
          name: "Principle",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Interactive prototyping tool",
          usage: "Advanced animations, micro-interactions",
        },
        {
          name: "Framer",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Prototyping and interactive design",
          usage: "High-fidelity prototypes, code components",
        },
      ],
    },
    collaboration: {
      title: "Collaboration & Handoff",
      description: "Tools I use to collaborate with teams and deliver final designs.",
      tools: [
        {
          name: "Zeplin",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Design handoff and collaboration",
          usage: "Design specs, asset management, style guides",
        },
        {
          name: "Abstract",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Design version control",
          usage: "File management, design reviews, branching",
        },
        {
          name: "Notion",
          logo: "/placeholder.svg?height=60&width=60",
          description: "All-in-one workspace",
          usage: "Documentation, project management, knowledge base",
        },
        {
          name: "Slack",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Team communication platform",
          usage: "Real-time communication, file sharing, integrations",
        },
      ],
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Tools & Technology</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          I leverage industry-standard tools throughout my design process to ensure efficiency and collaboration.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {Object.entries(toolCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeCategory === key
                ? "bg-accent-blue text-white"
                : "bg-surface-foreground text-neutral-400 hover:text-white"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Active Category Description */}
      <p className="text-center text-neutral-400 mb-8 animate-on-scroll">
        {toolCategories[activeCategory as keyof typeof toolCategories].description}
      </p>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {toolCategories[activeCategory as keyof typeof toolCategories].tools.map((tool, index) => (
          <div
            key={tool.name}
            className="bg-surface-foreground rounded-lg p-6 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 animate-on-scroll group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center overflow-hidden">
                <Image src={tool.logo || "/placeholder.svg"} alt={tool.name} width={40} height={40} />
              </div>
              <h3 className="font-medium group-hover:text-white transition-colors">{tool.name}</h3>
            </div>
            <p className="text-sm text-neutral-400 mb-2">{tool.description}</p>
            <p className="text-xs text-accent-blue">{tool.usage}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
