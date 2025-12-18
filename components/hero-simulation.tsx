"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { FileText, Brain, Mail, Calendar, CheckCircle2, LucideIcon } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { AttioGridBackground } from "@/components/ui/attio-grid-background"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

/**
 * Hero Simulation - "Process First" Visual Story
 * 
 * Visualizes the transformation:
 * Input (Excel/CSV) -> Processing (IntroKI Brain) -> Output (Actions)
 * 
 * Uses orthogonal beams for Enterprise "Structured Magic" aesthetic
 */
export function HeroSimulation({ className }: { className?: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Node refs for AnimatedBeam
  const inputRef = React.useRef<HTMLDivElement>(null)
  const brainRef = React.useRef<HTMLDivElement>(null)
  const outputRefs = React.useRef<(HTMLDivElement | null)[]>([])
  
  // Animation state for pulse effects
  const [beamActive, setBeamActive] = React.useState({
    inputToBrain: false,
    brainToEmail: false,
    brainToCalendar: false,
    brainToTask: false,
  })

  // Trigger beam activations in sequence
  React.useEffect(() => {
    const timers = [
      // Input -> Brain (0s)
      setTimeout(() => setBeamActive(prev => ({ ...prev, inputToBrain: true })), 0),
      // Brain -> Email (1.5s)
      setTimeout(() => setBeamActive(prev => ({ ...prev, brainToEmail: true })), 1500),
      // Brain -> Calendar (2s)
      setTimeout(() => setBeamActive(prev => ({ ...prev, brainToCalendar: true })), 2000),
      // Brain -> Task (2.5s)
      setTimeout(() => setBeamActive(prev => ({ ...prev, brainToTask: true })), 2500),
    ]

    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [])

  const outputIcons: Array<{ Icon: LucideIcon; label: string; index: number }> = [
    { Icon: Mail, label: "Email", index: 0 },
    { Icon: Calendar, label: "Calendar", index: 1 },
    { Icon: CheckCircle2, label: "Task", index: 2 },
  ]

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-background p-10",
        "md:shadow-xl",
        className
      )}
    >
      {/* Subtle Grid Pattern Background (Connectivity Signal) */}
      <AttioGridBackground 
        opacity={0.03}
        size={40}
        className="opacity-30"
      />

      {/* Animated Beams - Input to Brain */}
      {inputRef.current && brainRef.current && containerRef.current && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={inputRef}
          toRef={brainRef}
          delay={0}
          duration={2}
        />
      )}

      {/* Animated Beams - Brain to Outputs */}
      {brainRef.current && outputRefs.current[0] && containerRef.current && beamActive.brainToEmail && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={brainRef}
          toRef={{ current: outputRefs.current[0] } as React.RefObject<HTMLElement>}
          delay={0}
          duration={2}
        />
      )}
      
      {brainRef.current && outputRefs.current[1] && containerRef.current && beamActive.brainToCalendar && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={brainRef}
          toRef={{ current: outputRefs.current[1] } as React.RefObject<HTMLElement>}
          delay={0}
          duration={2}
        />
      )}
      
      {brainRef.current && outputRefs.current[2] && containerRef.current && beamActive.brainToTask && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={brainRef}
          toRef={{ current: outputRefs.current[2] } as React.RefObject<HTMLElement>}
          delay={0}
          duration={2}
        />
      )}

      {/* Node Container - Flex Layout */}
      <div className="relative z-10 flex w-full items-center justify-between px-4 md:px-12">
        {/* Input Node (Left) */}
        <motion.div
          ref={inputRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
          className="relative z-20"
        >
          <NodeCircle
            Icon={FileText}
            size="md"
            label="Excel/CSV"
            isPulsing={beamActive.inputToBrain}
          />
        </motion.div>

        {/* Brain Node (Center) */}
        <motion.div
          ref={brainRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
          className="relative z-20"
        >
          <NodeCircle
            Icon={Brain}
            size="lg"
            label="IntroKI"
            isPulsing={beamActive.inputToBrain || beamActive.brainToEmail || beamActive.brainToCalendar || beamActive.brainToTask}
          />
        </motion.div>

        {/* Output Nodes (Right) - Vertical Stack */}
        <div className="relative z-20 flex flex-col items-center gap-4">
          {outputIcons.map(({ Icon, label, index }) => {
            const isActive = 
              (index === 0 && beamActive.brainToEmail) ||
              (index === 1 && beamActive.brainToCalendar) ||
              (index === 2 && beamActive.brainToTask)

            return (
              <motion.div
                key={index}
                ref={(el) => {
                  outputRefs.current[index] = el as HTMLDivElement | null
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ...ENTERPRISE_SPRING, delay: 0.6 + index * 0.1 }}
              >
                <NodeCircle
                  Icon={Icon}
                  size="sm"
                  label={label}
                  isPulsing={isActive}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/**
 * Node Circle Component
 * Enterprise-style circular node with icon and optional label
 */
function NodeCircle({
  Icon,
  size = "md",
  label,
  isPulsing = false,
}: {
  Icon: LucideIcon
  size?: "sm" | "md" | "lg"
  label?: string
  isPulsing?: boolean
}) {
  const sizeClasses = {
    sm: "w-16 h-16", // 64px
    md: "w-20 h-20", // 80px
    lg: "w-24 h-24", // 96px
  }

  const iconSizes = {
    sm: "h-6 w-6", // 24px
    md: "h-8 w-8", // 32px
    lg: "h-10 w-10", // 40px
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-full",
          "bg-white border border-gray-200 shadow-sm",
          sizeClasses[size],
          "z-10" // Above beams
        )}
        animate={isPulsing ? { scale: [1, 1.1, 1] } : { scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          repeat: isPulsing ? 2 : 0,
        }}
      >
        <Icon
          className={cn(
            iconSizes[size],
            "text-gray-900"
          )}
          strokeWidth={1.5}
        />
      </motion.div>
      {label && (
        <span className="text-[12px] leading-[16px] tracking-[0.01em] font-medium text-gray-600">
          {label}
        </span>
      )}
    </div>
  )
}

