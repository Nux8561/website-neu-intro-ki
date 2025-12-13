"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

const announcements = [
  { date: "2024-12-15", title: "Neue Multi-Agent Research Engine", description: "Wir haben unsere Research-Engine komplett überarbeitet. Jetzt noch schneller und präziser." },
  { date: "2024-12-10", title: "Call Coaching Feature verfügbar", description: "Echtzeit-Call-Coaching ist jetzt für alle Nutzer verfügbar. Verbessere deine Gespräche sofort." },
  { date: "2024-12-05", title: "Neue Integrationen", description: "Wir haben neue Integrationen hinzugefügt: Slack, Zapier und mehr." },
]

export default function AnnouncementsPage() {
  const heroRef = React.useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })

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
              Neueste Updates und News
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">von IntroKI</span>
            </h1>
            <p className="text-xl text-text-secondary font-inter mb-12 max-w-3xl mx-auto">
              Bleibe auf dem Laufenden über neue Features, Updates und wichtige Ankündigungen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-border-subtle bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-inter text-text-muted mb-2">{announcement.date}</div>
                    <h3 className="text-2xl font-jakarta font-semibold mb-2">{announcement.title}</h3>
                    <p className="text-text-secondary font-inter">{announcement.description}</p>
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
