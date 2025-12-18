"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Database, GitBranch, Shield, CheckCircle2, RefreshCw, FileText, Users, Plug } from "lucide-react"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { createSimpleOrthogonalPath } from "@/lib/orthogonal-connector"
import { cn } from "@/lib/utils"

/**
 * Rich Feature Card Component
 * High-Fidelity Feature Cards with internal "Fake UI" visualizations
 * Uses Deep Glassmorphism and ambient animations
 */

interface RichFeatureCardProps {
  title: string
  description: string
  href: string
  size?: "small" | "large"
  variant: "data-model" | "workflows" | "security" | "api-sync" | "audit-logs" | "permissions" | "integrations"
  index: number
  isInView: boolean
}

export function RichFeatureCard({
  title,
  description,
  href,
  size = "small",
  variant,
  index,
  isInView,
}: RichFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
      className={cn("h-full", size === "large" && "md:col-span-2")}
    >
      <Link
        href={href}
        className={cn(
          "group relative block h-full overflow-hidden rounded-xl",
          "bg-white/50 backdrop-blur-xl",
          "border border-white/60",
          "shadow-attio-diffuse hover:shadow-attio-diffuse-hover",
          "transition-all duration-300",
          "p-8 md:p-12"
        )}
      >
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Title with Gradient */}
          <h3 className="text-[24px] leading-[32px] -tracking-[0.02em] font-medium bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600 mb-3">
            {title}
          </h3>
          <p className="text-[16px] leading-[24px] text-gray-600 mb-6">{description}</p>

          {/* Fake UI Visualization */}
          <div className="flex-1 flex items-center justify-center mt-4">
            {variant === "data-model" && <DataModelVisualization />}
            {variant === "workflows" && <WorkflowVisualization />}
            {variant === "security" && <SecurityVisualization />}
            {variant === "api-sync" && <APISyncVisualization />}
            {variant === "audit-logs" && <AuditLogsVisualization />}
            {variant === "permissions" && <PermissionsVisualization />}
            {variant === "integrations" && <IntegrationsVisualization />}
          </div>

          {/* CTA */}
          <div className="flex items-center text-[14px] font-medium text-gray-900 group-hover:text-gray-700 transition-colors mt-auto">
            Mehr erfahren
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/**
 * Data Model Visualization - Mini Database Schema
 */
