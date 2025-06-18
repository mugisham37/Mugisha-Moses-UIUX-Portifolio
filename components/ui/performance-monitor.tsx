"use client"

import { useState, useEffect } from "react"
import { Activity, X } from "lucide-react"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  fid: number | null
  ttfb: number | null
}

export function PerformanceMonitor() {
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  })

  useEffect(() => {
    // Only run in development mode
    if (process.env.NODE_ENV !== "development") {
      return
    }

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fcp = entries[0]
        setMetrics((prev) => ({ ...prev, fcp: Number.parseFloat((fcp.startTime / 1000).toFixed(2)) }))
      }
    })

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const lcp = entries[entries.length - 1]
        setMetrics((prev) => ({ ...prev, lcp: Number.parseFloat((lcp.startTime / 1000).toFixed(2)) }))
      }
    })

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((entryList) => {
      let clsValue = 0
      for (const entry of entryList.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value
        }
      }
      setMetrics((prev) => ({ ...prev, cls: Number.parseFloat(clsValue.toFixed(3)) }))
    })

    // First Input Delay
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      if (entries.length > 0) {
        const fid = entries[0]
        setMetrics((prev) => ({ ...prev, fid: Number.parseFloat((fid.processingStart - fid.startTime).toFixed(2)) }))
      }
    })

    // Time to First Byte
    const navigationEntries = performance.getEntriesByType("navigation")
    if (navigationEntries.length > 0) {
      const ttfb = navigationEntries[0] as PerformanceNavigationTiming
      setMetrics((prev) => ({ ...prev, ttfb: Number.parseFloat((ttfb.responseStart / 1000).toFixed(2)) }))
    }

    try {
      fcpObserver.observe({ type: "paint", buffered: true })
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true })
      clsObserver.observe({ type: "layout-shift", buffered: true })
      fidObserver.observe({ type: "first-input", buffered: true })
    } catch (e) {
      console.error("Performance observer error:", e)
    }

    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      clsObserver.disconnect()
      fidObserver.disconnect()
    }
  }, [])

  const getMetricColor = (metric: string, value: number | null): string => {
    if (value === null) return "text-neutral-500"

    switch (metric) {
      case "fcp":
        return value < 1.8 ? "text-green-500" : value < 3 ? "text-yellow-500" : "text-red-500"
      case "lcp":
        return value < 2.5 ? "text-green-500" : value < 4 ? "text-yellow-500" : "text-red-500"
      case "cls":
        return value < 0.1 ? "text-green-500" : value < 0.25 ? "text-yellow-500" : "text-red-500"
      case "fid":
        return value < 100 ? "text-green-500" : value < 300 ? "text-yellow-500" : "text-red-500"
      case "ttfb":
        return value < 0.8 ? "text-green-500" : value < 1.8 ? "text-yellow-500" : "text-red-500"
      default:
        return "text-neutral-500"
    }
  }

  if (process.env.NODE_ENV !== "development") {
    return null
  }

  return (
    <>
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 z-50 p-2 bg-[#1a1a1d] rounded-full shadow-lg border border-white/10"
          aria-label="Show performance metrics"
        >
          <Activity className="w-5 h-5 text-accent-blue" />
        </button>
      ) : (
        <div className="fixed bottom-4 right-4 z-50 p-4 bg-[#1a1a1d] rounded-lg shadow-lg border border-white/10 w-64">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium">Performance Metrics</h3>
            <button onClick={() => setIsVisible(false)} className="text-neutral-500 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-400">FCP:</span>
              <span className={getMetricColor("fcp", metrics.fcp)}>
                {metrics.fcp !== null ? `${metrics.fcp}s` : "Measuring..."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">LCP:</span>
              <span className={getMetricColor("lcp", metrics.lcp)}>
                {metrics.lcp !== null ? `${metrics.lcp}s` : "Measuring..."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">CLS:</span>
              <span className={getMetricColor("cls", metrics.cls)}>
                {metrics.cls !== null ? metrics.cls : "Measuring..."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">FID:</span>
              <span className={getMetricColor("fid", metrics.fid)}>
                {metrics.fid !== null ? `${metrics.fid}ms` : "Waiting..."}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">TTFB:</span>
              <span className={getMetricColor("ttfb", metrics.ttfb)}>
                {metrics.ttfb !== null ? `${metrics.ttfb}s` : "Measuring..."}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
