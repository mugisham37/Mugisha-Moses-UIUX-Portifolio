"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { AnalyticsService } from "@/services/analytics.service"

interface AnalyticsProviderProps {
  children: ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Initialize analytics
  useEffect(() => {
    AnalyticsService.init()
  }, [])

  // Track page views
  useEffect(() => {
    if (pathname) {
      // Construct full URL with search params
      const url = searchParams?.size ? `${pathname}?${searchParams.toString()}` : pathname

      // Track page view
      AnalyticsService.pageView(url)
    }
  }, [pathname, searchParams])

  return <>{children}</>
}
