"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface ExpensiveCardProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

/**
 * 3D Card mit echter Physik
 * Kippt sich zur Mausposition (wie Apple/Linear Karten)
 * Nutzt Spring-Physik für "teure" Bewegung
 */
export function ExpensiveCard({ 
  children, 
  className,
  intensity = 10 
}: ExpensiveCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Mausposition als Motion Values
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring-Physik macht die Bewegung schwer und teuer (kein lineares Ruckeln)
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    // Berechne Mausposition relativ zur Kartenmitte (-0.5 bis 0.5)
    const xPct = (event.clientX - left) / width - 0.5
    const yPct = (event.clientY - top) / height - 0.5
    
    // Setze Zielwerte (Spring macht den Rest)
    x.set(xPct)
    y.set(yPct)
  }

  function handleMouseLeave() {
    // Zurück zur Mitte
    x.set(0)
    y.set(0)
  }

  // Mappe Mausbewegung auf Rotation (max intensity Grad)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity])

  // Glanz-Effekt (Sheen) der über die Karte läuft
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])
  
  // Opacity des Sheens basierend auf Bewegung
  const sheenOpacity = useTransform(
    mouseX,
    [-0.5, 0, 0.5],
    [0, 0.3, 0]
  )

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl",
        "shadow-attio-diffuse transition-shadow duration-300",
        className
      )}
    >
      {/* Content Layer (mit Z-Offset für 3D-Tiefe) */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="relative z-10 h-full"
      >
        {children}
      </div>

      {/* Der "Teure" Licht-Reflex (Sheen) */}
      <motion.div
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 60%)",
          left: sheenX,
          top: sheenY,
          opacity: sheenOpacity,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
        className="absolute h-[300px] w-[300px] blur-2xl z-20"
      />
    </motion.div>
  )
}

