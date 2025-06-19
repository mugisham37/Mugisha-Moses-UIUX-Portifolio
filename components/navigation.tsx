"use client"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
// Memoized NavLink component for better performance
const NavLink = memo(({ href, name, isActive }: { href: string; name: string; isActive: boolean }) => (
  <Link
    href={href}
    prefetch={true}
    className={`px-3 py-2 text-sm transition-colors ${
      isActive ? "text-white font-medium" : "text-neutral-400 hover:text-white"
    }`}
  >
    {name}
  </Link>
));

NavLink.displayName = "NavLink";

// Memoized MobileNavLink component
const MobileNavLink = memo(({ href, name, isActive }: { href: string; name: string; isActive: boolean }) => (
  <Link
    href={href}
    prefetch={true}
    className={`px-4 py-3 text-lg transition-colors ${
      isActive ? "text-white font-medium bg-white/5 rounded-lg" : "text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg"
    }`}
  >
    {name}
  </Link>
));

MobileNavLink.displayName = "MobileNavLink";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Define nav links outside of render to prevent recreation
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ]

  // Memoized scroll handler to prevent recreation on each render
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  // Optimized scroll listener with passive option for better performance
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Selectively prefetch only the most likely navigation paths
  // instead of prefetching all links which can cause performance issues
  useEffect(() => {
    // Only prefetch the most common navigation paths
    const commonPaths = ['/', '/about', '/work', '/contact']
    commonPaths.forEach(path => {
      if (path !== pathname) {
        router.prefetch(path)
      }
    })
    
    // For other links, we'll rely on Next.js automatic prefetching on hover
  }, [pathname, router])

  // Toggle menu with memoized handler
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors ${
        scrolled ? "bg-[#111112]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bricolage font-semibold transition-colors hover:text-accent-blue">
            Mugisha Moses
          </Link>

          {/* Desktop Navigation - No animation wrapper for better performance */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.href} 
                  href={link.href} 
                  name={link.name} 
                  isActive={pathname === link.href} 
                />
              ))}
            </nav>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-neutral-400 hover:text-white"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Only render when needed for better performance */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#111112] transition-transform duration-300 ease-in-out transform translate-x-0 md:hidden"
          aria-hidden="false"
        >
          <div className="flex flex-col h-full pt-20 pb-6 px-6">
            <nav className="flex flex-col space-y-2 mt-8">
              {/* Only render visible links for better performance */}
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  name={link.name}
                  isActive={pathname === link.href}
                />
              ))}
            </nav>
            <div className="mt-auto">
              <div className="border-t border-white/10 pt-6 mt-6">
                <Link
                  href="/contact"
                  className="block w-full py-3 px-4 bg-accent-blue text-white text-center rounded-lg font-medium"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="mt-6 text-center text-sm text-neutral-500">
                <p>&copy; 2025 Mugisha Moses. All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
