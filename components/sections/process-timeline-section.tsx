"use client"

import { useState, useMemo, memo } from "react"

// Define color types for type safety
type PhaseColorKey = 'accent-blue' | 'accent-purple' | 'accent-teal' | 'orange-400';

type ColorMap = {
  [key in PhaseColorKey]: {
    bg: string;
    bgOpacity20: string;
    bgOpacity30: string;
    text: string;
    dot: string;
  }
};

// Color mapping object for better performance with Tailwind JIT
const colorMap: ColorMap = {
  'accent-blue': {
    bg: 'bg-accent-blue',
    bgOpacity20: 'bg-accent-blue/20',
    bgOpacity30: 'bg-accent-blue/30',
    text: 'text-accent-blue',
    dot: 'bg-accent-blue',
  },
  'accent-purple': {
    bg: 'bg-accent-purple',
    bgOpacity20: 'bg-accent-purple/20',
    bgOpacity30: 'bg-accent-purple/30',
    text: 'text-accent-purple',
    dot: 'bg-accent-purple',
  },
  'accent-teal': {
    bg: 'bg-accent-teal',
    bgOpacity20: 'bg-accent-teal/20',
    bgOpacity30: 'bg-accent-teal/30',
    text: 'text-accent-teal',
    dot: 'bg-accent-teal',
  },
  'orange-400': {
    bg: 'bg-orange-400',
    bgOpacity20: 'bg-orange-400/20',
    bgOpacity30: 'bg-orange-400/30',
    text: 'text-orange-400',
    dot: 'bg-orange-400',
  },
};

// Memoized activity item for better performance
const ActivityItem = memo(({ activity, colorClass }: { activity: string; colorClass: string }) => (
  <li className="text-sm text-neutral-400 flex items-center gap-2">
    <div className={`w-1.5 h-1.5 rounded-full ${colorClass}`}></div>
    {activity}
  </li>
));
ActivityItem.displayName = 'ActivityItem';

// Memoized deliverable item for better performance
const DeliverableItem = memo(({ deliverable, colorClass }: { deliverable: string; colorClass: string }) => (
  <div className="bg-surface rounded-lg p-4 border border-white/5 flex items-center gap-3">
    <div className={`w-2 h-2 rounded-full ${colorClass}`}></div>
    <span className="text-sm">{deliverable}</span>
  </div>
));
DeliverableItem.displayName = 'DeliverableItem';

