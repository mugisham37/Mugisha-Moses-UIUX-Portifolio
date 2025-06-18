"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { MessageSquare, X, Send, ThumbsUp, ThumbsDown, Check } from "lucide-react"
import { FocusTrap } from "@/components/ui/focus-trap"
import { AnalyticsService } from "@/services/analytics.service"

export function FeedbackSurvey() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [rating, setRating] = useState<number | null>(null)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [showSurvey, setShowSurvey] = useState(false)

  // Check if we should show the survey
  useEffect(() => {
    if (typeof window === "undefined") return

    // Only show the survey after the user has been on the site for a while
    // and hasn't seen it recently
    const hasSeenSurvey = localStorage.getItem("feedback-survey-seen")
    const lastSeenDate = localStorage.getItem("feedback-survey-last-seen")

    // If they've never seen it, or it's been more than 30 days
    if (!hasSeenSurvey || (lastSeenDate && Date.now() - Number.parseInt(lastSeenDate) > 30 * 24 * 60 * 60 * 1000)) {
      // Wait 30 seconds before showing the survey
      const timer = setTimeout(() => {
        setShowSurvey(true)
      }, 30000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = () => {
    // Track the submission
    AnalyticsService.trackEvent({
      category: "Feedback",
      action: "Submit Feedback",
      label: `Rating: ${rating}`,
      properties: { feedback },
    })

    // Mark as submitted
    setSubmitted(true)

    // Save that the user has seen the survey
    localStorage.setItem("feedback-survey-seen", "true")
    localStorage.setItem("feedback-survey-last-seen", Date.now().toString())

    // Close after a delay
    setTimeout(() => {
      setIsOpen(false)
      setStep(1)
      setRating(null)
      setFeedback("")
      setSubmitted(false)
    }, 3000)
  }

  const handleDismiss = () => {
    setIsOpen(false)

    // Save that the user has seen the survey
    localStorage.setItem("feedback-survey-seen", "true")
    localStorage.setItem("feedback-survey-last-seen", Date.now().toString())

    // Track the dismissal
    AnalyticsService.trackEvent({
      category: "Feedback",
      action: "Dismiss Feedback",
      label: `Step: ${step}`,
    })
  }

  // Show the survey popup if it's time
  useEffect(() => {
    if (showSurvey) {
      setIsOpen(true)
      setShowSurvey(false)
    }
  }, [showSurvey])

  return (
    <>
      {/* Feedback button */}
      <button
        onClick={() => {
          setIsOpen(true)
          if (window.announce) {
            window.announce("Feedback survey opened")
          }
        }}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white shadow-lg hover:bg-accent-blue/90 transition-colors"
        aria-label="Give feedback"
        data-feedback-trigger
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Feedback survey */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <FocusTrap active={isOpen}>
            <AnimatedElement variant="fadeInUp" className="w-full max-w-md mx-4">
              <div className="bg-[#1a1a1d] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent-blue" />
                    <h2 className="text-lg font-medium">Your Feedback</h2>
                  </div>
                  <button
                    onClick={handleDismiss}
                    className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close feedback survey"
                    data-modal-close
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6">
                  {step === 1 && !submitted && (
                    <div className="space-y-6">
                      <p className="text-neutral-300">
                        How would you rate your experience with this portfolio website?
                      </p>
                      <div className="flex justify-center gap-8">
                        <button
                          onClick={() => {
                            setRating(1)
                            setStep(2)
                            if (window.announce) {
                              window.announce("Rating: Not satisfied")
                            }
                          }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                            rating === 1
                              ? "bg-red-500/20 text-red-400"
                              : "bg-[#111112] text-neutral-400 hover:text-white"
                          }`}
                          aria-label="Not satisfied"
                        >
                          <ThumbsDown className="w-8 h-8" />
                          <span>Not Satisfied</span>
                        </button>
                        <button
                          onClick={() => {
                            setRating(5)
                            setStep(2)
                            if (window.announce) {
                              window.announce("Rating: Satisfied")
                            }
                          }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-colors ${
                            rating === 5
                              ? "bg-green-500/20 text-green-400"
                              : "bg-[#111112] text-neutral-400 hover:text-white"
                          }`}
                          aria-label="Satisfied"
                        >
                          <ThumbsUp className="w-8 h-8" />
                          <span>Satisfied</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && !submitted && (
                    <div className="space-y-6">
                      <p className="text-neutral-300">
                        {rating === 5
                          ? "What did you like most about this portfolio website?"
                          : "How can we improve your experience?"}
                      </p>
                      <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full px-4 py-3 bg-[#111112] border border-white/10 rounded-lg focus:border-accent-blue focus:outline-none transition-colors resize-none"
                        placeholder="Your feedback..."
                        rows={4}
                        aria-label="Feedback"
                      ></textarea>
                      <div className="flex justify-end">
                        <button
                          onClick={handleSubmit}
                          disabled={!feedback.trim()}
                          className="px-4 py-2 bg-accent-blue text-white rounded-lg flex items-center gap-2 hover:bg-accent-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Submit feedback"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {submitted && (
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Check className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                      <p className="text-neutral-400">Your feedback has been submitted successfully.</p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedElement>
          </FocusTrap>
        </div>
      )}
    </>
  )
}
