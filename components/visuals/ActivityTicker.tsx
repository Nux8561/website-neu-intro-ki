"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle2, 
  Mail, 
  Calendar, 
  TrendingUp, 
  UserCheck,
  Zap,
  DollarSign,
  MessageSquare
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ActivityEvent {
  icon: React.ComponentType<{ className?: string }>
  text: string
  color: "blue" | "green" | "purple" | "orange"
}

const activities: ActivityEvent[] = [
  { icon: DollarSign, text: "Deal Closed $5k", color: "green" },
  { icon: Mail, text: "Email Sent", color: "blue" },
  { icon: Calendar, text: "Meeting Booked", color: "purple" },
  { icon: UserCheck, text: "Lead Qualified", color: "green" },
  { icon: CheckCircle2, text: "Task Done", color: "blue" },
  { icon: TrendingUp, text: "Pipeline Updated", color: "orange" },
  { icon: Zap, text: "Workflow Triggered", color: "purple" },
  { icon: MessageSquare, text: "Follow-up Sent", color: "blue" },
  { icon: DollarSign, text: "Deal Closed $12k", color: "green" },
  { icon: Calendar, text: "Call Scheduled", color: "purple" },
  { icon: UserCheck, text: "Contact Enriched", color: "green" },
  { icon: Mail, text: "Campaign Sent", color: "blue" },
]

const colorClasses = {
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  green: "bg-green-50 text-green-600 border-green-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  orange: "bg-orange-50 text-orange-600 border-orange-200",
}

export function ActivityTicker() {
  // Dupliziere die Activities für nahtlosen Loop
  const duplicatedActivities = [...activities, ...activities]

  return (
    <div className="relative w-full h-16 overflow-hidden bg-attio-gray/30">
      {/* Fade-Out Mask links */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-attio-gray/30 to-transparent z-10 pointer-events-none" />
      
      {/* Fade-Out Mask rechts */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-attio-gray/30 to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex items-center h-full">
        <motion.div
          className="flex items-center gap-6"
          animate={{
            x: [0, -50 * activities.length * 2],
          }}
          transition={{
            duration: 60, // Sehr langsam (60 Sekunden für einen kompletten Loop)
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedActivities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={`${activity.text}-${index}`}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-inter font-medium whitespace-nowrap opacity-40 hover:opacity-60 transition-opacity",
                  colorClasses[activity.color]
                )}
              >
                <Icon className="h-3 w-3" strokeWidth={2} />
                <span>{activity.text}</span>
              </div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

