"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ParallaxContainer } from "@/components/ui/parallax-container"

/**
 * Layer 0: Deep Background
 * 
 * "Breathing Canvas" - Organische, langsame Bewegung
 * - Mesh-Gradient-Orbs (3-4 große, animierte Radial-Gradients)
 * - Noise-Overlay (nutzt bestehende .bg-noise CSS-Klasse)
 * - Partikel/Stars (subtile weiße Partikel, langsam driftend)
 * - Abstrakte Formen (2-3 große, verschwommene Blobs)
 * 
 * Parallax: 0.2x Scroll-Geschwindigkeit (sehr langsam)
 */
export function Layer0DeepBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Mesh-Gradient-Orbs - Breathing Animation */}
      <ParallaxContainer speed={0.2}>
        <motion.div
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/5 blur-[128px]"
          animate={{
            scale: [0.95, 1.05, 0.95],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-indigo-500/3 blur-[128px]"
          animate={{
            scale: [1.05, 0.95, 1.05],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/4 blur-[150px]"
          animate={{
            scale: [0.95, 1.05, 0.95],
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 h-[350px] w-[350px] rounded-full bg-blue-400/3 blur-[120px]"
          animate={{
            scale: [1.05, 0.95, 1.05],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </ParallaxContainer>

      {/* Noise-Overlay */}
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Partikel/Stars - Langsam driftend */}
      <ParallaxContainer speed={0.2}>
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/20"
              style={{
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 10, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </ParallaxContainer>

      {/* Abstrakte Formen - Große, verschwommene Blobs */}
      <ParallaxContainer speed={0.2}>
        <motion.div
          className="absolute top-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-500/2 to-indigo-500/2 blur-[200px]"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-emerald-500/2 to-blue-500/2 blur-[180px]"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </ParallaxContainer>
    </div>
  )
}

