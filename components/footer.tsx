"use client"

import Link from "next/link"
import { Instagram, Twitter, Linkedin, Dribbble, Github, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0c0c0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block text-2xl font-bricolage font-semibold mb-4">
              Alex Morgan
            </Link>
            <p className="text-neutral-400 mb-6">
              UI/UX designer creating intuitive, engaging, and conversion-focused digital experiences.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/alexmorgan.design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/alexmorgan_ux"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/alexmorgan-uxdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://dribbble.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <Dribbble className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/alexmorgan-design"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-neutral-400 hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-neutral-400 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-neutral-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-neutral-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-400 hover:text-white transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-neutral-400 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/client-portal/login" className="text-neutral-400 hover:text-white transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <a
                  href="/alex-morgan-portfolio.pdf"
                  className="text-neutral-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">hello@alexmorgan.design</li>
              <li className="text-neutral-400">+1 (555) 123-4567</li>
              <li className="text-neutral-400">San Francisco, CA</li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-1 mt-4 text-accent-blue hover:underline">
              <span>Get in touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-neutral-500 mb-4 md:mb-0">
            &copy; {currentYear} Alex Morgan. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="text-sm text-neutral-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={() => {
                if (window.announce) {
                  window.announce("Accessibility options opened")
                }
                const accessibilityButton = document.querySelector(
                  "[data-accessibility-trigger]",
                ) as HTMLButtonElement | null
                if (accessibilityButton) {
                  accessibilityButton.click()
                }
              }}
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
