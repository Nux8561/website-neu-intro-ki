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
      {/* Basis-Grid (Horizontal & Vertical) - Animiert */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(148, 163, 184, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(148, 163, 184, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
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

      {/* Diagonale Linien - 45° (von links oben nach rechts unten) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(148, 163, 184, 0.08) 2px,
              rgba(148, 163, 184, 0.08) 4px
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

      {/* Diagonale Linien - -45° (von rechts oben nach links unten) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(148, 163, 184, 0.06) 2px,
              rgba(148, 163, 184, 0.06) 4px
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

      {/* Fließende horizontale Linien (von links nach rechts) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              transparent 0%,
              rgba(148, 163, 184, 0.1) 20%,
              rgba(148, 163, 184, 0.15) 50%,
              rgba(148, 163, 184, 0.1) 80%,
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

      {/* Fließende vertikale Linien (von oben nach unten) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(148, 163, 184, 0.1) 20%,
              rgba(148, 163, 184, 0.15) 50%,
              rgba(148, 163, 184, 0.1) 80%,
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

      {/* Zusätzliche künstlerische Linien - Wellenform */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 3rem,
              rgba(148, 163, 184, 0.04) 3rem,
              rgba(148, 163, 184, 0.04) 3.5rem
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

