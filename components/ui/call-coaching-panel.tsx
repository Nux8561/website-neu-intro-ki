"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, TrendingUp, TrendingDown, Lightbulb } from "lucide-react"

interface CoachingTip {
  id: string
  type: "suggestion" | "warning" | "insight"
  text: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface CallCoachingPanelProps {
  tips?: CoachingTip[]
  showTranscript?: boolean
}

const defaultTips: CoachingTip[] = [
  {
    id: "1",
    type: "suggestion",
    text: "Erwähne die kürzliche Funding-Runde",
    icon: Lightbulb,
    color: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  },
  {
    id: "2",
    type: "insight",
    text: "Positive Sentiment erkannt",
    icon: TrendingUp,
    color: "bg-green-500/20 border-green-500/30 text-green-400",
  },
  {
    id: "3",
    type: "warning",
    text: "Objection erkannt: Preis",
    icon: TrendingDown,
    color: "bg-orange-500/20 border-orange-500/30 text-orange-400",
  },
]

export function CallCoachingPanel({
  tips = defaultTips,
  showTranscript = true,
}: CallCoachingPanelProps) {
  const [mounted, setMounted] = React.useState(false)
  const [currentTip, setCurrentTip] = React.useState(0)

  React.useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [tips.length])

  return (
    <div className="h-full w-full p-4 flex flex-col gap-3">
      {/* Live Transcript Preview */}
      {showTranscript && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="flex-1 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm p-3 overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="h-3 w-3 text-white/70" />
            <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider">
              Live Transkript
            </span>
          </div>
          <div className="space-y-1.5 text-xs text-white/70 font-inter">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-white/50">Lead:</span> "Wir suchen nach einer
              Lösung..."
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-white/50">Du:</span> "Verstehe. Wie groß ist
              euer Team?"
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-white/50">Lead:</span> "Etwa 50 Mitarbeiter..."
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Coaching Tips */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-mono text-white/70 uppercase tracking-wider">
            Coaching Tipps
          </span>
        </div>
        <AnimatePresence mode="wait">
          {tips.map(
            (tip, index) =>
              index === currentTip && (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`rounded-lg border p-3 backdrop-blur-sm ${tip.color}`}
                >
                  <div className="flex items-start gap-2">
                    <tip.icon className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-inter">{tip.text}</span>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Sentiment Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.8 }}
        className="pt-2 border-t border-white/10"
      >
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/70 font-inter">Sentiment</span>
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-8 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-green-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </div>
            <span className="text-[10px] text-green-400 font-mono">75%</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

