import { Linkedin, Twitter, Dribbble, Github } from "lucide-react"
import Link from "next/link"

export function ContactInfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Let's Connect</h2>
          <p className="text-lg text-neutral-400 mb-6">
            Whether you're ready to start a project or just want to say hello, I'd love to hear from you.
          </p>
          <p className="text-neutral-400 mb-8">
            You can reach me through the contact form, email, or connect with me on social media. I'm always open to
            discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-blue/20 flex items-center justify-center">
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
                  className="w-4 h-4 text-accent-blue"
                >
                  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                </svg>
              </div>
              <span className="text-neutral-300">Available for freelance projects</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center">
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
                  className="w-4 h-4 text-accent-purple"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <span className="text-neutral-300">Strict NDA available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-teal/20 flex items-center justify-center">
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
                  className="w-4 h-4 text-accent-teal"
                >
                  <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2v0Z" />
                  <path d="M18 9a6 6 0 0 0-12 0" />
                  <path d="M18 9v2a6 6 0 0 1-12 0v-2" />
                </svg>
              </div>
              <span className="text-neutral-300">Remote work worldwide</span>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <h2 className="text-3xl font-bricolage font-semibold mb-6">Follow Me</h2>
          <p className="text-neutral-400 mb-8">
            Connect with me on social media to see my latest work, design insights, and more.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Link
              href="#"
              className="flex items-center gap-4 bg-surface-foreground rounded-lg p-4 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0077B5]/20 flex items-center justify-center">
                <Linkedin className="w-6 h-6 text-[#0077B5]" />
              </div>
              <div>
                <p className="font-medium group-hover:text-white transition-colors">LinkedIn</p>
                <p className="text-sm text-neutral-500">Professional updates</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 bg-surface-foreground rounded-lg p-4 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1DA1F2]/20 flex items-center justify-center">
                <Twitter className="w-6 h-6 text-[#1DA1F2]" />
              </div>
              <div>
                <p className="font-medium group-hover:text-white transition-colors">Twitter</p>
                <p className="text-sm text-neutral-500">Design thoughts</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 bg-surface-foreground rounded-lg p-4 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#EA4C89]/20 flex items-center justify-center">
                <Dribbble className="w-6 h-6 text-[#EA4C89]" />
              </div>
              <div>
                <p className="font-medium group-hover:text-white transition-colors">Dribbble</p>
                <p className="text-sm text-neutral-500">Design portfolio</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 bg-surface-foreground rounded-lg p-4 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#333]/20 flex items-center justify-center">
                <Github className="w-6 h-6 text-[#333]" />
              </div>
              <div>
                <p className="font-medium group-hover:text-white transition-colors">GitHub</p>
                <p className="text-sm text-neutral-500">Code projects</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
