import Image from "next/image"

interface CaseStudyGalleryProps {
  images: string[]
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-12 animate-on-scroll">Project Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl2 overflow-hidden aspect-video animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Project image ${index + 1}`}
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
