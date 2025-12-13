"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CalendarEvent } from "@/components/ui/calendar-event"
import { ActivityTimeline } from "@/components/ui/activity-timeline"
import { 
  Mail, 
  Calendar, 
  ArrowRight,
  Building2,
  Clock,
  User,
  Database,
  Linkedin,
} from "lucide-react"

export function DataEnrichmentSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [dataLoaded, setDataLoaded] = React.useState(false)

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setDataLoaded(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          {/* Section Number */}
          <div className="text-sm font-mono text-black/50 mb-4">
            [03] data enrichment
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-black mb-4">
            Schnell aufgebaut.
          </h2>
          <p className="text-lg text-black/70 font-inter mb-12 max-w-2xl">
            Vergiss monatelange Einrichtung. IntroKI synchronisiert sich sofort mit deinem E-Mail und Kalender und baut ein leistungsstarkes CRM vor deinen Augen auf.
          </p>

          {/* Data Sources */}
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border-subtle">
              <Mail className="h-4 w-4 text-text-secondary" />
              <span className="text-sm font-inter text-text-primary">Email events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border-subtle">
              <Calendar className="h-4 w-4 text-text-secondary" />
              <span className="text-sm font-inter text-text-primary">Calendar events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border-subtle">
              <Database className="h-4 w-4 text-text-secondary" />
              <span className="text-sm font-inter text-text-primary">Segment events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full border border-border-subtle">
              <span className="text-sm font-inter text-text-muted">Data sources</span>
            </div>
          </div>

          <div className="flex gap-6 mb-12">
            <Button className="rounded-full bg-text-primary text-white">
              Kostenlos starten
            </Button>
            <Button variant="outline" className="rounded-full">
              Demo ansehen
            </Button>
          </div>

          {/* Person Card Demo */}
          <div className="bg-surface border border-border-subtle rounded-2xl p-8">
            <div className="bg-background rounded-xl p-6 border border-border-subtle">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-border-subtle">
                  <span className="text-2xl font-jakarta font-semibold text-text-primary">
                    SJ
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-jakarta font-medium text-text-primary mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-sm text-text-secondary font-inter mb-2">
                    Head of IT at GreenLeaf Inc.
                  </p>
                  <a
                    href="https://linkedin.com/in/sarahjohnson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-inter transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    <span>sarahjohnson</span>
                  </a>
                </div>
                <Button variant="outline" size="sm" className="rounded-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Compose email
                </Button>
              </div>

              {/* Highlights */}
              {dataLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <h4 className="text-sm font-jakarta font-medium text-text-primary mb-3">
                    Highlights
                  </h4>
                  <div className="bg-surface rounded-lg p-4">
                    <p className="text-sm text-text-secondary font-inter leading-relaxed">
                      Sarah Johnson, the Head of IT, is leading the initiative to modernize their data infrastructure, which aligns with GreenLeaf&apos;s growth and sustainability goals. A successful demo call on August 29 confirmed the need for TechWave&apos;s solutions, and the opportunity is moving forward with a 75% confidence level.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Upcoming Events */}
              {dataLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-6"
                >
                  <h4 className="text-sm font-jakarta font-medium text-text-primary mb-3">
                    Upcoming
                  </h4>
                  <CalendarEvent
                    title="Demo Call"
                    date="Nov 29"
                    time="10:40 AM"
                    type="meeting"
                  />
                </motion.div>
              )}

              {/* Company Info */}
              {dataLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-6"
                >
                  <h4 className="text-sm font-jakarta font-medium text-text-primary mb-3">
                    Company
                  </h4>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-text-muted" />
                    <span className="text-sm text-text-secondary font-inter">
                      GreenLeaf Inc.
                    </span>
                    <span className="text-xs text-text-muted">San Francisco, CA</span>
                  </div>
                </motion.div>
              )}

              {/* Activity */}
              {dataLoaded && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h4 className="text-sm font-jakarta font-medium text-text-primary mb-3">
                    Activity
                  </h4>
                  <ActivityTimeline
                    activities={[
                      { id: "1", person: "Michael Chang", action: "attended an in-person meeting", time: "6 hours ago", type: "meeting" },
                      { id: "2", person: "Sarah Johnson", action: "attended an event", time: "2 days ago", type: "event" },
                      { id: "3", person: "Michael Chang", action: "made an outbound phone call", time: "4 days ago", type: "call" },
                    ]}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

