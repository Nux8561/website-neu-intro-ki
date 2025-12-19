"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { ENTERPRISE_SPRING } from "@/lib/animations"

interface StaggerRevealProps {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
}

/**
 * Stagger-Reveal für Listen/Grids
 * Elemente erscheinen nacheinander (wie bei Attio Feature-Grids)
 */
export function StaggerReveal({ 
  children, 
  className = "",
  staggerDelay = 0.05 
}: StaggerRevealProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: ENTERPRISE_SPRING,
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

