"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FocusTrapProps {
  children: React.ReactNode
  active?: boolean
  initialFocus?: React.RefObject<HTMLElement>
}

export function FocusTrap({ children, active = true, initialFocus }: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!active) return

    // Get all focusable elements
    const getFocusableElements = () => {
      if (!containerRef.current) return []

      return Array.from(
        containerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled")) as HTMLElement[]
    }

    // Set initial focus
    const setInitialFocus = () => {
      if (initialFocus && initialFocus.current) {
        initialFocus.current.focus()
      } else {
        const focusableElements = getFocusableElements()
        if (focusableElements.length > 0) {
          focusableElements[0].focus()
        }
      }
    }

    // Handle tab key to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return

      const focusableElements = getFocusableElements()
      if (focusableElements.length === 0) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      // Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        }
      }
      // Tab
      else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    // Save the previously focused element
    const previouslyFocused = document.activeElement as HTMLElement

    // Set initial focus after a short delay to ensure the DOM is ready
    setTimeout(setInitialFocus, 50)

    // Add event listener
    document.addEventListener("keydown", handleKeyDown)

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      // Restore focus when unmounted
      if (previouslyFocused) {
        previouslyFocused.focus()
      }
    }
  }, [active, initialFocus])

  return <div ref={containerRef}>{children}</div>
}
