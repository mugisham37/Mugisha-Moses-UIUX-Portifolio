"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Accessibility, Type, X, Eye, Zap, MousePointer } from "lucide-react"
import { FocusTrap } from "@/components/ui/focus-trap"

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(1)
  const [highContrast, setHighContrast] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [focusVisible, setFocusVisible] = useState(false)
  const [dyslexicFont, setDyslexicFont] = useState(false)

  // Apply accessibility settings when they change
  useEffect(() => {
    // Font size
    document.documentElement.style.fontSize = `${fontSize * 100}%`

    // High contrast
    if (highContrast) {
      document.documentElement.classList.add("high-contrast")
    } else {
      document.documentElement.classList.remove("high-contrast")
    }

    // Reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add("reduced-motion")
    } else {
      document.documentElement.classList.remove("reduced-motion")
    }

    // Focus visible
    if (focusVisible) {
      document.documentElement.classList.add("focus-visible")
    } else {
      document.documentElement.classList.remove("focus-visible")
    }

    // Dyslexic font
    if (dyslexicFont) {
      document.documentElement.classList.add("dyslexic-font")
    } else {
      document.documentElement.classList.remove("dyslexic-font")
    }
  }, [fontSize, highContrast, reducedMotion, focusVisible, dyslexicFont])

  // Load saved preferences
  useEffect(() => {
    if (typeof window === "undefined") return

    const savedFontSize = localStorage.getItem("accessibility-font-size")
    const savedHighContrast = localStorage.getItem("accessibility-high-contrast")
    const savedReducedMotion = localStorage.getItem("accessibility-reduced-motion")
    const savedFocusVisible = localStorage.getItem("accessibility-focus-visible")
    const savedDyslexicFont = localStorage.getItem("accessibility-dyslexic-font")

    if (savedFontSize) setFontSize(Number.parseFloat(savedFontSize))
    if (savedHighContrast) setHighContrast(savedHighContrast === "true")
    if (savedReducedMotion) setReducedMotion(savedReducedMotion === "true")
    if (savedFocusVisible) setFocusVisible(savedFocusVisible === "true")
    if (savedDyslexicFont) setDyslexicFont(savedDyslexicFont === "true")

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion && !savedReducedMotion) {
      setReducedMotion(true)
    }
  }, [])

  // Save preferences when they change
  useEffect(() => {
    if (typeof window === "undefined") return

    localStorage.setItem("accessibility-font-size", fontSize.toString())
    localStorage.setItem("accessibility-high-contrast", highContrast.toString())
    localStorage.setItem("accessibility-reduced-motion", reducedMotion.toString())
    localStorage.setItem("accessibility-focus-visible", focusVisible.toString())
    localStorage.setItem("accessibility-dyslexic-font", dyslexicFont.toString())
  }, [fontSize, highContrast, reducedMotion, focusVisible, dyslexicFont])

  const increaseFontSize = () => {
    if (fontSize < 1.5) {
      setFontSize((prev) => Math.min(prev + 0.1, 1.5))
      if (window.announce) {
        window.announce(`Font size increased to ${Math.round(fontSize * 100 + 10)}%`)
      }
    }
  }

  const decreaseFontSize = () => {
    if (fontSize > 0.8) {
      setFontSize((prev) => Math.max(prev - 0.1, 0.8))
      if (window.announce) {
        window.announce(`Font size decreased to ${Math.round(fontSize * 100 - 10)}%`)
      }
    }
  }

  const resetFontSize = () => {
    setFontSize(1)
    if (window.announce) {
      window.announce("Font size reset to 100%")
    }
  }

  const resetAll = () => {
    setFontSize(1)
    setHighContrast(false)
    setReducedMotion(false)
    setFocusVisible(false)
    setDyslexicFont(false)
    if (window.announce) {
      window.announce("All accessibility settings reset to default")
    }
  }

  return (
    <>
      {/* Accessibility button */}
      <button
        onClick={() => {
          setIsOpen(true)
          if (window.announce) {
            window.announce("Accessibility panel opened")
          }
        }}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white shadow-lg hover:bg-accent-blue/90 transition-colors"
        aria-label="Open accessibility options"
        data-accessibility-trigger
      >
        <Accessibility className="w-6 h-6" />
      </button>

      {/* Accessibility panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <FocusTrap active={isOpen}>
            <AnimatedElement variant="fadeInUp" className="w-full max-w-md mx-4">
              <div className="bg-[#1a1a1d] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Accessibility className="w-5 h-5 text-accent-blue" />
                    <h2 className="text-lg font-medium">Accessibility Options</h2>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      if (window.announce) {
                        window.announce("Accessibility panel closed")
                      }
                    }}
                    className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close accessibility panel"
                    data-modal-close
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Text size */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-medium mb-4">
                      <Type className="w-4 h-4" />
                      <span>Text Size</span>
                    </h3>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={decreaseFontSize}
                        disabled={fontSize <= 0.8}
                        className="w-10 h-10 rounded-full bg-[#111112] flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Decrease text size"
                      >
                        <span className="text-xl font-bold">A-</span>
                      </button>
                      <div className="flex-1 text-center">
                        <span className="text-sm text-neutral-400">{Math.round(fontSize * 100)}%</span>
                      </div>
                      <button
                        onClick={increaseFontSize}
                        disabled={fontSize >= 1.5}
                        className="w-10 h-10 rounded-full bg-[#111112] flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Increase text size"
                      >
                        <span className="text-xl font-bold">A+</span>
                      </button>
                      <button
                        onClick={resetFontSize}
                        className="ml-2 px-3 py-1 text-xs bg-[#111112] rounded-md text-neutral-400 hover:text-white"
                        aria-label="Reset text size"
                      >
                        Reset
                      </button>
                    </div>
                  </div>

                  {/* High contrast */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-medium mb-4">
                      <Eye className="w-4 h-4" />
                      <span>Display Options</span>
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <label htmlFor="high-contrast" className="text-neutral-300">
                          High Contrast
                        </label>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-[#111112]">
                          <input
                            type="checkbox"
                            id="high-contrast"
                            checked={highContrast}
                            onChange={(e) => {
                              setHighContrast(e.target.checked)
                              if (window.announce) {
                                window.announce(`High contrast mode ${e.target.checked ? "enabled" : "disabled"}`)
                              }
                            }}
                            className="sr-only"
                          />
                          <span
                            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                              highContrast ? "translate-x-6 bg-accent-blue" : "bg-neutral-400"
                            }`}
                          ></span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <label htmlFor="dyslexic-font" className="text-neutral-300">
                          Dyslexia Friendly Font
                        </label>
                        <div className="relative inline-block w-12 h-6 rounded-full bg-[#111112]">
                          <input
                            type="checkbox"
                            id="dyslexic-font"
                            checked={dyslexicFont}
                            onChange={(e) => {
                              setDyslexicFont(e.target.checked)
                              if (window.announce) {
                                window.announce(`Dyslexia friendly font ${e.target.checked ? "enabled" : "disabled"}`)
                              }
                            }}
                            className="sr-only"
                          />
                          <span
                            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                              dyslexicFont ? "translate-x-6 bg-accent-blue" : "bg-neutral-400"
                            }`}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Motion & Animation */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-medium mb-4">
                      <Zap className="w-4 h-4" />
                      <span>Motion & Animation</span>
                    </h3>
                    <div className="flex items-center justify-between">
                      <label htmlFor="reduced-motion" className="text-neutral-300">
                        Reduced Motion
                      </label>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-[#111112]">
                        <input
                          type="checkbox"
                          id="reduced-motion"
                          checked={reducedMotion}
                          onChange={(e) => {
                            setReducedMotion(e.target.checked)
                            if (window.announce) {
                              window.announce(`Reduced motion ${e.target.checked ? "enabled" : "disabled"}`)
                            }
                          }}
                          className="sr-only"
                        />
                        <span
                          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                            reducedMotion ? "translate-x-6 bg-accent-blue" : "bg-neutral-400"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/* Focus & Navigation */}
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-medium mb-4">
                      <MousePointer className="w-4 h-4" />
                      <span>Focus & Navigation</span>
                    </h3>
                    <div className="flex items-center justify-between">
                      <label htmlFor="focus-visible" className="text-neutral-300">
                        Enhanced Focus Indicators
                      </label>
                      <div className="relative inline-block w-12 h-6 rounded-full bg-[#111112]">
                        <input
                          type="checkbox"
                          id="focus-visible"
                          checked={focusVisible}
                          onChange={(e) => {
                            setFocusVisible(e.target.checked)
                            if (window.announce) {
                              window.announce(`Enhanced focus indicators ${e.target.checked ? "enabled" : "disabled"}`)
                            }
                          }}
                          className="sr-only"
                        />
                        <span
                          className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                            focusVisible ? "translate-x-6 bg-accent-blue" : "bg-neutral-400"
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>

                  {/* Reset all */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={resetAll}
                      className="w-full py-2 px-4 bg-[#111112] rounded-lg text-neutral-400 hover:text-white transition-colors"
                      aria-label="Reset all accessibility settings"
                    >
                      Reset All Settings
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </FocusTrap>
        </div>
      )}
    </>
  )
}
