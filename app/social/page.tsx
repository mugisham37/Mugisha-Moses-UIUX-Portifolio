import { SocialMediaFeed } from "@/components/ui/social-media-feed"
import { SocialProof } from "@/components/ui/social-proof"
import { ClientLogosCarousel } from "@/components/ui/client-logos-carousel"
import { AnimatedElement } from "@/components/ui/animated-element"
import { TextReveal } from "@/components/ui/text-reveal"

export default function SocialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement variant="fadeInUp">
            <TextReveal text="Social Presence" className="text-4xl md:text-5xl font-bricolage font-semibold mb-6" />
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Follow my journey, insights, and latest work across social media platforms.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <SocialMediaFeed
            title="Latest Updates"
            subtitle="Stay connected with my latest posts, insights, and behind-the-scenes content."
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SocialProof
            title="What People Are Saying"
            subtitle="Feedback and testimonials from clients and colleagues across social platforms."
          />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <ClientLogosCarousel
            title="Brands I've Worked With"
            subtitle="Proud to have collaborated with these amazing companies."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-4">Let's Connect</h2>
            <p className="text-xl text-neutral-400 mb-8">
              Follow me on social media to stay updated with my latest work and insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://instagram.com/alexmorgan.design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#E1306C] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
              <a
                href="https://twitter.com/alexmorgan_ux"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                <span>Twitter</span>
              </a>
              <a
                href="https://linkedin.com/in/alexmorgan-uxdesigner"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://dribbble.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#EA4C89] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                </svg>
                <span>Dribbble</span>
              </a>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
