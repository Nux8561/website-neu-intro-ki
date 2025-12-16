/**
 * Integration Hub Component
 * Visualisiert IntroKI als zentralen Knotenpunkt mit orbitalen Tool-Integrationen
 * Attio-Style: Minimalistisch, präzise, animiert
 */

"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { attioTransition } from "@/lib/animations"
import { cn } from "@/lib/utils"

// Tool-Integrationen mit Brand-Colors
interface Integration {
  name: string
  logo: string
  brandColor: string
  angle: number // Winkel in Grad für orbitale Position
  distance: number // Entfernung vom Zentrum (in px)
}

// Integrationen - werden mit responsive distance angepasst
const getIntegrations = (distance: number): Integration[] => [
  { name: "HubSpot", logo: "/logos/hubspot.svg", brandColor: "#FF7A59", angle: 0, distance },
  { name: "Gmail", logo: "/logos/gmail.svg", brandColor: "#EA4335", angle: 60, distance },
  { name: "Slack", logo: "/logos/slack.svg", brandColor: "#4A154B", angle: 120, distance },
  { name: "Zapier", logo: "/logos/zapier.svg", brandColor: "#FF4A00", angle: 180, distance },
  { name: "Stripe", logo: "/logos/stripe.svg", brandColor: "#635BFF", angle: 240, distance },
  { name: "Notion", logo: "/logos/notion.svg", brandColor: "#000000", angle: 300, distance },
]

// Konvertiert Grad zu Radian
const degToRad = (deg: number) => (deg * Math.PI) / 180

// Berechnet Position basierend auf Winkel und Entfernung
const getPosition = (angle: number, distance: number) => {
  const rad = degToRad(angle)
  return {
    x: Math.cos(rad) * distance,
    y: Math.sin(rad) * distance,
  }
}

