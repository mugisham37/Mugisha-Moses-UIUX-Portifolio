"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ParallaxElement({ children, speed = 0.2, direction = "up", className = "" }: ParallaxElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], () => {
    switch (direction) {
      case "left":
        return [100 * speed, -100 * speed]
      case "right":
        return [-100 * speed, 100 * speed]
      default:
        return [0, 0]
    }
  })

  const y = useTransform(scrollYProgress, [0, 1], () => {
    switch (direction) {
      case "up":
        return [100 * speed, -100 * speed]
      case "down":
        return [-100 * speed, 100 * speed]
      default:
        return [0, 0]
    }
  })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ x, y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  )
}
