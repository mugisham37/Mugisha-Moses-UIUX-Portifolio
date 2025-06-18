"use client"

import { useState, useEffect, useCallback, memo } from "react"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

// Memoized component for better performance
export const CookieConsent = memo(function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  // Memoized function to check for existing consent
  const checkConsent = useCallback(() => {
    try {
      const consent = localStorage.getItem("cookie-consent")
      if (!consent) {
        setIsVisible(true)
      } else {
        // Ensure it's hidden if consent exists
        setIsVisible(false)
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error)
      // Default to not showing if we can't access localStorage
      setIsVisible(false)
    }
  }, [])

  // Handle hydration and initial consent check
  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true)
    
    // Small timeout to ensure hydration is complete
    const timer = setTimeout(() => {
      checkConsent()
    }, 300)
    
    return () => clearTimeout(timer)
  }, [checkConsent])

  // Listen for storage events (for multi-tab consistency)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        checkConsent()
      }
    }
    
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [checkConsent])

  const saveConsent = useCallback((consent: object) => {
    try {
      localStorage.setItem("cookie-consent", JSON.stringify({
        ...consent,
        timestamp: Date.now(),
      }))
      
      // Immediately update state
      setIsVisible(false)
      
      // Dispatch storage event for other tabs
      window.dispatchEvent(new StorageEvent("storage", {
        key: "cookie-consent",
        newValue: JSON.stringify(consent),
      }))
    } catch (error) {
      console.error("Error saving cookie consent:", error)
    }
  }, [])

  const handleAcceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    })
  }, [saveConsent])

  const handleAcceptSelected = useCallback(() => {
    saveConsent({
      ...preferences,
    })
  }, [preferences, saveConsent])

  const handleReject = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    })
  }, [saveConsent])

  // Don't render anything during hydration or if not visible
  if (!isHydrated || !isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-foreground border-t border-white/10 p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {!showSettings ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <Cookie className="w-6 h-6 text-accent-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium mb-2">We use cookies</h3>
                <p className="text-sm text-neutral-400 max-w-2xl">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By
                  clicking "Accept All", you consent to our use of cookies.{" "}
                  <Link href="/privacy" className="text-accent-blue hover:underline">
                    Learn more
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center gap-2 px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium hover:bg-surface-foreground transition"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <button
                onClick={handleReject}
                className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium hover:bg-surface-foreground transition"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg text-sm font-medium transition"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Cookie Preferences</h3>
              <button onClick={() => setShowSettings(false)} className="text-neutral-400 hover:text-white transition">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Necessary Cookies</h4>
                  <p className="text-sm text-neutral-400">Required for the website to function properly</p>
                </div>
                <input type="checkbox" checked={preferences.necessary} disabled className="rounded" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <p className="text-sm text-neutral-400">Help us understand how visitors interact with our website</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                  className="rounded"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <p className="text-sm text-neutral-400">Used to deliver personalized advertisements</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                  className="rounded"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg text-sm font-medium transition"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium hover:bg-surface-foreground transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})
