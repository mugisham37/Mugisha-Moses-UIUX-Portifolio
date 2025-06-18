"use client"

import { useEffect, useState, useCallback } from "react"

// Performance mode types
type PerformanceMode = 'balanced' | 'high-performance' | 'max-quality'

export function PerformanceOptimizer() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const [connectionType, setConnectionType] = useState<string | null>(null)
  const [performanceMode, setPerformanceMode] = useState<PerformanceMode>('balanced')

  // Detect low-end devices
  const detectLowEndDevice = useCallback(() => {
    // Check for device memory (available in Chrome)
    const memory = (navigator as any).deviceMemory
    if (memory && memory <= 2) {
      return true
    }

    // Check for hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 0
    if (cores <= 4) {
      return true
    }

    return false
  }, [])

  // Detect connection type
  const detectConnectionType = useCallback(() => {
    const connection =
      (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    if (connection) {
      return connection.effectiveType || connection.type || null
    }
    return null
  }, [])

  // Apply optimizations based on device, connection, and user preferences
  const applyOptimizations = useCallback(() => {
    try {
      // Default to high-performance mode for better initial experience
      let storedMode = localStorage.getItem('performanceMode') as PerformanceMode | null
      
      // If no mode is set, default to high-performance
      if (!storedMode) {
        storedMode = 'high-performance'
        localStorage.setItem('performanceMode', storedMode)
      }
      
      if (storedMode) {
        setPerformanceMode(storedMode)
      }

      const lowEnd = detectLowEndDevice()
      const connection = detectConnectionType()

      setIsLowEndDevice(lowEnd)
      setConnectionType(connection)

      // Remove all optimization classes first
      document.documentElement.classList.remove(
        'reduced-motion',
        'low-image-quality',
        'aggressive-lazy-loading',
        'high-performance-mode',
        'max-quality-mode'
      )

      // Apply user preference first
      if (storedMode === 'high-performance' || !storedMode) {
        document.documentElement.classList.add('reduced-motion')
        document.documentElement.classList.add('low-image-quality')
        document.documentElement.classList.add('aggressive-lazy-loading')
        document.documentElement.classList.add('high-performance-mode')
        return // Skip other optimizations if user has explicitly chosen high-performance
      } else if (storedMode === 'max-quality') {
        document.documentElement.classList.add('max-quality-mode')
        return // Skip other optimizations if user has explicitly chosen max-quality
      }

      // Apply optimizations for low-end devices
      if (lowEnd) {
        // Disable animations
        document.documentElement.classList.add('reduced-motion')

        // Reduce image quality
        document.documentElement.classList.add('low-image-quality')
      }

      // Apply optimizations for slow connections
      if (connection === 'slow-2g' || connection === '2g' || connection === '3g') {
        // Lazy load all images
        document.documentElement.classList.add('aggressive-lazy-loading')

        // Reduce image quality
        document.documentElement.classList.add('low-image-quality')
      }
    } catch (error) {
      console.error('Error applying performance optimizations:', error)
      // Apply safe defaults in case of error
      document.documentElement.classList.add('reduced-motion')
      document.documentElement.classList.add('aggressive-lazy-loading')
    }
  }, [detectLowEndDevice, detectConnectionType])

  // Implement resource hints
  const addResourceHints = useCallback(() => {
    // Add preconnect for critical domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      // Add other domains your site connects to
    ]

    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = domain
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })
  }, [])

  // Implement script loading optimization
  const optimizeScriptLoading = useCallback(() => {
    // Find all script tags without async or defer
    const scripts = document.querySelectorAll('script:not([async]):not([defer])')
    
    // Add defer to non-critical scripts
    scripts.forEach(script => {
      if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
        script.setAttribute('defer', '')
      }
    })
  }, [])

  // Implement font loading optimization
  const optimizeFontLoading = useCallback(() => {
    // Add font-display: swap to all font faces
    const style = document.createElement('style')
    style.textContent = `
      @font-face {
        font-display: swap !important;
      }
    `
    document.head.appendChild(style)
  }, [])

  // Implement intersection observer for lazy loading with improved performance
  const setupIntersectionObserver = useCallback(() => {
    if ('IntersectionObserver' in window) {
      try {
        // Use a more aggressive rootMargin for earlier loading
        // but only load items that are closer to the viewport
        const lazyLoadObserver = new IntersectionObserver((entries) => {
          // Process multiple entries in a single animation frame for better performance
          requestAnimationFrame(() => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const target = entry.target as HTMLElement
                
                // Handle images
                if (target.tagName === 'IMG') {
                  const img = target as HTMLImageElement
                  if (img.dataset.src) {
                    // Create a new image to preload
                    const preloadImg = new Image();
                    preloadImg.onload = () => {
                      img.src = img.dataset.src!;
                      delete img.dataset.src;
                    };
                    preloadImg.src = img.dataset.src;
                  }
                }
                
                // Handle background images
                if (target.dataset.background) {
                  target.style.backgroundImage = `url(${target.dataset.background})`
                  delete target.dataset.background
                }
                
                lazyLoadObserver.unobserve(target)
              }
            })
          });
        }, {
          rootMargin: '200px 0px', // Load images 200px before they enter the viewport (vertical only)
          threshold: 0.01 // Trigger when just 1% of the element is visible
        })
        
        // Prioritize loading visible elements first
        const elements = Array.from(document.querySelectorAll('[data-src], [data-background]'));
        
        // Observe elements that might be in the viewport first
        elements.forEach(el => {
          lazyLoadObserver.observe(el);
        });
      } catch (error) {
        console.error('Error setting up intersection observer:', error);
        
        // Fallback: load critical images immediately
        document.querySelectorAll('[data-src]').forEach((img: Element) => {
          const imgEl = img as HTMLImageElement;
          if (imgEl.dataset.src) {
            imgEl.src = imgEl.dataset.src;
          }
        });
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('[data-src]').forEach((img: Element) => {
        const imgEl = img as HTMLImageElement;
        if (imgEl.dataset.src) {
          imgEl.src = imgEl.dataset.src;
        }
      });
    }
  }, [])

  // Public method to change performance mode
  const changePerformanceMode = (mode: PerformanceMode) => {
    localStorage.setItem('performanceMode', mode)
    setPerformanceMode(mode)
    applyOptimizations()
  }

  // Expose the changePerformanceMode method globally
  useEffect(() => {
    (window as any).changePerformanceMode = changePerformanceMode
  }, [])

  useEffect(() => {
    // Initialize all optimizations
    applyOptimizations()
    addResourceHints()
    optimizeScriptLoading()
    optimizeFontLoading()
    setupIntersectionObserver()

    // Listen for connection changes
    const connection = (navigator as any).connection
    if (connection) {
      connection.addEventListener('change', applyOptimizations)
      return () => {
        connection.removeEventListener('change', applyOptimizations)
      }
    }
  }, [applyOptimizations, addResourceHints, optimizeScriptLoading, optimizeFontLoading, setupIntersectionObserver])

  return null // This component doesn't render anything
}
