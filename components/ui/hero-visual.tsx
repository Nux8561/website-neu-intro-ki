/**
 * Hero Visual Component
 * Große TiltedCardVisual für Hero-Sektion
 * Mit weniger Rotation und starkem Glow-Effekt
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { TiltedCardVisual } from "./tilted-card-visual"
import { snappySpring } from "@/lib/animations"

interface HeroVisualProps {
  variant?: "dashboard" | "list" | "pipeline" | "analytics"
  className?: string
}

export function HeroVisual({ variant = "dashboard", className }: HeroVisualProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Glow-Effekt (stark) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={snappySpring}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-2xl rounded-3xl" />
        </motion.div>

        {/* Tilted Card Visual (groß, weniger Rotation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={snappySpring}
          className="relative"
        >
          <div
            className="relative"
            style={{
              perspective: "1200px",
            }}
          >
            <div
              className="relative rounded-2xl bg-white border border-white/50 shadow-2xl overflow-hidden"
              style={{
                transform: "rotateY(-5deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glass-Effekt (Sheen) */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 60%)",
                }}
              />

              {/* Content - Größere Version */}
              <div className="p-8 md:p-12">
                <TiltedCardVisual variant={variant} perspective={0} rotateY={0} rotateX={0} />
              </div>

              {/* Bottom Fade */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent, white)",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

