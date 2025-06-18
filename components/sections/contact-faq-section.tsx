"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function ContactFAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "What information should I include in my initial inquiry?",
      answer:
        "To help me understand your project better, please include details about your project goals, target audience, timeline, and budget range. The more information you provide, the more tailored my response can be.",
    },
    {
      question: "How quickly will you respond to my inquiry?",
      answer:
        "I typically respond to all inquiries within 48 hours during business days. If your project is urgent, please mention that in your message, and I'll do my best to prioritize it.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Yes! I work with clients worldwide. Most communication happens via email, video calls, and collaborative design tools, making distance a non-issue for successful collaboration.",
    },
    {
      question: "What is your payment structure?",
      answer:
        "I typically require a 50% deposit to secure your spot in my schedule, with the remaining 50% due upon project completion. For larger projects, we can establish a milestone-based payment schedule.",
    },
    {
      question: "Can we schedule a call before committing to a project?",
      answer:
        "I offer a free 30-minute consultation call to discuss your project, answer any questions, and determine if we're a good fit to work together. You can schedule this through the contact form.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll">Frequently Asked Questions</h2>
        <p className="text-lg text-neutral-400 animate-on-scroll max-w-2xl mx-auto">
          Common questions about working with me and my design process.
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
