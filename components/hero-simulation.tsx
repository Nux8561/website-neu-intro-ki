"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { CheckCircle2, Circle, TrendingUp, Users, Calendar, Mail, ArrowRight } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

/**
 * Hero Simulation - High-Fidelity Dashboard Visual
 * 
 * Replaces abstract icon animations with a tangible, 3D-tilted dashboard interface.
 * Uses Deep Glassmorphism, ambient gradients, and noise textures for visual richness.
 */

interface DashboardCard {
  id: string
  title: string
  status: "open" | "in-progress" | "done"
  assignee: string
  progress: number
}

const mockCards: DashboardCard[] = [
  { id: "1", title: "Q4 Pipeline Review", status: "in-progress", assignee: "Sarah M.", progress: 65 },
  { id: "2", title: "Client Onboarding", status: "open", assignee: "Max K.", progress: 30 },
  { id: "3", title: "Feature Launch", status: "done", assignee: "Anna L.", progress: 100 },
  { id: "4", title: "Sales Training", status: "in-progress", assignee: "Tom R.", progress: 80 },
]

export function HeroSimulation({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const cardRef = React.useRef<HTMLDivElement>(null)

  // 3D Tilt Effect (Mouse Position)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring animation for tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  })

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / rect.width
      const deltaY = (e.clientY - centerY) / rect.height

      x.set(deltaX)
      y.set(deltaY)
    },
    [x, y]
  )

  const handleMouseLeave = React.useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  // Animation state for workflow progress
  const [progressAnimations, setProgressAnimations] = React.useState<Record<string, number>>({})

  React.useEffect(() => {
    const timers = mockCards.map((card, index) => {
      return setTimeout(() => {
        setProgressAnimations((prev) => ({
          ...prev,
          [card.id]: card.progress,
        }))
      }, 500 + index * 200)
    })

    return () => {
      timers.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient Light Gradients (Blue/Violet) */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <motion.div
          className="absolute -left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/20 blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise rounded-2xl" />

      {/* Glass Container (3D Tilted Dashboard) */}
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-4xl h-[450px]"
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className={cn(
            "relative h-full w-full rounded-xl",
            "bg-white/40 backdrop-blur-xl",
            "border border-white/50",
            "shadow-2xl shadow-indigo-500/20",
            "overflow-hidden"
          )}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={ENTERPRISE_SPRING}
        >
          {/* Fake Dashboard UI */}
          <div className="h-full flex flex-col">
            {/* Header */}
            <DashboardHeader />

            {/* Content Area */}
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <DashboardSidebar />

              {/* Main Content (Kanban Board) */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="mb-6">
                  <h3 className="text-[18px] leading-[26px] -tracking-[0.01em] font-medium text-gray-900 mb-2">
                    Active Workflows
                  </h3>
                  <p className="text-[14px] leading-[20px] text-gray-500">
                    Automatisierte Prozesse in Echtzeit
                  </p>
                </div>

                {/* Workflow Cards */}
                <div className="grid grid-cols-1 gap-4">
                  {mockCards.map((card, index) => (
                    <WorkflowCard
                      key={card.id}
                      card={card}
                      index={index}
                      progress={progressAnimations[card.id] || 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/**
 * Dashboard Header Component
 */
function DashboardHeader() {
  return (
    <motion.div
      className="flex items-center justify-between px-6 py-4 border-b border-white/20 bg-white/20"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
          <span className="text-white text-sm font-medium">IK</span>
        </div>
        <span className="text-[16px] leading-[24px] font-medium text-gray-900">Intro KI</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Icon Container (Glass Card) */}
        <div className="w-9 h-9 rounded-md bg-white/60 border border-white/40 shadow-sm flex items-center justify-center backdrop-blur-sm">
          <Calendar className="h-4 w-4 text-gray-700" strokeWidth={2} />
        </div>
        <div className="w-9 h-9 rounded-md bg-white/60 border border-white/40 shadow-sm flex items-center justify-center backdrop-blur-sm">
          <Mail className="h-4 w-4 text-gray-700" strokeWidth={2} />
        </div>
        <div className="w-9 h-9 rounded-md bg-white/60 border border-white/40 shadow-sm flex items-center justify-center backdrop-blur-sm">
          <Users className="h-4 w-4 text-gray-700" strokeWidth={2} />
        </div>
      </div>
    </motion.div>
  )
}

/**
 * Dashboard Sidebar Component
 */
function DashboardSidebar() {
  const sidebarItems = [
    { label: "Dashboard", active: true },
    { label: "Workflows", active: false },
    { label: "Records", active: false },
    { label: "Analytics", active: false },
  ]

  return (
    <motion.div
      className="w-56 border-r border-white/20 bg-white/10 p-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
    >
      <nav className="space-y-2">
        {sidebarItems.map((item, index) => (
          <motion.div
            key={item.label}
            className={cn(
              "px-3 py-2 rounded-md text-[14px] leading-[20px] font-medium transition-colors cursor-pointer",
              item.active
                ? "bg-white/40 text-gray-900"
                : "text-gray-600 hover:bg-white/20 hover:text-gray-900"
            )}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: 0.4 + index * 0.05 }}
          >
            {item.label}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  )
}

/**
 * Workflow Card Component (with animated progress)
 */
function WorkflowCard({
  card,
  index,
  progress,
}: {
  card: DashboardCard
  index: number
  progress: number
}) {
  const statusConfig = {
    open: { icon: Circle, color: "text-gray-400", bg: "bg-gray-100", label: "Open" },
    "in-progress": {
      icon: TrendingUp,
      color: "text-blue-600",
      bg: "bg-blue-50",
      label: "In Progress",
    },
    done: { icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50", label: "Done" },
  }

  const config = statusConfig[card.status]
  const StatusIcon = config.icon

  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-lg p-4 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...ENTERPRISE_SPRING, delay: 0.5 + index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="text-[16px] leading-[24px] font-medium text-gray-900 mb-1">
            {card.title}
          </h4>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-6 h-6 rounded-md flex items-center justify-center",
                config.bg
              )}
            >
              <StatusIcon className={cn("h-3.5 w-3.5", config.color)} strokeWidth={2.5} />
            </div>
            <span className="text-[12px] leading-[16px] text-gray-500">{config.label}</span>
            <span className="text-[12px] leading-[16px] text-gray-400">•</span>
            <span className="text-[12px] leading-[16px] text-gray-500">{card.assignee}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[12px] leading-[16px] text-gray-500">Progress</span>
          <span className="text-[12px] leading-[16px] font-medium text-gray-900 tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 + index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  )
}