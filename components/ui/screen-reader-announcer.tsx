"use client"

import { useEffect, useState } from "react"

interface ScreenReaderAnnouncerProps {
  politeness?: "polite" | "assertive"
}

export function ScreenReaderAnnouncer({ politeness = "polite" }: ScreenReaderAnnouncerProps) {
  const [announcements, setAnnouncements] = useState<string[]>([])

  useEffect(() => {
    // Create a custom event for screen reader announcements
    const handleAnnouncement = (event: CustomEvent<string>) => {
      setAnnouncements((prev) => [...prev, event.detail])

      // Clean up old announcements after they've been read
      setTimeout(() => {
        setAnnouncements((prev) => prev.slice(1))
      }, 3000)
    }

    // Add event listener
    window.addEventListener("screenReaderAnnouncement" as any, handleAnnouncement as EventListener)

    // Clean up
    return () => {
      window.removeEventListener("screenReaderAnnouncement" as any, handleAnnouncement as EventListener)
    }
  }, [])

  // Helper function to make announcements from anywhere in the app
  useEffect(() => {
    // Add the announce function to the window object
    window.announce = (message: string, announcePoliteness?: "polite" | "assertive") => {
      const event = new CustomEvent("screenReaderAnnouncement", {
        detail: message,
      })
      window.dispatchEvent(event)
    }

    return () => {
      // Clean up
      delete window.announce
    }
  }, [])

  return (
    <div aria-live={politeness} aria-atomic="true" className="sr-only">
      {announcements.map((announcement, index) => (
        <div key={`${announcement}-${index}`}>{announcement}</div>
      ))}
    </div>
  )
}

// Add TypeScript definitions
declare global {
  interface Window {
    announce?: (message: string, politeness?: "polite" | "assertive") => void
  }
}
