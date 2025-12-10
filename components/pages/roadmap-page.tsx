"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Check, Clock, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const roadmapItems = [
  {
    status: "completed",
    quarter: "Q4 2024",
    items: [
      "Deep Research Feature",
      "Lead Scoring Algorithm",
      "Pipeline Management",
      "Basic Analytics",
    ],
  },
  {
    status: "in-progress",
    quarter: "Q1 2025",
    items: [
      "Live Call Coaching",
      "Advanced Workflow Automation",
      "Custom Integrations",
      "Mobile App",
    ],
  },
  {
    status: "planned",
    quarter: "Q2 2025",
    items: [
      "AI Recommendations Engine",
      "Advanced Reporting",
      "Multi-Language Support",
      "White-Label Option",
    ],
  },
]

export function RoadmapPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <Check className="mr-1 h-3 w-3" />
            Abgeschlossen
          </Badge>
        )
      case "in-progress":
        return (
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
            <Clock className="mr-1 h-3 w-3" />
            In Arbeit
          </Badge>
        )
      default:
        return (
          <Badge className="bg-[#0B0C0E]/10 text-[#0B0C0E]/70 border-[#0B0C0E]/20">
            <Sparkles className="mr-1 h-3 w-3" />
            Geplant
          </Badge>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-[#0B0C0E]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6"
              >
                Roadmap
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Unsere Roadmap
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Sehen Sie, was wir bereits umgesetzt haben und was als Nächstes
              kommt.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Items */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
                className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E]">
                    {item.quarter}
                  </h2>
                  {getStatusBadge(item.status)}
                </div>
                <ul className="space-y-3">
                  {item.items.map((roadmapItem, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[#0B0C0E]/70 font-inter"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {roadmapItem}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

