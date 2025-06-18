"use client"

import { useEffect } from "react"

export function MicroInteractions() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Button hover effects
    const addButtonEffects = () => {
      const buttons = document.querySelectorAll("button, a.btn-primary, a.btn-secondary, a.btn-outline")

      buttons.forEach((button) => {
        // Add ripple effect
        button.addEventListener("click", (e) => {
          const rect = (e.target as HTMLElement).getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top

          const ripple = document.createElement("span")
          ripple.style.left = `${x}px`
          ripple.style.top = `${y}px`
          ripple.className = "absolute rounded-full bg-white/30 pointer-events-none"
          ripple.style.width = ripple.style.height = "0px"
          ripple.style.transform = "translate(-50%, -50%)"

          button.appendChild(ripple)

          const size = Math.max(button.clientWidth, button.clientHeight)
          ripple.style.width = ripple.style.height = `${size * 2}px`

          ripple.classList.add("animate-ripple")

          setTimeout(() => {
            ripple.remove()
          }, 600)
        })

        // Add subtle scale effect
        button.addEventListener("mousedown", () => {
          button.classList.add("scale-[0.98]")
          button.classList.add("transition-transform")
          button.classList.add("duration-100")
        })

        button.addEventListener("mouseup", () => {
          button.classList.remove("scale-[0.98]")
        })

        button.addEventListener("mouseleave", () => {
          button.classList.remove("scale-[0.98]")
        })
      })
    }

    // Image hover effects
    const addImageEffects = () => {
      const images = document.querySelectorAll(".hover-effect img")

      images.forEach((img) => {
        const parent = img.parentElement
        if (!parent) return

        parent.classList.add("overflow-hidden", "relative")

        // Create overlay
        const overlay = document.createElement("div")
        overlay.className =
          "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
        parent.appendChild(overlay)

        // Add hover effect
        parent.addEventListener("mouseenter", () => {
          overlay.classList.remove("opacity-0")
          overlay.classList.add("opacity-100")
          img.classList.add("scale-105", "transition-transform", "duration-700")
        })

        parent.addEventListener("mouseleave", () => {
          overlay.classList.add("opacity-0")
          overlay.classList.remove("opacity-100")
          img.classList.remove("scale-105")
        })
      })
    }

    // Link hover effects
    const addLinkEffects = () => {
      const links = document.querySelectorAll("a:not(.btn-primary):not(.btn-secondary):not(.btn-outline)")

      links.forEach((link) => {
        // Skip links that already have hover effects
        if (link.classList.contains("hover-effect-applied")) return

        // Add hover effect
        link.addEventListener("mouseenter", () => {
          link.classList.add("relative", "overflow-hidden")

          // Create underline effect if it doesn't exist
          if (!link.querySelector(".link-underline")) {
            const underline = document.createElement("span")
            underline.className =
              "link-underline absolute bottom-0 left-0 w-full h-[1px] bg-current transform -translate-x-full transition-transform duration-300"
            link.appendChild(underline)
          }

          const underline = link.querySelector(".link-underline")
          if (underline) {
            underline.classList.remove("-translate-x-full")
            underline.classList.add("translate-x-0")
          }
        })

        link.addEventListener("mouseleave", () => {
          const underline = link.querySelector(".link-underline")
          if (underline) {
            underline.classList.remove("translate-x-0")
            underline.classList.add("translate-x-full")
          }
        })

        link.classList.add("hover-effect-applied")
      })
    }

    // Card hover effects
    const addCardEffects = () => {
      const cards = document.querySelectorAll(".card-hover")

      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          card.classList.add(
            "shadow-lg",
            "shadow-accent-blue/10",
            "translate-y-[-5px]",
            "transition-all",
            "duration-300",
          )
        })

        card.addEventListener("mouseleave", () => {
          card.classList.remove("shadow-lg", "shadow-accent-blue/10", "translate-y-[-5px]")
        })
      })
    }

    // Initialize all effects
    const initEffects = () => {
      addButtonEffects()
      addImageEffects()
      addLinkEffects()
      addCardEffects()
    }

    // Run on initial load
    initEffects()

    // Re-run when DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false
      mutations.forEach((mutation) => {
        if (mutation.type === "childList" || mutation.type === "attributes") {
          shouldUpdate = true
        }
      })

      if (shouldUpdate) {
        initEffects()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    })

    // Add ripple animation to CSS
    const style = document.createElement("style")
    style.textContent = `
      @keyframes ripple {
        from {
          opacity: 1;
          transform: translate(-50%, -50%) scale(0);
        }
        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      .animate-ripple {
        animation: ripple 0.6s linear forwards;
      }
    `
    document.head.appendChild(style)

    return () => {
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  return null // This component doesn't render anything
}
