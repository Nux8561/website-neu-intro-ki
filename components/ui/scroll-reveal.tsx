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

  // Berechne Transform basierend auf Direction
  const getTransform = () => {
    switch (direction) {
      case "up":
        return {
          y: useTransform(scrollYProgress, [0, 0.3], [distance, 0]),
          x: 0,
        }
      case "down":
        return {
          y: useTransform(scrollYProgress, [0, 0.3], [-distance, 0]),
          x: 0,
        }
      case "left":
        return {
          x: useTransform(scrollYProgress, [0, 0.3], [distance, 0]),
          y: 0,
        }
      case "right":
        return {
          x: useTransform(scrollYProgress, [0, 0.3], [-distance, 0]),
          y: 0,
        }
      case "fade":
        return {
          x: 0,
          y: 0,
        }
      default:
        return {
          y: useTransform(scrollYProgress, [0, 0.3], [distance, 0]),
          x: 0,
        }
    }
  }

  const transforms = getTransform()
  
  // Opacity und Scale für alle Directions
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1])

  return (
    <motion.div 
      ref={targetRef} 
      style={{ 
        opacity, 
        ...transforms,
        scale: direction === "fade" ? scale : 1,
      }} 
      className={className}
    >
      {children}
    </motion.div>
  )
}
