import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Design Insights & Blog | Alex Morgan",
  description:
    "Thoughts on design, user experience, and the future of digital products. Learn from real projects and industry insights.",
  keywords: "UX Design, UI Design, Design Systems, Case Studies, Design Blog",
  openGraph: {
    title: "Design Insights & Blog | Alex Morgan",
    description: "Thoughts on design, user experience, and the future of digital products.",
    type: "website",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