export function ProcessTimelineSection() {
  const [activePhase, setActivePhase] = useState(0)

  // Define the phase type with proper color typing
  type Phase = {
    title: string;
    duration: string;
    description: string;
    activities: string[];
    deliverables: string[];
    color: PhaseColorKey;
  };

  // Memoize phases to prevent unnecessary re-renders
  const phases = useMemo<Phase[]>(() => [
    {
      title: "Discovery & Research",
      duration: "1-2 weeks",
      description:
        "Understanding your business goals, user needs, and market landscape through comprehensive research, stakeholder interviews, and data analysis to establish a solid foundation for the project.",
      activities: [
        "Stakeholder interviews & workshops",
        "User research & interviews",
        "Competitive & market analysis",
        "Current state assessment & heuristic evaluation",
        "Success metrics & KPI definition",
        "Analytics review & insights extraction"
      ],
      deliverables: ["Research plan & methodology", "User research findings", "Competitive analysis report", "Heuristic evaluation", "Project roadmap & timeline", "Success metrics framework"],
      color: "accent-blue",
    },
    {
      title: "Strategy & Planning",
      duration: "1 week",
      description:
        "Synthesizing research insights into actionable strategies and creating a clear roadmap for the design process, ensuring alignment between business goals and user needs.",
      activities: [
        "User persona & empathy map creation",
        "Customer journey mapping & pain point identification",
        "Information architecture & content strategy",
        "Feature prioritization & scope definition",
        "Design strategy & principles documentation",
        "Technical requirements & constraints analysis"
      ],
      deliverables: ["User personas & empathy maps", "Customer journey maps", "Site map & information architecture", "Feature requirements & prioritization matrix", "Design strategy document", "Technical specifications"],
      color: "accent-purple",
    },
    {
      title: "Design & Prototyping",
      duration: "3-4 weeks",
      description: "Creating wireframes, visual designs, and interactive prototypes that bring the strategy to life, focusing on usability, accessibility, and visual appeal.",
      activities: [
        "Low-fidelity wireframing & sketching",
        "Visual design exploration & mood boards",
        "Design system & component library creation",
        "High-fidelity UI design & responsive layouts",
        "Interactive prototyping & micro-interactions",
        "Accessibility compliance & implementation"
      ],
      deliverables: ["Low & high-fidelity wireframes", "Visual design system & style guide", "Component library & UI kit", "Interactive prototype", "Design specifications & redlines", "Accessibility documentation"],
      color: "accent-teal",
    },
    {
      title: "Testing & Refinement",
      duration: "1-2 weeks",
      description: "Validating designs through user testing, stakeholder feedback, and data analysis, then iteratively refining based on insights to ensure optimal user experience and business outcomes.",
      activities: [
        "Usability testing & user interviews",
        "Stakeholder reviews & feedback sessions",
        "A/B testing & data analysis",
        "Design iteration & refinement",
        "Developer handoff preparation",
        "Implementation support & QA"
      ],
      deliverables: ["Usability test results & insights", "Refined designs & iterations", "Final interactive prototype", "Developer handoff documentation", "Implementation guidelines", "Post-launch measurement plan"],
      color: "orange-400",
    },
  ], []);

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Process Timeline</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          A structured approach that ensures every project delivers exceptional results through clear phases,
          measurable milestones, and collaborative checkpoints with stakeholders.
        </p>
      </div>

      {/* Phase Navigation */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {phases.map((phase, index) => (
          <button
            key={index}
            onClick={() => setActivePhase(index)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activePhase === index
                ? "bg-accent-blue text-white"
                : "bg-surface-foreground text-neutral-400 hover:text-white"
            }`}
          >
            {phase.title}
          </button>
        ))}
      </div>

      {/* Active Phase Details */}
      <div className="bg-surface-foreground rounded-xl2 p-8 border border-white/5 animate-on-scroll">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl ${colorMap[phases[activePhase].color].bgOpacity20} flex items-center justify-center ${colorMap[phases[activePhase].color].text} font-bold`}
              >
                {activePhase + 1}
              </div>
              <div>
                <h3 className="text-xl font-medium">{phases[activePhase].title}</h3>
                <p className="text-sm text-neutral-500">{phases[activePhase].duration}</p>
              </div>
            </div>

            <p className="text-neutral-400 mb-6">{phases[activePhase].description}</p>

            <div>
              <h4 className="font-medium mb-3">Key Activities</h4>
              <ul className="space-y-2">
                {phases[activePhase].activities.map((activity, index) => (
                  <ActivityItem 
                    key={index} 
                    activity={activity} 
                    colorClass={colorMap[phases[activePhase].color].dot} 
                  />
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Deliverables</h4>
            <div className="grid grid-cols-1 gap-3">
              {phases[activePhase].deliverables.map((deliverable, index) => (
                <DeliverableItem 
                  key={index} 
                  deliverable={deliverable} 
                  colorClass={colorMap[phases[activePhase].color].dot} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Visualization - Using colorMap for better performance */}
      <div className="mt-12 relative">
        <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-accent-blue via-accent-purple via-accent-teal to-orange-400"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div key={index} className="text-center">
              <div
                className={`w-16 h-16 rounded-xl ${colorMap[phase.color].bgOpacity20} flex items-center justify-center mx-auto mb-4 ${
                  activePhase === index ? colorMap[phase.color].bgOpacity30 : ""
                }`}
              >
                <span className={`${colorMap[phase.color].text} font-bold`}>{index + 1}</span>
              </div>
              <h4 className="font-medium mb-2">{phase.title}</h4>
              <p className="text-sm text-neutral-500">{phase.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
