"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { attioTransition, snappySpring } from "@/lib/animations"

export function PipelineVisual() {
  const [cardState, setCardState] = React.useState<"idle" | "picking" | "moving" | "dropping" | "success">("idle")
  const [cardInColumn, setCardInColumn] = React.useState<1 | 2>(1)
  const [column2Highlight, setColumn2Highlight] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Pick up (0.5s)
      setCardState("picking")
      setCardInColumn(1)
      setColumn2Highlight(false)

      // Phase 2: Move (nach 0.8s)
      setTimeout(() => {
        setCardState("moving")
      }, 800)

      // Phase 3: Drop (nach 2s)
      setTimeout(() => {
        setCardState("dropping")
        setCardInColumn(2)
      }, 2000)

      // Phase 4: Success flash (nach 2.3s)
      setTimeout(() => {
        setCardState("success")
        setColumn2Highlight(true)
      }, 2300)

      // Phase 5: Reset (nach 3s)
      setTimeout(() => {
        setCardState("idle")
        setCardInColumn(1)
        setColumn2Highlight(false)
      }, 3000)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  const isDragging = cardState === "picking" || cardState === "moving" || cardState === "dropping"

  return (
    <div className="bg-white rounded-xl p-4 border border-attio-subtle shadow-attio-card">
      <div className="flex gap-4">
        {/* Column 1: Lead */}
        <div className="flex-1">
          <div className="mb-3">
            <h4 className="text-xs font-inter font-medium text-text-muted uppercase tracking-wider">
              Lead
            </h4>
          </div>
          <div className="bg-attio-gray rounded-lg p-3 min-h-[100px] relative">
            <AnimatePresence mode="wait">
              {!isDragging && cardInColumn === 1 && (
                <motion.div
                  key="card-col1"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={snappySpring}
                  className="bg-white border border-attio-subtle rounded-md p-2 shadow-sm"
                >
                  <div className="h-2 bg-gray-300 rounded w-20 mb-1" />
                  <div className="h-1.5 bg-gray-200 rounded w-16" />
                </motion.div>
              )}
              {isDragging && cardInColumn === 1 && (
                <motion.div
                  key="card-dragging-col1"
                  animate={{
                    scale: cardState === "picking" || cardState === "moving" ? 1.05 : 1,
                    rotate: cardState === "picking" || cardState === "moving" ? 2 : 0,
                    y: cardState === "picking" || cardState === "moving" ? -8 : 0,
                    x: cardState === "moving" ? "100%" : 0,
                  }}
                  transition={attioTransition}
                  className="bg-white border border-attio-subtle rounded-md p-2 shadow-lg absolute"
                  style={{ zIndex: 20 }}
                >
                  <div className="h-2 bg-gray-300 rounded w-20 mb-1" />
                  <div className="h-1.5 bg-gray-200 rounded w-16" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Column 2: Qualified */}
        <div className="flex-1">
          <div className="mb-3">
            <h4 className="text-xs font-inter font-medium text-text-muted uppercase tracking-wider">
              Qualified
            </h4>
          </div>
          <motion.div
            className="bg-attio-gray rounded-lg p-3 min-h-[100px] relative"
            animate={{
              backgroundColor: column2Highlight ? "rgb(220, 252, 231)" : undefined,
            }}
            transition={snappySpring}
          >
            <AnimatePresence mode="wait">
              {!isDragging && cardInColumn === 2 && (
                <motion.div
                  key="card-col2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={snappySpring}
                  className="bg-white border border-attio-subtle rounded-md p-2 shadow-sm"
                >
                  <div className="h-2 bg-gray-300 rounded w-20 mb-1" />
                  <div className="h-1.5 bg-gray-200 rounded w-16" />
                </motion.div>
              )}
              {isDragging && cardState === "moving" && cardInColumn === 1 && (
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
                  className="bg-white border border-attio-subtle rounded-md p-2 shadow-lg absolute"
                  style={{ zIndex: 20 }}
                >
                  <div className="h-2 bg-gray-300 rounded w-20 mb-1" />
                  <div className="h-1.5 bg-gray-200 rounded w-16" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

