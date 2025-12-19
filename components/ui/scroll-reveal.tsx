"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  offset?: [string, string]
  direction?: "up" | "down" | "left" | "right" | "fade"
  distance?: number
}

/**
 * Scroll-gebundene Reveal-Animation
 * Elemente entfalten sich basierend auf Scroll-Position
 * Wie bei Attio/Apple - keine einfachen Fade-Ins
 */
export function ScrollReveal({ 
  children, 
  className = "",
  offset = ["start end", "end start"],
  direction = "up",
  distance = 100
}: ScrollRevealProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  })

  // ALLE Hooks müssen auf der obersten Ebene sein (Rules of Hooks)
  // Berechne Transform basierend auf Direction - alle useTransform Calls hier
  const yUp = useTransform(scrollYProgress, [0, 0.3], [distance, 0])
  const yDown = useTransform(scrollYProgress, [0, 0.3], [-distance, 0])
  const xLeft = useTransform(scrollYProgress, [0, 0.3], [distance, 0])
  const xRight = useTransform(scrollYProgress, [0, 0.3], [-distance, 0])
  
  // Opacity und Scale für alle Directions
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  // Wähle die richtigen Transforms basierend auf Direction
  let xTransform: typeof xLeft | number = 0
  let yTransform: typeof yUp | number = 0
  
  switch (direction) {
    case "up":
      yTransform = yUp
      break
    case "down":
      yTransform = yDown
      break
    case "left":
      xTransform = xLeft
      break
    case "right":
      xTransform = xRight
      break
    case "fade":
      xTransform = 0
      yTransform = 0
      break
    default:
      yTransform = yUp
  }

  return (
    <motion.div 
      ref={targetRef} 
      style={{ 
        opacity, 
        x: xTransform,
        y: yTransform,
        scale: direction === "fade" ? scale : 1,
      }} 
      className={className}
    >
      {children}
    </motion.div>
  )
}
