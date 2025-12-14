"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Search, Sparkles } from "lucide-react"
import Image from "next/image"
import { MovingBorder } from "@/components/ui/moving-border"
import { snappySpring } from "@/lib/animations"

export function DataEnrichmentVisual() {
  const [phase, setPhase] = React.useState<"input" | "searching" | "scanning" | "enriched">("input")
  const [showInput, setShowInput] = React.useState(true)
  const [showSearchIcon, setShowSearchIcon] = React.useState(false)
  const [showAvatar, setShowAvatar] = React.useState(false)
  const [showName, setShowName] = React.useState(false)
  const [showJob, setShowJob] = React.useState(false)
  const [showEmail, setShowEmail] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Szene 1: Input (User gibt "Bosch" ein)
      setPhase("input")
      setShowInput(true)
      setShowSearchIcon(false)
      setShowAvatar(false)
      setShowName(false)
      setShowJob(false)
      setShowEmail(false)

      // Szene 2: Searching (nach 1s) - User hat eingegeben, KI sucht
      setTimeout(() => {
        setPhase("searching")
        setShowInput(false)
        setShowSearchIcon(true)
      }, 1000)

      // Szene 3: Scanning (nach 2s) - KI scannt aktiv
      setTimeout(() => {
        setPhase("scanning")
        setShowSearchIcon(false)
      }, 2000)

      // Szene 4: Enriched - Ergebnisse (nach 3.5s)
      setTimeout(() => {
        setPhase("enriched")
        // Logo erscheint zuerst
        setShowAvatar(true)
        // Name (+100ms)
        setTimeout(() => {
          setShowName(true)
        }, 100)
        // Job (+100ms)
        setTimeout(() => {
          setShowJob(true)
        }, 200)
        // Email (+100ms)
        setTimeout(() => {
          setShowEmail(true)
        }, 300)
      }, 3500)

      // Reset (nach 4.5s Pause)
      setTimeout(() => {
        setPhase("input")
        setShowInput(true)
        setShowSearchIcon(false)
        setShowAvatar(false)
        setShowName(false)
        setShowJob(false)
        setShowEmail(false)
      }, 8000)
    }, 9000) // Loop alle 9 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-white rounded-xl p-4 border border-attio-subtle shadow-attio-card">
      {phase === "input" ? (
        <div className="relative bg-white rounded-lg p-4 shadow-sm border border-attio-subtle">
          {/* Input Field */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-inter text-gray-500 mb-2">
              <Search className="h-4 w-4" />
              <span>Firma suchen...</span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={snappySpring}
              className="flex items-center gap-2 px-3 py-2 border border-attio-subtle rounded-md bg-white"
            >
              <span className="text-sm font-inter font-medium text-gray-900">Bosch</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-0.5 h-4 bg-gray-400"
              />
            </motion.div>
          </div>
        </div>
      ) : phase === "searching" ? (
        <div className="relative bg-white rounded-lg p-4 shadow-sm border border-attio-subtle">
          <div className="flex items-center justify-center gap-3 py-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8"
            >
              <Search className="h-8 w-8 text-blue-500" />
            </motion.div>
            <div className="flex items-center gap-1">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                className="text-sm font-inter text-gray-600"
              >
                Suche
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                className="text-sm font-inter text-gray-600"
              >
                nach
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                className="text-sm font-inter font-semibold text-gray-900"
              >
                Bosch
              </motion.span>
            </div>
          </div>
        </div>
      ) : phase === "scanning" ? (
        <MovingBorder duration={2000} className="p-4">
          <div className="relative flex gap-3">
            {/* Status Badge */}
            <div className="absolute top-0 right-0 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={snappySpring}
                className="px-2 py-1 bg-blue-100 border border-blue-200 rounded text-[10px] font-inter font-medium text-blue-700 flex items-center gap-1"
              >
                <Sparkles className="h-3 w-3" />
                Scanning...
              </motion.div>
            </div>

            {/* Avatar Placeholder */}
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
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
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
              <AnimatePresence>
                {showAvatar ? (
                  <motion.div
                    key="avatar-filled"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={snappySpring}
                    className="w-full h-full relative"
                  >
                    <Image
                      src="/images/Bosch-Logo-PNG-File.png"
                      alt="Bosch Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </motion.div>
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
                    Bosch
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
                    Robert Bosch GmbH
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
                    <span className="text-xs font-inter text-gray-600">info@bosch.com</span>
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
