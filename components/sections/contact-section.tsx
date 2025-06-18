"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Twitter, Dribbble, Github } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bricolage font-semibold mb-4 animate-on-scroll" style={{ animationDelay: "4.7s" }}>
          Let's Work Together
        </h2>
        <p className="text-lg text-neutral-400 animate-on-scroll" style={{ animationDelay: "4.8s" }}>
          Ready to create exceptional digital experiences that drive results? Let's discuss your project and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="animate-on-scroll" style={{ animationDelay: "4.9s" }}>
          <h3 className="text-xl font-medium mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-neutral-400">hello@mugishamoses.design</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-purple" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-neutral-400">+256 (789) 123-456</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent-teal/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent-teal" />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-neutral-400">Kampala, Uganda</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="font-medium mb-4">Follow Me</p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/in/mugishamoses"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-foreground flex items-center justify-center hover:bg-accent-blue/20 transition magnetic-hover"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/mugishamoses_ux"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-foreground flex items-center justify-center hover:bg-accent-blue/20 transition magnetic-hover"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://dribbble.com/mugishamoses"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-foreground flex items-center justify-center hover:bg-accent-blue/20 transition magnetic-hover"
              >
                <Dribbble className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/mugishamoses"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-surface-foreground flex items-center justify-center hover:bg-accent-blue/20 transition magnetic-hover"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="animate-on-scroll" style={{ animationDelay: "5s" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-foreground border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-medium transition magnetic-hover"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
