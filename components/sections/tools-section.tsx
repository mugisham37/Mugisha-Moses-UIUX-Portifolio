"use client"

import { useState } from "react"
import Image from "next/image"

export function ToolsSection() {
  const [activeCategory, setActiveCategory] = useState("design")

  const toolCategories = {
    design: {
      title: "Design Tools",
      tools: [
        {
          name: "Figma",
          logo: "/placeholder.svg?height=60&width=60",
          description: "My primary design tool for UI/UX design, prototyping, and design systems.",
          expertise: "Expert",
        },
        {
          name: "Adobe XD",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Used for rapid prototyping and design handoff to development teams.",
          expertise: "Advanced",
        },
        {
          name: "Sketch",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Utilized for UI design and creating design systems with symbols.",
          expertise: "Advanced",
        },
        {
          name: "InVision",
          logo: "/placeholder.svg?height=60&width=60",
          description: "For creating interactive prototypes and gathering stakeholder feedback.",
          expertise: "Intermediate",
        },
      ],
    },
    prototyping: {
      title: "Prototyping Tools",
      tools: [
        {
          name: "Principle",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Creating advanced animations and micro-interactions for mobile apps.",
          expertise: "Advanced",
        },
        {
          name: "Framer",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Building high-fidelity interactive prototypes with code components.",
          expertise: "Intermediate",
        },
        {
          name: "ProtoPie",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Creating complex interactions and sensor-based prototypes.",
          expertise: "Intermediate",
        },
        {
          name: "After Effects",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Motion design and advanced animation concepts for digital products.",
          expertise: "Intermediate",
        },
      ],
    },
    collaboration: {
      title: "Collaboration Tools",
      tools: [
        {
          name: "Miro",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Virtual whiteboarding for workshops, user journey mapping, and ideation.",
          expertise: "Expert",
        },
        {
          name: "Notion",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Documentation, project management, and design process tracking.",
          expertise: "Expert",
        },
        {
          name: "Slack",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Team communication and design feedback collection.",
          expertise: "Advanced",
        },
        {
          name: "Zeplin",
          logo: "/placeholder.svg?height=60&width=60",
          description: "Design handoff and developer collaboration.",
          expertise: "Advanced",
        },
      ],
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-6 animate-on-scroll">Tools I Use</h2>
      <p className="text-lg text-neutral-400 mb-12 animate-on-scroll max-w-2xl">
        I leverage industry-standard tools to deliver exceptional design work efficiently and collaboratively.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
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
              <div>
                <h3 className="font-medium group-hover:text-white transition-colors">{tool.name}</h3>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    tool.expertise === "Expert"
                      ? "bg-accent-blue/20 text-accent-blue"
                      : tool.expertise === "Advanced"
                        ? "bg-accent-purple/20 text-accent-purple"
                        : "bg-accent-teal/20 text-accent-teal"
                  }`}
                >
                  {tool.expertise}
                </span>
              </div>
            </div>
            <p className="text-sm text-neutral-400">{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
