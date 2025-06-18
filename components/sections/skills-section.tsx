"use client"

import { useState } from "react"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("design")

  const skillCategories = {
    design: {
      title: "Design Skills",
      skills: [
        { name: "User Research", level: 95, description: "User interviews, surveys, usability testing, analytics interpretation, heuristic evaluation" },
        { name: "UI Design", level: 98, description: "Visual design, typography, color theory, interface composition, responsive layouts" },
        { name: "UX Design", level: 96, description: "Information architecture, user flows, wireframing, journey mapping, interaction design" },
        { name: "Prototyping", level: 92, description: "Interactive prototypes, micro-interactions, animation principles, motion design" },
        { name: "Design Systems", level: 90, description: "Component libraries, design tokens, documentation, scalable architecture, governance" },
        { name: "Conversion Optimization", level: 94, description: "A/B testing, funnel analysis, behavioral psychology, persuasive design" },
      ],
    },
    tools: {
      title: "Tools & Software",
      skills: [
        { name: "Figma", level: 98, description: "Advanced prototyping, design systems, auto layout, variables, plugins development" },
        { name: "Adobe Creative Suite", level: 85, description: "Photoshop, Illustrator, After Effects, XD, InDesign, asset creation" },
        { name: "Sketch", level: 80, description: "UI design, prototyping, symbols, libraries, developer handoff" },
        { name: "Principle", level: 75, description: "Animation, micro-interactions, transitions, motion design principles" },
        { name: "Framer", level: 70, description: "Advanced prototyping, animations, code components, interactive design" },
        { name: "Prototyping Tools", level: 88, description: "InVision, Marvel, ProtoPie, user testing platforms, feedback collection" },
      ],
    },
    technical: {
      title: "Technical Skills",
      skills: [
        { name: "HTML/CSS", level: 85, description: "Responsive design, CSS Grid, Flexbox, animations, preprocessors (SASS/LESS)" },
        { name: "JavaScript", level: 70, description: "ES6+, DOM manipulation, event handling, basic frameworks, interactive elements" },
        { name: "React", level: 65, description: "Component-based design, hooks, state management, styled components" },
        { name: "Design Tokens", level: 80, description: "Systematic design implementation, theme management, design-to-code workflows" },
        { name: "Accessibility", level: 88, description: "WCAG 2.1 guidelines, screen reader testing, keyboard navigation, inclusive design" },
        { name: "Version Control", level: 75, description: "Git, collaboration workflows, design versioning, documentation" },
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
