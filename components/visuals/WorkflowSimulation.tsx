"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Filter, Hash, Plus, Settings, ZoomIn } from "lucide-react"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { snappySpring, attioTransition } from "@/lib/animations"

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
  const containerRef = React.useRef<HTMLDivElement>(null)
  const node1Ref = React.useRef<HTMLDivElement>(null)
  const node2Ref = React.useRef<HTMLDivElement>(null)
  const node3Ref = React.useRef<HTMLDivElement>(null)

  const [activeNode, setActiveNode] = React.useState<string | null>(null)
  const [showNotification, setShowNotification] = React.useState(false)

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Reset
      setActiveNode(null)
      setShowNotification(false)

      // Phase 1: Node 1 aktiv (0.2s)
      setTimeout(() => {
        setActiveNode("new-lead")
      }, 200)

      // Phase 2: Node 2 aktiv (1.0s)
      setTimeout(() => {
        setActiveNode("qualify")
      }, 1000)

      // Phase 3: Node 3 aktiv + Notification (1.8s)
      setTimeout(() => {
        setActiveNode("slack-alert")
        setShowNotification(true)
      }, 1800)

      // Phase 4: Reset (3.0s)
      setTimeout(() => {
        setActiveNode(null)
        setShowNotification(false)
      }, 3000)
    }, 4000) // Loop alle 4 Sekunden

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-white">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Toolbar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-attio-subtle rounded-lg px-3 py-2 shadow-sm">
          <button className="p-1.5 hover:bg-attio-gray rounded transition-colors">
            <Plus className="h-4 w-4 text-text-muted" />
          </button>
          <div className="w-px h-4 bg-attio-subtle" />
          <button className="p-1.5 hover:bg-attio-gray rounded transition-colors">
            <Settings className="h-4 w-4 text-text-muted" />
          </button>
          <button className="p-1.5 hover:bg-attio-gray rounded transition-colors">
            <ZoomIn className="h-4 w-4 text-text-muted" />
          </button>
        </div>
      </div>

      {/* Workflow Canvas */}
      <div 
        ref={containerRef}
        className="relative flex flex-col items-center justify-center gap-0 py-8 w-full h-full z-10"
      >
        {/* Workflow Nodes */}
        {workflowNodes.map((node, index) => {
          const Icon = node.icon
          const isActive = activeNode === node.id
          const nodeRef = index === 0 ? node1Ref : index === 1 ? node2Ref : node3Ref

          return (
            <React.Fragment key={node.id}>
              {/* Node */}
              <motion.div
                ref={nodeRef}
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
              </motion.div>

              {/* Connection Line (außer nach dem letzten Node) */}
              {index < workflowNodes.length - 1 && (
                <div className="w-px h-8 bg-gray-200 relative z-0" />
              )}
            </React.Fragment>
          )
        })}

        {/* Animated Beams */}
        {containerRef.current && node1Ref.current && node2Ref.current && (
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={node1Ref}
            toRef={node2Ref}
            curvature={-30}
            duration={3}
            delay={0.2}
            pathColor="#9CA3AF"
            pathWidth={1}
            pathOpacity={0.3}
            gradientStartColor="#3B82F6"
            gradientStopColor="#8B5CF6"
            startYOffset={20}
            endYOffset={-20}
          />
        )}
        {containerRef.current && node2Ref.current && node3Ref.current && (
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={node2Ref}
            toRef={node3Ref}
            curvature={-30}
            duration={3}
            delay={1.0}
            pathColor="#9CA3AF"
            pathWidth={1}
            pathOpacity={0.3}
            gradientStartColor="#8B5CF6"
            gradientStopColor="#10B981"
            startYOffset={20}
            endYOffset={-20}
          />
        )}

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
    </div>
  )
}
