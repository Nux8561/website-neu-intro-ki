"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, CheckCircle2, Target, Zap, Brain, TrendingUp } from "lucide-react"

interface PainPointProps {
  feature: "data" | "workflows" | "reporting" | "pipeline"
}

const painPoints = {
  data: {
    problem: "Teams haben keinen Fokus - wissen nicht, wen sie zuerst anrufen sollen",
    solution: "AI-intelligentes CRM zeigt ICP Fit Score und priorisiert automatisch",
    visual: {
      before: {
        title: "Ohne Struktur",
        items: [
          { label: "Lead 1", priority: "?", color: "gray" },
          { label: "Lead 2", priority: "?", color: "gray" },
          { label: "Lead 3", priority: "?", color: "gray" },
        ],
      },
      after: {
        title: "Mit AI-Priorisierung",
        items: [
          { label: "Vercel", priority: "95%", color: "green", icpFit: "Excellent" },
          { label: "GitHub", priority: "88%", color: "blue", icpFit: "Good" },
          { label: "DigitalOcean", priority: "72%", color: "orange", icpFit: "Medium" },
        ],
      },
    },
  },
  workflows: {
    problem: "Manuelle Follow-ups werden vergessen - keine Automatisierung",
    solution: "Automatische Workflows schlagen Follow-ups vor und erinnern rechtzeitig",
    visual: {
      before: {
        title: "Manuell",
        items: [
          { label: "Follow-up 1", status: "Vergessen", color: "red" },
          { label: "Follow-up 2", status: "Überfällig", color: "orange" },
          { label: "Follow-up 3", status: "Ungeplant", color: "gray" },
        ],
      },
      after: {
        title: "Automatisiert",
        items: [
          { label: "Follow-up 1", status: "Geplant", color: "green", auto: true },
          { label: "Follow-up 2", status: "Erinnerung gesendet", color: "blue", auto: true },
          { label: "Follow-up 3", status: "Automatisch terminiert", color: "green", auto: true },
        ],
      },
    },
  },
  reporting: {
    problem: "Keine Übersicht über Performance - keine datenbasierten Entscheidungen",
    solution: "Echtzeit-Reporting zeigt KPIs und identifiziert Verbesserungspotenziale",
    visual: {
      before: {
        title: "Keine Daten",
        items: [
          { label: "Conversion Rate", value: "?", trend: "none" },
          { label: "Pipeline Value", value: "?", trend: "none" },
          { label: "Win Rate", value: "?", trend: "none" },
        ],
      },
      after: {
        title: "Datengetrieben",
        items: [
          { label: "Conversion Rate", value: "18%", trend: "up", change: "+2%" },
          { label: "Pipeline Value", value: "$1.2M", trend: "up", change: "+15%" },
          { label: "Win Rate", value: "75%", trend: "up", change: "+5%" },
        ],
      },
    },
  },
  pipeline: {
    problem: "Pipeline unübersichtlich - keine klare Struktur für nächste Schritte",
    solution: "Intelligente Pipeline zeigt Prioritäten und nächste Aktionen",
    visual: {
      before: {
        title: "Unstrukturiert",
        items: [
          { label: "Deal 1", stage: "?", nextAction: "?" },
          { label: "Deal 2", stage: "?", nextAction: "?" },
          { label: "Deal 3", stage: "?", nextAction: "?" },
        ],
      },
      after: {
        title: "Strukturiert & Priorisiert",
        items: [
          { label: "Deal 1", stage: "Closing", nextAction: "Call heute", priority: "Hoch" },
          { label: "Deal 2", stage: "Qualification", nextAction: "Follow-up morgen", priority: "Mittel" },
          { label: "Deal 3", stage: "Discovery", nextAction: "Research starten", priority: "Niedrig" },
        ],
      },
    },
  },
}

export function PainPointVisualization({ feature }: PainPointProps) {
  const data = painPoints[feature]
  const [showSolution, setShowSolution] = React.useState(false)

  React.useEffect(() => {
    // Auto-show solution after 2 seconds
    const timer = setTimeout(() => setShowSolution(true), 2000)
    return () => clearTimeout(timer)
  }, [feature])

  return (
    <div className="w-full space-y-8">
      {/* Problem Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-red-50 border border-red-200 rounded-xl p-6"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-jakarta font-medium text-red-900 mb-2">
              Das Problem
            </h3>
            <p className="text-red-800 font-inter">{data.problem}</p>
          </div>
        </div>
      </motion.div>

      {/* Visual Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-gray-400" />
            <h4 className="text-sm font-jakarta font-medium text-gray-700">
              {data.visual.before.title}
            </h4>
          </div>
          <div className="space-y-3">
            {data.visual.before.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-inter text-gray-700">{item.label}</span>
                  <span className="text-xs text-gray-500">
                    {"priority" in item ? item.priority : "status" in item ? item.status : "stage" in item ? item.stage : "value" in item ? item.value : "?"}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* After */}
        <AnimatePresence>
          {showSolution && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-green-50 border border-green-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <h4 className="text-sm font-jakarta font-medium text-green-700">
                  {data.visual.after.title}
                </h4>
              </div>
              <div className="space-y-3">
                {data.visual.after.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                    className="bg-white border border-green-200 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-inter font-medium text-[#0B0C0E]">
                        {item.label}
                      </span>
                      <div className="flex items-center gap-2">
                        {"priority" in item && item.priority && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.priority === "Hoch" ? "bg-red-100 text-red-700" :
                            item.priority === "Mittel" ? "bg-yellow-100 text-yellow-700" :
                            "bg-gray-100 text-gray-700"
                          }`}>
                            {item.priority}
                          </span>
                        )}
                        {"icpFit" in item && item.icpFit && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            item.icpFit === "Excellent" ? "bg-purple-100 text-purple-700" :
                            item.icpFit === "Good" ? "bg-green-100 text-green-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>
                            {item.icpFit}
                          </span>
                        )}
                        {"priority" in item && item.priority && !("icpFit" in item && item.icpFit) && (
                          <span className="text-xs font-semibold text-green-600">
                            {item.priority}
                          </span>
                        )}
                      </div>
                    </div>
                    {"nextAction" in item && item.nextAction && (
                      <p className="text-xs text-[#0B0C0E]/70 font-inter">
                        {item.nextAction}
                      </p>
                    )}
                    {"change" in item && item.change && (
                      <p className="text-xs text-green-600 font-inter mt-1">
                        {item.change}
                      </p>
                    )}
                    {"auto" in item && item.auto && (
                      <div className="flex items-center gap-1 mt-2">
                        <Zap className="h-3 w-3 text-blue-500" />
                        <span className="text-xs text-blue-600 font-inter">Automatisch</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Solution Statement */}
      <AnimatePresence>
        {showSolution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <Brain className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-jakarta font-medium text-blue-900 mb-2">
                  Die Lösung
                </h3>
                <p className="text-blue-800 font-inter">{data.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

