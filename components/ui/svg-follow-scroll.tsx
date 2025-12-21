"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"
import { cn } from "@/lib/utils"

/**
 * SVG Follow Scroll Component
 * 
 * Industrial Tool Style - Schwarze Linie die dem Scroll folgt
 * Storyline mit verschiedenen Steps und Animationen
 */
interface StoryStep {
  id: string
  title: string
  description: string
  position: number // 0-100 (Prozent der Scroll-Position)
}

interface SVGFollowScrollProps {
  /**
   * Story Steps für die Storyline
   */
  steps?: StoryStep[]
  
  /**
   * Zusätzliche CSS-Klassen
   */
  className?: string
  
  /**
   * Höhe der Section (in vh)
   */
  height?: string
  
  /**
   * Farbe der Linie (default: schwarz)
   */
  strokeColor?: string
  
  /**
   * Breite der Linie
   */
  strokeWidth?: number
}

export function SVGFollowScroll({
  steps = [
    { id: "1", title: "Signal erkannt", description: "Dein System erkennt ein neues Signal", position: 20 },
    { id: "2", title: "Research startet", description: "Automatische Recherche beginnt", position: 40 },
    { id: "3", title: "Priorität gesetzt", description: "Algorithmus setzt Priorität", position: 60 },
    { id: "4", title: "Du wirst benachrichtigt", description: "Du erhältst eine Benachrichtigung", position: 80 },
  ],
  className,
  height = "350vh",
  strokeColor = "#000000",
  strokeWidth = 2,
}: SVGFollowScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })

  // Path Length basierend auf Scroll
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      className={cn(
        "relative mx-auto flex w-full flex-col items-center overflow-hidden bg-white",
        className
      )}
      style={{ minHeight: height }}
    >
      {/* Story Steps mit Tooltips - Jeder Step ist eine separate Komponente mit eigenen Hooks */}
      {steps.map((step, index) => (
        <StoryStepMarker
          key={step.id}
          step={step}
          position={step.position}
          scrollYProgress={scrollYProgress}
          index={index}
        />
      ))}

      {/* SVG Path - Schwarze Linie von oben */}
      <LinePath
        className="absolute left-1/2 top-0 -translate-x-1/2 z-0"
        scrollYProgress={scrollYProgress}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
      />
    </section>
  )
}

/**
 * Story Step Marker Component
 * 
 * Alle Hooks müssen auf oberster Ebene sein!
 */
function StoryStepMarker({
  step,
  position,
  scrollYProgress,
  index,
}: {
  step: StoryStep
  position: number
  scrollYProgress: any
  index: number
}) {
  // Alle Hooks auf oberster Ebene
  const stepProgress = useTransform(
    scrollYProgress,
    [position / 100 - 0.1, position / 100, position / 100 + 0.1],
    [0, 1, 0]
  )

  const [isActive, setIsActive] = React.useState(false)

  React.useEffect(() => {
    const unsubscribe = stepProgress.onChange((v: number) => {
      setIsActive(v > 0.5)
    })
    return unsubscribe
  }, [stepProgress])

  const opacity = useTransform(stepProgress, [0, 0.5, 1], [0.3, 1, 0.3])
  const scale = useTransform(stepProgress, [0, 0.5, 1], [0.8, 1.2, 0.8])

  return (
    <motion.div
      style={{
        position: "absolute",
        top: `${position}%`,
        left: "50%",
        transform: "translateX(-50%)",
        opacity,
        scale,
        zIndex: 10,
      }}
      className="flex flex-col items-center"
    >
      {/* Marker Dot */}
      <motion.div
        animate={isActive ? { scale: [1, 1.3, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
        className="h-4 w-4 rounded-full bg-black border-2 border-white shadow-lg"
      />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        className="absolute top-8 whitespace-nowrap rounded-lg border-2 border-black bg-white px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        <div className="text-sm font-space-grotesk font-semibold text-black">{step.title}</div>
        <div className="text-xs text-black/70 font-inter mt-1">{step.description}</div>
      </motion.div>
    </motion.div>
  )
}

/**
 * Line Path Component
 * 
 * SVG Path der dem Scroll folgt
 * Schwarze Linie von oben nach unten
 */
const LinePath = ({
  className,
  scrollYProgress,
  strokeColor = "#000000",
  strokeWidth = 2,
}: {
  className: string
  scrollYProgress: any
  strokeColor?: string
  strokeWidth?: number
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Einfacher vertikaler Path von oben nach unten
  // Mit leichten Kurven für visuelles Interesse
  const pathData = "M 640 0 Q 640 200 640 400 T 640 800 T 640 1200 T 640 1600 T 640 2000 T 640 2400"

  return (
    <svg
      width="1280"
      height="2400"
      viewBox="0 0 1280 2400"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          pathLength,
          strokeDasharray: 1,
        }}
      />
    </svg>
  )
}

