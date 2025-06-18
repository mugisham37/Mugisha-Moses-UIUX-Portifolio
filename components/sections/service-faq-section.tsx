"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ServiceFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A UX audit typically takes 1-2 weeks, while a complete redesign can take 6-8 weeks. I'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you work with development teams?",
      answer:
        "I collaborate closely with development teams throughout the project. I provide detailed design specifications, assets, and documentation to ensure smooth implementation. I'm also available for design QA during development.",
    },
    {
      question: "What's included in the design handoff?",
      answer:
        "Design handoff includes high-fidelity designs, interactive prototypes, design specifications, assets (icons, images), style guide, and comprehensive documentation. I also offer a handoff meeting with your development team.",
    },
    {
      question: "Can you help with user research?",
      answer:
        "Yes! User research is a core part of my process. I conduct user interviews, surveys, usability testing, and competitive analysis. I can also help you set up ongoing research processes for your team.",
    },
    {
      question: "Do you offer ongoing design support?",
      answer:
        "I offer various ongoing support options including design system maintenance, monthly design reviews, and retainer arrangements for continuous design needs. We can discuss what works best for your team.",
    },
    {
      question: "What if I need revisions?",
      answer:
        "Each project includes a set number of revision rounds at key milestones. I believe in collaborative design and welcome feedback throughout the process. Additional revisions can be accommodated as needed.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Frequently Asked Questions</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Common questions about my design process, timelines, and collaboration approach.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-white/10 animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <button
              className="w-full py-6 flex items-center justify-between text-left hover:text-white transition"
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
            >
              <span className="font-medium pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-neutral-400 transition-transform ${openFAQ === index ? "rotate-180" : ""}`}
              />
            </button>
            {openFAQ === index && (
              <div className="pb-6">
                <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
