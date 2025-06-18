"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatedElement } from "@/components/ui/animated-element"
import { ThreeDCard } from "@/components/ui/3d-card"
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Calendar,
  Clock,
  Download,
  ChevronRight,
  Bell,
  User,
  LogOut,
} from "lucide-react"

// Mock data
const projects = [
  {
    id: "1",
    name: "Website Redesign",
    status: "In Progress",
    progress: 65,
    dueDate: "2025-08-15",
    lastUpdate: "2025-07-02",
  },
  {
    id: "2",
    name: "Mobile App UI Design",
    status: "Review",
    progress: 90,
    dueDate: "2025-07-20",
    lastUpdate: "2025-07-01",
  },
  {
    id: "3",
    name: "Brand Identity",
    status: "Completed",
    progress: 100,
    dueDate: "2025-06-30",
    lastUpdate: "2025-06-28",
  },
]

const messages = [
  {
    id: "1",
    from: "Alex Morgan",
    subject: "Website Redesign Update",
    preview: "I've completed the homepage design and would like your feedback...",
    date: "2025-07-02",
    read: false,
  },
  {
    id: "2",
    from: "Alex Morgan",
    subject: "Mobile App Wireframes",
    preview: "Please review the attached wireframes for the mobile app...",
    date: "2025-06-28",
    read: true,
  },
]

const files = [
  {
    id: "1",
    name: "Website_Mockups_v2.pdf",
    size: "8.5 MB",
    type: "pdf",
    date: "2025-07-01",
  },
  {
    id: "2",
    name: "Brand_Guidelines.pdf",
    size: "12.2 MB",
    type: "pdf",
    date: "2025-06-25",
  },
  {
    id: "3",
    name: "App_Wireframes.sketch",
    size: "24.8 MB",
    type: "sketch",
    date: "2025-06-20",
  },
]

const upcomingMeetings = [
  {
    id: "1",
    title: "Website Design Review",
    date: "2025-07-10",
    time: "10:00 AM",
    duration: "1 hour",
  },
]

export default function ClientPortalDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500"
      case "Review":
        return "bg-yellow-500"
      case "Completed":
        return "bg-green-500"
      default:
        return "bg-neutral-500"
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-[#1a1a1d] border-r border-white/10">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl font-bricolage font-semibold">
              Alex<span className="text-accent-blue">.</span>Morgan
            </h1>
          </Link>
          <p className="text-sm text-neutral-400 mt-1">Client Portal</p>
        </div>

        <nav className="flex-1 px-4 pb-4">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                activeTab === "dashboard"
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                activeTab === "projects"
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveTab("messages")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                activeTab === "messages"
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
              <span className="ml-auto bg-accent-blue text-white text-xs px-2 py-0.5 rounded-full">2</span>
            </button>
            <button
              onClick={() => setActiveTab("files")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                activeTab === "files" ? "bg-white/10 text-white" : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Download className="w-5 h-5" />
              <span>Files</span>
            </button>
            <button
              onClick={() => setActiveTab("meetings")}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm rounded-lg transition-colors ${
                activeTab === "meetings"
                  ? "bg-white/10 text-white"
                  : "text-neutral-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Meetings</span>
            </button>
          </div>
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-accent-blue/20 flex items-center justify-center">
              <User className="w-4 h-4 text-accent-blue" />
            </div>
            <div>
              <p className="text-sm font-medium">Client Name</p>
              <p className="text-xs text-neutral-500">client@company.com</p>
            </div>
          </div>
          <button className="w-full mt-2 flex items-center gap-2 px-4 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#111112] border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bricolage font-medium">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/5">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent-blue rounded-full"></span>
              </button>
              <div className="md:hidden">
                <button className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/5">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6 bg-[#111112]">
          <AnimatedElement variant="fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Projects Overview */}
              <ThreeDCard className="col-span-1 md:col-span-2 lg:col-span-2 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Active Projects</h2>
                  <button className="text-sm text-accent-blue hover:underline flex items-center gap-1">
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{project.name}</h3>
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block w-2 h-2 rounded-full ${getStatusColor(project.status)}`}
                          ></span>
                          <span className="text-sm text-neutral-400">{project.status}</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-blue rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
                        </div>
                        <span>Last update: {new Date(project.lastUpdate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ThreeDCard>

              {/* Messages */}
              <ThreeDCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Recent Messages</h2>
                  <button className="text-sm text-accent-blue hover:underline flex items-center gap-1">
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`p-3 rounded-lg border ${
                        message.read ? "bg-white/5 border-white/10" : "bg-accent-blue/10 border-accent-blue/20"
                      } hover:bg-white/10 transition-colors`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-sm">{message.subject}</h3>
                        {!message.read && <div className="w-2 h-2 rounded-full bg-accent-blue"></div>}
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-1 mb-2">{message.preview}</p>
                      <div className="flex items-center justify-between text-xs text-neutral-500">
                        <span>From: {message.from}</span>
                        <span>{new Date(message.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </ThreeDCard>

              {/* Files */}
              <ThreeDCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Recent Files</h2>
                  <button className="text-sm text-accent-blue hover:underline flex items-center gap-1">
                    <span>View All</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  {files.map((file) => (
                    <div
                      key={file.id}
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent-blue/20 rounded flex items-center justify-center">
                          <FileText className="w-5 h-5 text-accent-blue" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm truncate">{file.name}</h3>
                          <div className="flex items-center justify-between text-xs text-neutral-500">
                            <span>{file.size}</span>
                            <span>{new Date(file.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <button className="p-2 text-neutral-400 hover:text-white rounded-full hover:bg-white/10">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </ThreeDCard>

              {/* Upcoming Meetings */}
              <ThreeDCard className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-medium">Upcoming Meetings</h2>
                  <button className="text-sm text-accent-blue hover:underline flex items-center gap-1">
                    <span>Schedule</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                {upcomingMeetings.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingMeetings.map((meeting) => (
                      <div
                        key={meeting.id}
                        className="p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <h3 className="font-medium mb-2">{meeting.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(meeting.date).toLocaleDateString()} at {meeting.time} ({meeting.duration})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="text-xs px-3 py-1.5 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                            Join Meeting
                          </button>
                          <button className="text-xs px-3 py-1.5 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>Add to Calendar</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calendar className="w-12 h-12 text-neutral-500 mx-auto mb-3" />
                    <p className="text-neutral-400 mb-4">No upcoming meetings</p>
                    <button className="text-sm px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue/90 transition-colors">
                      Schedule a Meeting
                    </button>
                  </div>
                )}
              </ThreeDCard>
            </div>
          </AnimatedElement>
        </main>
      </div>
    </div>
  )
}
