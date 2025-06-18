"use client"

import { useEffect } from "react"

export function AccessibilityEnhancements() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Add role="button" to elements that act like buttons
    const addButtonRoles = () => {
      const buttonLikeElements = document.querySelectorAll('div[onclick], span[onclick], a[href="#"]')

      buttonLikeElements.forEach((element) => {
        if (!element.getAttribute("role")) {
          element.setAttribute("role", "button")
        }

        if (!element.getAttribute("tabindex") && element.tagName !== "A") {
          element.setAttribute("tabindex", "0")
        }
      })
    }

    // Add missing alt text to images
    const addMissingAltText = () => {
      const images = document.querySelectorAll("img:not([alt])")

      images.forEach((img) => {
        const imgElement = img as HTMLImageElement
        let altText = ""

        // Try to generate alt text from context
        if (imgElement.src) {
          const srcParts = imgElement.src.split("/")
          const fileName = srcParts[srcParts.length - 1].split(".")[0]
          altText = fileName.replace(/[-_]/g, " ")
        }

        imgElement.alt = altText || "Image"
      })
    }

    // Enhance form accessibility
    const enhanceFormAccessibility = () => {
      // Find inputs without associated labels
      const inputs = document.querySelectorAll("input, textarea, select")

      inputs.forEach((input) => {
        const inputElement = input as HTMLInputElement
        const id = inputElement.id

        if (!id) {
          // Generate a unique ID
          const uniqueId = `input-${Math.random().toString(36).substring(2, 9)}`
          inputElement.id = uniqueId
        }

        // Check if there's a label for this input
        const hasLabel = document.querySelector(`label[for="${inputElement.id}"]`)

        if (!hasLabel) {
          // Try to find a parent label
          const parentLabel = inputElement.closest("label")

          if (!parentLabel) {
            // Try to find a preceding text node or element that might be a label
            const previousElement = inputElement.previousElementSibling

            if (previousElement && !previousElement.querySelector("input, textarea, select")) {
              // Create a label element
              const label = document.createElement("label")
              label.htmlFor = inputElement.id
              label.className = "sr-only" // Screen reader only

              // Try to determine label text
              let labelText = ""

              if (inputElement.placeholder) {
                labelText = inputElement.placeholder
              } else if (inputElement.name) {
                labelText = inputElement.name.replace(/[-_]/g, " ")
              }

              label.textContent = labelText || "Input field"

              // Insert the label before the input
              inputElement.parentNode?.insertBefore(label, inputElement)
            }
          }
        }
      })
    }

    // Add keyboard navigation for custom components
    const enhanceKeyboardNavigation = () => {
      // Add keyboard support for custom dropdowns
      const dropdownTriggers = document.querySelectorAll("[data-dropdown-trigger]")

      dropdownTriggers.forEach((trigger) => {
        trigger.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            ;(trigger as HTMLElement).click()
          }
        })
      })

      // Add keyboard support for custom tabs
      const tabTriggers = document.querySelectorAll('[role="tab"]')

      tabTriggers.forEach((tab) => {
        tab.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault()

            const tabs = Array.from(tabTriggers)
            const currentIndex = tabs.indexOf(tab)
            let nextIndex

            if (e.key === "ArrowRight") {
              nextIndex = (currentIndex + 1) % tabs.length
            } else {
              nextIndex = (currentIndex - 1 + tabs.length) % tabs.length
            }
            ;(tabs[nextIndex] as HTMLElement).focus()
            ;(tabs[nextIndex] as HTMLElement).click()
          }
        })
      })
    }

    // Initialize enhancements
    const initEnhancements = () => {
      addButtonRoles()
      addMissingAltText()
      enhanceFormAccessibility()
      enhanceKeyboardNavigation()
    }

    // Run on initial load
    initEnhancements()

    // Re-run when DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          shouldUpdate = true
        }
      })

      if (shouldUpdate) {
        initEnhancements()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
