"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { AuthService } from "@/services/auth.service"
import { AnalyticsService } from "@/services/analytics.service"
import { ThemeService } from "@/services/theme.service"

// Context type
interface ServiceContextType {
  initialized: boolean
  theme: {
    mode: "light" | "dark"
    toggleMode: () => void
  }
  auth: {
    isAuthenticated: boolean
    user: any | null
    login: (credentials: any) => Promise<any>
    logout: () => Promise<void>
  }
}

// Create context
const ServiceContext = createContext<ServiceContextType | undefined>(undefined)

// Provider component
export function ServiceProvider({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false)
  const [mode, setMode] = useState<"light" | "dark">("dark")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any | null>(null)

  // Initialize services
  useEffect(() => {
    const initServices = async () => {
      // Initialize theme
      ThemeService.init()
      setMode(ThemeService.getCurrentMode())

      // Initialize analytics
      AnalyticsService.init()

      // Check authentication status
      if (AuthService.isAuthenticated()) {
        try {
          const userData = await AuthService.getCurrentUser()
          setUser(userData)
          setIsAuthenticated(!!userData)
        } catch (error) {
          console.error("Auth initialization error:", error)
        }
      }

      // Track page view
      AnalyticsService.trackPageView({
        path: window.location.pathname,
        title: document.title,
      })

      setInitialized(true)
    }

    initServices()
  }, [])

  // Listen for route changes to track page views
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleRouteChange = (url: string) => {
        AnalyticsService.trackPageView({
          path: url,
          title: document.title,
        })
      }

      // This would need to be adapted based on your routing library
      // For Next.js, you'd use the Router events
      // For other frameworks, you'd use their routing events

      // Clean up event listener
      return () => {
        // Remove event listener
      }
    }
  }, [])

  // Toggle theme mode
  const toggleMode = () => {
    const settings = ThemeService.toggleMode()
    setMode(ThemeService.getCurrentMode())
  }

  // Login handler
  const login = async (credentials: any) => {
    const userData = await AuthService.login(credentials)
    setUser(userData)
    setIsAuthenticated(true)
    return userData
  }

  // Logout handler
  const logout = async () => {
    await AuthService.logout()
    setUser(null)
    setIsAuthenticated(false)
  }

  // Context value
  const value: ServiceContextType = {
    initialized,
    theme: {
      mode,
      toggleMode,
    },
    auth: {
      isAuthenticated,
      user,
      login,
      logout,
    },
  }

  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
}

// Custom hook to use the service context
export function useServices() {
  const context = useContext(ServiceContext)
  if (context === undefined) {
    throw new Error("useServices must be used within a ServiceProvider")
  }
  return context
}
