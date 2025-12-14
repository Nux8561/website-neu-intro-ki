"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Database, Mail, CheckCircle2 } from "lucide-react"
import { attioTransition, snappySpring } from "@/lib/animations"

interface WorkflowNode {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  activeColor: string
  activeBorderColor: string
}

const workflowNodes: WorkflowNode[] = [
  {
    id: "new-lead",
    label: "New Lead",
    icon: User,
    activeColor: "text-blue-600",
    activeBorderColor: "border-blue-500",
  },
  {
    id: "enrich-data",
    label: "Enrich Data",
    icon: Database,
    activeColor: "text-purple-600",
    activeBorderColor: "border-purple-500",
  },
  {
    id: "send-email",
    label: "Send Email",
    icon: Mail,
    activeColor: "text-green-600",
    activeBorderColor: "border-green-500",
  },
]

export function WorkflowSimulation() {
  const [activeNode, setActiveNode] = React.useState<string | null>(null)
  const [dataPointPosition, setDataPointPosition] = React.useState<number>(0)
  const [showSuccess, setShowSuccess] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Reset
      setActiveNode(null)
      setDataPointPosition(0)
      setShowSuccess(false)

      // Phase 1: Daten-Punkt startet oben (0.3s)
      setTimeout(() => {
        setDataPointPosition(1)
        setActiveNode("new-lead")
      }, 300)

      // Phase 2: Punkt bewegt sich zu Node 2 (1.2s)
      setTimeout(() => {
        setDataPointPosition(2)
        setActiveNode("enrich-data")
      }, 1200)

      // Phase 3: Punkt bewegt sich zu Node 3 (2.1s)
      setTimeout(() => {
        setDataPointPosition(3)
        setActiveNode("send-email")
        setShowSuccess(true)
      }, 2100)

      // Phase 4: Reset (3.5s)
      setTimeout(() => {
        setActiveNode(null)
        setDataPointPosition(0)
        setShowSuccess(false)
      }, 3500)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex flex-col items-center gap-0 py-8">
      {/* Workflow Nodes */}
      {workflowNodes.map((node, index) => {
        const Icon = node.icon
        const isActive = activeNode === node.id
        const isPast = workflowNodes.findIndex(n => n.id === activeNode) > index

        return (
          <React.Fragment key={node.id}>
            {/* Node */}
            <motion.div
              className={`
                relative w-48 bg-white rounded-md border p-3 shadow-sm z-10
                ${isActive ? node.activeBorderColor : "border-attio-subtle"}
                transition-colors duration-attio ease-attio-ease-out
              `}
              animate={{
                scale: isActive ? 1.05 : 1,
              }}
              transition={snappySpring}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    color: isActive || isPast ? undefined : undefined,
                  }}
                  transition={snappySpring}
                >
                  <Icon 
                    className={`h-5 w-5 ${
                      isActive 
                        ? node.activeColor 
                        : isPast 
                        ? node.activeColor 
                        : "text-gray-400"
                    }`} 
                    strokeWidth={1.5} 
                  />
                </motion.div>
                <span 
                  className={`text-sm font-inter font-medium ${
                    isActive 
                      ? node.activeColor 
                      : isPast 
                      ? node.activeColor 
                      : "text-gray-400"
                  }`}
                >
                  {node.label}
                </span>
              </div>

              {/* Daten-Punkt über dem Node */}
              <AnimatePresence>
                {dataPointPosition === index + 1 && (
                  <motion.div
                    key={`data-point-${index}`}
                    initial={{ opacity: 0, scale: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: -12,
                    }}
                    exit={{ opacity: 0, scale: 0, y: -20 }}
                    transition={attioTransition}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg z-20"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Connection Line (außer nach dem letzten Node) */}
            {index < workflowNodes.length - 1 && (
              <div className="w-px h-8 bg-gray-200 relative z-0">
                {/* Fliegender Daten-Punkt auf der Linie */}
                <AnimatePresence>
                  {dataPointPosition > index + 1 && dataPointPosition < index + 2 && (
                    <motion.div
                      key={`data-point-line-${index}`}
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: "100%", opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={attioTransition}
                      className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg z-20"
                    />
                  )}
                </AnimatePresence>
              </div>
            )}
          </React.Fragment>
        )
      })}

      {/* Success Badge */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={snappySpring}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full"
          >
            <CheckCircle2 className="h-4 w-4 text-green-600" strokeWidth={1.5} />
            <span className="text-xs font-inter font-medium text-green-700">Success</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

