"use client"

import { useState, useEffect } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { Palette, X, Check, Undo2 } from "lucide-react"
import { FocusTrap } from "@/components/ui/focus-trap"

interface ColorOption {
  name: string
  value: string
  textColor: string
}

const colorOptions: ColorOption[] = [
  { name: "Blue", value: "#3b82f6", textColor: "text-[#3b82f6]" },
  { name: "Purple", value: "#8b5cf6", textColor: "text-[#8b5cf6]" },
  { name: "Pink", value: "#ec4899", textColor: "text-[#ec4899]" },
  { name: "Orange", value: "#f97316", textColor: "text-[#f97316]" },
  { name: "Green", value: "#10b981", textColor: "text-[#10b981]" },
  { name: "Teal", value: "#14b8a6", textColor: "text-[#14b8a6]" },
  { name: "Cyan", value: "#06b6d4", textColor: "text-[#06b6d4]" },
  { name: "Red", value: "#ef4444", textColor: "text-[#ef4444]" },
]

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string>("#3b82f6")
  const [fontOption, setFontOption] = useState<string>("default")

  // Apply theme settings when they change
  useEffect(() => {
    if (typeof window === "undefined") return

    // Apply accent color
    document.documentElement.style.setProperty("--accent-blue", selectedColor)

    // Apply font option
    if (fontOption === "default") {
      document.documentElement.classList.remove("alt-font")
      document.documentElement.classList.remove("minimal-font")
    } else if (fontOption === "alt") {
      document.documentElement.classList.add("alt-font")
      document.documentElement.classList.remove("minimal-font")
    } else if (fontOption === "minimal") {
      document.documentElement.classList.remove("alt-font")
      document.documentElement.classList.add("minimal-font")
    }
  }, [selectedColor, fontOption])

  // Load saved preferences
  useEffect(() => {
    if (typeof window === "undefined") return

    const savedColor = localStorage.getItem("theme-accent-color")
    const savedFont = localStorage.getItem("theme-font-option")

    if (savedColor) setSelectedColor(savedColor)
    if (savedFont) setFontOption(savedFont)
  }, [])

  // Save preferences when they change
  useEffect(() => {
    if (typeof window === "undefined") return

    localStorage.setItem("theme-accent-color", selectedColor)
    localStorage.setItem("theme-font-option", fontOption)
  }, [selectedColor, fontOption])

  const resetTheme = () => {
    setSelectedColor("#3b82f6")
    setFontOption("default")
    if (window.announce) {
      window.announce("Theme reset to default")
    }
  }

  return (
    <>
      {/* Theme customizer button */}
      <button
        onClick={() => {
          setIsOpen(true)
          if (window.announce) {
            window.announce("Theme customizer opened")
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-accent-blue flex items-center justify-center text-white shadow-lg hover:bg-accent-blue/90 transition-colors"
        aria-label="Customize theme"
        data-theme-customizer-trigger
      >
        <Palette className="w-6 h-6" />
      </button>

      {/* Theme customizer panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <FocusTrap active={isOpen}>
            <AnimatedElement variant="fadeInUp" className="w-full max-w-md mx-4">
              <div className="bg-[#1a1a1d] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Palette className="w-5 h-5 text-accent-blue" />
                    <h2 className="text-lg font-medium">Customize Theme</h2>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false)
                      if (window.announce) {
                        window.announce("Theme customizer closed")
                      }
                    }}
                    className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close theme customizer"
                    data-modal-close
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Accent Color */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">Accent Color</h3>
                    <div className="grid grid-cols-4 gap-3">
                      {colorOptions.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => {
                            setSelectedColor(color.value)
                            if (window.announce) {
                              window.announce(`Accent color set to ${color.name}`)
                            }
                          }}
                          className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all ${
                            selectedColor === color.value
                              ? "ring-2 ring-white ring-offset-2 ring-offset-[#1a1a1d]"
                              : "hover:scale-105"
                          }`}
                          style={{ backgroundColor: color.value }}
                          aria-label={`Set accent color to ${color.name}`}
                          aria-pressed={selectedColor === color.value}
                        >
                          {selectedColor === color.value && <Check className="w-5 h-5 text-white" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Font Style */}
                  <div>
                    <h3 className="text-sm font-medium mb-4">Font Style</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          setFontOption("default")
                          if (window.announce) {
                            window.announce("Font style set to default")
                          }
                        }}
                        className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors ${
                          fontOption === "default"
                            ? "bg-accent-blue text-white"
                            : "bg-[#111112] text-neutral-300 hover:text-white"
                        }`}
                        aria-pressed={fontOption === "default"}
                      >
                        <span className="font-sans">Default</span>
                        {fontOption === "default" && <Check className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => {
                          setFontOption("alt")
                          if (window.announce) {
                            window.announce("Font style set to alternative")
                          }
                        }}
                        className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors ${
                          fontOption === "alt"
                            ? "bg-accent-blue text-white"
                            : "bg-[#111112] text-neutral-300 hover:text-white"
                        }`}
                        aria-pressed={fontOption === "alt"}
                      >
                        <span className="font-serif">Alternative</span>
                        {fontOption === "alt" && <Check className="w-5 h-5" />}
                      </button>
                      <button
                        onClick={() => {
                          setFontOption("minimal")
                          if (window.announce) {
                            window.announce("Font style set to minimal")
                          }
                        }}
                        className={`w-full p-3 rounded-lg flex items-center justify-between transition-colors ${
                          fontOption === "minimal"
                            ? "bg-accent-blue text-white"
                            : "bg-[#111112] text-neutral-300 hover:text-white"
                        }`}
                        aria-pressed={fontOption === "minimal"}
                      >
                        <span className="font-mono">Minimal</span>
                        {fontOption === "minimal" && <Check className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Reset */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={resetTheme}
                      className="w-full py-2 px-4 bg-[#111112] rounded-lg text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-2"
                      aria-label="Reset theme to default"
                    >
                      <Undo2 className="w-4 h-4" />
                      <span>Reset to Default</span>
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
