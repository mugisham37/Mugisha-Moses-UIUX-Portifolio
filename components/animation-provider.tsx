"use client"

import type React from "react"

import { useEffect } from "react"

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    // Enhanced cursor trail effect
    const cursorTrail = document.createElement("div")
    cursorTrail.className = "cursor-trail"
    document.body.appendChild(cursorTrail)

    let mouseX = 0
    let mouseY = 0
    let trailX = 0
    let trailY = 0

    const updateCursor = () => {
      trailX += (mouseX - trailX) * 0.1
      trailY += (mouseY - trailY) * 0.1
      cursorTrail.style.left = trailX + "px"
      cursorTrail.style.top = trailY + "px"
      requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    document.addEventListener("mousemove", handleMouseMove)
    updateCursor()

    // Enhanced parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll(".parallax-element")

      parallaxElements.forEach((element) => {
        const speed = Number.parseFloat((element as HTMLElement).dataset.speed || "0.5")
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.transform = `translateY(${yPos}px)`
      })

      // Add scroll-based animations for cards
      const cards = document.querySelectorAll(".project-card, .service-card")
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0

        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
          const scale = 0.95 + scrollProgress * 0.05
          ;(card as HTMLElement).style.transform = `scale(${scale})`
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    // Magnetic hover effect for buttons
    const magneticElements = document.querySelectorAll(".magnetic-hover")

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      target.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    }

    const handleMouseMoveForMagnetic = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const rect = target.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      target.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) translateY(-2px)`
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      target.style.transform = "translate(0px, 0px) translateY(0px)"
    }

    magneticElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mousemove", handleMouseMoveForMagnetic)
      element.addEventListener("mouseleave", handleMouseLeave)
    })

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const href = link.getAttribute("href")
        if (href && href !== "#") {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }
      })
    })

    return () => {
      observer.disconnect()
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      if (cursorTrail.parentNode) {
        cursorTrail.parentNode.removeChild(cursorTrail)
      }
      magneticElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mousemove", handleMouseMoveForMagnetic)
        element.removeEventListener("mouseleave", handleMouseLeave)
      })
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleMouseMove)
      })
    }
  }, [])

  return <>{children}</>
}
