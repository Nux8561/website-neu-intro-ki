/**
 * Integrations Showcase
 * Zeigt Workflow: IntroKI CRM → Gmail → IntroKI Automation
 * Workflow-Visualisierung: Vom Lead zum Deal automatisch
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Target, Mail, CheckCircle2, ArrowRight, Sparkles, Phone } from "lucide-react"
import { attioTransition } from "@/lib/animations"
import { AttioGridCell } from "./attio-wrapper"

// Card 1: IntroKI CRM - Fokus Dashboard
function IntroKIFocusCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={attioTransition}
    >
      {/* IntroKI Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
          <Target className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">IntroKI CRM</span>
      </div>

      {/* Fokus Section */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-4 w-4 text-blue-500" strokeWidth={1.5} />
          <span className="text-sm font-inter font-semibold text-gray-900">Dein Fokus für heute</span>
        </div>
        <div className="text-xs font-inter text-gray-600 mb-3">
          3 Hot Leads bereit zum Anrufen
        </div>

        {/* Lead Card */}
        <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-inter font-semibold text-gray-900">TechCorp GmbH</span>
                <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-inter font-medium rounded">
                  🔥
                </span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-600 mb-2">
                <span>Priority: 87/100</span>
                <span>•</span>
                <span>€125k</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-blue-600 mb-2">
            <Sparkles className="h-3 w-3" strokeWidth={1.5} />
            <span className="font-medium">"Jetzt anrufen - beste Zeit"</span>
          </div>
          <motion.button
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={attioTransition}
            className="w-full px-3 py-1.5 bg-blue-500 text-white text-[11px] font-inter font-medium rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5"
          >
            <Phone className="h-3 w-3" strokeWidth={2} />
            Anrufen
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Card 2: Gmail - Automatische Email-Sequenzen
function GmailCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={attioTransition}
    >
      {/* Gmail Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-red-500 flex items-center justify-center">
          <Mail className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">Inbox</span>
      </div>

      {/* Email Row */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
            <span className="text-[11px] font-inter font-semibold text-gray-600">MM</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-inter font-semibold text-gray-900 truncate">
                  Sequence: "B2B Kaltakquise" • Schritt 2/5
                </span>
              </div>
              <motion.div
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={attioTransition}
                className="px-2 py-0.5 bg-green-50 border border-green-200 rounded text-[10px] font-inter font-medium text-green-700 whitespace-nowrap"
              >
                Aktiv
              </motion.div>
            </div>
            <p className="text-[11px] font-inter text-gray-600 mb-1">
              An: max.mustermann@techcorp.de
            </p>
            <p className="text-[11px] font-inter text-gray-500 truncate">
              Hi Max, ich habe gesehen, dass TechCorp...
            </p>
            <div className="mt-2 flex items-center gap-1 text-[10px] text-gray-500">
              <CheckCircle2 className="h-3 w-3 text-green-500" strokeWidth={2} />
              <span>Automatisch gesendet</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Card 3: IntroKI CRM - Automatische Aufgaben
function IntroKIAutomationCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm"
      whileHover={{ scale: 1.02 }}
      transition={attioTransition}
    >
      {/* IntroKI Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center">
          <Sparkles className="h-3.5 w-3.5 text-white" strokeWidth={2} />
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">IntroKI CRM</span>
      </div>

      {/* Automation Section */}
      <div className="space-y-3">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-4 w-4 text-green-500" strokeWidth={2} />
            <span className="text-xs font-inter font-semibold text-gray-900">Automatisch erledigt:</span>
          </div>
          <div className="space-y-1.5 ml-6">
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <span>•</span>
              <span>Research abgeschlossen (47s)</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <span>•</span>
              <span>Email-Sequenz gestartet</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <span>•</span>
              <span>Follow-up-Termin geblockt</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-blue-500" strokeWidth={2} />
            <span className="text-xs font-inter font-semibold text-gray-900">Du musst nur:</span>
          </div>
          <div className="ml-6 space-y-2">
            <motion.div
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={attioTransition}
              className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-md"
            >
              <ArrowRight className="h-3 w-3 text-blue-600" strokeWidth={2} />
              <span className="text-[11px] font-inter font-medium text-gray-900">
                TechCorp anrufen <span className="text-blue-600 font-semibold">(JETZT)</span>
              </span>
            </motion.div>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <ArrowRight className="h-3 w-3 text-gray-400" strokeWidth={1.5} />
              <span>Follow-up: Morgen 10:00 Uhr</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Arrow Connector Component
function WorkflowArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={attioTransition}
      className="hidden md:flex items-center justify-center flex-shrink-0"
    >
      <ArrowRight className="h-5 w-5 text-gray-400" strokeWidth={1.5} />
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
      {/* Workflow Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {/* Step 1: IntroKI Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...attioTransition, delay: 0 }}
          className="w-full md:w-auto"
        >
          <IntroKIFocusCard />
        </motion.div>

        {/* Arrow 1 */}
        <WorkflowArrow />

        {/* Step 2: Gmail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...attioTransition, delay: 0.1 }}
          className="w-full md:w-auto"
        >
          <GmailCard />
        </motion.div>

        {/* Arrow 2 */}
        <WorkflowArrow />

        {/* Step 3: IntroKI Automation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...attioTransition, delay: 0.2 }}
          className="w-full md:w-auto"
        >
          <IntroKIAutomationCard />
        </motion.div>
      </div>

      {/* Workflow Label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center"
      >
        <p className="text-sm font-inter text-gray-600">
          Vom Lead zum Deal – automatisch in deinem bestehenden System
        </p>
      </motion.div>
    </div>
  )
}

// Alternative: Als Bento Grid Cells
export function IntegrationsShowcaseBento() {
  return (
    <>
      <AttioGridCell colSpan={4}>
        <IntroKIFocusCard />
      </AttioGridCell>
      <AttioGridCell colSpan={4}>
        <GmailCard />
      </AttioGridCell>
      <AttioGridCell colSpan={4}>
        <IntroKIAutomationCard />
      </AttioGridCell>
    </>
  )
}

