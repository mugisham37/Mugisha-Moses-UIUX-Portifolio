"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, getTranslation } from "@/lib/i18n/translations"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
  initialLocale?: Locale
}

export function LanguageProvider({ children, initialLocale = "en" }: LanguageProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    // Get locale from localStorage if available
    const savedLocale = localStorage.getItem("locale") as Locale | null
    if (savedLocale && ["en", "es", "fr", "de", "ja"].includes(savedLocale)) {
      setLocale(savedLocale)
    }
  }, [])

  useEffect(() => {
    // Save locale to localStorage when it changes
    localStorage.setItem("locale", locale)
    // Update html lang attribute
    document.documentElement.lang = locale
  }, [locale])

  const t = (key: string): string => {
    return getTranslation(locale, key)
  }

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
