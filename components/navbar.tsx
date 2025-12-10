"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const platformItems: Array<{ label: string; href: string; badge?: string }> = [
    { label: "Refer a team", href: "/refer", badge: "New" },
    { label: "Changelog", href: "/changelog" },
    { label: "Gmail extension", href: "/gmail-extension" },
    { label: "iOS app", href: "/ios-app" },
    { label: "Android app", href: "/android-app" },
    { label: "Security", href: "/security" },
  ]

  const resourcesItems: Array<{ label: string; href: string; badge?: string }> = [
    { label: "Startup program", href: "/startup-program" },
    { label: "Help center", href: "/help" },
    { label: "Automation templates", href: "/templates" },
    { label: "Developers", href: "/developers" },
    { label: "System status", href: "/status" },
    { label: "Hire an expert", href: "/experts" },
    { label: "Downloads", href: "/downloads" },
  ]

  const navItems = [
    { 
      label: "Platform", 
      href: "/platform",
      hasDropdown: true,
      items: platformItems,
    },
    { 
      label: "Resources", 
      href: "/resources",
      hasDropdown: true,
      items: resourcesItems,
    },
    { label: "Customers", href: "/customers" },
    { label: "Pricing", href: "/pricing" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        boxShadow: isScrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Attio Exact Style */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0B0C0E]"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
            <span className="font-jakarta font-semibold text-[#0B0C0E] tracking-tight text-lg lowercase">
              attio
            </span>
          </Link>

          {/* Desktop Navigation - Attio Exact Style */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasDropdown && item.items) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className="text-sm text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter relative group flex items-center gap-1">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {item.label}
                        </motion.span>
                        <ChevronDown className="w-4 h-4 opacity-50" />
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0B0C0E] group-hover:w-full transition-all duration-300" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.items.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.label} asChild>
                          <Link href={dropdownItem.href} className="flex items-center justify-between w-full">
                            <span>{dropdownItem.label}</span>
                            {dropdownItem.badge && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 font-mono">
                                {dropdownItem.badge}
                              </span>
                            )}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter relative group flex items-center gap-1"
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {item.label}
                  </motion.span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0B0C0E] group-hover:w-full transition-all duration-300" />
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons - Attio Exact Style */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 border-[#0B0C0E]/20 rounded-full px-4"
              asChild
            >
              <Link href="/dashboard">Sign in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full px-6"
              asChild
            >
              <Link href="/pricing">Start for free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0B0C0E] p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-[#0B0C0E]/10 py-4 bg-white/95 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter py-2 touch-manipulation block"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.items && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="text-sm text-[#0B0C0E]/50 hover:text-[#0B0C0E]/70 transition-colors font-inter py-1 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-[#0B0C0E]/10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-[#0B0C0E]/70 hover:text-[#0B0C0E] hover:bg-[#0B0C0E]/5 border-[#0B0C0E]/20 touch-manipulation min-h-[44px] rounded-full"
                    asChild
                  >
                    <Link href="/dashboard">Sign in</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 font-semibold rounded-full touch-manipulation min-h-[44px]"
                    asChild
                  >
                    <Link href="/pricing">Start for free</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
