"use client"

import * as React from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import Image from "next/image"
import { Phone, CheckCircle2, TrendingUp, Brain, Sparkles, FileText, Target, PhoneCall, Database } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { ShiningText } from "@/components/ui/shining-text"

const smoothSpring = { type: "spring", stiffness: 400, damping: 17 }

// Professional color palette
const colors = {
  background: "#FAFAFA",
  surface: "#FFFFFF",
  border: "#E5E7EB",
  text: {
    primary: "#111827",
    secondary: "#6B7280",
    muted: "#9CA3AF"
  },
  accent: {
    blue: "#3B82F6",
    purple: "#8B5CF6",
    green: "#10B981",
    orange: "#F59E0B",
    red: "#EF4444"
  }
}

// Data sources
const dataSources = [
  { 
    id: "telefonie", 
    name: "Telefonie", 
    icon: PhoneCall,
    color: colors.accent.blue,
    bgColor: "#EFF6FF",
    count: 2847
  },
  { 
    id: "notizen", 
    name: "Notizen", 
    icon: FileText,
    color: colors.accent.green,
    bgColor: "#ECFDF5",
    count: 1523
  },
  { 
    id: "umsatzziele", 
    name: "Umsatzziele", 
    icon: Target,
    color: colors.accent.orange,
    bgColor: "#FFFBEB",
    count: 4129
  },
  { 
    id: "daten", 
    name: "Daten", 
    icon: Database,
    color: colors.accent.purple,
    bgColor: "#F5F3FF",
    count: 8921
  },
]

// Priority leads
const priorityLeads = [
  {
    id: "1",
    company: "Deutsche Prüfservice GmbH",
    priority: 6,
    score: 75,
    status: "dringend" as const,
    lastContact: "vor 16 Tagen",
    action: "Initial Contact"
  },
  {
    id: "2",
    company: "FNT Software GmbH",
    priority: 7,
    score: 75,
    status: "dringend" as const,
    lastContact: "vor 16 Tagen",
    action: "Call"
  },
  {
    id: "3",
    company: "Medizinio GmbH",
    priority: 8,
    score: 75,
    status: "hoch" as const,
    lastContact: "vor 16 Tagen",
    action: "Call"
  },
  {
    id: "4",
    company: "Eaton Corporation",
    priority: 9,
    score: 75,
    status: "hoch" as const,
    lastContact: "vor 16 Tagen",
    action: "Call"
  },
]

interface PriorityCardProps {
  lead: typeof priorityLeads[0]
  index: number
  isVisible: boolean
}

