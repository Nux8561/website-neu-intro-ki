"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Clock, Mail, Phone, Calendar, Users, FileText } from "lucide-react"

interface Activity {
  id: string
  person: string
  action: string
  time: string
  type: "meeting" | "email" | "call" | "event" | "note"
}

interface ActivityTimelineProps {
  activities: Activity[]
  className?: string
}

const activityIcons = {
  meeting: Users,
  email: Mail,
  call: Phone,
  event: Calendar,
  note: FileText,
}

export function ActivityTimeline({ activities, className }: ActivityTimelineProps) {
  return (
    <div className={`space-y-3 ${className || ""}`}>
      {activities.map((activity, index) => {
        const Icon = activityIcons[activity.type] || Clock
        
        return (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="flex items-start gap-3 text-sm group"
          >
            <div className="p-1.5 rounded-lg bg-[#0B0C0E]/5 text-[#0B0C0E]/70 flex-shrink-0 mt-0.5">
              <Icon className="h-3.5 w-3.5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#0B0C0E] font-inter">
                <span className="font-medium">{activity.person}</span>
                <span className="text-[#0B0C0E]/70"> {activity.action}</span>
              </p>
              <p className="text-xs text-[#0B0C0E]/50 font-inter mt-0.5">
                {activity.time}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

