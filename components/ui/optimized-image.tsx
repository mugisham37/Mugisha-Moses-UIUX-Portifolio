"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { Loader2 } from "lucide-react"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  lowQualitySrc?: string
  loadingComponent?: React.ReactNode
  errorComponent?: React.ReactNode
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  loadingComponent,
  errorComponent,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src)

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)
    setCurrentSrc(lowQualitySrc || src)
  }, [src, lowQualitySrc])

  const handleLoad = () => {
    setIsLoading(false)
    if (lowQualitySrc && currentSrc === lowQualitySrc) {
      setCurrentSrc(src)
    }
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
    setCurrentSrc(fallbackSrc)
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#1a1a1d]/50 backdrop-blur-sm">
          {loadingComponent || <Loader2 className="w-8 h-8 text-accent-blue animate-spin" />}
        </div>
      )}

      {hasError && errorComponent && <div className="absolute inset-0">{errorComponent}</div>}

      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-30" : "opacity-100"}`}
        onLoadingComplete={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
