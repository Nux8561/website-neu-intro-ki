"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const changelogEntries = [
  {
    date: "2024-12-15",
    version: "2.1.0",
    type: "feature",
    title: "Live Call Coaching",
    description:
      "Neues Feature: Echtzeit-Unterstützung während Gesprächen mit KI-gestützten Talking Points.",
    items: [
      "Real-time Sentiment Detection",
      "Talking Points Suggestions",
      "Objection Handling Tips",
      "Post-Call Analysis",
    ],
  },
  {
    date: "2024-12-01",
    version: "2.0.0",
    type: "major",
    title: "Major Update: Neue Dashboard-Oberfläche",
    description:
      "Komplett überarbeitete Dashboard-Oberfläche im IntroKI-Stil mit verbesserter UX.",
    items: [
      "Neues Dashboard Layout",
      "Verbesserte Leads Table",
      "Pipeline Kanban Board",
      "Enhanced Analytics",
    ],
  },
  {
    date: "2024-11-20",
    version: "1.5.0",
    type: "improvement",
    title: "Performance-Verbesserungen",
    description: "Verschiedene Performance-Optimierungen und Bug-Fixes.",
    items: [
      "Faster Page Loads",
      "Improved Search Performance",
      "Bug Fixes",
      "UI Polish",
    ],
  },
]

const getTypeBadge = (type: string) => {
  switch (type) {
    case "feature":
      return (
        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
          Feature
        </Badge>
      )
    case "major":
      return (
        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
          Major
        </Badge>
      )
    default:
      return (
        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
          Improvement
        </Badge>
      )
  }
}

export function ChangelogPage() {
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
                Changelog
              </Badge>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6"
            >
              Was ist neu?
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter mb-8 max-w-2xl mx-auto"
            >
              Bleiben Sie auf dem Laufenden über neue Features, Updates und
              Verbesserungen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {changelogEntries.map((entry, index) => (
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {getTypeBadge(entry.type)}
                      <span className="text-[#0B0C0E]/50 font-mono text-sm">
                        v{entry.version}
                      </span>
                    </div>
                    <h2 className="text-2xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-2">
                      {entry.title}
                    </h2>
                    <div className="flex items-center gap-2 text-[#0B0C0E]/50 font-inter text-sm mb-4">
                      <Calendar className="h-4 w-4" />
                      {new Date(entry.date).toLocaleDateString("de-DE", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <p className="text-[#0B0C0E]/70 font-inter mb-4">
                      {entry.description}
                    </p>
                    <ul className="space-y-2">
                      {entry.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[#0B0C0E]/60 font-inter text-sm"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

