"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  Database, 
  Zap, 
  Workflow, 
  BarChart3, 
  Code, 
  Layers,
  Search,
  GitBranch,
  Phone,
  TrendingUp,
  FileText,
  BookOpen,
  HelpCircle,
  Download,
  Shield,
  Users,
  Building2,
  Calendar,
  Play,
  Boxes,
  Blocks,
  FileStack,
  LayoutGrid,
  Hexagon,
} from "lucide-react"

interface DropdownSection {
  title: string
  items: Array<{
    label: string
    href: string
    description?: string
    icon?: React.ComponentType<{ className?: string }>
    image?: React.ReactNode
    visualization?: React.ReactNode
  }>
}

interface MegaDropdownProps {
  sections: DropdownSection[]
  getStartedItems?: Array<{ label: string; href: string }>
  tabs?: Array<{ label: string; href: string }>
  isOpen: boolean
  onClose: () => void
  triggerRef?: React.RefObject<HTMLElement>
}

export function MegaDropdown({
  sections,
  getStartedItems = [],
  tabs = [],
  isOpen,
  onClose,
  triggerRef,
}: MegaDropdownProps) {
  const [position, setPosition] = React.useState({ top: 0, left: 0, width: 0 })

  React.useEffect(() => {
    if (isOpen && triggerRef?.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: Math.max(800, rect.width * 2),
      })
    }
  }, [isOpen, triggerRef])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Dropdown */}
            <motion.div
              className="fixed z-50 bg-white border border-border-subtle rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto"
              style={{
                top: `${position.top}px`,
                left: `${position.left}px`,
                width: `${position.width}px`,
              }}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onMouseEnter={() => {}} // Keep dropdown open on hover
              onMouseLeave={onClose}
            >
              <div className="p-8">
                <div className="grid grid-cols-3 gap-8">
                {/* Left and Middle Columns - Sections */}
                <div className="col-span-2 grid grid-cols-2 gap-8">
                  {sections.map((section, sectionIndex) => (
                    <div key={section.title} className="space-y-4">
                      <h3 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-4">
                        {section.title}
                      </h3>
                      <div className="space-y-3">
                        {section.items.map((item, itemIndex) => {
                          const Icon = item.icon
                          const hasVisualization = !!item.visualization
                          return (
                            <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: (sectionIndex * 0.1) + (itemIndex * 0.05),
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                              className={hasVisualization ? "col-span-2" : ""}
                            >
                              <Link
                                href={item.href}
                                className={`group flex items-start gap-3 p-3 rounded-lg hover:bg-surface transition-colors ${
                                  hasVisualization ? "flex-col" : ""
                                }`}
                                onClick={onClose}
                              >
                                <div className={`flex items-start gap-3 ${hasVisualization ? "w-full" : ""}`}>
                                  {Icon && (
                                    <div className="mt-0.5 p-2 rounded-lg bg-surface border border-border-subtle group-hover:border-border-active transition-colors flex-shrink-0">
                                      <Icon className="h-4 w-4 text-text-secondary" />
                                    </div>
                                  )}
                                  {item.image && !hasVisualization && (
                                    <div className="mt-0.5 p-2 rounded-lg bg-surface border border-border-subtle group-hover:border-border-active transition-colors flex-shrink-0">
                                      {item.image}
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-inter font-medium text-text-primary group-hover:text-brand transition-colors">
                                      {item.label}
                                    </div>
                                    {item.description && (
                                      <div className="text-xs text-text-secondary mt-0.5 line-clamp-2">
                                        {item.description}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                {item.visualization && (
                                  <div className="w-full mt-3 rounded-lg border border-border-subtle overflow-hidden bg-surface/50">
                                    <div className="w-full h-48 relative">
                                      {item.visualization}
                                    </div>
                                  </div>
                                )}
                              </Link>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column - Get Started */}
                {getStartedItems.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-4">
                      GET STARTED
                    </h3>
                    <div className="space-y-2">
                      {getStartedItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 400,
                            damping: 17,
                          }}
                        >
                          <Link
                            href={item.href}
                            className="block text-sm font-inter text-text-secondary hover:text-text-primary transition-colors py-2"
                            onClick={onClose}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Tabs at bottom */}
              {tabs.length > 0 && (
                <div className="mt-8 pt-6 border-t border-border-subtle">
                  <div className="flex gap-6">
                    {tabs.map((tab, index) => (
                      <motion.div
                        key={tab.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.3 + (index * 0.05),
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Link
                          href={tab.href}
                          className="text-sm font-inter text-text-secondary hover:text-text-primary transition-colors underline decoration-border-subtle hover:decoration-border-active underline-offset-4"
                          onClick={onClose}
                        >
                          {tab.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Icon Components for Platform Dropdown
export const IconComponents = {
  DataModel: () => (
    <div className="relative w-4 h-4">
      <Layers className="absolute inset-0 text-text-secondary" />
      <Layers className="absolute inset-0 text-text-secondary translate-x-0.5 translate-y-0.5 opacity-60" />
      <Layers className="absolute inset-0 text-text-secondary translate-x-1 translate-y-1 opacity-40" />
    </div>
  ),
  Productivity: () => (
    <div className="relative w-4 h-4">
      <FileStack className="text-text-secondary" />
    </div>
  ),
  Workflows: () => (
    <div className="relative w-4 h-4">
      <Boxes className="text-text-secondary" />
    </div>
  ),
  AI: () => (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-text-secondary" />
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 w-0.5 h-1 bg-text-secondary/60 -translate-x-1/2" />
        <div className="absolute right-0 top-1/2 w-1 h-0.5 bg-text-secondary/60 -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/2 w-0.5 h-1 bg-text-secondary/60 -translate-x-1/2" />
        <div className="absolute left-0 top-1/2 w-1 h-0.5 bg-text-secondary/60 -translate-y-1/2" />
      </div>
    </div>
  ),
  Apps: () => (
    <div className="relative w-4 h-4">
      <LayoutGrid className="text-text-secondary" />
    </div>
  ),
  Sequences: () => (
    <div className="relative w-4 h-4">
      <FileStack className="text-text-secondary" />
      <FileStack className="absolute inset-0 text-text-secondary translate-x-0.5 translate-y-0.5 opacity-60" />
      <FileStack className="absolute inset-0 text-text-secondary translate-x-1 translate-y-1 opacity-40" />
    </div>
  ),
  CallIntelligence: () => (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 rounded border border-text-secondary/40" />
      <Play className="absolute inset-0 m-auto w-2 h-2 text-text-secondary" />
    </div>
  ),
  Reporting: () => (
    <div className="relative w-4 h-4">
      <BarChart3 className="text-text-secondary" />
    </div>
  ),
  DeveloperPlatform: () => (
    <div className="relative w-4 h-4">
      <Hexagon className="text-text-secondary" />
    </div>
  ),
}

