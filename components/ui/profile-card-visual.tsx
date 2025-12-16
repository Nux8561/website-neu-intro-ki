/**
 * Profile Card Visual - Smart Targeting
 * Zeigt eine Person-Karte mit Verified Badge Animation
 */

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { attioTransition } from "@/lib/animations"

export function ProfileCardVisual() {
  const [isVerified, setIsVerified] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVerified(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={attioTransition}
        className="relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm w-full max-w-sm"
      >
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xl font-semibold">
            JD
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-inter-display font-semibold text-[#0A0A0A] text-lg">
                John Doe
              </h3>
              {/* Verified Badge */}
              <AnimatePresence>
                {isVerified && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 20,
                    }}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 0.3,
                        times: [0, 0.5, 1],
                      }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500" fill="currentColor" />
                    </motion.div>
                    {/* Pulse Ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-green-500/30"
                      animate={{
                        scale: [1, 1.5, 1.5],
                        opacity: [0.5, 0, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <p className="text-sm font-inter text-gray-600">CTO @ TechCorp</p>
          </div>
        </div>

        {/* Info Lines */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-100 rounded w-3/4" />
          <div className="h-3 bg-gray-100 rounded w-full" />
          <div className="h-3 bg-gray-100 rounded w-2/3" />
        </div>

        {/* Email Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, ...attioTransition }}
          className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200 w-fit"
        >
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-xs font-inter font-medium text-blue-700">
            E-Mail verifiziert
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

