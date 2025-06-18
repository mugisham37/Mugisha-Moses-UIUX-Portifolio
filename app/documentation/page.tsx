"use client"

import { AnimatedElement } from "@/components/ui/animated-element"
import { TextReveal } from "@/components/ui/text-reveal"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement variant="fadeInUp">
            <TextReveal text="Documentation" className="text-4xl md:text-5xl font-bricolage font-semibold mb-6" />
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              A comprehensive guide to the portfolio website's structure, components, and features.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-20 px-6 lg:px-8 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <nav className="space-y-1">
                  <a href="#overview" className="block px-4 py-2 rounded-lg bg-white/5 text-white font-medium">
                    Overview
                  </a>
                  <a
                    href="#getting-started"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Getting Started
                  </a>
                  <a
                    href="#architecture"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Architecture
                  </a>
                  <a
                    href="#components"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Components
                  </a>
                  <a
                    href="#pages"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Pages
                  </a>
                  <a
                    href="#services"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                  <a
                    href="#hooks"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Hooks
                  </a>
                  <a
                    href="#utilities"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Utilities
                  </a>
                  <a
                    href="#accessibility"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Accessibility
                  </a>
                  <a
                    href="#performance"
                    className="block px-4 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Performance
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert max-w-none">
                {/* Overview */}
                <section id="overview" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Overview</h2>
                  <p className="text-neutral-300 mb-4">
                    This portfolio website is built using Next.js 14 with the App Router, TypeScript, and Tailwind CSS.
                    It features a modern, responsive design with advanced animations, accessibility features, and
                    performance optimizations.
                  </p>
                  <p className="text-neutral-300 mb-4">
                    The site is structured around a component-based architecture, with reusable UI components, layout
                    sections, and service modules that handle various functionalities like analytics, form handling, and
                    content management.
                  </p>
                  <div className="bg-[#111112] border border-white/10 rounded-lg p-6 mt-6">
                    <h3 className="text-xl font-medium mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                      <li>Responsive design that works on all device sizes</li>
                      <li>Advanced animations and transitions</li>
                      <li>Comprehensive accessibility features</li>
                      <li>Performance optimizations for fast loading</li>
                      <li>Multi-language support</li>
                      <li>Dark/light mode toggle</li>
                      <li>Blog and resources sections</li>
                      <li>Contact form with validation</li>
                      <li>Portfolio showcase with filtering</li>
                      <li>Interactive resume/CV</li>
                      <li>Client portal for project management</li>
                      <li>Social media integration</li>
                    </ul>
                  </div>
                </section>

                {/* Getting Started */}
                <section id="getting-started" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Getting Started</h2>
                  <p className="text-neutral-300 mb-4">
                    To get started with this portfolio website, follow these steps:
                  </p>
                  <div className="bg-[#111112] border border-white/10 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-medium mb-4">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-2 text-neutral-300">
                      <li>Node.js 18.0 or later</li>
                      <li>npm or yarn package manager</li>
                      <li>Git (optional, for version control)</li>
                    </ul>
                  </div>
                  <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Installation</h3>
                    <ol className="list-decimal list-inside space-y-4 text-neutral-300">
                      <li>
                        <p className="mb-2">Clone the repository:</p>
                        <pre className="bg-black p-4 rounded-md overflow-x-auto">
                          <code>git clone https://github.com/username/portfolio.git</code>
                        </pre>
                      </li>
                      <li>
                        <p className="mb-2">Install dependencies:</p>
                        <pre className="bg-black p-4 rounded-md overflow-x-auto">
                          <code>cd portfolio npm install</code>
                        </pre>
                      </li>
                      <li>
                        <p className="mb-2">Set up environment variables:</p>
                        <pre className="bg-black p-4 rounded-md overflow-x-auto">
                          <code>cp .env.example .env.local</code>
                        </pre>
                        <p className="mt-2">Edit the .env.local file with your own values.</p>
                      </li>
                      <li>
                        <p className="mb-2">Run the development server:</p>
                        <pre className="bg-black p-4 rounded-md overflow-x-auto">
                          <code>npm run dev</code>
                        </pre>
                      </li>
                      <li>
                        <p>Open your browser and navigate to http://localhost:3000</p>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Architecture */}
                <section id="architecture" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Architecture</h2>
                  <p className="text-neutral-300 mb-6">
                    The portfolio website follows a modular architecture based on Next.js App Router and React
                    components. Here's an overview of the project structure:
                  </p>
                  <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                    <pre className="text-sm text-neutral-300 overflow-x-auto">
                      <code>
                        {`portfolio/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── work/             # Work/portfolio pages
│   ├── services/         # Services pages
│   ├── process/          # Process pages
│   ├── blog/             # Blog pages
│   ├── resources/        # Resources pages
│   ├── contact/          # Contact page
│   ├── resume/           # Resume/CV page
│   ├── social/           # Social media page
│   ├── client-portal/    # Client portal pages
│   ├── style-guide/      # Style guide page
│   └── documentation/    # Documentation page
├── components/           # React components
│   ├── ui/               # UI components
│   ├── sections/         # Page sections
│   ├── blog/             # Blog components
│   ├── case-study/       # Case study components
│   └── providers/        # Context providers
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
│   ├── animation-utils.ts # Animation utilities
│   ├── focus-manager.ts  # Focus management
│   └── i18n/             # Internationalization
├── services/             # Service modules
│   ├── api.service.ts    # API service
│   ├── analytics.service.ts # Analytics service
│   ├── auth.service.ts   # Authentication service
│   └── form.service.ts   # Form handling service
├── public/               # Static assets
└── styles/               # Global styles`}
                      </code>
                    </pre>
                  </div>
                </section>

                {/* Components */}
                <section id="components" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Components</h2>
                  <p className="text-neutral-300 mb-6">
                    The portfolio uses a component-based architecture with reusable UI components and page sections.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-4">UI Components</h3>
                      <p className="text-neutral-300 mb-4">
                        These are small, reusable components that make up the UI of the website:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-neutral-300">
                        <li>
                          <strong>AnimatedElement</strong> - Wrapper component for animations
                        </li>
                        <li>
                          <strong>TextReveal</strong> - Text animation component
                        </li>
                        <li>
                          <strong>CursorEffect</strong> - Custom cursor effect
                        </li>
                        <li>
                          <strong>ParallaxElement</strong> - Parallax scrolling effect
                        </li>
                        <li>
                          <strong>3DCard</strong> - Interactive 3D card effect
                        </li>
                        <li>
                          <strong>ImageComparison</strong> - Before/after image comparison
                        </li>
                        <li>
                          <strong>GlobalSearch</strong> - Site-wide search component
                        </li>
                        <li>
                          <strong>ThemeToggle</strong> - Dark/light mode toggle
                        </li>
                        <li>
                          <strong>LanguageSwitcher</strong> - Language selection component
                        </li>
                        <li>
                          <strong>AccessibilityPanel</strong> - Accessibility options panel
                        </li>
                        <li>
                          <strong>FocusTrap</strong> - Focus management for modals
                        </li>
                        <li>
                          <strong>SkipLink</strong> - Accessibility skip link
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-4">Section Components</h3>
                      <p className="text-neutral-300 mb-4">
                        These are larger components that make up sections of pages:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-neutral-300">
                        <li>
                          <strong>HeroSection</strong> - Hero section for the home page
                        </li>
                        <li>
                          <strong>AboutSection</strong> - About section
                        </li>
                        <li>
                          <strong>ServicesSection</strong> - Services overview
                        </li>
                        <li>
                          <strong>FeaturedWorkSection</strong> - Featured portfolio items
                        </li>
                        <li>
                          <strong>TestimonialsSection</strong> - Client testimonials
                        </li>
                        <li>
                          <strong>ProcessSection</strong> - Work process overview
                        </li>
                        <li>
                          <strong>ContactSection</strong> - Contact form and information
                        </li>
                        <li>
                          <strong>BlogGridSection</strong> - Blog post grid
                        </li>
                        <li>
                          <strong>CTASection</strong> - Call to action sections
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Pages */}
                <section id="pages" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Pages</h2>
                  <p className="text-neutral-300 mb-6">The portfolio includes the following pages:</p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Home Page</h3>
                      <p className="text-neutral-300">
                        The main landing page featuring a hero section, services overview, featured work, testimonials,
                        and contact section.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">About Page</h3>
                      <p className="text-neutral-300">
                        Detailed information about the designer, including background, skills, journey, and philosophy.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Work/Portfolio Page</h3>
                      <p className="text-neutral-300">
                        Showcase of projects with filtering options, case studies, and client testimonials.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Services Page</h3>
                      <p className="text-neutral-300">
                        Overview of services offered, including packages, process, and FAQs.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Process Page</h3>
                      <p className="text-neutral-300">
                        Detailed explanation of the design process, methodology, and tools used.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Blog Page</h3>
                      <p className="text-neutral-300">
                        Collection of articles and insights, with categories and search functionality.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Resources Page</h3>
                      <p className="text-neutral-300">Downloadable resources, tools, and templates for users.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Contact Page</h3>
                      <p className="text-neutral-300">Contact form, information, and booking options.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Resume/CV Page</h3>
                      <p className="text-neutral-300">
                        Interactive resume with timeline, skills visualization, and downloadable formats.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Client Portal</h3>
                      <p className="text-neutral-300">
                        Secure area for clients to view project status, files, and communications.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services */}
                <section id="services" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Services</h2>
                  <p className="text-neutral-300 mb-6">
                    The portfolio includes several service modules that handle various functionalities:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">API Service</h3>
                      <p className="text-neutral-300">
                        Handles API requests and responses, with error handling and caching.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Analytics Service</h3>
                      <p className="text-neutral-300">
                        Tracks page views, events, and user interactions for analytics purposes.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Authentication Service</h3>
                      <p className="text-neutral-300">Handles user authentication for the client portal.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Form Service</h3>
                      <p className="text-neutral-300">Handles form submissions, validation, and error handling.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Content Service</h3>
                      <p className="text-neutral-300">
                        Manages content retrieval and rendering for blog posts and resources.
                      </p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">SEO Service</h3>
                      <p className="text-neutral-300">Handles SEO metadata, structured data, and sitemap generation.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Theme Service</h3>
                      <p className="text-neutral-300">Manages theme preferences and customization options.</p>
                    </div>
                  </div>
                </section>

                {/* Hooks */}
                <section id="hooks" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Hooks</h2>
                  <p className="text-neutral-300 mb-6">The portfolio includes several custom React hooks:</p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">useContactForm</h3>
                      <p className="text-neutral-300">Handles contact form state, validation, and submission.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">useMobile</h3>
                      <p className="text-neutral-300">Detects mobile devices and screen sizes for responsive design.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">useAnimation</h3>
                      <p className="text-neutral-300">Manages animation states and preferences.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">useTheme</h3>
                      <p className="text-neutral-300">Manages theme state and preferences.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">useLanguage</h3>
                      <p className="text-neutral-300">Manages language preferences and translations.</p>
                    </div>
                  </div>
                </section>

                {/* Utilities */}
                <section id="utilities" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Utilities</h2>
                  <p className="text-neutral-300 mb-6">The portfolio includes several utility functions and modules:</p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Animation Utilities</h3>
                      <p className="text-neutral-300">Helper functions for animations and transitions.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Focus Manager</h3>
                      <p className="text-neutral-300">Utilities for managing focus for accessibility.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Internationalization</h3>
                      <p className="text-neutral-300">Utilities for managing translations and localization.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Form Validation</h3>
                      <p className="text-neutral-300">Utilities for form validation and error handling.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Date Formatting</h3>
                      <p className="text-neutral-300">Utilities for formatting dates and times.</p>
                    </div>
                  </div>
                </section>

                {/* Accessibility */}
                <section id="accessibility" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Accessibility</h2>
                  <p className="text-neutral-300 mb-6">The portfolio includes several accessibility features:</p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Skip Link</h3>
                      <p className="text-neutral-300">Allows keyboard users to skip to the main content.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Focus Management</h3>
                      <p className="text-neutral-300">Ensures proper focus management for keyboard navigation.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Screen Reader Announcements</h3>
                      <p className="text-neutral-300">Provides announcements for screen readers.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Accessibility Panel</h3>
                      <p className="text-neutral-300">Allows users to customize accessibility options.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Keyboard Navigation</h3>
                      <p className="text-neutral-300">Ensures all interactive elements are keyboard accessible.</p>
                    </div>
                  </div>
                </section>

                {/* Performance */}
                <section id="performance" className="mb-16">
                  <h2 className="text-3xl font-bricolage font-semibold mb-6">Performance</h2>
                  <p className="text-neutral-300 mb-6">The portfolio includes several performance optimizations:</p>
                  <div className="space-y-4">
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Image Optimization</h3>
                      <p className="text-neutral-300">Uses Next.js Image component for optimized images.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Code Splitting</h3>
                      <p className="text-neutral-300">Uses dynamic imports for code splitting.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Lazy Loading</h3>
                      <p className="text-neutral-300">Lazy loads components and images for faster initial load.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Performance Monitoring</h3>
                      <p className="text-neutral-300">Monitors performance metrics for optimization.</p>
                    </div>
                    <div className="bg-[#111112] border border-white/10 rounded-lg p-6">
                      <h3 className="text-xl font-medium mb-2">Adaptive Loading</h3>
                      <p className="text-neutral-300">
                        Adapts loading strategy based on device capabilities and network conditions.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
