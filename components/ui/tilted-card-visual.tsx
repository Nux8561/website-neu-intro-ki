/**
 * Tilted Card Visual
 * High-Fidelity 3D UI Mockup (Theo/Attio Style)
 * Gekippte 3D-Karten mit CSS-Transform
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { snappySpring } from "@/lib/animations"

interface TiltedCardVisualProps {
  variant?: "dashboard" | "list" | "pipeline" | "analytics"
  className?: string
  perspective?: number
  rotateY?: number
  rotateX?: number
}

// Mini UI Components für verschiedene Varianten
function DashboardMiniUI() {
  return (
    <div className="p-4 space-y-3 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <div className="h-2.5 bg-gray-200 rounded w-24" />
        <div className="h-2.5 bg-gray-200 rounded w-16" />
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-2 bg-gray-50 rounded border border-gray-100">
            <div className="h-1.5 bg-gray-300 rounded w-12 mb-1" />
            <div className="h-2 bg-blue-400 rounded w-8" />
          </div>
        ))}
      </div>
      
      {/* List Items */}
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 bg-gray-300 rounded w-3/4" />
              <div className="h-1 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ListMiniUI() {
  return (
    <div className="p-4 space-y-2 bg-white rounded-lg">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded border border-gray-100">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
          <div className="flex-1 space-y-1">
            <div className="h-2 bg-gray-700 rounded w-32" />
            <div className="h-1.5 bg-gray-400 rounded w-24" />
          </div>
          <div className="h-2 bg-green-400 rounded w-12" />
        </div>
      ))}
    </div>
  )
}

function PipelineMiniUI() {
  return (
    <div className="p-4 space-y-3 bg-white rounded-lg">
      {/* Pipeline Columns */}
      <div className="flex gap-2">
        {["New", "Qualified", "Won"].map((stage, i) => (
          <div key={i} className="flex-1 p-2 bg-gray-50 rounded border border-gray-100">
            <div className="h-2 bg-gray-300 rounded w-16 mb-2" />
            <div className="space-y-1.5">
              {[1, 2].map((j) => (
                <div key={j} className="p-1.5 bg-white rounded border border-gray-200">
                  <div className="h-1.5 bg-gray-600 rounded w-full mb-1" />
                  <div className="h-1 bg-gray-400 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyticsMiniUI() {
  return (
    <div className="p-4 space-y-3 bg-white rounded-lg">
      {/* Chart */}
      <div className="h-24 flex items-end justify-between gap-1">
        {[40, 60, 45, 80, 55, 70, 50].map((height, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      {/* Labels */}
      <div className="flex justify-between">
        <div className="h-1 bg-gray-200 rounded w-8" />
        <div className="h-1 bg-gray-200 rounded w-8" />
        <div className="h-1 bg-gray-200 rounded w-8" />
      </div>
    </div>
  )
}

const variantComponents = {
  dashboard: DashboardMiniUI,
  list: ListMiniUI,
  pipeline: PipelineMiniUI,
  analytics: AnalyticsMiniUI,
}

export function TiltedCardVisual({
  variant = "dashboard",
  className,
  perspective = 1000,
  rotateY = -12,
  rotateX = 5,
}: TiltedCardVisualProps) {
  const MiniUI = variantComponents[variant]

  return (
    <div
      className={cn("relative", className)}
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, rotateY: rotateY - 5, rotateX: rotateX - 2 }}
        animate={{ opacity: 1, rotateY, rotateX }}
        transition={snappySpring}
        className="relative"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glass-Effekt (Sheen) */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-10"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
            maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />
        
        {/* Card Container */}
        <div
          className="relative rounded-xl bg-white border border-white/50 shadow-2xl overflow-hidden"
          style={{
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Content */}
          <div className="p-4">
            <MiniUI />
          </div>
          
          {/* Bottom Fade (Maskierung) */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, white)",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}

