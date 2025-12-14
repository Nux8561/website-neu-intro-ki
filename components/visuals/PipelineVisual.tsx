"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User } from "lucide-react"
import { attioTransition, snappySpring } from "@/lib/animations"

export function PipelineVisual() {
  const [cardState, setCardState] = React.useState<"idle" | "picking" | "moving" | "dropping" | "success">("idle")
  const [cardInColumn, setCardInColumn] = React.useState<1 | 2>(1)
  const [column2Highlight, setColumn2Highlight] = React.useState(false)
  const [column2Hover, setColumn2Hover] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Pick up (schnell - 0.3s)
      setCardState("picking")
      setCardInColumn(1)
      setColumn2Highlight(false)
      setColumn2Hover(false)

      // Phase 2: Move (nach 0.5s)
      setTimeout(() => {
        setCardState("moving")
        setColumn2Hover(true) // Drop-Target Indikator
      }, 500)

      // Phase 3: Drop (nach 2.2s)
      setTimeout(() => {
        setCardState("dropping")
        setCardInColumn(2)
        setColumn2Hover(false)
      }, 2200)

      // Phase 4: Success flash (nach 2.4s)
      setTimeout(() => {
        setCardState("success")
        setColumn2Highlight(true)
      }, 2400)

      // Phase 5: Reset (nach 3.2s)
      setTimeout(() => {
        setCardState("idle")
        setCardInColumn(1)
        setColumn2Highlight(false)
        setColumn2Hover(false)
      }, 3200)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  const isDragging = cardState === "picking" || cardState === "moving" || cardState === "dropping"

  return (
    <div className="h-full w-full bg-white p-6">
      <div className="flex gap-4 h-full">
        {/* Column 1: New Lead */}
        <div className="flex-1 flex flex-col">
          <div className="mb-3">
            <h4 className="text-xs font-inter font-medium text-text-muted uppercase tracking-wider">
              New Lead
            </h4>
            <span className="text-xs text-text-muted">2</span>
          </div>
          <div className="bg-attio-gray rounded-lg p-3 flex-1 space-y-2 relative min-h-[200px]">
            {/* Static Dummy Card */}
            <div className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm">
              <div className="h-3 bg-gray-300 rounded w-24 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
              <div className="h-2 bg-gray-200 rounded w-20" />
            </div>

            {/* Animated Card */}
            <AnimatePresence mode="wait">
              {!isDragging && cardInColumn === 1 && (
                <motion.div
                  key="card-col1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={snappySpring}
                  className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded w-28 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-red-100 border border-red-200 rounded text-[10px] font-inter font-medium text-red-700">
                    High Priority
                  </div>
                </motion.div>
              )}
              {isDragging && cardInColumn === 1 && (
                <motion.div
                  key="card-dragging-col1"
                  animate={{
                    scale: cardState === "picking" ? 0.98 : cardState === "moving" ? 1.05 : 1,
                    rotate: cardState === "picking" || cardState === "moving" ? 2 : 0,
                    y: cardState === "picking" || cardState === "moving" ? -8 : 0,
                    x: cardState === "moving" ? "100%" : 0,
                  }}
                  transition={attioTransition}
                  className="bg-white border border-attio-subtle rounded-md p-3 shadow-lg absolute"
                  style={{ 
                    zIndex: 20,
                    boxShadow: cardState === "picking" || cardState === "moving" 
                      ? "0 10px 25px rgba(0, 0, 0, 0.15)" 
                      : "0 1px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded w-28 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-red-100 border border-red-200 rounded text-[10px] font-inter font-medium text-red-700">
                    High Priority
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Column 2: Qualified */}
        <div className="flex-1 flex flex-col">
          <div className="mb-3">
            <h4 className="text-xs font-inter font-medium text-text-muted uppercase tracking-wider">
              Qualified
            </h4>
            <span className="text-xs text-text-muted">3</span>
          </div>
          <motion.div
            className="bg-attio-gray rounded-lg p-3 flex-1 space-y-2 relative min-h-[200px]"
            animate={{
              backgroundColor: column2Highlight 
                ? "rgb(220, 252, 231)" 
                : column2Hover 
                ? "rgb(243, 244, 246)" 
                : undefined,
            }}
            transition={snappySpring}
          >
            {/* Static Dummy Cards */}
            <div className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm">
              <div className="h-3 bg-gray-300 rounded w-24 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
              <div className="h-2 bg-gray-200 rounded w-20" />
            </div>
            <div className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm">
              <div className="h-3 bg-gray-300 rounded w-28 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-36 mb-1" />
            </div>

            {/* Animated Card */}
            <AnimatePresence mode="wait">
              {!isDragging && cardInColumn === 2 && (
                <motion.div
                  key="card-col2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={snappySpring}
                  className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded w-28 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-red-100 border border-red-200 rounded text-[10px] font-inter font-medium text-red-700">
                    High Priority
                  </div>
                </motion.div>
              )}
              {isDragging && (cardState === "moving" || cardState === "dropping") && cardInColumn === 1 && (
                <motion.div
                  key="card-dragging-col2"
                  initial={{ x: "-100%", y: -8, scale: 1.05, rotate: 2 }}
                  animate={{
                    x: 0,
                    y: cardState === "dropping" ? 0 : -8,
                    scale: cardState === "dropping" ? 1 : 1.05,
                    rotate: cardState === "dropping" ? 0 : 2,
                  }}
                  transition={attioTransition}
                  className="bg-white border border-attio-subtle rounded-md p-3 shadow-lg absolute"
                  style={{ 
                    zIndex: 20,
                    boxShadow: cardState === "dropping" 
                      ? "0 1px 3px rgba(0, 0, 0, 0.1)" 
                      : "0 10px 25px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="h-3 bg-gray-300 rounded w-28 mb-2" />
                      <div className="h-2 bg-gray-200 rounded w-32 mb-1" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-white" />
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 bg-red-100 border border-red-200 rounded text-[10px] font-inter font-medium text-red-700">
                    High Priority
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Column 3: Negotiation */}
        <div className="flex-1 flex flex-col">
          <div className="mb-3">
            <h4 className="text-xs font-inter font-medium text-text-muted uppercase tracking-wider">
              Negotiation
            </h4>
            <span className="text-xs text-text-muted">1</span>
          </div>
          <div className="bg-attio-gray rounded-lg p-3 flex-1 space-y-2 min-h-[200px]">
            {/* Static Dummy Card */}
            <div className="bg-white border border-attio-subtle rounded-md p-3 shadow-sm">
              <div className="h-3 bg-gray-300 rounded w-32 mb-2" />
              <div className="h-2 bg-gray-200 rounded w-28 mb-1" />
              <div className="h-2 bg-gray-200 rounded w-24" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
