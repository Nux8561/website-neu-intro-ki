/**
 * Skeletal UI Components
 * Code-basierte Visualisierungen statt KI-Bilder
 * Imitiert Attio's "Blaupausen"-Ästhetik
 */

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { attioTransition, snappySpring, attioTransitionSmooth } from "@/lib/animations"

// Email Automation Skeletal UI
export function EmailAutomationSkeleton() {
  return (
    <div className="mt-4 space-y-3 group">
      {/* Email Card */}
      <div className="p-3 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-gray-200 rounded w-3/4" />
            <div className="h-2 bg-gray-100 rounded w-full" />
            <div className="h-2 bg-gray-100 rounded w-5/6" />
            <div className="text-[10px] font-inter text-gray-500 mt-1">Find Email</div>
          </div>
        </div>
      </div>
      
      {/* Arrow */}
      <div className="flex justify-center">
        <div className="w-px h-6 bg-gray-300" />
      </div>
      
      {/* Action Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={attioTransition}
        className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <div className="h-2 bg-blue-200 rounded flex-1" />
          <div className="text-[10px] font-inter text-blue-700 font-medium">Synced</div>
        </div>
      </motion.div>
    </div>
  )
}

// Workflow Skeleton - Lebendige Simulation
export function WorkflowSkeleton() {
  const [dataBallVisible, setDataBallVisible] = React.useState(false)
  const [activeNode, setActiveNode] = React.useState<"trigger" | "filter" | "action" | null>(null)
  const [showSuccess, setShowSuccess] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Daten-Ball erscheint beim Trigger
      setDataBallVisible(true)
      setActiveNode("trigger")
      setShowSuccess(false)

      // Phase 2: Ball fliegt zum Filter (nach 0.8s)
      setTimeout(() => {
        setActiveNode("filter")
      }, 800)

      // Phase 3: Ball fliegt zur Action (nach 1.6s)
      setTimeout(() => {
        setActiveNode("action")
      }, 1600)

      // Phase 4: Success Badge (nach 2.4s)
      setTimeout(() => {
        setShowSuccess(true)
        setDataBallVisible(false)
        setActiveNode(null)
      }, 2400)

      // Phase 5: Reset (nach 4s)
      setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-4 space-y-3 relative">
      <div className="flex items-center gap-2 relative">
        {/* Trigger Node */}
        <motion.div
          className="px-3 py-2 bg-purple-50 border border-purple-200 rounded-md relative"
          animate={{
            scale: activeNode === "trigger" ? 1.05 : 1,
            borderColor: activeNode === "trigger" ? "rgb(168, 85, 247)" : "rgb(196, 181, 253)",
          }}
          transition={snappySpring}
        >
          <div className="h-2 w-16 bg-purple-300 rounded" />
          <div className="text-[10px] font-inter text-purple-700 mt-0.5">Trigger</div>
          
          {/* Daten-Ball Startpunkt */}
          <AnimatePresence>
            {dataBallVisible && activeNode === "trigger" && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: 1,
                }}
                exit={{ scale: 0, opacity: 0 }}
                transition={snappySpring}
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-lg z-10"
              />
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Connection Line 1 */}
        <div className="flex-1 h-px bg-gray-300 relative">
          {/* Fliegender Daten-Ball */}
          <AnimatePresence>
            {dataBallVisible && (activeNode === "filter" || activeNode === "action") && (
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ 
                  x: activeNode === "filter" ? "50%" : "100%",
                  opacity: 1
                }}
                exit={{ opacity: 0 }}
                transition={attioTransition}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-lg z-10"
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Filter Node */}
        <motion.div
          className="px-3 py-2 bg-blue-50 border border-blue-200 rounded-md relative"
          animate={{
            scale: activeNode === "filter" ? 1.05 : 1,
            borderColor: activeNode === "filter" ? "rgb(59, 130, 246)" : "rgb(191, 219, 254)",
            backgroundColor: activeNode === "filter" ? "rgb(239, 246, 255)" : "rgb(239, 246, 255)",
          }}
          transition={snappySpring}
        >
          <div className="h-2 w-20 bg-blue-300 rounded" />
          <div className="text-[10px] font-inter text-blue-700 mt-0.5">Filter</div>
        </motion.div>
        
        {/* Connection Line 2 */}
        <div className="flex-1 h-px bg-gray-300 relative">
          {/* Fliegender Daten-Ball (Teil 2) */}
          <AnimatePresence>
            {dataBallVisible && activeNode === "action" && (
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{ x: "100%", opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={attioTransition}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-lg z-10"
              />
            )}
          </AnimatePresence>
        </div>
        
        {/* Action Node */}
        <motion.div
          className="px-3 py-2 bg-green-50 border border-green-200 rounded-md relative"
          animate={{
            scale: activeNode === "action" ? 1.05 : 1,
            borderColor: activeNode === "action" ? "rgb(34, 197, 94)" : "rgb(187, 247, 208)",
          }}
          transition={snappySpring}
        >
          <div className="h-2 w-16 bg-green-300 rounded" />
          <div className="text-[10px] font-inter text-green-700 mt-0.5">Action</div>
        </motion.div>
      </div>

      {/* Success Badge */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={snappySpring}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 text-white text-[10px] font-inter font-medium rounded-full whitespace-nowrap"
          >
            ✓ Success
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Data Sync Skeleton
export function DataSyncSkeleton() {
  return (
    <div className="mt-4 space-y-4">
      {/* Source Box */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="space-y-2">
          <div className="h-2 bg-gray-300 rounded w-20" />
          <div className="h-1.5 bg-gray-200 rounded w-full" />
          <div className="h-1.5 bg-gray-200 rounded w-3/4" />
          <div className="text-[10px] font-inter text-gray-500 mt-1">LinkedIn</div>
        </div>
      </div>
      
      {/* Sync Arrow */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex-1 h-px bg-gray-300" />
        <div className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      
      {/* Target Box */}
      <div className="p-4 bg-white border-2 border-blue-300 rounded-lg">
        <div className="space-y-2">
          <div className="h-2 bg-blue-400 rounded w-24" />
          <div className="h-1.5 bg-blue-200 rounded w-full" />
          <div className="h-1.5 bg-blue-200 rounded w-5/6" />
          <div className="text-[10px] font-inter text-blue-700 font-medium mt-1">IntroKI CRM</div>
        </div>
      </div>
    </div>
  )
}

// Analytics Dashboard Skeleton
export function AnalyticsSkeleton() {
  const bars = [
    { height: "30%", color: "bg-purple-400" },
    { height: "50%", color: "bg-blue-400" },
    { height: "70%", color: "bg-pink-400" },
    { height: "45%", color: "bg-yellow-400" },
    { height: "60%", color: "bg-green-400" },
  ]

  return (
    <div className="mt-4">
      <div className="flex items-end justify-between gap-1.5 h-20">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: bar.height }}
            transition={{ delay: index * 0.1, ...attioTransition }}
            className={`flex-1 ${bar.color} rounded-t`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        <div className="h-1.5 bg-gray-200 rounded w-12" />
        <div className="h-1.5 bg-gray-200 rounded w-12" />
      </div>
    </div>
  )
}

// Contact Card Skeleton
export function ContactCardSkeleton() {
  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-24" />
          <div className="h-2 bg-gray-200 rounded w-32" />
          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 rounded bg-green-100 border border-green-300" />
            <div className="h-2 bg-gray-200 rounded w-20" />
            <div className="text-[10px] font-inter text-green-700 font-medium">Qualified</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Data Enrichment Skeleton - Zeigt wie Daten gefunden werden
export function DataEnrichmentSkeleton() {
  const [phase, setPhase] = React.useState<"searching" | "found">("searching")
  const [scanProgress, setScanProgress] = React.useState(0)

  React.useEffect(() => {
    // Phase 1: Searching (2 Sekunden)
    const searchingInterval = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 2))
    }, 40)

    // Phase 2: Found (nach 2 Sekunden)
    setTimeout(() => {
      setPhase("found")
      clearInterval(searchingInterval)
    }, 2000)

    // Loop: Zurück zu Searching nach 6 Sekunden
    const loopTimeout = setTimeout(() => {
      setPhase("searching")
      setScanProgress(0)
    }, 6000)

    return () => {
      clearInterval(searchingInterval)
      clearTimeout(loopTimeout)
    }
  }, [phase])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: snappySpring,
    },
  }

  return (
    <motion.div
      className="mt-4 p-4 bg-white border border-attio-subtle rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-start gap-3">
        {/* Avatar */}
        {phase === "searching" ? (
          <motion.div
            className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 relative overflow-hidden"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            {/* Scanning Shimmer */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex-shrink-0 flex items-center justify-center text-white text-xs font-medium"
          >
            EM
          </motion.div>
        )}

        <div className="flex-1 space-y-2">
          {/* Name */}
          {phase === "searching" ? (
            <motion.div
              className="h-3 bg-gray-200 rounded w-24 relative overflow-hidden"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="h-3 bg-gray-300 rounded w-24"
            />
          )}

          {/* Email */}
          {phase === "searching" ? (
            <motion.div
              className="h-2 bg-gray-200 rounded w-32 relative overflow-hidden"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.2,
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.2,
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              variants={itemVariants}
              className="h-2 bg-gray-200 rounded w-32"
            />
          )}

          {/* Enriched Badge */}
          {phase === "found" && (
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mt-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={snappySpring}
                className="w-4 h-4 rounded bg-green-100 border border-green-300 flex items-center justify-center"
              >
                <span className="text-[8px] text-green-600">✓</span>
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={snappySpring}
                className="text-[10px] font-inter text-green-700 font-medium"
              >
                Enriched
              </motion.span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// Pipeline Skeleton - Simuliert Drag-and-Drop
export function PipelineSkeleton() {
  const [draggedCard, setDraggedCard] = React.useState<number | null>(null)
  const [cardPosition, setCardPosition] = React.useState({ x: 0, y: 0 })
  const [targetColumn, setTargetColumn] = React.useState<"new" | "qualified" | "won">("new")
  const [counters, setCounters] = React.useState({ new: 4, qualified: 2, won: 1 })

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Phase 1: Karte hebt sich an (0.5s) - Reduzierte y-Bewegung für Mobile
      setDraggedCard(0)
      setCardPosition({ x: 0, y: -4 })
      setTargetColumn("new")

      // Phase 2: Karte bewegt sich (nach 1s) - Responsive x-Bewegung
      setTimeout(() => {
        const moveX = typeof window !== 'undefined' && window.innerWidth < 640 ? 80 : 120
        setCardPosition({ x: moveX, y: -4 })
        setTargetColumn("qualified")
      }, 1000)

      // Phase 3: Karte landet (nach 2s)
      setTimeout(() => {
        const moveX = typeof window !== 'undefined' && window.innerWidth < 640 ? 80 : 120
        setCardPosition({ x: moveX, y: 0 })
        setTargetColumn("qualified")
        setCounters((prev) => ({
          ...prev,
          qualified: prev.qualified + 1,
          new: prev.new - 1,
        }))
      }, 2000)

      // Phase 4: Reset (nach 3.5s)
      setTimeout(() => {
        setDraggedCard(null)
        setCardPosition({ x: 0, y: 0 })
        setCounters({ new: 4, qualified: 2, won: 1 })
      }, 3500)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mt-4 space-y-3 overflow-hidden" style={{ contain: "layout style paint" }}>
      <div className="flex gap-2 sm:gap-3 overflow-hidden">
        {/* Column: New */}
        <div className="flex-1" style={{ contain: "layout style" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-inter text-text-muted">New</span>
            <motion.span
              key={counters.new}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={snappySpring}
              className="text-xs font-inter font-medium text-text-primary bg-white px-1.5 py-0.5 rounded"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              {counters.new}
            </motion.span>
          </div>
          <div className="space-y-2 min-h-[60px] relative overflow-visible" style={{ contain: "layout style paint" }}>
            {/* Placeholder für Layout-Stabilität */}
            <div className="p-2 bg-transparent rounded-lg pointer-events-none" style={{ visibility: draggedCard === 0 && targetColumn === "new" ? "hidden" : "visible" }}>
              <div className="h-2 bg-gray-300 rounded w-16 mb-1" />
              <div className="h-1.5 bg-gray-200 rounded w-20" />
            </div>
            {/* Animierte Karte - absolut positioniert */}
            {draggedCard === 0 && targetColumn === "new" && (
              <motion.div
                className="p-2 bg-white border border-attio-subtle rounded-lg shadow-lg absolute top-0 left-0 w-full"
                animate={{
                  x: cardPosition.x,
                  y: cardPosition.y,
                  scale: cardPosition.y < 0 ? 1.02 : 1,
                }}
                transition={attioTransition}
                style={{ 
                  willChange: 'transform',
                  transform: "translateZ(0)",
                  contain: "layout style paint",
                  zIndex: 10,
                }}
              >
                <div className="h-2 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-1.5 bg-gray-200 rounded w-20" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Column: Qualified */}
        <div className="flex-1" style={{ contain: "layout style" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-inter text-text-muted">Qualified</span>
            <motion.span
              key={counters.qualified}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={snappySpring}
              className="text-xs font-inter font-medium text-text-primary bg-white px-1.5 py-0.5 rounded"
              style={{ willChange: "transform", transform: "translateZ(0)" }}
            >
              {counters.qualified}
            </motion.span>
          </div>
          <div className="space-y-2 min-h-[60px] relative overflow-visible" style={{ contain: "layout style paint" }}>
            {/* Placeholder für Layout-Stabilität */}
            {counters.qualified > 0 && (
              <div className="p-2 bg-white border border-attio-subtle rounded-lg">
                <div className="h-2 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-1.5 bg-gray-200 rounded w-20" />
              </div>
            )}
            {/* Animierte Karte - absolut positioniert */}
            {draggedCard === 0 && targetColumn === "qualified" && (
              <motion.div
                className="p-2 bg-white border border-attio-subtle rounded-lg shadow-lg absolute top-0 left-0 w-full"
                animate={{
                  x: cardPosition.x - (typeof window !== 'undefined' && window.innerWidth < 640 ? 80 : 120),
                  y: cardPosition.y,
                  scale: cardPosition.y < 0 ? 1.02 : 1,
                }}
                transition={attioTransition}
                style={{ 
                  willChange: 'transform',
                  transform: "translateZ(0)",
                  contain: "layout style paint",
                  zIndex: 10,
                }}
              >
                <div className="h-2 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-1.5 bg-gray-200 rounded w-20" />
              </motion.div>
            )}
          </div>
        </div>

        {/* Column: Won */}
        <div className="flex-1" style={{ contain: "layout style" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-inter text-text-muted">Won</span>
            <span className="text-xs font-inter font-medium text-text-primary bg-white px-1.5 py-0.5 rounded">
              {counters.won}
            </span>
          </div>
          <div className="space-y-2 min-h-[60px]" style={{ contain: "layout style" }}>
            {counters.won > 0 && (
              <div className="p-2 bg-white border border-attio-subtle rounded-lg">
                <div className="h-2 bg-gray-300 rounded w-16 mb-1" />
                <div className="h-1.5 bg-gray-200 rounded w-20" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Generic Skeletal UI Builder
interface SkeletalUIProps {
  variant?: "email" | "workflow" | "data-sync" | "analytics" | "contact" | "enrichment" | "pipeline"
  className?: string
}

export function SkeletalUI({ variant = "workflow", className }: SkeletalUIProps) {
  const components = {
    email: <EmailAutomationSkeleton />,
    workflow: <WorkflowSkeleton />,
    "data-sync": <DataSyncSkeleton />,
    analytics: <AnalyticsSkeleton />,
    contact: <ContactCardSkeleton />,
    enrichment: <DataEnrichmentSkeleton />,
    pipeline: <PipelineSkeleton />,
  }

  return (
    <div className={className}>
      {components[variant]}
    </div>
  )
}

