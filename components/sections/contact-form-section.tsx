"use client"

import type React from "react"

import { useState } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { SuccessMessage } from "@/components/ui/success-message"
import { ErrorMessage } from "@/components/ui/error-message"
import { FileUpload } from "@/components/ui/file-upload"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Calendar } from "lucide-react"
import { CalendarBooking } from "@/components/ui/calendar-booking"

interface FormData {
  name: string
  email: string
  company: string
  budget: string
  timeline: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [files, setFiles] = useState<File[]>([])
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleFileChange = (newFiles: File[]) => {
    setFiles(newFiles)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        timeline: "",
        message: "",
      })
      setFiles([])
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <AnimatedElement variant="fadeInLeft">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Get in Touch</h2>
          <p className="text-neutral-400 mb-8">
            Fill out the form below with some information about your project, and I'll get back to you within 48 hours.
          </p>

          {submitStatus === "success" ? (
            <SuccessMessage
              title="Message Sent Successfully!"
              message="Thank you for reaching out. I'll review your project details and get back to you within 48 hours."
            />
          ) : submitStatus === "error" ? (
            <div className="mb-6">
              <ErrorMessage
                title="Something Went Wrong"
                message="There was an error sending your message. Please try again or contact me directly at hello@alexmorgan.design."
              />
            </div>
          ) : null}

          {(submitStatus === "idle" || submitStatus === "error") && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "error" : ""}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="your.email@company.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select a budget range</option>
                    <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select a timeline</option>
                  <option value="ASAP">ASAP (Rush project)</option>
                  <option value="Less than 1 month">Less than 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                  <option value="Flexible">Flexible timeline</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input resize-none ${errors.message ? "error" : ""}`}
                  placeholder="Tell me about your project, goals, target audience, and any specific requirements..."
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                <p className="mt-1 text-xs text-neutral-500">
                  {formData.message.length}/500 characters (minimum 10 required)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Attachments</label>
                <FileUpload
                  onChange={handleFileChange}
                  maxFiles={5}
                  maxSizeMB={10}
                  acceptedTypes={["image/jpeg", "image/png", "image/gif", "application/pdf"]}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex-1 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <LoadingSpinner size="sm" />
                      Sending Message<span className="loading-dots"></span>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <button type="button" onClick={() => setIsCalendarOpen(true)} className="btn-secondary flex-1">
                  <Calendar className="w-4 h-4" />
                  Schedule a Call
                </button>
              </div>
            </form>
          )}
        </AnimatedElement>

        {/* Contact Info */}
        <AnimatedElement variant="fadeInRight">
          <div className="bg-[#1a1a1d] rounded-xl2 p-8 border border-white/5 h-full">
            <h3 className="text-xl font-medium mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-accent-blue"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@alexmorgan.design" className="text-neutral-400 hover:text-white transition">
                    hello@alexmorgan.design
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-accent-purple"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+11234567890" className="text-neutral-400 hover:text-white transition">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-teal/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-accent-teal"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-neutral-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-4">Availability</h3>
            <p className="text-neutral-400 mb-6">
              I'm currently booking projects for Q3 2025. Get in touch early to secure your spot in my schedule.
            </p>

            <div className="bg-accent-blue/10 rounded-lg p-4 border border-accent-blue/20 mb-6">
              <p className="text-sm text-accent-blue">
                <strong>Response Time:</strong> I typically respond to all inquiries within 48 hours.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Available for new projects
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                Free consultation call
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <div className="w-2 h-2 rounded-full bg-accent-purple"></div>
                NDA available upon request
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>

      <CalendarBooking isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  )
}
