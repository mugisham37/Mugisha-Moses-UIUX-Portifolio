"use client"

import { useState } from "react"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("design")

  const skillCategories = {
    design: {
      title: "Design Skills",
      skills: [
        { name: "User Research", level: 95, description: "User interviews, surveys, usability testing" },
        { name: "UI Design", level: 98, description: "Visual design, typography, color theory" },
        { name: "UX Design", level: 96, description: "Information architecture, user flows, wireframing" },
        { name: "Prototyping", level: 92, description: "Interactive prototypes, micro-interactions" },
        { name: "Design Systems", level: 90, description: "Component libraries, design tokens" },
      ],
    },
    tools: {
      title: "Tools & Software",
      skills: [
        { name: "Figma", level: 98, description: "Advanced prototyping and design systems" },
        { name: "Adobe Creative Suite", level: 85, description: "Photoshop, Illustrator, After Effects" },
        { name: "Sketch", level: 80, description: "UI design and prototyping" },
        { name: "Principle", level: 75, description: "Animation and micro-interactions" },
        { name: "Framer", level: 70, description: "Advanced prototyping and animations" },
      ],
    },
    technical: {
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 85, description: "Responsive design, CSS Grid, Flexbox" },
        { name: "JavaScript", level: 70, description: "Basic scripting and DOM manipulation" },
        { name: "React", level: 65, description: "Component-based design implementation" },
        { name: "Design Tokens", level: 80, description: "Systematic design implementation" },
        { name: "Accessibility", level: 88, description: "WCAG guidelines, inclusive design" },
      ],
    },
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-12 animate-on-scroll">Skills & Expertise</h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(skillCategories).map(([key, category]) => (
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

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">{skill.name}</h3>
              <span className="text-sm text-accent-blue">{skill.level}%</span>
            </div>
            <div className="w-full bg-neutral-700 rounded-full h-2 mb-3">
              <div
                className="bg-gradient-to-r from-accent-blue to-accent-purple h-2 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-neutral-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
