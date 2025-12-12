"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Search, Users, Brain, CheckCircle2, Loader2 } from "lucide-react"

interface Agent {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  status: "idle" | "running" | "completed"
  provider?: string
  color: string
}

interface ResearchAgentCardProps {
  agents?: Agent[]
}

const defaultAgents: Agent[] = [
  {
    id: "company",
    name: "Company Agent",
    icon: Search,
    status: "completed",
    provider: "Brave",
    color: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  },
  {
    id: "people",
    name: "People Agent",
    icon: Users,
    status: "completed",
    provider: "EXA",
    color: "bg-purple-500/20 border-purple-500/30 text-purple-400",
  },
  {
    id: "ai",
    name: "AI Agent",
    icon: Brain,
    status: "running",
    provider: "OpenAI",
    color: "bg-green-500/20 border-green-500/30 text-green-400",
  },
  {
    id: "validation",
    name: "Validation Agent",
    icon: CheckCircle2,
    status: "idle",
    provider: "Numverify",
    color: "bg-orange-500/20 border-orange-500/30 text-orange-400",
  },
]

export function ResearchAgentCard({ agents = defaultAgents }: ResearchAgentCardProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const getStatusIcon = (status: Agent["status"]) => {
    switch (status) {
      case "running":
        return <Loader2 className="h-3 w-3 animate-spin" />
      case "completed":
        return <CheckCircle2 className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <div className="h-full w-full p-4 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {agents.map((agent, index) => {
          const Icon = agent.icon
          const isRunning = agent.status === "running"
          const isCompleted = agent.status === "completed"

          return (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className={`relative rounded-xl border p-3 backdrop-blur-sm ${agent.color} ${
                isRunning ? "animate-pulse" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="text-xs font-inter font-medium">{agent.name}</span>
                </div>
                {getStatusIcon(agent.status)}
              </div>
              {agent.provider && (
                <div className="mt-2">
                  <Badge
                    variant="outline"
                    className="text-[10px] px-1.5 py-0.5 bg-white/10 border-white/20 text-white/70"
                  >
                    {agent.provider}
                  </Badge>
                </div>
              )}
              {isRunning && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-white/10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.div>
          )
        })}
      </div>
      <div className="pt-2 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-white/70 font-inter">
          <span>Parallel Execution</span>
          <span className="font-mono">2.3s</span>
        </div>
      </div>
    </div>
  )
}

