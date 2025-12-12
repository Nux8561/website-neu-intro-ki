"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IntroKILogo } from "@/components/ui/introki-logo"
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Contact,
  Building2,
  Calendar,
  BarChart3,
  Menu,
  X,
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/dashboard/leads", icon: Users },
  { label: "Pipeline", href: "/dashboard/pipeline", icon: GitBranch },
  { label: "Contacts", href: "/dashboard/contacts", icon: Contact },
  { label: "Companies", href: "/dashboard/companies", icon: Building2 },
  { label: "Activities", href: "/dashboard/activities", icon: Calendar },
  { label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
]

export function Sidebar({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}) {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-[#15171B] border-r border-white/5">
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <IntroKILogo size="sm" variant="light" showText={false} animated={false} />
            <span className="font-jakarta font-semibold text-white tracking-tight">
              IntroKI
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-inter transition-colors ${
                    isActive
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                  {item.label}
                </motion.div>
              </Link>
            )
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            {/* Sidebar */}
            <motion.aside
              initial={{ x: -256 }}
              animate={{ x: 0 }}
              exit={{ x: -256 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
              className="fixed left-0 top-0 h-screen w-64 flex flex-col bg-[#15171B] border-r border-white/5 z-50 md:hidden"
            >
              {/* Header */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-white/5">
                <Link href="/" className="flex items-center gap-2">
                  <IntroKILogo size="sm" variant="light" showText={false} animated={false} />
                  <span className="font-jakarta font-semibold text-white tracking-tight">
                    IntroKI
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/70 hover:text-white touch-manipulation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-inter transition-colors touch-manipulation min-h-[44px] ${
                          isActive
                            ? "bg-white/10 text-white border border-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <Icon className="h-4 w-4" strokeWidth={1.5} />
                        {item.label}
                      </motion.div>
                    </Link>
                  )
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

