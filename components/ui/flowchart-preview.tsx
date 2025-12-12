"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Circle, Diamond, Square } from "lucide-react"

interface Node {
  id: string
  type: "start" | "decision" | "action" | "end"
  label: string
  x: number
  y: number
  highlighted?: boolean
}

interface Connection {
  from: string
  to: string
  label?: string
}

interface FlowchartPreviewProps {
  nodes?: Node[]
  connections?: Connection[]
}

const defaultNodes: Node[] = [
  { id: "start", type: "start", label: "Start", x: 50, y: 50 },
  { id: "decision1", type: "decision", label: "Qualifiziert?", x: 50, y: 150, highlighted: true },
  { id: "action1", type: "action", label: "Demo buchen", x: 150, y: 250 },
  { id: "action2", type: "action", label: "Follow-up", x: 50, y: 250 },
  { id: "end", type: "end", label: "Ende", x: 100, y: 350 },
]

const defaultConnections: Connection[] = [
  { from: "start", to: "decision1" },
  { from: "decision1", to: "action1", label: "Ja" },
  { from: "decision1", to: "action2", label: "Nein" },
  { from: "action1", to: "end" },
  { from: "action2", to: "end" },
]

const getNodeIcon = (type: Node["type"]) => {
  switch (type) {
    case "start":
    case "end":
      return Circle
    case "decision":
      return Diamond
    case "action":
      return Square
  }
}

const getNodeColor = (type: Node["type"], highlighted?: boolean) => {
  if (highlighted) {
    return "bg-blue-500/30 border-blue-500/50 text-blue-400"
  }
  switch (type) {
    case "start":
    case "end":
      return "bg-white/10 border-white/20 text-white/70"
    case "decision":
      return "bg-purple-500/20 border-purple-500/30 text-purple-400"
    case "action":
      return "bg-green-500/20 border-green-500/30 text-green-400"
  }
}

export function FlowchartPreview({
  nodes = defaultNodes,
  connections = defaultConnections,
}: FlowchartPreviewProps) {
  const [mounted, setMounted] = React.useState(false)
  const [highlightedPath, setHighlightedPath] = React.useState<string[]>([])

  React.useEffect(() => {
    setMounted(true)
    // Simulate path highlighting
    setTimeout(() => {
      setHighlightedPath(["start", "decision1", "action1", "end"])
    }, 1000)
  }, [])

  return (
    <div className="h-full w-full p-4 relative">
      <svg
        viewBox="0 0 200 400"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {/* Connections */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find((n) => n.id === conn.from)
          const toNode = nodes.find((n) => n.id === conn.to)
          if (!fromNode || !toNode) return null

          const isHighlighted =
            highlightedPath.includes(conn.from) && highlightedPath.includes(conn.to)

          return (
            <motion.line
              key={`${conn.from}-${conn.to}`}
              x1={fromNode.x}
              y1={fromNode.y + 20}
              x2={toNode.x}
              y2={toNode.y - 20}
              stroke={isHighlighted ? "#3b82f6" : "rgba(255, 255, 255, 0.2)"}
              strokeWidth={isHighlighted ? 2 : 1}
              initial={{ pathLength: 0 }}
              animate={mounted ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeInOut",
              }}
              markerEnd="url(#arrowhead)"
            />
          )
        })}

        {/* Arrow marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="rgba(255, 255, 255, 0.2)" />
          </marker>
        </defs>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const Icon = getNodeIcon(node.type)
          const isHighlighted = highlightedPath.includes(node.id)

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                mounted
                  ? {
                      opacity: 1,
                      scale: isHighlighted ? 1.1 : 1,
                    }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <foreignObject
                x={node.x - 30}
                y={node.y - 20}
                width="60"
                height="40"
                className="cursor-pointer"
              >
                <div
                  className={`rounded-lg border p-2 backdrop-blur-sm flex flex-col items-center justify-center ${getNodeColor(
                    node.type,
                    isHighlighted
                  )} transition-all`}
                >
                  <Icon className="h-3 w-3 mb-1" />
                  <span className="text-[8px] font-inter text-center leading-tight">
                    {node.label}
                  </span>
                </div>
              </foreignObject>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}

