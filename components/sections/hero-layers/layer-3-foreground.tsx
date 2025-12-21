"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Zap, Activity, TrendingUp } from "lucide-react"

/**
 * Layer 3: Foreground
 * 
 * Elemente, die "vor" dem Bildschirm schweben
 * - Cursor-Follower (Glowing Dot)
 * - Magnetic Icons (3D-Icons mit Magnetic Pull)
 * - Optional: Notification-Toast
 * 
 * Bewegung: Schnelle Reaktion auf Mausbewegung (Magnetic Effect)
 */
export function Layer3Foreground() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = React.useState(false)

  // Mausposition für Cursor-Follower und Magnetic Icons
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 15 })

  // Cursor-Follower Position
  const cursorX = useTransform(smoothMouseX, (x) => x)
  const cursorY = useTransform(smoothMouseY, (y) => y)

  // Prüfe ob Desktop (nur Client-Side)
  React.useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024)
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  React.useEffect(() => {
    if (!isDesktop) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, isDesktop])

  // Magnetic Icons Daten
  const magneticIcons = [
    {
      id: 1,
      Icon: Zap,
      position: { x: "95%", y: "10%" },
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      id: 2,
      Icon: Activity,
      position: { x: "5%", y: "85%" },
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: 3,
      Icon: TrendingUp,
      position: { x: "90%", y: "90%" },
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
  ]

  if (!isDesktop) return null

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Cursor-Follower */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          left: -7.5,
          top: -7.5,
        }}
        className="absolute h-[15px] w-[15px] rounded-full bg-blue-500/30 blur-[20px]"
      />

      {/* Magnetic Icons */}
      {magneticIcons.map((item) => (
        <MagneticIcon
          key={item.id}
          Icon={item.Icon}
          position={item.position}
          color={item.color}
          bgColor={item.bgColor}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}

      {/* Notification-Toast (erscheint nach 3s) */}
      <NotificationToast />
    </div>
  )
}

/**
 * Magnetic Icon Component
 * Reagiert auf Mausposition mit Magnetic Pull und 3D-Rotation
 */
function MagneticIcon({
  Icon,
  position,
  color,
  bgColor,
  mouseX,
  mouseY,
}: {
  Icon: React.ComponentType<{ className?: string }>
  position: { x: string; y: string }
  color: string
  bgColor: string
  mouseX: ReturnType<typeof useMotionValue<number>>
  mouseY: ReturnType<typeof useMotionValue<number>>
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const iconX = useMotionValue(0)
  const iconY = useMotionValue(0)

  const smoothX = useSpring(iconX, { stiffness: 150, damping: 15 })
  const smoothY = useSpring(iconY, { stiffness: 150, damping: 15 })

  // 3D-Rotation basierend auf Mausposition
  const rotateX = useTransform(smoothY, [-200, 200], [10, -10])
  const rotateY = useTransform(smoothX, [-200, 200], [-10, 10])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      // Magnetic Pull: Stärker wenn Maus näher ist
      const maxDistance = 200
      const pullStrength = Math.max(0, 1 - distance / maxDistance)

      iconX.set(deltaX * pullStrength * 0.3)
      iconY.set(deltaY * pullStrength * 0.3)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [iconX, iconY])

  return (
    <motion.div
      ref={ref}
      style={{
        left: position.x,
        top: position.y,
        x: smoothX,
        y: smoothY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="absolute"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2 }}
      whileHover={{ scale: 1.1 }}
    >
      <div className={`rounded-lg ${bgColor} p-3 border border-white/20 backdrop-blur-sm shadow-attio-md`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
    </motion.div>
  )
}

/**
 * Notification-Toast Component
 * Erscheint nach 3s mit Slide-In Animation
 */
function NotificationToast() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ x: 400, opacity: 0 }}
      animate={isVisible ? { x: 0, opacity: 1 } : { x: 400, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="absolute top-8 right-8 rounded-lg border border-emerald-200/50 bg-white/80 backdrop-blur-xl p-4 shadow-attio-diffuse"
    >
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <div>
          <div className="text-sm font-semibold text-slate-900">New Signal Detected</div>
          <div className="text-xs text-slate-500">Acme Corp - Strong Buy Signal</div>
        </div>
      </div>
    </motion.div>
  )
}

