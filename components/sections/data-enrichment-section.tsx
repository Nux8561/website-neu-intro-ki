"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Calendar, 
  ArrowRight,
  Building2,
  Clock,
  User,
  Database,
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
      className="relative py-24 overflow-hidden bg-white"
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
          <div className="text-sm font-mono text-[#0B0C0E]/50 mb-4">
            [03] data enrichment
          </div>

          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
            Build fast.
          </h2>
          <p className="text-lg text-[#0B0C0E]/70 font-inter mb-12 max-w-2xl">
            Forget months of setup. Attio syncs immediately with your email and calendar, building a powerful CRM right before your eyes.
          </p>

          {/* Data Sources */}
          <div className="flex items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0B0C0E]/5 rounded-full border border-[#0B0C0E]/10">
              <Mail className="h-4 w-4 text-[#0B0C0E]/70" />
              <span className="text-sm font-inter text-[#0B0C0E]">Email events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0B0C0E]/5 rounded-full border border-[#0B0C0E]/10">
              <Calendar className="h-4 w-4 text-[#0B0C0E]/70" />
              <span className="text-sm font-inter text-[#0B0C0E]">Calendar events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0B0C0E]/5 rounded-full border border-[#0B0C0E]/10">
              <Database className="h-4 w-4 text-[#0B0C0E]/70" />
              <span className="text-sm font-inter text-[#0B0C0E]">Segment events</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#0B0C0E]/5 rounded-full border border-[#0B0C0E]/10">
              <span className="text-sm font-inter text-[#0B0C0E]/50">Data sources</span>
            </div>
          </div>

          <div className="flex gap-6 mb-12">
            <Button className="rounded-full bg-[#0B0C0E] text-white">
              Start for free
            </Button>
            <Button variant="outline" className="rounded-full">
              Send me a demo
            </Button>
          </div>

          {/* Person Card Demo */}
          <div className="bg-[#0B0C0E]/5 border border-[#0B0C0E]/10 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 border border-[#0B0C0E]/10">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#0B0C0E]/10 flex items-center justify-center">
                  <User className="h-6 w-6 text-[#0B0C0E]/70" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-jakarta font-medium text-[#0B0C0E] mb-1">
                    Sarah Johnson
                  </h3>
                  <p className="text-sm text-[#0B0C0E]/70 font-inter">
                    Head of IT at GreenLeaf Inc.
                  </p>
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
                  <h4 className="text-sm font-jakarta font-medium text-[#0B0C0E] mb-3">
                    Highlights
                  </h4>
                  <div className="bg-[#0B0C0E]/5 rounded-lg p-4">
                    <p className="text-sm text-[#0B0C0E]/70 font-inter leading-relaxed">
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
                  <h4 className="text-sm font-jakarta font-medium text-[#0B0C0E] mb-3">
                    Upcoming
                  </h4>
                  <div className="flex items-center gap-3 p-3 bg-[#0B0C0E]/5 rounded-lg">
                    <Calendar className="h-4 w-4 text-[#0B0C0E]/70" />
                    <div>
                      <p className="text-sm font-inter text-[#0B0C0E] font-medium">
                        Demo Call
                      </p>
                      <p className="text-xs text-[#0B0C0E]/50 font-inter">
                        Nov 29, 10:40 AM
                      </p>
                    </div>
                  </div>
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
                  <h4 className="text-sm font-jakarta font-medium text-[#0B0C0E] mb-3">
                    Company
                  </h4>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#0B0C0E]/50" />
                    <span className="text-sm text-[#0B0C0E]/70 font-inter">
                      GreenLeaf Inc.
                    </span>
                    <span className="text-xs text-[#0B0C0E]/50">San Francisco, CA</span>
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
                  <h4 className="text-sm font-jakarta font-medium text-[#0B0C0E] mb-3">
                    Activity
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "Michael Chang", action: "attended an in-person meeting", time: "6 hours ago" },
                      { name: "Sarah Johnson", action: "attended an event", time: "2 days ago" },
                      { name: "Michael Chang", action: "made an outbound phone call", time: "4 days ago" },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm">
                        <Clock className="h-4 w-4 text-[#0B0C0E]/50 mt-0.5" />
                        <div>
                          <span className="font-inter text-[#0B0C0E]">{activity.name}</span>
                          <span className="text-[#0B0C0E]/70"> {activity.action}</span>
                          <span className="text-[#0B0C0E]/50 text-xs ml-2">{activity.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

