"use client"

import { useEffect, useState } from "react"

export function KeyboardNavigationHelper() {
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false)

  useEffect(() => {
    // Add a class to the body when user is navigating with keyboard
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tab key is pressed
      if (e.key === "Tab") {
        setIsUsingKeyboard(true)
        document.body.classList.add("using-keyboard")
      }
    }

    // Remove the class when user clicks with mouse
    const handleMouseDown = () => {
      setIsUsingKeyboard(false)
      document.body.classList.remove("using-keyboard")
    }

    // Add event listeners
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleMouseDown)

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("mousedown", handleMouseDown)
    }
  }, [])

  // Add keyboard shortcuts for common actions
  useEffect(() => {
    const handleKeyboardShortcuts = (e: KeyboardEvent) => {
      // Only process if using keyboard navigation
      if (!isUsingKeyboard) return

      // Ctrl/Cmd + / to open search
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault()
        const searchButton = document.querySelector("[data-search-trigger]") as HTMLButtonElement | null
        if (searchButton) {
          searchButton.click()
        }
      }

      // Escape key to close modals
      if (e.key === "Escape") {
        const closeButtons = document.querySelectorAll("[data-modal-close]") as NodeListOf<HTMLButtonElement>
        if (closeButtons.length > 0) {
          closeButtons[0].click()
        }
      }

      // Alt + A to open accessibility panel
      if (e.altKey && e.key === "a") {
        e.preventDefault()
        const accessibilityButton = document.querySelector("[data-accessibility-trigger]") as HTMLButtonElement | null
        if (accessibilityButton) {
          accessibilityButton.click()
        }
      }
    }

    document.addEventListener("keydown", handleKeyboardShortcuts)

    return () => {
      document.removeEventListener("keydown", handleKeyboardShortcuts)
    }
  }, [isUsingKeyboard])

  return null // This component doesn't render anything
}
