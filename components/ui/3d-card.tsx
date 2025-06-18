"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  border?: boolean
  shadow?: boolean
}

export function ThreeDCard({
  children,
  className = "",
  intensity = 10,
  border = true,
  shadow = true,
}: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    const percentX = (mouseX - centerX) / (rect.width / 2)
    const percentY = (mouseY - centerY) / (rect.height / 2)

    setRotateX(-percentY * intensity)
    setRotateY(percentX * intensity)
  }

  const handleMouseEnter = () => {
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className} ${border ? "border border-white/10" : ""} ${
        shadow ? "shadow-lg" : ""
      } rounded-xl2 overflow-hidden`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX,
        rotateY,
        scale,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      }}
    >
      <div className="relative z-10 transform-style-3d">{children}</div>
      {shadow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 opacity-0 rounded-xl2"
          animate={{
            opacity: scale > 1 ? 0.15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        />
      )}
    </motion.div>
  )
}
