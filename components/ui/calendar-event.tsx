"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

interface CalendarEventProps {
  title: string
  date: string
  time: string
  type?: "meeting" | "call" | "event"
  className?: string
}

export function CalendarEvent({ title, date, time, type = "meeting", className }: CalendarEventProps) {
  return (
    <motion.div
      className={`flex items-center gap-3 p-3 bg-[#0B0C0E]/5 rounded-lg hover:bg-[#0B0C0E]/10 transition-all cursor-pointer group ${className || ""}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-600 flex-shrink-0">
        <Calendar className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-inter text-[#0B0C0E] font-medium mb-0.5">
          {title}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#0B0C0E]/50 font-inter">
          <Clock className="h-3 w-3" />
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>
      </div>
    </motion.div>
  )
}

