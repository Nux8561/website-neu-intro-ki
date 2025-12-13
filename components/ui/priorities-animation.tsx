"use client"

import * as React from "react"
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion"
import { Phone, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react"

const smoothSpring = { type: "spring", stiffness: 400, damping: 17 }

// Mock data for top priority leads
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
  {
    id: "5",
    company: "Voith Group",
    priority: 10,
    score: 72,
    status: "dringend" as const,
    lastContact: "vor 16 Tagen",
    action: "Call"
  },
  {
    id: "6",
    company: "Digital Dialog",
    priority: 11,
    score: 70,
    status: "hoch" as const,
    lastContact: "vor 16 Tagen",
    action: "Call"
  },
]

interface PriorityCardProps {
  lead: typeof priorityLeads[0]
  index: number
  isActive: boolean
}

function PriorityCard({ lead, index, isActive }: PriorityCardProps) {
  const score = useMotionValue(0)
  const roundedScore = useTransform(score, Math.round)

  React.useEffect(() => {
    if (isActive) {
      const animation = animate(score, lead.score, { duration: 1, ease: "easeOut" })
      return animation.stop
    }
  }, [isActive, lead.score, score])

  const statusColors = {
    dringend: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      text: "text-red-400",
      badge: "bg-red-500/20 text-red-300 border border-red-500/30"
    },
    hoch: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      text: "text-orange-400",
      badge: "bg-orange-500/20 text-orange-300 border border-orange-500/30"
    }
  }

  const colors = statusColors[lead.status]

  return (
    <motion.div
      className={`relative rounded-xl border ${colors.border} ${colors.bg} p-4 overflow-hidden`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0.4, 
        y: 0, 
        scale: 1
      }}
      transition={{ 
        delay: index * 0.15,
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Priority badge */}
      <div className="flex items-center justify-between mb-3">
        <div className={`px-2 py-1 rounded-md text-xs font-medium ${colors.badge}`}>
          Priorität #{lead.priority}
        </div>
        <div className="flex items-center gap-2">
          {lead.action === "Call" ? (
            <Phone className="w-4 h-4 text-slate-400" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </div>

      {/* Company name */}
      <h3 className="text-lg font-semibold text-white mb-2">
        #{index + 1} {lead.company}
      </h3>

      {/* Last contact info */}
      <p className="text-sm text-slate-400 mb-4">
        Letzter Kontakt {lead.lastContact}
      </p>

      {/* Call to action button */}
      <motion.button
        className={`w-full py-3 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 ${
          isActive 
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
            : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
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

      {/* Score badge */}
      <div className="absolute top-4 right-4">
        <motion.div
          className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center backdrop-blur"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.span className="text-sm font-bold text-white">
            {roundedScore}
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function PrioritiesAnimation() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setActiveIndex((prev) => {
        const next = (prev + 1) % priorityLeads.length
        setTimeout(() => setIsAnimating(false), 500)
        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const highPriorityCount = priorityLeads.filter(l => l.status === "dringend").length

  return (
    <div className="relative w-full h-full bg-[#0B0C0E] p-8 overflow-hidden" style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Background pattern - more visible */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-jakarta font-medium tracking-tight text-white mb-2">
              Ihre Top 20 Prioritäts-Leads
            </h2>
            <p className="text-sm text-slate-400">
              KI-gestützte Empfehlungen basierend auf Telefonie, Notizen, Umsatzziele und Daten
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30">
              <span className="text-orange-400 font-medium text-sm">
                {highPriorityCount} Dringend
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white">
                {priorityLeads.length}
              </div>
              <div className="text-xs text-slate-400">Aktionen</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 flex-1" style={{ minHeight: 0 }}>
        {priorityLeads.map((lead, index) => (
          <PriorityCard
            key={lead.id}
            lead={lead}
            index={index}
            isActive={index <= activeIndex}
          />
        ))}
      </div>

      {/* Bottom stats bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur border-t border-white/10 p-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div>
              <span className="text-slate-400">Quellen analysiert:</span>
              <span className="ml-2 font-semibold text-white">4</span>
            </div>
            <div>
              <span className="text-slate-400">Faktoren berücksichtigt:</span>
              <span className="ml-2 font-semibold text-white">12</span>
            </div>
            <div>
              <span className="text-slate-400">KI-Genauigkeit:</span>
              <span className="ml-2 font-semibold text-green-400">98%</span>
            </div>
          </div>
          <motion.div
            className="flex items-center gap-2 text-blue-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-medium">Live-Analyse</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

