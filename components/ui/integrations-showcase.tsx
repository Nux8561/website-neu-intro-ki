/**
 * Integrations Showcase
 * Zeigt Workflow: IntroKI CRM → Gmail → IntroKI Automation
 * Workflow-Visualisierung: Vom Lead zum Deal automatisch
 * 
 * Upgrade: Icons entfernt, animierte Visuals hinzugefügt
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"
import { AttioGridCell } from "./attio-wrapper"

// Animierter Pulse-Badge
function PulseBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`relative inline-flex items-center ${className}`}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      {children}
    </motion.div>
  )
}

// Animierter Status-Dot
function StatusDot({ isActive = true }: { isActive?: boolean }) {
  return (
    <motion.div className="relative inline-flex items-center">
      <div className={`w-2 h-2 rounded-full ${isActive ? "bg-green-500" : "bg-gray-300"}`} />
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500"
          animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </motion.div>
  )
}

// Card 1: IntroKI CRM - Fokus Dashboard
function IntroKIFocusCard() {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
      whileHover={{ scale: 1.01, borderColor: "rgb(229, 231, 235)" }}
      transition={attioTransition}
    >
      {/* Subtiler Glow-Effekt bei Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 pointer-events-none"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={attioTransition}
      />

      {/* IntroKI Header - Text-only */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          <span className="text-[10px] font-inter font-bold text-white">IK</span>
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">IntroKI CRM</span>
      </div>

      {/* Fokus Section */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <PulseBadge>
            <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded-md text-[10px] font-inter font-semibold text-blue-700">
              FOKUS
            </span>
          </PulseBadge>
          <span className="text-sm font-inter font-semibold text-gray-900">Dein Fokus für heute</span>
        </div>
        <div className="text-xs font-inter text-gray-600 mb-3">
          3 Hot Leads bereit zum Anrufen
        </div>

        {/* Lead Card */}
        <motion.div
          className="p-3 bg-gray-50 border border-gray-200 rounded-lg"
          whileHover={{ borderColor: "rgb(59, 130, 246)" }}
          transition={attioTransition}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-inter font-semibold text-gray-900">TechCorp GmbH</span>
                <motion.span
                  className="px-1.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-inter font-medium rounded"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🔥
                </motion.span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-600 mb-2">
                <span>Priority: <span className="font-semibold text-gray-900">87/100</span></span>
                <span>•</span>
                <span>€<span className="font-semibold text-gray-900">125k</span></span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-blue-600 mb-2">
            <motion.span
              className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-medium">&ldquo;Jetzt anrufen - beste Zeit&rdquo;</span>
          </div>
          <motion.button
            animate={{ scale: isHovered ? 1.02 : 1 }}
            whileTap={{ scale: 0.98 }}
            transition={attioTransition}
            className="w-full px-3 py-1.5 bg-blue-500 text-white text-[11px] font-inter font-medium rounded-md hover:bg-blue-600 transition-colors relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Anrufen</span>
          </motion.button>
        </motion.div>
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
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
      whileHover={{ scale: 1.01, borderColor: "rgb(229, 231, 235)" }}
      transition={attioTransition}
    >
      {/* Subtiler Glow-Effekt bei Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 pointer-events-none"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={attioTransition}
      />

      {/* Gmail Header - Text-only mit Logo-Farben */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-red-500 via-red-500 to-red-600 flex items-center justify-center">
          <span className="text-[9px] font-inter font-bold text-white">G</span>
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">Inbox</span>
      </div>

      {/* Email Row */}
      <div className="space-y-2 relative z-10">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
            <span className="text-[11px] font-inter font-semibold text-gray-600">MM</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-inter font-semibold text-gray-900 truncate">
                  Sequence: &ldquo;B2B Kaltakquise&rdquo; • Schritt 2/5
                </span>
              </div>
              <motion.div
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={attioTransition}
                className="px-2 py-0.5 bg-green-50 border border-green-200 rounded text-[10px] font-inter font-medium text-green-700 whitespace-nowrap flex items-center gap-1"
              >
                <StatusDot isActive={true} />
                <span>Aktiv</span>
              </motion.div>
            </div>
            <p className="text-[11px] font-inter text-gray-600 mb-1">
              An: max.mustermann@techcorp.de
            </p>
            <p className="text-[11px] font-inter text-gray-500 truncate">
              Hi Max, ich habe gesehen, dass TechCorp...
            </p>
            <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-500">
              <StatusDot isActive={true} />
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
      className="relative p-5 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
      whileHover={{ scale: 1.01, borderColor: "rgb(229, 231, 235)" }}
      transition={attioTransition}
    >
      {/* Subtiler Glow-Effekt bei Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/0 pointer-events-none"
        animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
        transition={attioTransition}
      />

      {/* IntroKI Header - Text-only */}
      <div className="flex items-center gap-2 mb-4 relative z-10">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
          <span className="text-[10px] font-inter font-bold text-white">✓</span>
        </div>
        <span className="text-xs font-inter font-medium text-gray-700">IntroKI CRM</span>
      </div>

      {/* Automation Section */}
      <div className="space-y-3 relative z-10">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <StatusDot isActive={true} />
            <span className="text-xs font-inter font-semibold text-gray-900">Automatisch erledigt:</span>
          </div>
          <div className="space-y-1.5 ml-6">
            <motion.div
              className="flex items-center gap-2 text-[11px] text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <StatusDot isActive={true} />
              <span>Research abgeschlossen (47s)</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-[11px] text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <StatusDot isActive={true} />
              <span>Email-Sequenz gestartet</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-[11px] text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <StatusDot isActive={true} />
              <span>Follow-up-Termin geblockt</span>
            </motion.div>
          </div>
        </div>

        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-blue-500"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-xs font-inter font-semibold text-gray-900">Du musst nur:</span>
          </div>
          <div className="ml-6 space-y-2">
            <motion.div
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={attioTransition}
              className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-md"
            >
              <motion.div
                className="w-1 h-4 bg-blue-500 rounded-full"
                animate={{ scaleY: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-[11px] font-inter font-medium text-gray-900">
                TechCorp anrufen <span className="text-blue-600 font-semibold">(JETZT)</span>
              </span>
            </motion.div>
            <div className="flex items-center gap-2 text-[11px] text-gray-600">
              <div className="w-1 h-3 bg-gray-300 rounded-full" />
              <span>Follow-up: Morgen 10:00 Uhr</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Animierter Workflow-Arrow (SVG-basiert)
function WorkflowArrow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={attioTransition}
      className="hidden md:flex items-center justify-center flex-shrink-0 w-16 h-1"
    >
      <svg className="w-full h-full" viewBox="0 0 64 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Linie */}
        <motion.path
          d="M 0 2 L 56 2"
          stroke="rgb(156, 163, 175)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        {/* Animierter Flow-Punkt */}
        <motion.circle
          cx="0"
          cy="2"
          r="2"
          fill="rgb(156, 163, 175)"
          animate={{ cx: [0, 56, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Pfeilspitze */}
        <motion.path
          d="M 56 2 L 64 0 L 64 4 Z"
          fill="rgb(156, 163, 175)"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        />
      </svg>
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

