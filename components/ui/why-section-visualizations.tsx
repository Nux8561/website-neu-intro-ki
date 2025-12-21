"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { GitBranch, CheckCircle2, ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { createSimpleOrthogonalPath } from "@/lib/orthogonal-connector"
import { cn } from "@/lib/utils"

/**
 * Why Section Visualizations
 * High-Fidelity Fake UI Components to replace bare icons
 * Enterprise "Structured Precision" aesthetic - Industrial Tool Style
 */

/**
 * ExcelChaosVisualization - Chaotic Excel table representation
 * Shows the "Problem" state: unorganized, messy data
 */
export function ExcelChaosVisualization({ className }: { className?: string }) {
  const [scrollOffset, setScrollOffset] = React.useState(0)

  // Endless scrolling animation
  React.useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 1) % 300)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const rows = React.useMemo(
    () => [
      { height: 8, columns: 5, opacity: 0.7 },
      { height: 10, columns: 4, opacity: 0.6 },
      { height: 9, columns: 6, opacity: 0.8 },
      { height: 7, columns: 5, opacity: 0.65 },
      { height: 11, columns: 4, opacity: 0.75 },
      { height: 8, columns: 5, opacity: 0.7 },
      { height: 10, columns: 6, opacity: 0.6 },
      { height: 9, columns: 4, opacity: 0.8 },
    ],
    []
  )

  return (
    <div className={cn("relative w-full h-[140px] overflow-hidden rounded-lg bg-gray-50/50 border border-gray-200/50", className)}>
      {/* Excel-style grid lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)", backgroundSize: "40px 20px" }} />
      </div>
      
      {/* Scrolling rows */}
      <motion.div
        className="absolute inset-0 p-3 space-y-1.5"
        style={{ transform: `translateY(-${scrollOffset}px)` }}
        transition={{ duration: 0.05, ease: "linear" }}
      >
        {rows.map((row, index) => (
          <div key={index} className="flex gap-1.5" style={{ opacity: row.opacity }}>
            {Array.from({ length: row.columns }).map((_, colIndex) => (
              <motion.div
                key={colIndex}
                className="bg-gray-300/60 rounded"
                style={{ height: `${row.height * 2}px`, width: `${Math.random() * 40 + 30}px` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + colIndex * 0.05 }}
              />
            ))}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {rows.map((row, index) => (
          <div key={`duplicate-${index}`} className="flex gap-1.5" style={{ opacity: row.opacity }}>
            {Array.from({ length: row.columns }).map((_, colIndex) => (
              <div
                key={colIndex}
                className="bg-gray-300/60 rounded"
                style={{ height: `${row.height * 2}px`, width: `${Math.random() * 40 + 30}px` }}
              />
            ))}
          </div>
        ))}
      </motion.div>

      {/* Fade edges */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(249, 250, 251, 0.9) 0%, transparent 20%, transparent 80%, rgba(249, 250, 251, 0.9) 100%)" }} />
    </div>
  )
}

/**
 * SearchVisualization - Mini search bar with dropdown results
 * Shows the "Problem" state: searching without finding
 */
export function SearchVisualization({ className }: { className?: string }) {
  const [isSearching, setIsSearching] = React.useState(true)
  const [cursorBlink, setCursorBlink] = React.useState(true)

  React.useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorBlink((prev) => !prev)
    }, 530)
    return () => clearInterval(blinkInterval)
  }, [])

  const searchResults = [
    { text: "Kunde XYZ...", found: false },
    { text: "Deal ABC...", found: false },
    { text: "Email DEF...", found: false },
  ]

  return (
    <div className={cn("relative w-full h-[140px] flex flex-col items-center justify-center gap-4 p-4", className)}>
      {/* Search Bar with Glassmorphism */}
      <motion.div
        className="relative w-full max-w-xs bg-white/60 backdrop-blur-sm border border-white/40 rounded-lg px-4 py-3 shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ENTERPRISE_SPRING}
      >
        <div className="flex items-center gap-2">
          <span className="text-[12px] text-gray-500 font-mono">Suchen...</span>
          <motion.span
            className="inline-block w-0.5 h-4 bg-gray-900"
            animate={{ opacity: cursorBlink ? 1 : 0 }}
            transition={{ duration: 0.53, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Dropdown Results */}
      <motion.div
        className="absolute top-20 w-full max-w-xs bg-white/80 backdrop-blur-xl border border-white/50 rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isSearching ? 1 : 0, y: isSearching ? 0 : -10 }}
        transition={ENTERPRISE_SPRING}
      >
        {searchResults.map((result, index) => (
          <motion.div
            key={index}
            className="px-4 py-2.5 border-b border-gray-100/50 last:border-b-0"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <span className="text-[12px] text-gray-500">{result.text}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

/**
 * AutomationVisualization - Mini workflow node graph
 * Shows the "Solution" state: structured automation flow
 */
export function AutomationVisualization({ className }: { className?: string }) {
  const [pulseProgress, setPulseProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPulseProgress((prev) => (prev + 0.02) % 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  // Create two paths: Left -> Center, Center -> Right
  const pathData1 = React.useMemo(() => createSimpleOrthogonalPath(20, 70, 100, 70), [])
  const pathData2 = React.useMemo(() => createSimpleOrthogonalPath(100, 70, 180, 70), [])
  const pathLength1 = pathData1.totalLength
  const pathLength2 = pathData2.totalLength

  return (
    <div className={cn("relative w-full h-[140px] flex items-center justify-center", className)}>
      {/* Node 1 (Left) - Input */}
      <motion.div
        className="absolute left-0 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
      >
        <ArrowRight className="w-4 h-4 text-gray-700" strokeWidth={2} />
      </motion.div>

      {/* Node 2 (Center) - Process */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: pulseProgress > 0.4 && pulseProgress < 0.6 ? 1.1 : 1 }}
        transition={ENTERPRISE_SPRING}
      >
        <GitBranch className="w-4 h-4 text-blue-600" strokeWidth={2} />
      </motion.div>

      {/* Node 3 (Right) - Output */}
      <motion.div
        className="absolute right-0 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
      >
        <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2} />
      </motion.div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        {/* Background Tracks */}
        <path d={pathData1.path} stroke="#E5E7EB" strokeWidth="1" fill="none" />
        <path d={pathData2.path} stroke="#E5E7EB" strokeWidth="1" fill="none" />
        {/* Animated Pulses */}
        <motion.path
          d={pathData1.path}
          stroke="#2563EB"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: -pulseProgress * pathLength1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d={pathData2.path}
          stroke="#2563EB"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="8 4"
          animate={{ strokeDashoffset: -(pulseProgress * pathLength2) }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>
    </div>
  )
}

/**
 * DashboardPreviewVisualization - Structured dashboard preview
 * Shows the "Solution" state: organized, structured data
 */
export function DashboardPreviewVisualization({ className }: { className?: string }) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const items = [
    { name: "Q4 Pipeline", status: "Active", value: "€125K", color: "green" },
    { name: "Onboarding", status: "Active", value: "12 Clients", color: "green" },
    { name: "Feature Launch", status: "Done", value: "100%", color: "blue" },
    { name: "Sales Training", status: "Active", value: "80%", color: "green" },
  ]

  return (
    <div className={cn("w-full h-[140px] flex items-center justify-center p-4", className)}>
      <div className="w-full max-w-md bg-white/40 backdrop-blur-sm border border-white/40 rounded-lg p-3 space-y-1.5">
        {items.map((item, index) => (
          <motion.div
            key={item.name}
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-md transition-colors",
              selectedIndex === index
                ? "bg-blue-500/20 border border-blue-500/40"
                : "bg-transparent"
            )}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <div className={cn("w-2 h-2 rounded-full flex-shrink-0", item.color === "green" ? "bg-green-500" : "bg-blue-500")} />
              <span className="text-[12px] leading-[16px] font-medium text-gray-700 truncate">
                {item.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] leading-[14px] px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200/50">
                {item.status}
              </span>
              <span className="text-[12px] leading-[16px] text-gray-600 font-mono tabular-nums">
                {item.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

