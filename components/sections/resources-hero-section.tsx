export function ResourcesHeroSection() {
  return (
    <section className="relative z-10 max-w-7xl lg:px-8 font-bricolage mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-semibold tracking-tight mb-6 animate-on-scroll">
          Free Design <span className="text-accent-blue">Resources</span>
        </h1>
        <p className="text-lg text-neutral-400 mb-8 animate-on-scroll">
          Download free templates, guides, and tools to accelerate your design process. All resources are crafted with
          the same attention to detail as my client work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-blue/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-blue"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Templates</h3>
            <p className="text-sm text-neutral-400">Ready-to-use design templates and wireframe kits</p>
          </div>

          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-purple/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-purple"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Guides</h3>
            <p className="text-sm text-neutral-400">Comprehensive guides and best practices</p>
          </div>

          <div className="bg-surface-foreground rounded-lg p-6 border border-white/5 animate-on-scroll">
            <div className="w-12 h-12 rounded-lg bg-accent-teal/20 flex items-center justify-center mx-auto mb-4">
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
                className="w-6 h-6 text-accent-teal"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-medium mb-2">Tools</h3>
            <p className="text-sm text-neutral-400">Useful design tools and Figma plugins</p>
          </div>
        </div>
      </div>
    </section>
  )
}