function DataModelVisualization() {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const fields = [
    { name: "Name", type: "Text", value: "Acme Corp" },
    { name: "Email", type: "Email", value: "contact@acme.com" },
    { name: "Value", type: "Currency", value: "€12,500" },
    { name: "Status", type: "Select", value: "Active" },
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % fields.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [fields.length])

  return (
    <div className="w-full max-w-md">
      <div className="bg-white/40 backdrop-blur-sm border border-white/40 rounded-lg p-4 space-y-2">
        {fields.map((field, index) => (
          <motion.div
            key={field.name}
            className={cn(
              "flex items-center justify-between px-3 py-2 rounded-md transition-colors",
              selectedIndex === index ? "bg-blue-500/20 border border-blue-500/40" : "bg-transparent"
            )}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
              <span className="text-[12px] leading-[16px] font-medium text-gray-700 truncate">
                {field.name}
              </span>
              <span className="text-[10px] leading-[14px] text-gray-400 flex-shrink-0">{field.type}</span>
            </div>
            <span className="text-[12px] leading-[16px] text-gray-600 font-mono truncate ml-4">
              {field.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/**
 * Workflow Visualization - Mini Node Graph with Orthogonal Lines
 */
function WorkflowVisualization() {
  const [pulseProgress, setPulseProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPulseProgress((prev) => (prev + 0.1) % 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const pathData = React.useMemo(
    () => createSimpleOrthogonalPath(20, 60, 180, 60),
    []
  )
  const pathLength = pathData.totalLength

  return (
    <div className="relative w-full h-[120px] flex items-center justify-center">
      {/* Node 1 (Left) */}
      <motion.div
        className="absolute left-0 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
      >
        <GitBranch className="w-5 h-5 text-gray-700" strokeWidth={2} />
      </motion.div>

      {/* Connection Line */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        {/* Background Track */}
        <path
          d={pathData.path}
          stroke="#E5E7EB"
          strokeWidth="1"
          fill="none"
          strokeDasharray="0"
        />
        {/* Animated Pulse */}
        <motion.path
          d={pathData.path}
          stroke="#2563EB"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          style={{
            strokeDashoffset: -pulseProgress * pathLength,
          }}
          animate={{
            strokeDashoffset: -(pulseProgress * pathLength),
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Node 2 (Right) */}
      <motion.div
        className="absolute right-0 w-12 h-12 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
      >
        <CheckCircle2 className="w-5 h-5 text-green-600" strokeWidth={2} />
      </motion.div>
    </div>
  )
}

/**
 * Security Visualization - Shield with Status Badge
 */
function SecurityVisualization() {
  const [isEncrypted, setIsEncrypted] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsEncrypted((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Shield Icon */}
      <motion.div
        className="relative w-16 h-16 rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        animate={isEncrypted ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
      >
        <Shield className="w-8 h-8 text-gray-700" strokeWidth={1.5} />
      </motion.div>

      {/* Status Badge */}
      <motion.div
        className={cn(
          "px-3 py-1.5 rounded-full text-[12px] leading-[16px] font-medium flex items-center gap-2",
          isEncrypted
            ? "bg-green-50 border border-green-200 text-green-700"
            : "bg-gray-50 border border-gray-200 text-gray-600"
        )}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ENTERPRISE_SPRING}
      >
        <motion.div
          className={cn("w-2 h-2 rounded-full", isEncrypted ? "bg-green-500" : "bg-gray-400")}
          animate={isEncrypted ? { scale: [1, 1.3, 1], opacity: [1, 0.7, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span>Status: {isEncrypted ? "Encrypted" : "Standby"}</span>
      </motion.div>
    </div>
  )
}

/**
 * API Sync Visualization - Mini API diagram with sync arrows
 */
function APISyncVisualization() {
  const [syncProgress, setSyncProgress] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSyncProgress((prev) => (prev + 0.02) % 1)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const pathData = React.useMemo(() => createSimpleOrthogonalPath(40, 60, 160, 60), [])
  const pathLength = pathData.totalLength

  return (
    <div className="relative w-full h-[120px] flex items-center justify-center">
      {/* Left API Node */}
      <motion.div
        className="absolute left-0 w-10 h-10 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
      >
        <RefreshCw className="w-4 h-4 text-blue-600" strokeWidth={2} />
      </motion.div>

      {/* Sync Arrow */}
      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
        <path d={pathData.path} stroke="#E5E7EB" strokeWidth="1" fill="none" />
        <motion.path
          d={pathData.path}
          stroke="#2563EB"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 3"
          animate={{ strokeDashoffset: -syncProgress * pathLength }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Right API Node */}
      <motion.div
        className="absolute right-0 w-10 h-10 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
      >
        <RefreshCw className="w-4 h-4 text-green-600" strokeWidth={2} />
      </motion.div>
    </div>
  )
}

/**
 * Audit Logs Visualization - Mini log list with timestamps
 */
function AuditLogsVisualization() {
  const [scrollOffset, setScrollOffset] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset((prev) => (prev + 0.5) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const logs = [
    { action: "User Login", time: "10:23", status: "success" },
    { action: "Data Export", time: "10:20", status: "success" },
    { action: "Permission Changed", time: "10:18", status: "info" },
    { action: "API Call", time: "10:15", status: "success" },
  ]

  return (
    <div className="relative w-full h-[120px] overflow-hidden rounded-lg bg-white/40 backdrop-blur-sm border border-white/40 p-3">
      <motion.div
        className="space-y-1.5"
        style={{ transform: `translateY(-${scrollOffset}px)` }}
        transition={{ duration: 0.05, ease: "linear" }}
      >
        {logs.map((log, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between px-2 py-1.5 rounded text-[11px]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
          >
            <span className="text-gray-600 truncate flex-1">{log.action}</span>
            <span className="text-gray-400 font-mono tabular-nums ml-2">{log.time}</span>
          </motion.div>
        ))}
        {/* Duplicate for seamless loop */}
        {logs.map((log, index) => (
          <div key={`dup-${index}`} className="flex items-center justify-between px-2 py-1.5 rounded text-[11px]">
            <span className="text-gray-600 truncate flex-1">{log.action}</span>
            <span className="text-gray-400 font-mono tabular-nums ml-2">{log.time}</span>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, transparent 20%, transparent 80%, rgba(255,255,255,0.9) 100%)" }} />
    </div>
  )
}

/**
 * Permissions Visualization - Mini permission matrix with checkmarks
 */
function PermissionsVisualization() {
  const permissions = [
    { role: "Admin", canEdit: true, canView: true, canDelete: true },
    { role: "Editor", canEdit: true, canView: true, canDelete: false },
    { role: "Viewer", canEdit: false, canView: true, canDelete: false },
  ]

  return (
    <div className="w-full max-w-xs bg-white/40 backdrop-blur-sm border border-white/40 rounded-lg p-3">
      <div className="space-y-2">
        {permissions.map((perm, index) => (
          <motion.div
            key={perm.role}
            className="flex items-center gap-3 text-[11px]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...ENTERPRISE_SPRING, delay: index * 0.1 }}
          >
            <span className="text-gray-700 font-medium w-16">{perm.role}</span>
            <div className="flex gap-2">
              {[perm.canEdit, perm.canView, perm.canDelete].map((allowed, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-4 h-4 rounded flex items-center justify-center",
                    allowed ? "bg-green-100 border border-green-300" : "bg-gray-100 border border-gray-300"
                  )}
                >
                  {allowed && <CheckCircle2 className="w-3 h-3 text-green-600" strokeWidth={2} />}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

/**
 * Integrations Visualization - Mini integration icons in a grid
 */
function IntegrationsVisualization() {
  const integrations = [
    { icon: "🔗", name: "API" },
    { icon: "📧", name: "Email" },
    { icon: "📊", name: "CRM" },
    { icon: "💬", name: "Chat" },
  ]

  const [pulseIndex, setPulseIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % integrations.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
      {integrations.map((integration, index) => (
        <motion.div
          key={integration.name}
          className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-white/40 shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: pulseIndex === index ? 1.1 : 1 }}
          transition={ENTERPRISE_SPRING}
        >
          <span className="text-2xl mb-1">{integration.icon}</span>
          <span className="text-[10px] text-gray-600">{integration.name}</span>
        </motion.div>
      ))}
    </div>
  )
}
