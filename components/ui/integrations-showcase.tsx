/**
 * Integrations Showcase
 * Zeigt echte Tool-Integrationen als simulierte UI-Karten
 * Statt billiger Logos zeigen wir, wie IntroKI IN diesen Tools aussieht
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Hash, Mail, Building2, CheckCircle2, ArrowRight } from "lucide-react"
import { attioHover, attioTransition } from "@/lib/animations"
import { AttioGridCell } from "./attio-wrapper"

// Slack Integration Card
function SlackCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-4 bg-white border border-gray-200 rounded-lg"
    >
      {/* Slack Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-purple-500 flex items-center justify-center">
          <Hash className="h-3 w-3 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700"># sales-team</span>
      </div>

      {/* Message */}
      <div className="flex items-start gap-2 mb-2">
        <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center flex-shrink-0">
          <span className="text-[10px] font-inter font-semibold text-blue-600">IK</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-xs font-inter font-semibold text-gray-900">IntroKI Bot</span>
            <span className="text-[10px] font-inter text-gray-500">2m ago</span>
          </div>
          <p className="text-xs font-inter text-gray-700 leading-relaxed mb-2">
            New lead qualified: <span className="font-medium">Acme Corp</span>
          </p>
          <motion.button
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={attioTransition}
            className="px-2.5 py-1 bg-green-500 text-white text-[10px] font-inter font-medium rounded hover:bg-green-600 transition-colors duration-attio"
          >
            Approve
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Gmail Integration Card
function GmailCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-4 bg-white border border-gray-200 rounded-lg"
    >
      {/* Gmail Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-red-500 flex items-center justify-center">
          <Mail className="h-3 w-3 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">Inbox</span>
      </div>

      {/* Email Row */}
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-[10px] font-inter font-semibold text-gray-600">JD</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-0.5">
              <span className="text-xs font-inter font-semibold text-gray-900 truncate">
                Re: Meeting Request
              </span>
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={attioTransition}
                className="px-1.5 py-0.5 bg-blue-50 border border-blue-200 rounded text-[10px] font-inter font-medium text-blue-700 whitespace-nowrap"
              >
                Synced
              </motion.div>
            </div>
            <p className="text-[11px] font-inter text-gray-500 truncate">
              Thanks for reaching out. Let&apos;s schedule...
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// HubSpot/Salesforce Integration Card
function CRMCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="p-4 bg-white border border-gray-200 rounded-lg"
    >
      {/* CRM Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center">
          <Building2 className="h-3 w-3 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">CRM</span>
      </div>

      {/* Deal Field */}
      <div className="space-y-2">
        <div>
          <label className="text-[10px] font-inter font-medium text-gray-500 uppercase tracking-wide mb-1 block">
            Deal Stage
          </label>
          <motion.div
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={attioTransition}
            className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md flex items-center justify-between"
          >
            <span className="text-xs font-inter font-medium text-gray-900">Negotiation</span>
            <ArrowRight className="h-3 w-3 text-gray-400" strokeWidth={1.5} />
          </motion.div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-inter text-gray-500">Value</span>
            <span className="text-xs font-inter font-semibold text-gray-900">$125,000</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Main Component
interface IntegrationsShowcaseProps {
  className?: string
}

export function IntegrationsShowcase({ className }: IntegrationsShowcaseProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SlackCard />
        <GmailCard />
        <CRMCard />
      </div>
    </div>
  )
}

// Alternative: Als Bento Grid Cells
export function IntegrationsShowcaseBento() {
  return (
    <>
      <AttioGridCell colSpan={4}>
        <SlackCard />
      </AttioGridCell>
      <AttioGridCell colSpan={4}>
        <GmailCard />
      </AttioGridCell>
      <AttioGridCell colSpan={4}>
        <CRMCard />
      </AttioGridCell>
    </>
  )
}

