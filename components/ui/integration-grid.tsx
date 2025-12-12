"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Loader2 } from "lucide-react"

interface Integration {
  id: string
  name: string
  logo?: string
  logoPath?: string // Path to logo image in public/logos/
  status: "connected" | "disconnected" | "connecting"
  category: string
}

interface IntegrationGridProps {
  integrations?: Integration[]
}

const defaultIntegrations: Integration[] = [
  { id: "hubspot", name: "HubSpot", logoPath: "/logos/hubspot.svg", status: "connected", category: "CRM" },
  { id: "gmail", name: "Gmail", logoPath: "/logos/gmail.svg", status: "connected", category: "Email" },
  { id: "slack", name: "Slack", logoPath: "/logos/slack.svg", status: "connected", category: "Workspace" },
  { id: "salesforce", name: "Salesforce", logoPath: "/logos/salesforce.svg", status: "disconnected", category: "CRM" },
  { id: "outlook", name: "Outlook", logoPath: "/logos/microsoft.svg", status: "connecting", category: "Email" },
  { id: "notion", name: "Notion", logoPath: "/logos/notion.svg", status: "disconnected", category: "Workspace" },
]

const getStatusIcon = (status: Integration["status"]) => {
  switch (status) {
    case "connected":
      return <CheckCircle2 className="h-3 w-3 text-green-400" />
    case "connecting":
      return <Loader2 className="h-3 w-3 text-blue-400 animate-spin" />
    default:
      return <Circle className="h-3 w-3 text-white/30" />
  }
}

const getStatusColor = (status: Integration["status"]) => {
  switch (status) {
    case "connected":
      return "bg-green-500/20 border-green-500/30"
    case "connecting":
      return "bg-blue-500/20 border-blue-500/30"
    default:
      return "bg-white/5 border-white/10"
  }
}

export function IntegrationGrid({
  integrations = defaultIntegrations,
}: IntegrationGridProps) {
  const [mounted, setMounted] = React.useState(false)
  const [hoveredIntegration, setHoveredIntegration] = React.useState<string | null>(
    null
  )

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-full w-full p-4">
      <div className="grid grid-cols-3 gap-2">
        {integrations.map((integration, index) => {
          const isHovered = hoveredIntegration === integration.id
          const isConnected = integration.status === "connected"

          return (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              onMouseEnter={() => setHoveredIntegration(integration.id)}
              onMouseLeave={() => setHoveredIntegration(null)}
              className={`relative rounded-lg border p-2 backdrop-blur-sm ${getStatusColor(
                integration.status
              )} cursor-pointer transition-all ${
                isHovered ? "scale-[1.05] border-white/30" : ""
              }`}
            >
              {/* Logo */}
              <div className="flex items-center justify-center mb-2 h-8">
                {integration.logoPath ? (
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image
                      src={integration.logoPath}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="object-contain max-w-full max-h-full opacity-80"
                      onError={(e) => {
                        // Fallback to initial if image not found
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          const fallback = document.createElement('div')
                          fallback.className = 'w-8 h-8 rounded bg-white/10 flex items-center justify-center'
                          const span = document.createElement('span')
                          span.className = 'text-[10px] font-mono text-white/70 font-bold'
                          span.textContent = integration.name.charAt(0)
                          fallback.appendChild(span)
                          parent.appendChild(fallback)
                        }
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-white/70 font-bold">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Name */}
              <div className="text-center mb-1">
                <span className="text-[10px] font-inter text-white/90 font-medium">
                  {integration.name}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center gap-1">
                {getStatusIcon(integration.status)}
                <span className="text-[8px] text-white/50 font-inter">
                  {integration.status === "connected"
                    ? "Verbunden"
                    : integration.status === "connecting"
                      ? "Verbinde..."
                      : "Nicht verbunden"}
                </span>
              </div>

              {/* Hover Action */}
              {isHovered && !isConnected && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <Badge
                    variant="outline"
                    className="text-[8px] px-2 py-0.5 bg-white/20 border-white/30 text-white"
                  >
                    Verbinden
                  </Badge>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-3 pt-3 border-t border-white/10 text-center"
      >
        <span className="text-[10px] text-white/70 font-inter">
          {integrations.filter((i) => i.status === "connected").length} von{" "}
          {integrations.length} verbunden
        </span>
      </motion.div>
    </div>
  )
}

