"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { attioTransition } from "@/lib/animations"

interface Lead {
  id: string
  company: string
  value: number
  score: "excellent" | "good" | "medium"
}

interface Stage {
  id: string
  name: string
  leads: Lead[]
  color: string
}

interface PipelineKanbanCardProps {
  stages?: Stage[]
}

const defaultStages: Stage[] = [
  {
    id: "qualified",
    name: "Qualified",
    leads: [
      { id: "1", company: "Acme Corp", value: 50000, score: "excellent" },
      { id: "2", company: "TechStart", value: 100000, score: "good" },
    ],
    color: "bg-blue-500/20 border-blue-500/30",
  },
  {
    id: "proposal",
    name: "Proposal",
    leads: [
      { id: "3", company: "Innovate Labs", value: 250000, score: "excellent" },
    ],
    color: "bg-purple-500/20 border-purple-500/30",
  },
  {
    id: "negotiation",
    name: "Negotiation",
    leads: [
      { id: "4", company: "DataFlow", value: 150000, score: "good" },
    ],
    color: "bg-orange-500/20 border-orange-500/30",
  },
]

const getScoreColor = (score: Lead["score"]) => {
  switch (score) {
    case "excellent":
      return "bg-green-500"
    case "good":
      return "bg-blue-500"
    default:
      return "bg-yellow-500"
  }
}

export function PipelineKanbanCard({ stages = defaultStages }: PipelineKanbanCardProps) {
  const [hoveredLead, setHoveredLead] = React.useState<string | null>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-full w-full p-4">
      <div className="flex gap-2 h-full">
        {stages.map((stage, stageIndex) => (
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                delay: stageIndex * 0.1,
                ...attioTransition,
              }}
            className="flex-1 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                {stage.name}
              </h4>
              <span className="text-[10px] text-white/50 font-mono">
                {stage.leads.length}
              </span>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              {stage.leads.map((lead, leadIndex) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{
                    delay: stageIndex * 0.1 + leadIndex * 0.05,
                    ...attioTransition,
                  }}
                  onMouseEnter={() => setHoveredLead(lead.id)}
                  onMouseLeave={() => setHoveredLead(null)}
                  className={`rounded-lg border p-2 bg-white ${stage.color} cursor-pointer transition-all ${
                    hoveredLead === lead.id ? "scale-[1.02] border-attio-subtle shadow-attio-card" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-xs font-inter font-medium text-text-primary truncate">
                      {lead.company}
                    </span>
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${getScoreColor(lead.score)}`}
                    />
                  </div>
                  <div className="text-[10px] text-text-secondary font-mono">
                    €{lead.value.toLocaleString()}
                  </div>
                  {hoveredLead === lead.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 pt-2 border-t border-attio-subtle flex items-center gap-1"
                    >
                      <Sparkles className="h-3 w-3 text-text-secondary" />
                      <span className="text-[10px] text-text-secondary font-inter">
                        AI-Empfehlung: Follow-up heute
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

