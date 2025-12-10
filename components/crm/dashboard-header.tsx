"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Menu, Bell, Search, User, Settings, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function DashboardHeader({
  onMobileMenuToggle,
}: {
  onMobileMenuToggle: () => void
}) {
  return (
    <header className="sticky top-0 z-40 h-16 bg-[#15171B]/80 backdrop-blur-md border-b border-white/5">
      <div className="h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Mobile Menu + Breadcrumbs */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMobileMenuToggle}
            className="md:hidden text-white/70 hover:text-white touch-manipulation p-2"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <nav className="hidden md:flex items-center gap-2 text-sm font-inter">
            <span className="text-white/50">Dashboard</span>
            <span className="text-white/30">/</span>
            <span className="text-white/70">Leads</span>
          </nav>
        </div>

        {/* Right: Search + Notifications + User Menu */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 focus-within:text-white focus-within:border-white/20 transition-colors">
            <Search className="h-4 w-4" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-0 outline-0 text-sm font-inter placeholder:text-white/50 w-48"
            />
          </div>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/5 border-0 touch-manipulation"
          >
            <Bell className="h-5 w-5" strokeWidth={1.5} />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-9 w-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 p-0 touch-manipulation"
              >
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">JD</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#15171B] border-white/10 text-white"
            >
              <DropdownMenuLabel className="font-jakarta">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="text-white/70 hover:text-white hover:bg-white/5 focus:bg-white/5 cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-white/70 hover:text-white hover:bg-white/5 focus:bg-white/5 cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/10" />
              <DropdownMenuItem className="text-white/70 hover:text-white hover:bg-white/5 focus:bg-white/5 cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

