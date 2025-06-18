"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export function BlogNewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-12 glass-morphism animate-on-scroll">
        <div className="text-center max-w-2xl mx-auto">
          <Mail className="w-12 h-12 text-accent-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bricolage font-semibold mb-4">Stay Updated</h2>
          <p className="text-lg text-neutral-400 mb-8">
            Get the latest design insights, case studies, and industry trends delivered to your inbox.
          </p>

          {isSubscribed ? (
            <div className="flex items-center justify-center gap-3 text-green-500">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg font-medium transition magnetic-hover"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-sm text-neutral-500 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
