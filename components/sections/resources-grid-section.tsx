"use client"

import { useState } from "react"
import Image from "next/image"
import { Download, Eye, Star } from "lucide-react"

export function ResourcesGridSection() {
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  const resources = [
    {
      id: 1,
      title: "UX Research Template Kit",
      description: "Complete set of templates for user interviews, surveys, and usability testing.",
      category: "Templates",
      type: "Figma Template",
      downloads: 2847,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      fileSize: "2.4 MB",
    },
    {
      id: 2,
      title: "Design System Checklist",
      description: "Comprehensive checklist for building scalable design systems.",
      category: "Checklists",
      type: "PDF Guide",
      downloads: 1923,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      fileSize: "1.2 MB",
    },
    {
      id: 3,
      title: "Mobile App Wireframe Kit",
      description: "50+ mobile wireframe templates for iOS and Android apps.",
      category: "Wireframes",
      type: "Figma Template",
      downloads: 3421,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      fileSize: "5.1 MB",
    },
    {
      id: 4,
      title: "UX Audit Framework",
      description: "Step-by-step framework for conducting comprehensive UX audits.",
      category: "Guides",
      type: "PDF + Figma",
      downloads: 1567,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      fileSize: "3.8 MB",
    },
    {
      id: 5,
      title: "Color Palette Generator",
      description: "Figma plugin for generating accessible color palettes.",
      category: "Tools",
      type: "Figma Plugin",
      downloads: 5234,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
      fileSize: "Free Install",
    },
    {
      id: 6,
      title: "User Persona Template",
      description: "Professional user persona templates with research guidelines.",
      category: "Templates",
      type: "Figma + PDF",
      downloads: 2156,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      featured: false,
      fileSize: "1.9 MB",
    },
  ]

  const handleDownload = async (id: number) => {
    setDownloadingId(id)
    // Simulate download process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setDownloadingId(null)
    // In a real app, this would trigger the actual download
  }

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <div
            key={resource.id}
            className="bg-surface-foreground rounded-xl2 overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 animate-on-scroll group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={resource.image || "/placeholder.svg"}
                alt={resource.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {resource.featured && (
                <div className="absolute top-4 left-4">
                  <span className="bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              )}
              <div className="absolute top-4 right-4">
                <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm text-accent-blue">{resource.category}</span>
                <span className="text-xs text-neutral-500">•</span>
                <span className="text-xs text-neutral-500">{resource.type}</span>
              </div>

              <h3 className="text-lg font-medium mb-3 group-hover:text-white transition-colors">{resource.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{resource.description}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  {resource.downloads.toLocaleString()}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  {resource.rating}
                </div>
                <span>{resource.fileSize}</span>
              </div>

              <button
                onClick={() => handleDownload(resource.id)}
                disabled={downloadingId === resource.id}
                className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {downloadingId === resource.id ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download Free
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
