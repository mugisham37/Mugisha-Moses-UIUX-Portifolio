"use client"

import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"
import Link from "next/link"

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do you handle project revisions?",
      answer:
        "Each project includes a set number of revision rounds at key milestones. I believe in collaborative design and welcome feedback throughout the process. Additional revisions beyond the agreed scope can be accommodated with transparent pricing.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes! I offer various ongoing support options including design system maintenance, monthly design reviews, and retainer arrangements for continuous design needs. We can discuss what works best for your team during our initial consultation.",
    },
    {
      question: "What if my project requirements change during development?",
      answer:
        "I understand that projects can evolve. I'm flexible and can accommodate scope changes with clear communication about timeline and budget adjustments. We'll discuss any changes before implementing them.",
    },
    {
      question: "How do you ensure the design will work for my target audience?",
      answer:
        "User research is a core part of my process. I conduct user interviews, analyze your existing data, create personas, and validate designs through testing. Every design decision is backed by user insights and business goals.",
    },
    {
      question: "Can you work with my existing development team?",
      answer:
        "I collaborate closely with development teams throughout the project. I provide detailed design specifications, assets, and documentation to ensure smooth implementation. I'm also available for design QA during development.",
    },
    {
      question: "What makes your approach different from other designers?",
      answer:
        "I combine strategic thinking with hands-on design execution. My background in both UX research and visual design allows me to create solutions that are both user-centered and business-focused. I also prioritize clear communication and collaboration throughout the process.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Frequently Asked Questions</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Common questions about my design process, collaboration approach, and project management.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQ List */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface-foreground rounded-lg border border-white/5 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full p-6 flex items-center justify-between text-left hover:text-white transition"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-6 glass-morphism h-fit sticky top-8">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-accent-blue mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-3">Still Have Questions?</h3>
              <p className="text-neutral-400 text-sm mb-6">
                I'm here to help! Feel free to reach out with any specific questions about your project or my process.
              </p>
              <Link
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-4 py-2 rounded-lg font-medium transition magnetic-hover w-full justify-center"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
