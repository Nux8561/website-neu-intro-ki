/**
 * Skeletal UI Components
 * Code-basierte Visualisierungen statt KI-Bilder
 * Imitiert Attio's "Blaupausen"-Ästhetik
 */

"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { attioTransition } from "@/lib/animations"

// Email Automation Skeletal UI
export function EmailAutomationSkeleton() {
  return (
    <div className="mt-4 space-y-3 group">
      {/* Email Card */}
      <div className="p-3 bg-white border border-gray-200 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-gray-200 rounded w-3/4" />
            <div className="h-2 bg-gray-100 rounded w-full" />
            <div className="h-2 bg-gray-100 rounded w-5/6" />
          </div>
        </div>
      </div>
      
      {/* Arrow */}
      <div className="flex justify-center">
        <div className="w-px h-6 bg-gray-300" />
      </div>
      
      {/* Action Card */}
      <motion.div
        whileHover={{ y: -2 }}
        transition={attioTransition}
        className="p-3 bg-blue-50 border border-blue-200 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <div className="h-2 bg-blue-200 rounded flex-1" />
        </div>
      </motion.div>
    </div>
  )
}

// Workflow Skeleton
export function WorkflowSkeleton() {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-2">
        {/* Trigger Node */}
        <div className="px-3 py-2 bg-purple-50 border border-purple-200 rounded-md">
          <div className="h-2 w-12 bg-purple-300 rounded" />
        </div>
        
        {/* Connection Line */}
        <div className="flex-1 h-px bg-gray-300" />
        
        {/* Condition Node */}
        <div className="px-3 py-2 bg-blue-50 border border-blue-200 rounded-md">
          <div className="h-2 w-16 bg-blue-300 rounded" />
        </div>
        
        {/* Connection Line */}
        <div className="flex-1 h-px bg-gray-300" />
        
        {/* Action Node */}
        <div className="px-3 py-2 bg-green-50 border border-green-200 rounded-md">
          <div className="h-2 w-10 bg-green-300 rounded" />
        </div>
      </div>
    </div>
  )
}

// Data Sync Skeleton
export function DataSyncSkeleton() {
  return (
    <div className="mt-4 space-y-4">
      {/* Source Box */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
        <div className="space-y-2">
          <div className="h-2 bg-gray-300 rounded w-20" />
          <div className="h-1.5 bg-gray-200 rounded w-full" />
          <div className="h-1.5 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
      
      {/* Sync Arrow */}
      <div className="flex items-center justify-center gap-2">
        <div className="flex-1 h-px bg-gray-300" />
        <div className="w-0 h-0 border-l-[6px] border-l-gray-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent" />
        <div className="flex-1 h-px bg-gray-300" />
      </div>
      
      {/* Target Box */}
      <div className="p-4 bg-white border-2 border-blue-300 rounded-lg">
        <div className="space-y-2">
          <div className="h-2 bg-blue-400 rounded w-24" />
          <div className="h-1.5 bg-blue-200 rounded w-full" />
          <div className="h-1.5 bg-blue-200 rounded w-5/6" />
        </div>
      </div>
    </div>
  )
}

// Analytics Dashboard Skeleton
export function AnalyticsSkeleton() {
  const bars = [
    { height: "30%", color: "bg-purple-400" },
    { height: "50%", color: "bg-blue-400" },
    { height: "70%", color: "bg-pink-400" },
    { height: "45%", color: "bg-yellow-400" },
    { height: "60%", color: "bg-green-400" },
  ]

  return (
    <div className="mt-4">
      <div className="flex items-end justify-between gap-1.5 h-20">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{ height: 0 }}
            animate={{ height: bar.height }}
            transition={{ delay: index * 0.1, ...attioTransition }}
            className={`flex-1 ${bar.color} rounded-t`}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between">
        <div className="h-1.5 bg-gray-200 rounded w-12" />
        <div className="h-1.5 bg-gray-200 rounded w-12" />
      </div>
    </div>
  )
}

// Contact Card Skeleton
export function ContactCardSkeleton() {
  return (
    <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-24" />
          <div className="h-2 bg-gray-200 rounded w-32" />
          <div className="flex items-center gap-2 mt-2">
            <div className="w-4 h-4 rounded bg-green-100 border border-green-300" />
            <div className="h-2 bg-gray-200 rounded w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

// Generic Skeletal UI Builder
interface SkeletalUIProps {
  variant?: "email" | "workflow" | "data-sync" | "analytics" | "contact"
  className?: string
}

export function SkeletalUI({ variant = "workflow", className }: SkeletalUIProps) {
  const components = {
    email: <EmailAutomationSkeleton />,
    workflow: <WorkflowSkeleton />,
    "data-sync": <DataSyncSkeleton />,
    analytics: <AnalyticsSkeleton />,
    contact: <ContactCardSkeleton />,
  }

  return (
    <div className={className}>
      {components[variant]}
    </div>
  )
}

