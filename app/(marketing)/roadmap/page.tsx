"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { CheckCircle2, Clock, Sparkles } from "lucide-react"

const roadmapItems = [
  {
    quarter: "Q1 2025",
    status: "completed",
    items: [
      "Multi-Agent Research Engine",
      "Call Coaching Feature",
      "Predictive Lead Scoring",
      "Pipeline Management",
    ],
  },
  {
    quarter: "Q2 2025",
    status: "in-progress",
    items: [
      "Mobile Apps (iOS & Android)",
      "Advanced Analytics Dashboard",
      "Custom Workflow Builder",
      "API v2",
    ],
  },
  {
    quarter: "Q3 2025",
    status: "planned",
    items: [
      "AI-Powered Email Composer",
      "Advanced Reporting",
      "Team Collaboration Features",
      "Enterprise SSO",
    ],
  },
  {
    quarter: "Q4 2025",
    status: "planned",
    items: [
      "Voice Assistant Integration",
      "Predictive Analytics",
      "Custom AI Models",
      "Marketplace",
    ],
  },
]

export default function RoadmapPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-600" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-blue-600" />
      default:
        return <Sparkles className="h-5 w-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-600"
      case "in-progress":
        return "bg-blue-500/10 text-blue-600"
      default:
        return "bg-gray-500/10 text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <section ref={heroRef} className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-6">
              Produkt-Roadmap
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Sieh, was wir als Nächstes entwickeln. Unsere Roadmap zeigt dir, welche Features kommen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.quarter}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-jakarta font-semibold">{item.quarter}</h2>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                    <span className="text-sm font-inter">
                      {item.status === "completed" ? "Abgeschlossen" : item.status === "in-progress" ? "In Arbeit" : "Geplant"}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.items.map((roadmapItem, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span className="font-inter text-text-secondary">{roadmapItem}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
