import { Quote } from "lucide-react"

interface CaseStudyTestimonialProps {
  quote: string
  author: string
  role: string
}

export function CaseStudyTestimonial({ quote, author, role }: CaseStudyTestimonialProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-xl2 p-12 glass-morphism animate-on-scroll">
        <div className="flex flex-col items-center text-center">
          <Quote className="w-12 h-12 text-accent-blue mb-6" />
          <p className="text-xl text-neutral-200 italic mb-6 max-w-3xl">{quote}</p>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-neutral-400">{role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
