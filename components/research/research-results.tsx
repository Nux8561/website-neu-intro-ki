"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CompanyCard } from "./company-card"
import { ContactsList } from "./contacts-list"
import { NewsFeed } from "./news-feed"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap, Target, Rocket } from "lucide-react"

interface ResearchResultsProps {
  company?: string
  mode?: "schnell" | "tiefen" | "ultra"
}

export function ResearchResults({
  company = "Acme Corp",
  mode = "tiefen",
}: ResearchResultsProps) {
  const getModeInfo = () => {
    switch (mode) {
      case "schnell":
        return {
          icon: Zap,
          label: "Schnell-Modus",
          time: "< 10 Sekunden",
          color: "bg-green-500/20 text-green-400 border-green-500/30",
        }
      case "tiefen":
        return {
          icon: Target,
          label: "Tiefen-Modus",
          time: "< 30 Sekunden",
          color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        }
      default:
        return {
          icon: Rocket,
          label: "Ultra-Modus",
          time: "< 60 Sekunden",
          color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
        }
    }
  }

  const modeInfo = getModeInfo()
  const ModeIcon = modeInfo.icon

  return (
    <div className="min-h-screen bg-[#0B0C0E] p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-jakarta font-medium tracking-tight text-white mb-2">
              Research Results
            </h1>
            <p className="text-white/70 font-inter">
              Research für: <span className="text-white">{company}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className={modeInfo.color}>
              <ModeIcon className="mr-2 h-3 w-3" />
              {modeInfo.label}
            </Badge>
            <Badge variant="outline" className="bg-white/5 text-white/70 border-white/10">
              <Clock className="mr-2 h-3 w-3" />
              {modeInfo.time}
            </Badge>
          </div>
        </motion.div>

        {/* Company Card */}
        <CompanyCard company={company} />

        {/* Contacts List */}
        <ContactsList />

        {/* News Feed */}
        <NewsFeed company={company} />
      </div>
    </div>
  )
}

