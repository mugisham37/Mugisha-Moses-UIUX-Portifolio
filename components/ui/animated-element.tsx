"use client"

import { useRef, useEffect, useState, useCallback, memo, type ReactNode, type RefObject } from "react"
import { type AnimationVariant, type AnimationOptions, getAnimationStyles } from "@/lib/animation-utils"
import type { JSX } from "react/jsx-runtime"
import type { ElementType } from "react"

interface AnimatedElementProps {
  children: ReactNode
  variant?: AnimationVariant
  options?: AnimationOptions
  className?: string
  as?: ElementType
  disabled?: boolean
}

// Hook to check if reduced motion is preferred
const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false)
  
  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    // Check localStorage for performance mode setting
    const storedPerformanceMode = localStorage.getItem('performanceMode')
    
    setReducedMotion(
      prefersReducedMotion || 
      storedPerformanceMode === 'high-performance'
    )
    
    // Listen for changes to the prefers-reduced-motion media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleMediaChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])
  
  return reducedMotion
}

export const AnimatedElement = memo(({
  children,
  variant = "fadeIn",
  options,
  className = "",
  as: Component = "div",
  disabled = false,
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<Element>(null)
  const reducedMotion = useReducedMotion()
  const { initial, animate, transition } = getAnimationStyles(variant, options)
  
  // Skip animations if reduced motion is preferred or animations are disabled
  const skipAnimation = reducedMotion || disabled
  
  const observerCallback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        // Only disconnect if once is true (default)
        if ((options?.once !== false)) {
          // Using a type assertion here since we know observer exists in this context
          (observerCallback as any).observer?.disconnect()
        }
      } else if (options?.once === false) {
        setIsVisible(false)
      }
    },
    [options?.once]
  )
  
  useEffect(() => {
    // Skip setting up observer if animations are disabled
    if (skipAnimation) {
      setIsVisible(true)
      return
    }
    
    const { threshold = 0.1, rootMargin = "0px" } = options || {}
    
    const observer = new IntersectionObserver(
      observerCallback,
      {
        threshold,
        rootMargin,
      }
    )
    
    // Store observer reference for cleanup
    ;(observerCallback as any).observer = observer
    
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [observerCallback, options, skipAnimation])
  
  // If animations are disabled, render without animation classes
  if (skipAnimation) {
    return <Component className={className}>{children}</Component>
  }
  
  return (
    <Component
      ref={ref}
      className={`${className} ${isVisible ? animate : initial} ${transition}`}
    >
      {children}
    </Component>
  )
})

AnimatedElement.displayName = "AnimatedElement"
