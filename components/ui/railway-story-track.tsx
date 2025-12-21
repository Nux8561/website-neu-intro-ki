"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { snappySpring } from "@/lib/animations"

/**
 * Railway-Style Story Track
 * 
 * Ein Element, das durch die Seite läuft und die Story Schritt für Schritt erzählt
 * Wie bei Railway.com - ein visuelles Element, das durch die Sections scrollt
 */
interface StoryStep {
  id: string
  title: string
  description: string
  position: number // 0-100 (Prozent der Scroll-Position)
}

interface RailwayStoryTrackProps {
  steps: StoryStep[]
  className?: string
}

export function RailwayStoryTrack({ steps, className }: RailwayStoryTrackProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Position des "Zugs" basierend auf Scroll
  const trainPosition = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Track Line - Horizontale Linie durch die Seite */}
      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-black/10" />

      {/* Story Steps */}
      {steps.map((step, i) => {
        const stepProgress = useTransform(
          scrollYProgress,
          [i / steps.length, (i + 1) / steps.length],
          [0, 1]
        )
        const isActive = useTransform(stepProgress, (v) => v > 0.3 && v < 0.7)

        return (
          <StoryStepMarker
            key={step.id}
            step={step}
            position={step.position}
            progress={stepProgress}
            isActive={isActive}
          />
        )
      })}

      {/* Train - Das Element, das durch die Seite läuft */}
      <motion.div
        style={{
          left: trainPosition,
          x: "-50%",
        }}
        className="absolute top-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  )
}

function StoryStepMarker({
  step,
  position,
  progress,
  isActive,
}: {
  step: StoryStep
  position: number
  progress: any
  isActive: any
}) {
  const [active, setActive] = React.useState(false)

  React.useEffect(() => {
    const unsubscribe = isActive.onChange((v: boolean) => setActive(v))
    return unsubscribe
  }, [isActive])

  const opacity = useTransform(progress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(progress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      style={{
        left: `${position}%`,
        top: "50%",
        x: "-50%",
        y: "-50%",
        opacity,
        scale,
      }}
      className="absolute"
    >
      <div className="relative">
        {/* Marker Dot */}
        <motion.div
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
          className="h-4 w-4 rounded-full bg-black"
        />
        {/* Content Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-black/10 bg-white px-4 py-2 shadow-lg"
        >
          <div className="text-sm font-jakarta font-semibold text-black">{step.title}</div>
          <div className="text-xs text-black/70 font-inter">{step.description}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

