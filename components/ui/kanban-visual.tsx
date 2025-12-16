/**
 * Kanban Visual - Pipeline Management
 * Zeigt 2 Spalten mit animierter Deal-Karte, die von links nach rechts gleitet
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"

export function KanbanVisual() {
  const [mounted, setMounted] = React.useState(false)
  const [cardMoved, setCardMoved] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setCardMoved(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[300px] p-8">
      <div className="flex gap-4 h-full relative">
        {/* Column 1: Qualified */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={attioTransition}
          className="flex-1 bg-gray-50 rounded-xl border border-gray-200 p-4 relative"
        >
          <h4 className="text-sm font-inter font-semibold text-gray-700 mb-3">
            Qualified
          </h4>
          <div className="space-y-3">
            {/* Static Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
            </div>
            {/* Animated Card - appears and moves */}
            {mounted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: cardMoved ? 0 : 1,
                  scale: cardMoved ? 0.9 : 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="bg-white rounded-lg border-2 border-blue-500 p-3 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 bg-blue-500 rounded w-20" />
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>
                <div className="h-2 bg-gray-300 rounded w-16" />
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Column 2: Proposal */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={attioTransition}
          className="flex-1 bg-gray-50 rounded-xl border border-gray-200 p-4 relative overflow-hidden"
        >
          <h4 className="text-sm font-inter font-semibold text-gray-700 mb-3">
            Proposal
          </h4>
          <div className="space-y-3">
            {/* Static Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-3">
              <div className="h-2 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
            </div>
            {/* Animated Card - appears in right column */}
            {cardMoved && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  ...attioTransition,
                }}
                className="bg-white rounded-lg border-2 border-blue-500 p-3 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 bg-blue-500 rounded w-20" />
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>
                <div className="h-2 bg-gray-300 rounded w-16" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

