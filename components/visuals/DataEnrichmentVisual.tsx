"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { MovingBorder } from "@/components/ui/moving-border"
import { snappySpring } from "@/lib/animations"

export function DataEnrichmentVisual() {
  const [phase, setPhase] = React.useState<"incomplete" | "scanning" | "enriched">("incomplete")
  const [showAvatar, setShowAvatar] = React.useState(false)
  const [showName, setShowName] = React.useState(false)
  const [showJob, setShowJob] = React.useState(false)
  const [showEmail, setShowEmail] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Szene 1: Der Mangel
      setPhase("incomplete")
      setShowAvatar(false)
      setShowName(false)
      setShowJob(false)
      setShowEmail(false)

      // Szene 2: Der Scan (nach 0.5s)
      setTimeout(() => {
        setPhase("scanning")
      }, 500)

      // Szene 3: Der Fund - Impact (nach 1.5s)
      setTimeout(() => {
        setPhase("enriched")
        // Zack - Avatar
        setShowAvatar(true)
        // Zack - Name (+100ms)
        setTimeout(() => {
          setShowName(true)
        }, 100)
        // Zack - Job (+100ms)
        setTimeout(() => {
          setShowJob(true)
        }, 200)
        // Zack - Email (+100ms)
        setTimeout(() => {
          setShowEmail(true)
        }, 300)
      }, 1500)

      // Reset (nach 3s Pause)
      setTimeout(() => {
        setPhase("incomplete")
        setShowAvatar(false)
        setShowName(false)
        setShowJob(false)
        setShowEmail(false)
      }, 4500)
    }, 5000) // Loop alle 5 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-xl p-4 border border-attio-subtle shadow-attio-card">
      {phase === "scanning" ? (
        <MovingBorder duration={2000} className="p-4">
          <div className="relative flex gap-3">
            {/* Status Badge */}
            <div className="absolute top-0 right-0 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={snappySpring}
                className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-[10px] font-inter font-medium text-gray-600"
              >
                Scanning...
              </motion.div>
            </div>

            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <div className="w-full h-full bg-gray-300" />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-24" />
              <div className="h-3 bg-gray-200 rounded w-32" />
              <div className="h-3 bg-gray-200 rounded w-36" />
            </div>
          </div>
        </MovingBorder>
      ) : (
        <div className="relative bg-white rounded-lg p-4 shadow-sm border border-attio-subtle">
          {/* Status Badge */}
          <div className="absolute top-3 right-3 z-10">
            <AnimatePresence mode="wait">
              {phase === "incomplete" && (
                <motion.div
                  key="incomplete"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={snappySpring}
                  className="px-2 py-1 bg-gray-100 border border-gray-200 rounded text-[10px] font-inter font-medium text-gray-600"
                >
                  Incomplete
                </motion.div>
              )}
              {phase === "enriched" && (
                <motion.div
                  key="enriched"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={snappySpring}
                  className="px-2 py-1 bg-green-50 border border-green-200 rounded text-[10px] font-inter font-medium text-green-700 flex items-center gap-1"
                >
                  <CheckCircle2 className="h-3 w-3" />
                  Enriched
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Card Content */}
          <div className="flex gap-3">
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
              <AnimatePresence>
                {showAvatar ? (
                  <motion.div
                    key="avatar-filled"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={snappySpring}
                    className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"
                  />
                ) : (
                  <motion.div
                    key="avatar-placeholder"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={snappySpring}
                    className="w-full h-full bg-gray-300"
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-2">
              {/* Name */}
              <AnimatePresence mode="wait">
                {showName ? (
                  <motion.div
                    key="name-filled"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={snappySpring}
                    className="h-4 bg-transparent text-sm font-inter font-semibold text-gray-900"
                  >
                    Elon Musk
                  </motion.div>
                ) : (
                  <motion.div
                    key="name-placeholder"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={snappySpring}
                    className="h-4 bg-gray-200 rounded w-24"
                  />
                )}
              </AnimatePresence>

              {/* Job */}
              <AnimatePresence mode="wait">
                {showJob ? (
                  <motion.div
                    key="job-filled"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={snappySpring}
                    className="h-3 bg-transparent text-xs font-inter text-gray-600"
                  >
                    CEO @ Tesla
                  </motion.div>
                ) : (
                  <motion.div
                    key="job-placeholder"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={snappySpring}
                    className="h-3 bg-gray-200 rounded w-32"
                  />
                )}
              </AnimatePresence>

              {/* Email */}
              <AnimatePresence mode="wait">
                {showEmail ? (
                  <motion.div
                    key="email-filled"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={snappySpring}
                    className="flex items-center gap-1.5 h-3"
                  >
                    <span className="text-xs font-inter text-gray-600">elon@tesla.com</span>
                    <CheckCircle2 className="h-3 w-3 text-green-600" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="email-placeholder"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={snappySpring}
                    className="h-3 bg-gray-200 rounded w-36"
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
