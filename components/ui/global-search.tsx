"use client"

import type React from "react"

import { useState, useEffect, useRef, Fragment } from "react"
import { useRouter } from "next/navigation"
import { Dialog, Transition } from "@headlessui/react"
import { Search, X, FileText, ImageIcon, Briefcase, MessageSquare, ArrowRight } from "lucide-react"

type SearchResultType = "page" | "blog" | "work" | "resource"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: SearchResultType
  image?: string
}

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "UX Design Process",
    description: "My approach to user experience design",
    url: "/blog/ux-design-process",
    type: "blog",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    title: "FinanceFlow App Redesign",
    description: "Banking app redesign case study",
    url: "/work/financeflow-app",
    type: "work",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    title: "Contact",
    description: "Get in touch with me",
    url: "/contact",
    type: "page",
  },
  {
    id: "4",
    title: "UX Research Template",
    description: "Free template for conducting user research",
    url: "/resources/ux-research-template",
    type: "resource",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    title: "About Me",
    description: "Learn more about my background and skills",
    url: "/about",
    type: "page",
  },
  {
    id: "6",
    title: "E-commerce Mobile App",
    description: "Luxury fashion e-commerce app design",
    url: "/work/ecommerce-app",
    type: "work",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Open search with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen(true)
      }

      // Close with Escape
      if (e.key === "Escape") {
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.trim() === "") {
      setResults([])
      return
    }

    // In a real app, this would be an API call
    const filtered = mockSearchResults.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()),
    )
    setResults(filtered)
    setSelectedIndex(0)
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prevIndex) => (prevIndex < results.length - 1 ? prevIndex + 1 : prevIndex))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
        break
      case "Enter":
        e.preventDefault()
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex])
        }
        break
    }
  }

  const handleSelect = (result: SearchResult) => {
    setIsOpen(false)
    setQuery("")
    router.push(result.url)
  }

  const getIconForType = (type: SearchResultType) => {
    switch (type) {
      case "page":
        return <FileText className="w-4 h-4" />
      case "blog":
        return <MessageSquare className="w-4 h-4" />
      case "work":
        return <Briefcase className="w-4 h-4" />
      case "resource":
        return <ImageIcon className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getTypeLabel = (type: SearchResultType) => {
    switch (type) {
      case "page":
        return "Page"
      case "blog":
        return "Blog Post"
      case "work":
        return "Case Study"
      case "resource":
        return "Resource"
      default:
        return "Page"
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-neutral-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        <span className="hidden sm:inline text-xs text-neutral-500 ml-2">⌘K</span>
      </button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 sm:p-6 md:p-20">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto max-w-2xl w-full bg-[#1a1a1d] rounded-xl2 shadow-2xl border border-white/10 overflow-hidden">
                  <div className="relative">
                    <Search className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-neutral-500" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search for pages, blog posts, case studies..."
                    />
                    <div className="absolute right-4 top-3.5 flex items-center gap-2">
                      <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-white/20 bg-white/10 px-1.5 font-mono text-[10px] font-medium text-neutral-400">
                        ESC
                      </kbd>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="text-neutral-500 hover:text-white"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {query.trim() !== "" && (
                    <div className="border-t border-white/10 max-h-[60vh] overflow-y-auto">
                      {results.length > 0 ? (
                        <ul className="divide-y divide-white/5">
                          {results.map((result, index) => (
                            <li key={result.id}>
                              <button
                                className={`w-full text-left px-4 py-3 flex items-center gap-4 ${
                                  selectedIndex === index ? "bg-white/5" : ""
                                } hover:bg-white/5 transition-colors`}
                                onClick={() => handleSelect(result)}
                                onMouseEnter={() => setSelectedIndex(index)}
                              >
                                {result.image ? (
                                  <div className="w-12 h-12 rounded bg-white/5 overflow-hidden flex-shrink-0">
                                    <img
                                      src={result.image || "/placeholder.svg"}
                                      alt={result.title}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ) : (
                                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center flex-shrink-0">
                                    {getIconForType(result.type)}
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium truncate">{result.title}</p>
                                  <p className="text-xs text-neutral-400 truncate">{result.description}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-neutral-300">
                                      {getTypeLabel(result.type)}
                                    </span>
                                  </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-neutral-500" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="p-4 text-center">
                          <p className="text-sm text-neutral-400">No results found for "{query}"</p>
                        </div>
                      )}
                    </div>
                  )}

                  {query.trim() === "" && (
                    <div className="p-4 text-center border-t border-white/10">
                      <p className="text-sm text-neutral-400">Start typing to search</p>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
