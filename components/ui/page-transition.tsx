"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { useState, useEffect, useCallback, memo } from "react"
import { AnimatePresence, motion, LazyMotion, domAnimation } from "framer-motion"

interface PageTransitionProps {
  children: React.ReactNode
}

// Performance settings from localStorage or default to high performance
const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(true) // Default to true for better initial performance
  
  useEffect(() => {
    try {
      // Check user preference for reduced motion
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Check localStorage for performance mode setting
      const storedPerformanceMode = localStorage.getItem('performanceMode')
      
      setReducedMotion(
        prefersReducedMotion || 
        storedPerformanceMode === 'high-performance' ||
        storedPerformanceMode === null // Default to high performance if not set
      )
    } catch (error) {
      // If there's any error, default to reduced motion for better performance
      console.error('Error checking motion preferences:', error)
      setReducedMotion(true)
    }
  }, [])
  
  return reducedMotion
}

export const PageTransition = memo(({ children }: PageTransitionProps) => {
  const pathname = usePathname()
  const [isFirstMount, setIsFirstMount] = useState(true)
  const reducedMotion = useReducedMotion()
  
  useEffect(() => {
    if (isFirstMount) {
      setIsFirstMount(false)
    }
  }, [isFirstMount])
  
  // Skip animations for better performance if reduced motion is preferred
  if (reducedMotion) {
    return <>{children}</>
  }
  
  // Use LazyMotion to dynamically load animation features only when needed
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={isFirstMount ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.15, // Further reduced duration for faster transitions
            ease: "easeInOut" 
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </LazyMotion>
  )
})

PageTransition.displayName = "PageTransition"
