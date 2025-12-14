"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Filter, Hash } from "lucide-react"
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
    id: "qualify",
    label: "Qualify",
    icon: Filter,
    activeColor: "text-purple-600",
    activeBorderColor: "border-purple-500",
  },
  {
    id: "slack-alert",
    label: "Slack Alert",
    icon: Hash,
    activeColor: "text-green-600",
    activeBorderColor: "border-green-500",
  },
]

export function WorkflowSimulation() {
  const [dataBallPosition, setDataBallPosition] = React.useState<"node1" | "traveling1-2" | "node2" | "traveling2-3" | "node3" | "idle">("idle")
  const [activeNode, setActiveNode] = React.useState<string | null>(null)
  const [showNotification, setShowNotification] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Reset
      setDataBallPosition("idle")
      setActiveNode(null)
      setShowNotification(false)

      // Phase 1: Daten-Ball erscheint bei Node 1 (0.2s)
      setTimeout(() => {
        setDataBallPosition("node1")
        setActiveNode("new-lead")
      }, 200)

      // Phase 2: Ball reist zu Node 2 (0.8s)
      setTimeout(() => {
        setDataBallPosition("traveling1-2")
        setActiveNode(null)
      }, 800)

      // Phase 3: Ball erreicht Node 2 (1.4s)
      setTimeout(() => {
        setDataBallPosition("node2")
        setActiveNode("qualify")
      }, 1400)

      // Phase 4: Ball reist zu Node 3 (2.0s)
      setTimeout(() => {
        setDataBallPosition("traveling2-3")
        setActiveNode(null)
      }, 2000)

      // Phase 5: Ball erreicht Node 3 (2.6s)
      setTimeout(() => {
        setDataBallPosition("node3")
        setActiveNode("slack-alert")
        setShowNotification(true)
      }, 2600)

      // Phase 6: Reset (3.5s)
      setTimeout(() => {
        setDataBallPosition("idle")
        setActiveNode(null)
        setShowNotification(false)
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
        const nodePosition = index === 0 ? "node1" : index === 1 ? "node2" : "node3"
        const isDataBallHere = dataBallPosition === nodePosition

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
                    scale: isActive ? 1.1 : 1,
                  }}
                  transition={snappySpring}
                >
                  <Icon 
                    className={`h-5 w-5 transition-colors ${
                      isActive 
                        ? node.activeColor 
                        : "text-gray-400"
                    }`}
                  />
                </motion.div>
                <span 
                  className={`text-sm font-inter font-medium transition-colors ${
                    isActive 
                      ? node.activeColor 
                      : "text-gray-400"
                  }`}
                >
                  {node.label}
                </span>
              </div>

              {/* Daten-Ball über dem Node */}
              <AnimatePresence>
                {isDataBallHere && (
                  <motion.div
                    key={`data-ball-${node.id}`}
                    initial={{ opacity: 0, scale: 0, y: -20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: -12,
                    }}
                    exit={{ opacity: 0, scale: 0, y: -20 }}
                    transition={snappySpring}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg z-20"
                  />
                )}
              </AnimatePresence>
            </motion.div>

            {/* Connection Line (außer nach dem letzten Node) */}
            {index < workflowNodes.length - 1 && (
              <div className="w-px h-8 bg-gray-200 relative z-0">
                {/* Reisender Daten-Ball auf der Linie */}
                <AnimatePresence>
                  {(dataBallPosition === "traveling1-2" && index === 0) || 
                   (dataBallPosition === "traveling2-3" && index === 1) ? (
                    <motion.div
                      key={`data-ball-traveling-${index}`}
                      initial={{ y: 0, opacity: 1 }}
                      animate={{ y: "100%", opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        ...attioTransition,
                        duration: 0.6, // Reisezeit
                      }}
                      className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-lg z-20"
                    />
                  ) : null}
                </AnimatePresence>
              </div>
            )}
          </React.Fragment>
        )
      })}

      {/* Slack Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.9 }}
            transition={snappySpring}
            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white border border-attio-subtle rounded-md p-2 shadow-lg z-30"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-inter font-medium text-gray-700">New notification</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