// Animierter Partikel auf Verbindungslinie
function ConnectionParticle({ 
  startX, 
  startY, 
  endX, 
  endY,
  delay = 0,
  duration = 2
}: { 
  startX: number
  startY: number
  endX: number
  endY: number
  delay?: number
  duration?: number
}) {
  return (
    <motion.circle
      r="3"
      fill="url(#particleGradient)"
      className="drop-shadow-sm"
      initial={{ cx: startX, cy: startY }}
      animate={{
        cx: [startX, endX, startX],
        cy: [startY, endY, startY],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    />
  )
}

// Verbindungslinie mit Partikeln
function ConnectionLine({
  startX,
  startY,
  endX,
  endY,
  isActive = false,
  index = 0,
}: {
  startX: number
  startY: number
  endX: number
  endY: number
  isActive?: boolean
  index?: number
}) {
  // Berechne Distanz für Duration-Anpassung
  const distance = Math.sqrt(
    Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
  )
  const baseDuration = 2
  const duration = baseDuration + (distance / 200) * 0.5

  return (
    <g>
      {/* Linie */}
      <motion.line
        x1={startX}
        y1={startY}
        x2={endX}
        y2={endY}
        stroke={isActive ? "rgba(59, 130, 246, 0.4)" : "rgba(0, 0, 0, 0.08)"}
        strokeWidth={isActive ? "1.5" : "1"}
        strokeDasharray={isActive ? "0" : "4,4"}
        transition={attioTransition}
      />
      {/* Partikel - mehrere für kontinuierlichen Flow */}
      <ConnectionParticle
        startX={startX}
        startY={startY}
        endX={endX}
        endY={endY}
        delay={index * 0.3}
        duration={duration}
      />
      <ConnectionParticle
        startX={startX}
        startY={startY}
        endX={endX}
        endY={endY}
        delay={index * 0.3 + duration / 2}
        duration={duration}
      />
    </g>
  )
}

// Satelliten-Logo mit Hover-Effekt
function SatelliteLogo({
  integration,
  centerX,
  centerY,
  index,
  logoSize = 32,
}: {
  integration: Integration
  centerX: number
  centerY: number
  index: number
  logoSize?: number
}) {
  const [isHovered, setIsHovered] = React.useState(false)
  const position = getPosition(integration.angle, integration.distance)
  const x = centerX + position.x
  const y = centerY + position.y
  const containerSize = logoSize + 16 // Logo + Padding

  return (
    <g>
      {/* Verbindungslinie */}
      <ConnectionLine
        startX={x}
        startY={y}
        endX={centerX}
        endY={centerY}
        isActive={isHovered}
        index={index}
      />
      {/* Logo Container */}
      <motion.g
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0.6,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={attioTransition}
      >
        {/* Hover-Hintergrund */}
        <motion.circle
          cx={x}
          cy={y}
          r={containerSize / 2 + 4}
          fill={isHovered ? integration.brandColor : "transparent"}
          fillOpacity={isHovered ? 0.1 : 0}
          transition={attioTransition}
        />
        {/* Logo */}
        <foreignObject
          x={x - containerSize / 2}
          y={y - containerSize / 2}
          width={containerSize}
          height={containerSize}
          className="cursor-pointer"
        >
          <div className="w-full h-full flex items-center justify-center">
            <Image
              src={integration.logo}
              alt={integration.name}
              width={logoSize}
              height={logoSize}
              className={cn(
                "transition-all duration-attio ease-attio-ease-out",
                isHovered ? "opacity-100 brightness-100" : "opacity-60 brightness-90"
              )}
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </div>
        </foreignObject>
        {/* Tooltip */}
        {isHovered && (
          <motion.g
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={attioTransition}
          >
            <rect
              x={x - 50}
              y={y - containerSize / 2 - 35}
              width="100"
              height="24"
              rx="4"
              fill="rgba(0, 0, 0, 0.85)"
              className="backdrop-blur-sm"
            />
            <text
              x={x}
              y={y - containerSize / 2 - 20}
              textAnchor="middle"
              fill="white"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              Native Integration
            </text>
          </motion.g>
        )}
      </motion.g>
    </g>
  )
}

// Zentrum: IntroKI Logo
function CenterHub({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {/* Pulsierender Ring */}
      <motion.circle
        cx={x}
        cy={y}
        r="40"
        fill="none"
        stroke="rgba(59, 130, 246, 0.2)"
        strokeWidth="1"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Zentrum */}
      <motion.circle
        cx={x}
        cy={y}
        r="36"
        fill="white"
        stroke="rgba(0, 0, 0, 0.1)"
        strokeWidth="1"
        className="shadow-sm"
        whileHover={{ scale: 1.05 }}
        transition={attioTransition}
      />
      {/* IntroKI Logo/Icon */}
      <foreignObject x={x - 24} y={y - 24} width="48" height="48">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
            <span className="text-sm font-inter font-bold text-white">IK</span>
          </div>
        </div>
      </foreignObject>
    </g>
  )
}

// Hauptkomponente
export function IntegrationHub({ className }: { className?: string }) {
  const [mounted, setMounted] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = React.useState({ width: 600, height: 600 })
  const centerX = dimensions.width / 2
  const centerY = dimensions.height / 2

  React.useEffect(() => {
    setMounted(true)
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const size = Math.min(rect.width - 32, 800) // 32px padding
        setDimensions({
          width: size,
          height: size,
        })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Responsive distance basierend auf Container-Größe
  const orbitDistance = React.useMemo(() => {
    const baseSize = Math.min(dimensions.width, dimensions.height)
    // Mobile: 120px, Tablet: 150px, Desktop: 180px
    if (baseSize < 500) return 120
    if (baseSize < 700) return 150
    return 180
  }, [dimensions])

  // Responsive Logo-Größe
  const logoSize = React.useMemo(() => {
    const baseSize = Math.min(dimensions.width, dimensions.height)
    if (baseSize < 500) return 24
    if (baseSize < 700) return 28
    return 32
  }, [dimensions])

  const integrations = React.useMemo(
    () => getIntegrations(orbitDistance),
    [orbitDistance]
  )

  if (!mounted) {
    return (
      <div className={cn("w-full h-[600px] flex items-center justify-center", className)}>
        <div className="w-12 h-12 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full flex items-center justify-center relative",
        "min-h-[500px] md:min-h-[600px]",
        className
      )}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        className="overflow-visible"
      >
        {/* Gradient Definition für Partikel */}
        <defs>
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Satelliten-Logos */}
        {integrations.map((integration, index) => {
          const adjustedIntegration = {
            ...integration,
            distance: orbitDistance,
          }
          return (
            <SatelliteLogo
              key={integration.name}
              integration={adjustedIntegration}
              centerX={centerX}
              centerY={centerY}
              index={index}
              logoSize={logoSize}
            />
          )
        })}

        {/* Zentrum */}
        <CenterHub x={centerX} y={centerY} />
      </svg>
    </div>
  )
}

