"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedElement } from "@/components/ui/animated-element"
import { TextReveal } from "@/components/ui/text-reveal"
import { ParallaxElement } from "@/components/ui/parallax-element"
import { Briefcase, Download, ChevronRight, ChevronLeft, GraduationCap, Award } from "lucide-react"

// Mock data
const experience = [
  {
    id: "1",
    title: "Senior UI/UX Designer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement and a 25% reduction in customer support tickets.",
    achievements: [
      "Implemented a user-centered design process across the organization",
      "Mentored junior designers and conducted design workshops",
      "Collaborated with product managers and developers to ensure design feasibility",
    ],
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "DesignStudio",
    location: "New York, NY",
    period: "2019 - 2022",
    description:
      "Designed user interfaces for web and mobile applications for clients in fintech, healthcare, and e-commerce sectors.",
    achievements: [
      "Created design systems that improved design consistency and development efficiency",
      "Conducted user research and usability testing to inform design decisions",
      "Worked directly with clients to understand business goals and user needs",
    ],
  },
  {
    id: "3",
    title: "UI Designer",
    company: "CreativeAgency",
    location: "Chicago, IL",
    period: "2017 - 2019",
    description:
      "Designed visual interfaces for websites and digital products, focusing on brand consistency and user experience.",
    achievements: [
      "Developed brand guidelines and design assets for multiple clients",
      "Collaborated with marketing teams to create cohesive digital campaigns",
      "Improved design workflow by implementing new tools and processes",
    ],
  },
]

const education = [
  {
    id: "1",
    degree: "Master of Fine Arts in Interaction Design",
    institution: "California College of the Arts",
    location: "San Francisco, CA",
    period: "2015 - 2017",
    description:
      "Focused on user-centered design methodologies, interaction design patterns, and digital product design.",
  },
  {
    id: "2",
    degree: "Bachelor of Arts in Graphic Design",
    institution: "Rhode Island School of Design",
    location: "Providence, RI",
    period: "2011 - 2015",
    description: "Studied visual communication, typography, and digital media design with a minor in Computer Science.",
  },
]

const skills = [
  {
    category: "Design",
    items: [
      { name: "User Interface Design", level: 95 },
      { name: "User Experience Design", level: 90 },
      { name: "Interaction Design", level: 85 },
      { name: "Visual Design", level: 90 },
      { name: "Wireframing & Prototyping", level: 95 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Figma", level: 95 },
      { name: "Adobe XD", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "Adobe Photoshop", level: 80 },
      { name: "Adobe Illustrator", level: 75 },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "HTML & CSS", level: 85 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 65 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Git", level: 75 },
    ],
  },
]

const certifications = [
  {
    id: "1",
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2023",
    credential: "GUDC-123456",
  },
  {
    id: "2",
    name: "Certified User Experience Professional",
    issuer: "Nielsen Norman Group",
    date: "2022",
    credential: "UXC-789012",
  },
  {
    id: "3",
    name: "Interaction Design Foundation Certification",
    issuer: "Interaction Design Foundation",
    date: "2021",
    credential: "IDF-345678",
  },
]

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <div className="min-h-screen bg-[#111112]">
      {/* Header */}
      <header className="pt-24 pb-12 px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedElement variant="fadeInUp">
          <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-6">
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
          <TextReveal text="Interactive Resume" className="text-4xl font-bricolage font-semibold mb-4" />
          <p className="text-xl text-neutral-400 max-w-2xl">
            A comprehensive overview of my professional experience, skills, and qualifications in UI/UX design.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a
              href="/alex-morgan-resume.pdf"
              download
              className="btn-primary flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                // In a real app, this would download the actual PDF
                alert("In a real app, this would download the resume as PDF")
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </AnimatedElement>
      </header>

      {/* Tabs */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "experience"
                  ? "border-accent-blue text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "education"
                  ? "border-accent-blue text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "skills"
                  ? "border-accent-blue text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "certifications"
                  ? "border-accent-blue text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              Certifications
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="py-12 px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Experience Tab */}
        {activeTab === "experience" && (
          <AnimatedElement variant="fadeIn">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bricolage font-semibold mb-8">Professional Experience</h2>
              <div className="relative pl-8 border-l border-white/10">
                {experience.map((job, index) => (
                  <div key={job.id} className="mb-12 relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center">
                      <Briefcase className="w-3 h-3 text-white" />
                    </div>
                    <ParallaxElement speed={0.1} className="mb-2">
                      <h3 className="text-xl font-medium">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm mb-4">
                        <span className="text-accent-blue">{job.company}</span>
                        <span className="hidden sm:block text-neutral-500">•</span>
                        <span className="text-neutral-400">{job.location}</span>
                        <span className="hidden sm:block text-neutral-500">•</span>
                        <span className="text-neutral-400">{job.period}</span>
                      </div>
                    </ParallaxElement>
                    <p className="text-neutral-300 mb-4">{job.description}</p>
                    <h4 className="text-sm font-medium mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                          <ChevronRight className="w-4 h-4 text-accent-blue mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <AnimatedElement variant="fadeIn">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bricolage font-semibold mb-8">Education</h2>
              <div className="relative pl-8 border-l border-white/10">
                {education.map((edu) => (
                  <div key={edu.id} className="mb-12 relative">
                    <div className="absolute -left-[41px] w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                    <ParallaxElement speed={0.1} className="mb-2">
                      <h3 className="text-xl font-medium">{edu.degree}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm mb-4">
                        <span className="text-accent-blue">{edu.institution}</span>
                        <span className="hidden sm:block text-neutral-500">•</span>
                        <span className="text-neutral-400">{edu.location}</span>
                        <span className="hidden sm:block text-neutral-500">•</span>
                        <span className="text-neutral-400">{edu.period}</span>
                      </div>
                    </ParallaxElement>
                    <p className="text-neutral-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <AnimatedElement variant="fadeIn">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bricolage font-semibold mb-8">Skills & Expertise</h2>
              <div className="space-y-12">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-medium mb-6">{skillGroup.category}</h3>
                    <div className="space-y-6">
                      {skillGroup.items.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-neutral-400">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent-blue rounded-full"
                              style={{
                                width: `${skill.level}%`,
                                transition: "width 1s ease-in-out",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}

        {/* Certifications Tab */}
        {activeTab === "certifications" && (
          <AnimatedElement variant="fadeIn">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bricolage font-semibold mb-8">Certifications</h2>
              <div className="grid gap-6">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="p-6 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{cert.name}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm mb-2">
                          <span className="text-accent-blue">{cert.issuer}</span>
                          <span className="hidden sm:block text-neutral-500">•</span>
                          <span className="text-neutral-400">Issued {cert.date}</span>
                        </div>
                        <p className="text-sm text-neutral-500">Credential ID: {cert.credential}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
        )}
      </main>
    </div>
  )
}
