/**
 * Data Flow Animation
 * Visualisiert, wie IntroKI Daten automatisiert
 * Animierter Datenfluss von Links (Sources) nach Rechts (IntroKI)
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Calendar, Linkedin, Database } from "lucide-react"
import { attioTransition } from "@/lib/animations"

interface DataFlowAnimationProps {
  className?: string
  variant?: "horizontal" | "vertical"
}

// Fließender Punkt mit Schweif
function FlowParticle({ 
  delay = 0,
  path = "M0,0 L100,0"
}: { 
  delay?: number
  path?: string
}) {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ 
        x: [0, 100, 200],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute"
    >
      <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm">
        {/* Schweif-Effekt */}
        <div className="absolute inset-0 rounded-full bg-blue-400 blur-sm opacity-50" />
      </div>
    </motion.div>
  )
}

export function DataFlowAnimation({ 
  className,
  variant = "horizontal"
}: DataFlowAnimationProps) {
  const [particles, setParticles] = React.useState<number[]>([])

  React.useEffect(() => {
    // Erstelle 3 Partikel mit unterschiedlichen Delays
    setParticles([0, 0.7, 1.4])
  }, [])

  const sources = [
    { icon: Mail, label: "Email", color: "text-red-500" },
    { icon: Calendar, label: "Calendar", color: "text-blue-500" },
    { icon: Linkedin, label: "LinkedIn", color: "text-blue-600" },
  ]

  return (
    <div className={className}>
      <div className="relative flex items-center justify-between py-8">
        {/* Source Icons (Links) */}
        <div className="flex items-center gap-4">
          {sources.map((source, index) => {
            const Icon = source.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, ...attioTransition }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${source.color}`} strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-inter text-gray-500">{source.label}</span>
              </motion.div>
            )
          })}
        </div>

        {/* Flow Path (SVG Lines) */}
        <div className="flex-1 relative mx-8 h-px">
          {/* Hauptlinie */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 2" preserveAspectRatio="none">
            <path
              d="M0,1 L200,1"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="text-gray-200"
            />
          </svg>

          {/* Fließende Partikel */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((delay, index) => (
              <FlowParticle key={index} delay={delay} />
            ))}
          </div>
        </div>

        {/* Target (IntroKI/Database) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, ...attioTransition }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-lg bg-blue-50 border-2 border-blue-300 flex items-center justify-center">
            <Database className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
          </div>
          <span className="text-[10px] font-inter font-medium text-gray-700">IntroKI</span>
        </motion.div>
      </div>
    </div>
  )
}

// Kompaktere Variante für Cards
export function DataFlowCompact() {
  return (
    <div className="relative py-6">
      <div className="flex items-center justify-between">
        {/* Sources */}
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
          <Calendar className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
          <Linkedin className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
        </div>

        {/* Flow Line */}
        <div className="flex-1 relative mx-4 h-px">
          <div className="absolute inset-0 bg-gray-200" />
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-0 left-0 w-2 h-full bg-blue-500 rounded-full"
          />
        </div>

        {/* Target */}
        <Database className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
      </div>
    </div>
  )
}
