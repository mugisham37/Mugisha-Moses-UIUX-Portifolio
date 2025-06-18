import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface CaseStudyGalleryProps {
  images: string[] | GalleryImage[]
}

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl font-bricolage font-semibold mb-12 animate-on-scroll">Project Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => {
          const isImageObject = typeof image !== 'string';
          const src = isImageObject ? (image as GalleryImage).src : image;
          const alt = isImageObject ? (image as GalleryImage).alt : `Project image ${index + 1}`;
          const width = isImageObject ? (image as GalleryImage).width : 800;
          const height = isImageObject ? (image as GalleryImage).height : 600;
          
          return (
            <div
              key={index}
              className="rounded-xl2 overflow-hidden aspect-video animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={width}
                height={height}
                className="object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  )
}
