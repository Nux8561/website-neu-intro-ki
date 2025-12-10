"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Search, Bell, Mail, FileText, User, ChevronDown, Command } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DashboardHeaderProps {
  workspaceName?: string
  className?: string
}

export function DashboardHeader({ workspaceName = "Basepoint", className }: DashboardHeaderProps) {
  const [isSearchFocused, setIsSearchFocused] = React.useState(false)

  return (
    <header
      className={`h-16 bg-white border-b border-[#0B0C0E]/10 flex items-center justify-between px-4 ${className || ""}`}
    >
      {/* Left: Workspace Selector & Search */}
      <div className="flex items-center gap-4 flex-1">
        {/* Workspace Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-inter text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">{workspaceName}</span>
              <ChevronDown className="h-4 w-4" />
            </motion.button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem>Basepoint</DropdownMenuItem>
            <DropdownMenuItem>Workspace 1</DropdownMenuItem>
            <DropdownMenuItem>Workspace 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Search Bar */}
        <div className="flex-1 max-w-md relative">
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${
              isSearchFocused
                ? "border-[#0B0C0E]/20 bg-white"
                : "border-[#0B0C0E]/10 bg-[#0B0C0E]/5"
            }`}
          >
            <Search className="h-4 w-4 text-[#0B0C0E]/50" />
            <input
              type="text"
              placeholder="Quick actions"
              className="flex-1 bg-transparent border-none outline-none text-sm font-inter text-[#0B0C0E] placeholder:text-[#0B0C0E]/50"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
            <div className="flex items-center gap-1 text-xs font-mono text-[#0B0C0E]/50 bg-[#0B0C0E]/5 px-1.5 py-0.5 rounded">
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Actions & User Menu */}
      <div className="flex items-center gap-2">
        {/* Notifications */}
        <motion.button
          className="p-2 rounded-lg text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
        </motion.button>

        {/* Tasks */}
        <motion.button
          className="p-2 rounded-lg text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Tasks"
        >
          <FileText className="h-5 w-5" />
        </motion.button>

        {/* Emails */}
        <motion.button
          className="p-2 rounded-lg text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Emails"
        >
          <Mail className="h-5 w-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full" />
        </motion.button>

        {/* Reports */}
        <motion.button
          className="p-2 rounded-lg text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Reports"
        >
          <FileText className="h-5 w-5" />
        </motion.button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.button
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[#0B0C0E]/5 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">JD</span>
              </div>
            </motion.button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

