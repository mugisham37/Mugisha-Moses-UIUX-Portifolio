"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { AnimatedElement } from "@/components/ui/animated-element"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ClientLogosCarouselProps {
  title?: string
  subtitle?: string
  logos?: { id: string; name: string; image: string }[]
  autoplay?: boolean
  autoplaySpeed?: number
}

export function ClientLogosCarousel({
  title,
  subtitle,
  logos = [],
  autoplay = true,
  autoplaySpeed = 3000,
}: ClientLogosCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Default logos if none provided
  const defaultLogos = [
    { id: "1", name: "TechCorp", image: "/placeholder.svg?height=80&width=160" },
    { id: "2", name: "FinanceHub", image: "/placeholder.svg?height=80&width=160" },
    { id: "3", name: "HealthPlus", image: "/placeholder.svg?height=80&width=160" },
    { id: "4", name: "EduLearn", image: "/placeholder.svg?height=80&width=160" },
    { id: "5", name: "RetailPro", image: "/placeholder.svg?height=80&width=160" },
    { id: "6", name: "MediaGroup", image: "/placeholder.svg?height=80&width=160" },
    { id: "7", name: "TravelWise", image: "/placeholder.svg?height=80&width=160" },
    { id: "8", name: "FoodDelight", image: "/placeholder.svg?height=80&width=160" },
  ]

  const displayLogos = logos.length > 0 ? logos : defaultLogos
  const totalSlides = Math.ceil(displayLogos.length / 4)

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [autoplay, autoplaySpeed, isHovered, totalSlides])

  const goToSlide = (index: number) => {
    let newIndex = index
    if (newIndex < 0) newIndex = totalSlides - 1
    if (newIndex >= totalSlides) newIndex = 0
    setCurrentIndex(newIndex)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToSlide(currentIndex + 1)
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToSlide(currentIndex - 1)
    }
  }

  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-4">{title}</h2>
            {subtitle && <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{subtitle}</p>}
          </AnimatedElement>
        </div>
      )}

      <div className="relative">
        <div
          ref={carouselRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {displayLogos.slice(slideIndex * 4, slideIndex * 4 + 4).map((logo, logoIndex) => (
                    <AnimatedElement
                      key={logo.id}
                      variant="fadeIn"
                      delay={logoIndex * 0.1}
                      className="flex items-center justify-center"
                    >
                      <div className="bg-[#1a1a1d] border border-white/10 rounded-lg p-6 h-24 flex items-center justify-center hover:border-accent-blue/30 transition-colors">
                        <img
                          src={logo.image || "/placeholder.svg"}
                          alt={logo.name}
                          className="max-h-12 max-w-full opacity-70 hover:opacity-100 transition-opacity"
                        />
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1a1a1d] border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue/20 hover:border-accent-blue/30 transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goToSlide(currentIndex + 1)}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-[#1a1a1d] border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue/20 hover:border-accent-blue/30 transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Dots navigation */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-accent-blue w-6" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      )}
    </div>
  )
}