function PriorityCard({ lead, index, isVisible }: PriorityCardProps) {
  const score = useMotionValue(0)
  const roundedScore = useTransform(score, Math.round)
  const [displayScore, setDisplayScore] = React.useState(0)

  React.useEffect(() => {
    if (isVisible) {
      animate(score, lead.score, { duration: 1, ease: "easeOut" })
    }
  }, [isVisible, lead.score, score])

  React.useEffect(() => {
    const unsubscribe = roundedScore.on("change", (latest) => {
      setDisplayScore(Math.round(latest))
    })
    return unsubscribe
  }, [roundedScore])

  const statusConfig = {
    dringend: {
      bg: "bg-red-50",
      border: "border-red-200",
      badge: "bg-red-100 text-red-700 border-red-200"
    },
    hoch: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-700 border-orange-200"
    }
  }

  const config = statusConfig[lead.status]

  return (
    <motion.div
      className={`relative rounded-xl border ${config.border} ${config.bg} p-4 shadow-sm hover:shadow-md transition-shadow`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.95
      }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      whileHover={{ scale: 1.01, y: -2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`px-2.5 py-1 rounded-md text-xs font-semibold ${config.badge} border`}>
          Priorität #{lead.priority}
        </div>
        {lead.action === "Call" ? (
          <Phone className="w-4 h-4 text-gray-400" />
        ) : (
          <CheckCircle2 className="w-4 h-4 text-gray-400" />
        )}
      </div>

      <h3 className="text-base font-semibold text-gray-900 mb-1.5">
        {lead.company}
      </h3>

      <p className="text-xs text-gray-500 mb-4">
        Letzter Kontakt {lead.lastContact}
      </p>

      <motion.button
        className={`w-full py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all ${
          isVisible 
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm hover:shadow-md" 
            : "bg-gray-100 text-gray-500"
        }`}
        whileHover={isVisible ? { scale: 1.02 } : {}}
        whileTap={isVisible ? { scale: 0.98 } : {}}
        transition={smoothSpring}
      >
        {lead.action === "Call" ? (
          <>
            <Phone className="w-4 h-4" />
            Call starten
          </>
        ) : (
          <>
            <CheckCircle2 className="w-4 h-4" />
            Übernehmen
          </>
        )}
      </motion.button>

      <div className="absolute top-4 right-4">
        <motion.div
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm"
          initial={{ scale: 0 }}
          animate={{ scale: isVisible ? 1 : 0 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 400, damping: 17 }}
        >
          <span className="text-xs font-bold text-gray-900">
            {displayScore}
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}

// Flow Lines SVG Component - calculates paths dynamically
function FlowLinesSVG({
  phase,
  activeSource,
  visibleCards,
  sourceRefs,
  aiCenterRef,
  cardRefs,
  containerRef,
  dataSources,
  priorityLeads,
  colors
}: {
  phase: "collecting" | "analyzing" | "prioritizing" | "resetting"
  activeSource: number
  visibleCards: number
  sourceRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
  aiCenterRef: React.RefObject<HTMLDivElement>
  cardRefs: React.MutableRefObject<(HTMLDivElement | null)[]>
  containerRef: React.RefObject<HTMLDivElement>
  dataSources: Array<{
    id: string
    name: string
    icon: React.ComponentType<any>
    color: string
    bgColor: string
    count: number
  }>
  priorityLeads: Array<{
    id: string
    company: string
    priority: number
    score: number
    status: "dringend" | "hoch"
    lastContact: string
    action: string
  }>
  colors: {
    background: string
    surface: string
    border: string
    text: {
      primary: string
      secondary: string
      muted: string
    }
    accent: {
      blue: string
      purple: string
      green: string
      orange: string
      red: string
    }
  }
}) {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)

  // Force re-render to update paths when elements move
  React.useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate()
    }, 100)
    return () => clearInterval(interval)
  }, [phase, activeSource, visibleCards])

  if (!containerRef.current) return null

  const containerRect = containerRef.current.getBoundingClientRect()

  return (
    <svg 
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 50 }}
    >
      {/* Flow from SOURCES to AI */}
      {(phase === "collecting" || phase === "analyzing") && dataSources.map((source, index) => {
        const isActive = phase === "analyzing" || activeSource === index
        if (!isActive) return null

        const sourceEl = sourceRefs.current[index]
        const aiEl = aiCenterRef.current
        if (!sourceEl || !aiEl) return null

        const sourceRect = sourceEl.getBoundingClientRect()
        const aiRect = aiEl.getBoundingClientRect()

        // Start: Bottom center of source card
        const startX = sourceRect.left - containerRect.left + sourceRect.width / 2
        const startY = sourceRect.bottom - containerRect.top

        // End: EXACT center of logo (not just the container, but the actual logo center)
        const endX = aiRect.left - containerRect.left + aiRect.width / 2
        const endY = aiRect.top - containerRect.top + aiRect.height / 2

        // Bezier curve
        const midX = (startX + endX) / 2
        const controlY = startY - 100 + (index * 30)
        const pathD = `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`

        return (
          <g key={`source-to-ai-${source.id}`}>
            <defs>
              <linearGradient id={`grad-${source.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={source.color} stopOpacity="0.8" />
                <stop offset="50%" stopColor={source.color} stopOpacity="1" />
                <stop offset="100%" stopColor={colors.accent.purple} stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <motion.path
              d={pathD}
              fill="none"
              stroke={`url(#grad-${source.id})`}
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              style={{ filter: `drop-shadow(0 0 8px ${source.color}60)` }}
            />
            <motion.circle
              r="8"
              fill={source.color}
              style={{ filter: `drop-shadow(0 0 12px ${source.color})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={pathD}
              />
            </motion.circle>
          </g>
        )
      })}

      {/* Flow from AI to CARDS */}
      {phase === "prioritizing" && priorityLeads.slice(0, visibleCards).map((lead, index) => {
        const lineColor = lead.status === "dringend" ? colors.accent.red : colors.accent.orange
        
        const cardEl = cardRefs.current[index]
        const aiEl = aiCenterRef.current
        if (!cardEl || !aiEl) return null

        const cardRect = cardEl.getBoundingClientRect()
        const aiRect = aiEl.getBoundingClientRect()

        // Start: EXACT center of logo (not just the container, but the actual logo center)
        const startX = aiRect.left - containerRect.left + aiRect.width / 2
        const startY = aiRect.top - containerRect.top + aiRect.height / 2

        // End: Top center of card
        const endX = cardRect.left - containerRect.left + cardRect.width / 2
        const endY = cardRect.top - containerRect.top

        // Bezier curve
        const midX = (startX + endX) / 2
        const controlY = startY + 80 + (index % 2 === 0 ? -1 : 1) * 40
        const pathD = `M ${startX} ${startY} Q ${midX} ${controlY} ${endX} ${endY}`

        return (
          <g key={`ai-to-card-${lead.id}`}>
            <defs>
              <linearGradient id={`grad-card-${lead.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={colors.accent.purple} stopOpacity="0.8" />
                <stop offset="50%" stopColor={colors.accent.purple} stopOpacity="1" />
                <stop offset="100%" stopColor={lineColor} stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <motion.path
              d={pathD}
              fill="none"
              stroke={`url(#grad-card-${lead.id})`}
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              style={{ filter: `drop-shadow(0 0 8px ${lineColor}60)` }}
            />
            <motion.circle
              r="8"
              fill={lineColor}
              style={{ filter: `drop-shadow(0 0 12px ${lineColor})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <animateMotion
                dur="2s"
                repeatCount="indefinite"
                path={pathD}
              />
            </motion.circle>
          </g>
        )
      })}
    </svg>
  )
}

export function PrioritiesAnimation() {
  const [phase, setPhase] = React.useState<"collecting" | "analyzing" | "prioritizing" | "resetting">("collecting")
  const [visibleCards, setVisibleCards] = React.useState(0)
  const [activeSource, setActiveSource] = React.useState(0)
  const [aiProgress, setAiProgress] = React.useState(0)

  // Refs for components - Create individual refs for AnimatedBeam
  const sourceRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const sourceRefObjects = React.useRef<React.RefObject<HTMLDivElement>[]>([])
  const aiCenterRef = React.useRef<HTMLDivElement>(null)
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([])
  const cardRefObjects = React.useRef<React.RefObject<HTMLDivElement>[]>([])
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Initialize ref objects
  React.useEffect(() => {
    sourceRefObjects.current = dataSources.map((_, i) => {
      if (!sourceRefObjects.current[i]) {
        sourceRefObjects.current[i] = React.createRef<HTMLDivElement>()
      }
      return sourceRefObjects.current[i]
    })
    cardRefObjects.current = priorityLeads.map((_, i) => {
      if (!cardRefObjects.current[i]) {
        cardRefObjects.current[i] = React.createRef<HTMLDivElement>()
      }
      return cardRefObjects.current[i]
    })
  }, [])

  // Store calculated positions
  const [positions, setPositions] = React.useState({
    sources: Array(4).fill(null).map(() => ({ x: 0, y: 0 })),
    ai: { x: 0, y: 0 },
    cards: Array(4).fill(null).map(() => ({ x: 0, y: 0 }))
  })

  // Force re-render when elements change position
  const [, forceUpdate] = React.useReducer(x => x + 1, 0)
  
  React.useEffect(() => {
    const updateInterval = setInterval(() => {
      forceUpdate()
    }, 100)
    return () => clearInterval(updateInterval)
  }, [phase, visibleCards, activeSource])

  // Animation loop
  React.useEffect(() => {
    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout
    let timeout3: NodeJS.Timeout
    let timeout4: NodeJS.Timeout
    let interval: NodeJS.Timeout
    let progressInterval: NodeJS.Timeout

    const startLoop = () => {
      // Phase 1: Collecting
      setPhase("collecting")
      setVisibleCards(0)
      setActiveSource(0)
      setAiProgress(0)

      let sourceIndex = 0
      interval = setInterval(() => {
        setActiveSource(sourceIndex)
        sourceIndex = (sourceIndex + 1) % dataSources.length
      }, 600)

      // Phase 2: Analyzing
      timeout1 = setTimeout(() => {
        clearInterval(interval)
        setPhase("analyzing")
        setActiveSource(-1)
        
        let progress = 0
        progressInterval = setInterval(() => {
          progress += 2
          setAiProgress(progress)
          if (progress >= 100) {
            clearInterval(progressInterval)
          }
        }, 30)
      }, 3000)

      // Phase 3: Prioritizing
      timeout2 = setTimeout(() => {
        setPhase("prioritizing")
        priorityLeads.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards(prev => Math.max(prev, index + 1))
          }, index * 300)
        })
      }, 7000)

      // Phase 4: Reset
      timeout3 = setTimeout(() => {
        setPhase("resetting")
        setVisibleCards(0)
        setAiProgress(0)
        if (progressInterval) clearInterval(progressInterval)
      }, 14000)

      // Restart
      timeout4 = setTimeout(() => {
        startLoop()
      }, 14500)
    }

    startLoop()

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
      clearTimeout(timeout4)
      clearInterval(interval)
      if (progressInterval) clearInterval(progressInterval)
    }
  }, [])

  const highPriorityCount = priorityLeads.filter(l => l.status === "dringend").length

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full rounded-xl overflow-visible flow-container" 
      style={{ 
        position: 'absolute',
        inset: 0,
        height: '100%', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundColor: colors.background
      }}
    >
      {/* Dot pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${colors.text.muted} 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="relative z-10 flex flex-col p-6" style={{ flex: '1 1 auto', minHeight: 0 }}>
        {/* Header */}
        <motion.div 
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothSpring}
        >
          <h2 className="text-xl font-jakarta font-semibold tracking-tight text-gray-900 mb-1.5">
            Ihre Top 20 Prioritäts-Leads
          </h2>
          <p className="text-sm text-gray-600">
            KI-gestützte Empfehlungen basierend auf Telefonie, Notizen, Umsatzziele und Daten
          </p>
        </motion.div>

        {/* Main visualization */}
        <div className="flex-1 relative" style={{ minHeight: '600px', overflow: 'visible' }}>
          {/* SVG Container for Flow Lines - ABOVE everything */}
          <FlowLinesSVG
            phase={phase}
            activeSource={activeSource}
            visibleCards={visibleCards}
            sourceRefs={sourceRefs}
            aiCenterRef={aiCenterRef}
            cardRefs={cardRefs}
            containerRef={containerRef}
            dataSources={dataSources}
            priorityLeads={priorityLeads}
            colors={colors}
          />

          {/* Phase 1 & 2: Data Sources */}
          {(phase === "collecting" || phase === "analyzing") && (
            <div className="absolute top-0 left-0 right-0 flex justify-center" style={{ zIndex: 40 }}>
              <div className="flex items-center gap-12">
                {dataSources.map((source, index) => {
                  const Icon = source.icon
                  const isActive = phase === "analyzing" || activeSource === index
                  
                  return (
                    <motion.div
                      key={source.id}
                      ref={(ref) => { 
                        sourceRefs.current[index] = ref
                        if (sourceRefObjects.current[index]) {
                          sourceRefObjects.current[index].current = ref
                        }
                      }}
                      className="flex flex-col items-center gap-2"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4,
                        y: 0
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 25
                      }}
                    >
                      <motion.div 
                        className="w-20 h-20 rounded-2xl border-2 flex items-center justify-center shadow-sm relative"
                        style={{
                          borderColor: isActive ? source.color : colors.border,
                          backgroundColor: isActive ? source.bgColor : colors.surface
                        }}
                        animate={isActive ? { 
                          scale: [1, 1.05, 1],
                          boxShadow: [
                            "0 1px 3px rgba(0,0,0,0.1)",
                            `0 4px 12px ${source.color}30`,
                            "0 1px 3px rgba(0,0,0,0.1)"
                          ]
                        } : {}}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      >
                        <Icon className="w-10 h-10" style={{ color: isActive ? source.color : colors.text.muted }} strokeWidth={1.5} />
                      </motion.div>
                      <span className="text-xs font-medium text-gray-600 whitespace-nowrap">{source.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Phase 2: AI Center */}
          {phase === "analyzing" && (
            <div
              ref={aiCenterRef}
              className="absolute flex items-center justify-center"
              style={{ 
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 40 // Logo is BELOW the beams (z-index 50)
              }}
            >
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="w-36 h-36 rounded-3xl border-2 flex items-center justify-center shadow-lg relative overflow-hidden"
                  style={{
                    borderColor: colors.accent.purple,
                    backgroundColor: "#F5F3FF"
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 12px rgba(139, 92, 246, 0.2)",
                      "0 8px 24px rgba(139, 92, 246, 0.3)",
                      "0 4px 12px rgba(139, 92, 246, 0.2)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-24 h-24 relative">
                    <Image
                      src="/images/app logo.png"
                      alt="IntroKI Logo"
                      fill
                      className="object-contain"
                      style={{ display: 'block' }}
                    />
                  </div>
                  
                  <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                    <circle
                      cx="72"
                      cy="72"
                      r="68"
                      fill="none"
                      stroke={colors.border}
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="72"
                      cy="72"
                      r="68"
                      fill="none"
                      stroke={colors.accent.purple}
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 68}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 68 * (1 - aiProgress / 100) }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </motion.div>
                
                <div className="flex items-center gap-2 mt-6">
                  <Sparkles className="w-5 h-5 text-purple-500" strokeWidth={1.5} />
                  <ShiningText text={`KI analysiert Daten... ${aiProgress}%`} />
                </div>
              </motion.div>
            </div>
          )}

          {/* Phase 3: Priority Cards */}
          {phase === "prioritizing" && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex flex-col items-center"
              style={{ zIndex: 40 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-6 w-full max-w-4xl px-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-gray-700">KI-Empfehlungen</span>
                </div>
                <div className="px-3 py-1 rounded-lg bg-orange-50 border border-orange-200">
                  <span className="text-orange-700 font-medium text-xs">
                    {highPriorityCount} Dringend
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-4">
                {priorityLeads.map((lead, index) => (
                  <div
                    key={lead.id}
                    ref={(ref) => { 
                      cardRefs.current[index] = ref
                      if (cardRefObjects.current[index]) {
                        cardRefObjects.current[index].current = ref
                      }
                    }}
                  >
                    <PriorityCard
                      lead={lead}
                      index={index}
                      isVisible={index < visibleCards}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
