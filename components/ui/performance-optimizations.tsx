"use client"

import { useEffect } from "react"

export function PerformanceOptimizations() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Lazy load images that are off-screen
    const lazyLoadImages = () => {
      const lazyImages = document.querySelectorAll("img[data-src]")

      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src || ""
              img.removeAttribute("data-src")
              imageObserver.unobserve(img)
            }
          })
        })

        lazyImages.forEach((img) => {
          imageObserver.observe(img)
        })
      } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach((img) => {
          const imgElement = img as HTMLImageElement
          imgElement.src = imgElement.dataset.src || ""
          imgElement.removeAttribute("data-src")
        })
      }
    }

    // Defer non-critical CSS
    const deferNonCriticalCSS = () => {
      const nonCriticalStyles = document.querySelectorAll('link[rel="stylesheet"][data-defer="true"]')

      nonCriticalStyles.forEach((link) => {
        const linkElement = link as HTMLLinkElement
        linkElement.media = "print"
        setTimeout(() => {
          linkElement.media = "all"
        }, 1000)
      })
    }

    // Preload important resources
    const preloadImportantResources = () => {
      const resources = [
        { type: "image", url: "/images/hero-image.jpg" },
        { type: "font", url: "/fonts/inter-var.woff2" },
      ]

      resources.forEach((resource) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.href = resource.url

        if (resource.type === "image") {
          link.as = "image"
        } else if (resource.type === "font") {
          link.as = "font"
          link.type = "font/woff2"
          link.crossOrigin = "anonymous"
        }

        document.head.appendChild(link)
      })
    }

    // Optimize event listeners
    const optimizeEventListeners = () => {
      // Debounce function
      const debounce = (func: Function, wait: number) => {
        let timeout: ReturnType<typeof setTimeout> | null = null

        return function executedFunction(...args: any[]) {
          const later = () => {
            timeout = null
            func(...args)
          }

          if (timeout) clearTimeout(timeout)
          timeout = setTimeout(later, wait)
        }
      }

      // Throttle function
      const throttle = (func: Function, limit: number) => {
        let inThrottle: boolean

        return function executedFunction(...args: any[]) {
          if (!inThrottle) {
            func(...args)
            inThrottle = true
            setTimeout(() => {
              inThrottle = false
            }, limit)
          }
        }
      }

      // Apply to scroll and resize events
      const scrollHandler = debounce(() => {
        // Handle scroll events
      }, 100)

      const resizeHandler = throttle(() => {
        // Handle resize events
      }, 100)

      window.addEventListener("scroll", scrollHandler)
      window.addEventListener("resize", resizeHandler)

      return () => {
        window.removeEventListener("scroll", scrollHandler)
        window.removeEventListener("resize", resizeHandler)
      }
    }

    // Initialize optimizations
    lazyLoadImages()
    deferNonCriticalCSS()
    preloadImportantResources()
    const cleanupEventListeners = optimizeEventListeners()

    // Re-run optimizations when DOM changes
    const observer = new MutationObserver((mutations) => {
      let shouldUpdateImages = false

      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          shouldUpdateImages = true
        }
      })

      if (shouldUpdateImages) {
        lazyLoadImages()
      }
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      cleanupEventListeners()
    }
  }, [])

  return null // This component doesn't render anything
}
