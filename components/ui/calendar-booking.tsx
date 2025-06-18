"use client"

import { useState } from "react"
import { Clock, Video, MapPin, X } from "lucide-react"

interface CalendarBookingProps {
  isOpen: boolean
  onClose: () => void
}

export function CalendarBooking({ isOpen, onClose }: CalendarBookingProps) {
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [meetingType, setMeetingType] = useState<"video" | "phone" | "in-person">("video")

  const availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const handleBooking = () => {
    // In a real app, this would integrate with a calendar service
    console.log("Booking:", { selectedDate, selectedTime, meetingType })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-foreground border border-white/10 rounded-xl2 w-full max-w-2xl shadow-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bricolage font-semibold">Schedule a Consultation</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white transition">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Meeting Type */}
          <div>
            <h3 className="font-medium mb-3">Meeting Type</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setMeetingType("video")}
                className={`p-3 rounded-lg border transition ${
                  meetingType === "video"
                    ? "border-accent-blue bg-accent-blue/20 text-accent-blue"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <Video className="w-5 h-5 mx-auto mb-2" />
                <span className="text-sm">Video Call</span>
              </button>
              <button
                onClick={() => setMeetingType("phone")}
                className={`p-3 rounded-lg border transition ${
                  meetingType === "phone"
                    ? "border-accent-blue bg-accent-blue/20 text-accent-blue"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <Clock className="w-5 h-5 mx-auto mb-2" />
                <span className="text-sm">Phone Call</span>
              </button>
              <button
                onClick={() => setMeetingType("in-person")}
                className={`p-3 rounded-lg border transition ${
                  meetingType === "in-person"
                    ? "border-accent-blue bg-accent-blue/20 text-accent-blue"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <MapPin className="w-5 h-5 mx-auto mb-2" />
                <span className="text-sm">In Person</span>
              </button>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h3 className="font-medium mb-3">Select Date</h3>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full px-4 py-3 bg-surface border border-neutral-700 rounded-lg focus:border-accent-blue focus:outline-none transition"
            />
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="font-medium mb-3">Available Times</h3>
            <div className="grid grid-cols-3 gap-3">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border transition ${
                    selectedTime === time
                      ? "border-accent-blue bg-accent-blue/20 text-accent-blue"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Meeting Details */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium mb-2">30-Minute Consultation</h4>
            <p className="text-sm text-neutral-400 mb-3">
              We'll discuss your project goals, timeline, and how I can help bring your vision to life.
            </p>
            <ul className="text-sm text-neutral-400 space-y-1">
              <li>• Project scope discussion</li>
              <li>• Timeline and budget overview</li>
              <li>• Q&A about my process</li>
              <li>• Next steps planning</li>
            </ul>
          </div>
        </div>

        <div className="p-6 border-t border-white/10 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-surface border border-white/10 rounded-lg font-medium hover:bg-surface-foreground transition"
          >
            Cancel
          </button>
          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className="flex-1 px-4 py-3 bg-accent-blue hover:bg-accent-blue/90 text-white rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  )
}
