"use client"

import { useState } from "react"
import Image from "next/image"

export function ProcessToolsSection() {
  const [activeCategory, setActiveCategory] = useState("research")

  const toolCategories = {
    research: {
      title: "Research & Discovery",
      description: "Tools I use to understand users, gather insights, and define problems with precision and depth.",
      tools: [
        {
          name: "Maze",
          logo: "https://cdn.worldvectorlogo.com/logos/maze-1.svg",
          description: "Remote user testing and research platform",
          usage: "Usability testing, surveys, card sorting, tree testing",
        },
        {
          name: "Miro",
          logo: "https://cdn.worldvectorlogo.com/logos/miro-2.svg",
          description: "Collaborative whiteboarding platform",
          usage: "User journey mapping, affinity diagrams, remote workshops",
        },
        {
          name: "Hotjar",
          logo: "https://cdn.worldvectorlogo.com/logos/hotjar-1.svg",
          description: "User behavior analytics and feedback",
          usage: "Heatmaps, session recordings, feedback polls, conversion funnels",
        },
        {
          name: "Dovetail",
          logo: "https://dovetailapp.com/img/logo.svg",
          description: "Research repository and analysis platform",
          usage: "Interview transcription, insight management, research collaboration",
        },
      ],
    },
    design: {
      title: "Design & Prototyping",
      description: "Tools I use to create wireframes, visual designs, and interactive prototypes that bring ideas to life.",
      tools: [
        {
          name: "Figma",
          logo: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
          description: "Collaborative design platform",
          usage: "UI design, prototyping, design systems, component libraries",
        },
        {
          name: "Adobe XD",
          logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
          description: "Vector-based UI/UX design tool",
          usage: "UI design, rapid prototyping, responsive layouts, auto-animate",
        },
        {
          name: "Principle",
          logo: "https://principleformac.com/favicon.svg",
          description: "Advanced interactive prototyping tool",
          usage: "Complex animations, micro-interactions, transition design",
        },
        {
          name: "Framer",
          logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
          description: "Code-based prototyping platform",
          usage: "High-fidelity prototypes, interactive components, motion design",
        },
      ],
    },
    collaboration: {
      title: "Collaboration & Handoff",
      description: "Tools I use to collaborate with cross-functional teams and deliver final designs with precision and clarity.",
      tools: [
        {
          name: "Zeplin",
          logo: "https://cdn.worldvectorlogo.com/logos/zeplin.svg",
          description: "Design handoff and collaboration platform",
          usage: "Design specs, asset management, style guides, developer handoff",
        },
        {
          name: "Abstract",
          logo: "https://cdn.worldvectorlogo.com/logos/abstract-2.svg",
          description: "Design version control system",
          usage: "File versioning, design reviews, branching, merge management",
        },
        {
          name: "Notion",
          logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
          description: "All-in-one collaborative workspace",
          usage: "Documentation, project management, knowledge base, client portals",
        },
        {
          name: "Slack",
          logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg",
          description: "Team communication and collaboration hub",
          usage: "Real-time communication, file sharing, integrations, client channels",
        },
      ],
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Tools & Technology</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          I leverage industry-standard tools throughout my design process to ensure efficiency, collaboration, 
          and the highest quality deliverables for every project.
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
