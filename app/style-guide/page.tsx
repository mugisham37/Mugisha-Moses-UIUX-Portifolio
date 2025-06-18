import { AnimatedElement } from "@/components/ui/animated-element"
import { TextReveal } from "@/components/ui/text-reveal"

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement variant="fadeInUp">
            <TextReveal text="Style Guide" className="text-4xl md:text-5xl font-bricolage font-semibold mb-6" />
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A comprehensive guide to the design system and components used throughout this portfolio.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Colors Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-12">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="h-24 bg-[#111112] rounded-lg mb-3"></div>
                <p className="font-medium">Background</p>
                <p className="text-sm text-neutral-400">#111112</p>
              </div>
              <div>
                <div className="h-24 bg-[#1a1a1d] rounded-lg mb-3"></div>
                <p className="font-medium">Surface</p>
                <p className="text-sm text-neutral-400">#1a1a1d</p>
              </div>
              <div>
                <div className="h-24 bg-accent-blue rounded-lg mb-3"></div>
                <p className="font-medium">Accent Blue</p>
                <p className="text-sm text-neutral-400">var(--accent-blue)</p>
              </div>
              <div>
                <div className="h-24 bg-white rounded-lg mb-3"></div>
                <p className="font-medium">White</p>
                <p className="text-sm text-neutral-400">#ffffff</p>
              </div>
              <div>
                <div className="h-24 bg-neutral-100 rounded-lg mb-3"></div>
                <p className="font-medium">Text Primary</p>
                <p className="text-sm text-neutral-400">#f5f5f5</p>
              </div>
              <div>
                <div className="h-24 bg-neutral-400 rounded-lg mb-3"></div>
                <p className="font-medium">Text Secondary</p>
                <p className="text-sm text-neutral-400">#a3a3a3</p>
              </div>
              <div>
                <div className="h-24 bg-[#0c0c0d] rounded-lg mb-3"></div>
                <p className="font-medium">Background Alt</p>
                <p className="text-sm text-neutral-400">#0c0c0d</p>
              </div>
              <div>
                <div className="h-24 bg-white/10 rounded-lg mb-3"></div>
                <p className="font-medium">Border</p>
                <p className="text-sm text-neutral-400">white/10</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Typography Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-12">Typography</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6">Headings</h3>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-5xl font-bricolage font-semibold">Heading 1</h1>
                    <p className="text-sm text-neutral-400 mt-2">font-bricolage, text-5xl, font-semibold</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bricolage font-semibold">Heading 2</h2>
                    <p className="text-sm text-neutral-400 mt-2">font-bricolage, text-4xl, font-semibold</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bricolage font-semibold">Heading 3</h3>
                    <p className="text-sm text-neutral-400 mt-2">font-bricolage, text-3xl, font-semibold</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bricolage font-semibold">Heading 4</h4>
                    <p className="text-sm text-neutral-400 mt-2">font-bricolage, text-2xl, font-semibold</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-bricolage font-semibold">Heading 5</h5>
                    <p className="text-sm text-neutral-400 mt-2">font-bricolage, text-xl, font-semibold</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6">Body Text</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-xl">Large Body Text</p>
                    <p className="text-sm text-neutral-400 mt-2">text-xl</p>
                  </div>
                  <div>
                    <p className="text-base">Regular Body Text</p>
                    <p className="text-sm text-neutral-400 mt-2">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm">Small Body Text</p>
                    <p className="text-sm text-neutral-400 mt-2">text-sm</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-12">Components</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="px-6 py-3 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                    Primary Button
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                    Secondary Button
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-white/40 transition-colors">
                    Outline Button
                  </button>
                  <button className="px-6 py-3 text-accent-blue hover:underline transition-colors">Text Button</button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6">Cards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#1a1a1d] border border-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-medium mb-2">Card Title</h4>
                    <p className="text-neutral-400">This is a basic card component with a title and description.</p>
                  </div>
                  <div className="bg-[#1a1a1d] border border-white/10 rounded-xl overflow-hidden">
                    <div className="h-40 bg-neutral-800"></div>
                    <div className="p-6">
                      <h4 className="text-xl font-medium mb-2">Card with Image</h4>
                      <p className="text-neutral-400">This card includes an image at the top.</p>
                    </div>
                  </div>
                  <div className="bg-[#1a1a1d] border border-white/10 rounded-xl p-6">
                    <h4 className="text-xl font-medium mb-2">Interactive Card</h4>
                    <p className="text-neutral-400 mb-4">This card includes a button for interaction.</p>
                    <button className="px-4 py-2 bg-accent-blue text-white rounded-lg text-sm">Learn More</button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6">Form Elements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="example-input" className="block text-sm font-medium mb-2">
                      Text Input
                    </label>
                    <input
                      type="text"
                      id="example-input"
                      className="w-full px-4 py-3 bg-[#111112] border border-white/10 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                      placeholder="Enter your text"
                    />
                  </div>
                  <div>
                    <label htmlFor="example-select" className="block text-sm font-medium mb-2">
                      Select Input
                    </label>
                    <select
                      id="example-select"
                      className="w-full px-4 py-3 bg-[#111112] border border-white/10 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                    >
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="example-textarea" className="block text-sm font-medium mb-2">
                      Textarea
                    </label>
                    <textarea
                      id="example-textarea"
                      className="w-full px-4 py-3 bg-[#111112] border border-white/10 rounded-lg focus:border-accent-blue focus:outline-none transition-colors"
                      placeholder="Enter your message"
                      rows={4}
                    ></textarea>
                  </div>
                  <div>
                    <p className="block text-sm font-medium mb-2">Checkbox</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox-1"
                          className="w-4 h-4 text-accent-blue border-white/20 rounded focus:ring-accent-blue focus:ring-offset-gray-800"
                        />
                        <label htmlFor="checkbox-1" className="ml-2 text-sm">
                          Option 1
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="checkbox-2"
                          className="w-4 h-4 text-accent-blue border-white/20 rounded focus:ring-accent-blue focus:ring-offset-gray-800"
                        />
                        <label htmlFor="checkbox-2" className="ml-2 text-sm">
                          Option 2
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Spacing & Layout Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-12">Spacing & Layout</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6">Spacing Scale</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-4 bg-accent-blue"></div>
                    <p className="ml-4">4px - Extra Small (xs)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-6 bg-accent-blue"></div>
                    <p className="ml-4">6px - Small (sm)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-8 bg-accent-blue"></div>
                    <p className="ml-4">8px - Medium (md)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-12 bg-accent-blue"></div>
                    <p className="ml-4">12px - Large (lg)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-accent-blue"></div>
                    <p className="ml-4">16px - Extra Large (xl)</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-20 bg-accent-blue"></div>
                    <p className="ml-4">20px - 2xl</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-6">Container Widths</h3>
                <div className="space-y-6">
                  <div>
                    <p className="mb-2">Max Width 7xl (1280px)</p>
                    <div className="h-8 bg-accent-blue/30 rounded-lg max-w-7xl"></div>
                  </div>
                  <div>
                    <p className="mb-2">Max Width 5xl (1024px)</p>
                    <div className="h-8 bg-accent-blue/30 rounded-lg max-w-5xl"></div>
                  </div>
                  <div>
                    <p className="mb-2">Max Width 3xl (768px)</p>
                    <div className="h-8 bg-accent-blue/30 rounded-lg max-w-3xl"></div>
                  </div>
                  <div>
                    <p className="mb-2">Max Width xl (576px)</p>
                    <div className="h-8 bg-accent-blue/30 rounded-lg max-w-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Icons Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement variant="fadeInUp">
            <h2 className="text-3xl font-bricolage font-semibold mb-12">Icons</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "home",
                "user",
                "briefcase",
                "settings",
                "mail",
                "phone",
                "calendar",
                "search",
                "heart",
                "star",
                "bookmark",
                "file",
                "folder",
                "image",
                "video",
                "music",
                "globe",
                "map-pin",
              ].map((icon) => (
                <div key={icon} className="flex flex-col items-center justify-center p-4 bg-[#1a1a1d] rounded-lg">
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
                    className="w-6 h-6 mb-2"
                  >
                    {icon === "home" && <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>}
                    {icon === "user" && (
                      <>
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </>
                    )}
                    {icon === "briefcase" && (
                      <>
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </>
                    )}
                    {icon === "settings" && (
                      <>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </>
                    )}
                    {icon === "mail" && (
                      <>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </>
                    )}
                    {icon === "phone" && (
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    )}
                    {icon === "calendar" && (
                      <>
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </>
                    )}
                    {icon === "search" && (
                      <>
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </>
                    )}
                    {icon === "heart" && (
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    )}
                    {icon === "star" && (
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    )}
                    {icon === "bookmark" && <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>}
                    {icon === "file" && (
                      <>
                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                        <polyline points="13 2 13 9 20 9"></polyline>
                      </>
                    )}
                    {icon === "folder" && (
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    )}
                    {icon === "image" && (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </>
                    )}
                    {icon === "video" && (
                      <>
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </>
                    )}
                    {icon === "music" && (
                      <>
                        <path d="M9 18V5l12-2v13"></path>
                        <circle cx="6" cy="18" r="3"></circle>
                        <circle cx="18" cy="16" r="3"></circle>
                      </>
                    )}
                    {icon === "globe" && (
                      <>
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </>
                    )}
                    {icon === "map-pin" && (
                      <>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </>
                    )}
                  </svg>
                  <span className="text-sm text-neutral-400">{icon}</span>
                </div>
              ))}
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
