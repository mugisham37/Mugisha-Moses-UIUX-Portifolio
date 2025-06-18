"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AnimatedElement } from "@/components/ui/animated-element"
import { TextReveal } from "@/components/ui/text-reveal"
import { Lock, Mail, ArrowRight, Eye, EyeOff } from "lucide-react"

export default function ClientPortalLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // For demo purposes, accept any email with a password longer than 6 chars
      if (password.length < 6) {
        throw new Error("Invalid credentials. Please try again.")
      }

      // Successful login
      router.push("/client-portal/dashboard")
    } catch (err: any) {
      setError(err.message || "An error occurred during login.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <AnimatedElement variant="fadeInUp" className="mb-8 text-center">
            <Link href="/" className="inline-block mb-6">
              <h1 className="text-3xl font-bricolage font-semibold">
                Alex<span className="text-accent-blue">.</span>Morgan
              </h1>
            </Link>
            <TextReveal text="Client Portal" className="text-2xl font-bricolage font-medium mb-2" />
            <p className="text-neutral-400">Sign in to access your project dashboard</p>
          </AnimatedElement>

          <AnimatedElement variant="fadeInUp" delay={0.1}>
            <div className="bg-[#1a1a1d] rounded-xl2 border border-white/10 p-8">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-5 h-5 text-neutral-500" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="form-input pl-10"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                      Password
                    </label>
                    <Link href="/client-portal/forgot-password" className="text-xs text-accent-blue hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Lock className="w-5 h-5 text-neutral-500" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="form-input pl-10 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-500 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-neutral-400">
                Don't have an account?{" "}
                <Link href="/contact" className="text-accent-blue hover:underline">
                  Contact us
                </Link>{" "}
                to get access.
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement variant="fadeInUp" delay={0.2} className="mt-8 text-center text-sm text-neutral-500">
            <p>
              &copy; 2025 Alex Morgan. All rights reserved.{" "}
              <Link href="/privacy" className="text-neutral-400 hover:text-white">
                Privacy Policy
              </Link>
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  )
}
