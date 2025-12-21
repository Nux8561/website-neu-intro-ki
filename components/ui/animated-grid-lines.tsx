"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/**
 * ANIMATED GRID LINES - Künstlerisches Grid-System
 * 
 * Erzeugt:
 * - Diagonale Linien (45° und -45°)
 * - Scroll-basierte Animationen
 * - Unabhängige Hintergrund-Animationen
 * - Von links nach rechts fließende Linien
 */
export function AnimatedGridLines() {
  const { scrollYProgress } = useScroll()
  
  // Scroll-basierte Transformationen für verschiedene Linien
  const diagonal1X = useTransform(scrollYProgress, [0, 1], [0, 200])
  const diagonal2X = useTransform(scrollYProgress, [0, 1], [0, -200])
  const horizontalFlow = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Basis-Grid (Horizontal & Vertical) - Industrial Tool Style (Schwarz-Weiß) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '2rem 2rem',
          x: horizontalFlow,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Diagonale Linien - 45° (von links oben nach rechts unten) - Industrial Tool Style */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 2px,
              rgba(0, 0, 0, 0.15) 4px
            )
          `,
          backgroundSize: '8rem 8rem',
          x: diagonal1X,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Diagonale Linien - -45° (von rechts oben nach links unten) - Industrial Tool Style */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.1) 2px,
              rgba(0, 0, 0, 0.1) 4px
            )
          `,
          backgroundSize: '8rem 8rem',
          x: diagonal2X,
        }}
        animate={{
          backgroundPosition: ['100% 0%', '0% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Fließende horizontale Linien (von links nach rechts) - Industrial Tool Style */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.2) 20%,
              rgba(0, 0, 0, 0.3) 50%,
              rgba(0, 0, 0, 0.2) 80%,
              transparent 100%
            )
          `,
          backgroundSize: '600px 1px',
          backgroundRepeat: 'repeat-y',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Fließende vertikale Linien (von oben nach unten) - Industrial Tool Style */}
      <motion.div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0, 0, 0, 0.2) 20%,
              rgba(0, 0, 0, 0.3) 50%,
              rgba(0, 0, 0, 0.2) 80%,
              transparent 100%
            )
          `,
          backgroundSize: '1px 600px',
          backgroundRepeat: 'repeat-x',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 100%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Zusätzliche künstlerische Linien - Wellenform - Industrial Tool Style */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 3rem,
              rgba(0, 0, 0, 0.08) 3rem,
              rgba(0, 0, 0, 0.08) 3.5rem
            )
          `,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '4rem 0%'],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

