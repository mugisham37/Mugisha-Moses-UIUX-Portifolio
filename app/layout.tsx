import type React from "react"
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import "./accessibility.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimationProvider } from "@/components/animation-provider"
import { SkipLink } from "@/components/ui/skip-link"
import { CookieConsent } from "@/components/ui/cookie-consent"
import { CursorEffect } from "@/components/ui/cursor-effect"
import { PerformanceMonitor } from "@/components/ui/performance-monitor"
import { PageTransition } from "@/components/ui/page-transition"
import { LanguageProvider } from "@/contexts/language-context"
import { AnalyticsProvider } from "@/components/providers/analytics-provider"
import { AccessibilityPanel } from "@/components/ui/accessibility-panel"
import { ScreenReaderAnnouncer } from "@/components/ui/screen-reader-announcer"
import { KeyboardNavigationHelper } from "@/components/ui/keyboard-navigation-helper"
import { ThemeCustomizer } from "@/components/ui/theme-customizer"
import { FeedbackSurvey } from "@/components/ui/feedback-survey"
import { PerformanceOptimizer } from "@/components/ui/performance-optimizer"
import { PerformanceOptimizations } from "@/components/ui/performance-optimizations"
import { MicroInteractions } from "@/components/ui/micro-interactions"
import { AccessibilityEnhancements } from "@/components/ui/accessibility-enhancements"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mugisha Moses · UI/UX Designer Portfolio",
  description:
    "UI/UX designer specializing in creating intuitive, engaging, and conversion-focused digital experiences that solve real user problems and drive business growth.",
  keywords: "UI/UX Designer, User Experience, User Interface, Product Design, Digital Design",
  authors: [{ name: "Mugisha Moses" }],
  openGraph: {
    title: "Mugisha Moses · UI/UX Designer Portfolio",
    description: "Creating digital experiences that convert",
    type: "website",
    images: [
      {
        url: "https://mugishamoses.design/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mugisha Moses UI/UX Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugisha Moses · UI/UX Designer Portfolio",
    description: "Creating digital experiences that convert",
    images: ["https://mugishamoses.design/twitter-image.jpg"],
    creator: "@mugishamoses_ux",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://mugishamoses.design",
  },
  manifest: "/manifest.json",
  generator: 'v0.dev'
}

// Separate viewport export as per Next.js recommendation
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#111112"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#111112] text-neutral-100 font-sans antialiased">
        <AnalyticsProvider>
          <LanguageProvider initialLocale="en">
            <AnimationProvider>
              {/* Essential components loaded immediately */}
              <Navigation />
              <SkipLink />
              <PerformanceOptimizer />
              
              {/* Main content with optimized page transitions */}
              <PageTransition>
                <main id="main-content" className="relative isolate overflow-hidden">
                  {children}
                </main>
              </PageTransition>
              
              <Footer />
              <CookieConsent />
              
              {/* Non-essential components loaded with Suspense */}
              <Suspense fallback={null}>
                <ScreenReaderAnnouncer />
                <KeyboardNavigationHelper />
                <AccessibilityEnhancements />
              </Suspense>
              
              {/* Enhancement components loaded with delay */}
              <Suspense fallback={null}>
                <AccessibilityPanel />
                <ThemeCustomizer />
              </Suspense>
              
              {/* Low-priority components */}
              <Suspense fallback={null}>
                <CursorEffect />
                <MicroInteractions />
                <PerformanceOptimizations />
                <FeedbackSurvey />
                <PerformanceMonitor />
              </Suspense>
            </AnimationProvider>
          </LanguageProvider>
        </AnalyticsProvider>
      </body>
    </html>
  )
}
