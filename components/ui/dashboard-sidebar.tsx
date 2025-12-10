"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  LayoutDashboard,
  Building2,
  Users,
  Briefcase,
  FolderKanban,
  List,
  Workflow,
  GitBranch,
  BarChart3,
  Settings,
  Star,
  Command,
  Bell,
  Mail,
  FileText,
} from "lucide-react"

interface NavItem {
  label: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  active?: boolean
}

const quickActions: NavItem[] = [
  { label: "Quick actions", icon: Command, badge: "⌘K" },
]

const favorites: NavItem[] = [
  { label: "Favorites", icon: Star },
]

const mainNav: NavItem[] = [
  { label: "Basepoint", icon: LayoutDashboard, active: false },
  { label: "Companies", icon: Building2, active: true },
  { label: "People", icon: Users, active: false },
  { label: "Deals", icon: Briefcase, active: false },
  { label: "Workspaces", icon: FolderKanban, active: false },
  { label: "Partnerships", icon: Briefcase, active: false },
]

const lists: NavItem[] = [
  { label: "Lists", icon: List },
  { label: "🚀 Strategic accounts", icon: Star, active: false },
  { label: "Top companies", icon: Star, active: false },
]

const workflows: NavItem[] = [
  { label: "Automations", icon: Workflow },
  { label: "Workflows", icon: GitBranch, active: false },
  { label: "Sequences", icon: GitBranch, active: false },
]

const records: NavItem[] = [
  { label: "Records", icon: FileText },
  { label: "Companies", icon: Building2, active: false },
  { label: "People", icon: Users, active: false },
  { label: "Deals", icon: Briefcase, active: false },
  { label: "Workspaces", icon: FolderKanban, active: false },
]

const reports: NavItem[] = [
  { label: "Reports", icon: BarChart3 },
]

interface DashboardSidebarProps {
  className?: string
}

export function DashboardSidebar({ className }: DashboardSidebarProps) {
  return (
    <aside
      className={`w-64 bg-white border-r border-[#0B0C0E]/10 flex flex-col ${className || ""}`}
    >
      {/* Quick Actions */}
      <div className="px-3 py-2 border-b border-[#0B0C0E]/10">
        {quickActions.map((item) => {
          const Icon = item.icon
          return (
            <motion.button
              key={item.label}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-xs font-mono text-[#0B0C0E]/50 bg-[#0B0C0E]/5 px-1.5 py-0.5 rounded">
                  {item.badge}
                </span>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Notifications, Tasks, Emails */}
      <div className="px-3 py-2 border-b border-[#0B0C0E]/10 flex items-center gap-2">
        <motion.button
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </motion.button>
        <motion.button
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <FileText className="h-4 w-4" />
          <span>Tasks</span>
        </motion.button>
        <motion.button
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Mail className="h-4 w-4" />
          <span>Emails</span>
        </motion.button>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Main Navigation */}
        <nav className="px-3 py-2">
          {mainNav.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter transition-all mb-1 ${
                  item.active
                    ? "bg-[#0B0C0E] text-white"
                    : "text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5"
                }`}
                whileHover={{ scale: item.active ? 1 : 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </nav>

        {/* Lists Section */}
        <div className="px-3 py-2 border-t border-[#0B0C0E]/10 mt-2">
          <div className="px-3 py-1 mb-1">
            <span className="text-xs font-mono text-[#0B0C0E]/50 uppercase tracking-wider">
              Lists
            </span>
          </div>
          {lists.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all mb-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Workflows Section */}
        <div className="px-3 py-2 border-t border-[#0B0C0E]/10 mt-2">
          <div className="px-3 py-1 mb-1">
            <span className="text-xs font-mono text-[#0B0C0E]/50 uppercase tracking-wider">
              Automations
            </span>
          </div>
          {workflows.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all mb-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Records Section */}
        <div className="px-3 py-2 border-t border-[#0B0C0E]/10 mt-2">
          <div className="px-3 py-1 mb-1">
            <span className="text-xs font-mono text-[#0B0C0E]/50 uppercase tracking-wider">
              Records
            </span>
          </div>
          {records.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all mb-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </div>

        {/* Reports Section */}
        <div className="px-3 py-2 border-t border-[#0B0C0E]/10 mt-2">
          {reports.map((item) => {
            const Icon = item.icon
            return (
              <motion.button
                key={item.label}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all mb-1"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="px-3 py-2 border-t border-[#0B0C0E]/10">
        <motion.button
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-inter text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </motion.button>
      </div>
    </aside>
  )
}

