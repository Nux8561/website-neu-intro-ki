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
import { Menu, X, ChevronDown, Users, FileText, Mail, Smartphone, Shield, BookOpen, HelpCircle, Code, Download, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import { IntroKILogo } from "@/components/ui/introki-logo"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const platformItems: Array<{ label: string; href: string; badge?: string; icon?: React.ComponentType<{ className?: string }> }> = [
    { label: "Refer a team", href: "/refer", badge: "New", icon: Users },
    { label: "Changelog", href: "/changelog", icon: FileText },
    { label: "Gmail extension", href: "/gmail-extension", icon: Mail },
    { label: "iOS app", href: "/ios-app", icon: Smartphone },
    { label: "Android app", href: "/android-app", icon: Smartphone },
    { label: "Security", href: "/security", icon: Shield },
  ]

  const resourcesItems: Array<{ label: string; href: string; badge?: string; icon?: React.ComponentType<{ className?: string }> }> = [
    { label: "Startup program", href: "/startup-program", icon: TrendingUp },
    { label: "Help center", href: "/help", icon: HelpCircle },
    { label: "Automation templates", href: "/templates", icon: Zap },
    { label: "Developers", href: "/developers", icon: Code },
    { label: "System status", href: "/status", icon: Shield },
    { label: "Hire an expert", href: "/experts", icon: Users },
    { label: "Downloads", href: "/downloads", icon: Download },
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
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled 
          ? "rgba(255, 255, 255, 0.8)" 
          : "rgba(255, 255, 255, 1)",
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: isScrolled 
          ? "1px solid rgba(0, 0, 0, 0.08)" 
          : "1px solid transparent",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Professional IntroKI Logo */}
          <Link href="/" className="flex items-center">
            <IntroKILogo size="md" variant="default" animated={true} />
          </Link>

          {/* Desktop Navigation - IntroKI Style */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasDropdown && item.items) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        className="text-sm text-black/70 hover:text-black transition-colors font-inter relative group flex items-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <span>{item.label}</span>
                        <motion.div
                          animate={{ rotate: 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-64 p-2 mt-2 border-black/10 shadow-xl bg-white rounded-xl"
                      sideOffset={8}
                    >
                      <div className="py-1">
                        {item.items.map((dropdownItem) => {
                          const Icon = dropdownItem.icon
                          return (
                            <DropdownMenuItem 
                              key={dropdownItem.label} 
                              asChild
                              className="px-3 py-2.5 rounded-lg hover:bg-black/5 cursor-pointer transition-all group/item"
                            >
                              <Link 
                                href={dropdownItem.href} 
                                className="flex items-center justify-between w-full text-sm gap-3"
                              >
                                <div className="flex items-center gap-3 flex-1 min-w-0">
                                  {Icon && (
                                    <Icon className="h-4 w-4 text-black/50 group-hover/item:text-black/70 transition-colors flex-shrink-0" />
                                  )}
                                  <span className="text-black/70 group-hover/item:text-black transition-colors font-inter truncate">
                                    {dropdownItem.label}
                                  </span>
                                </div>
                                {dropdownItem.badge && (
                                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-600 font-mono flex-shrink-0">
                                    {dropdownItem.badge}
                                  </span>
                                )}
                              </Link>
                            </DropdownMenuItem>
                          )
                        })}
                      </div>
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
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300" />
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons - IntroKI Style */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="text-black/70 hover:text-black hover:bg-black/5 border-black/20 rounded-full px-4"
              asChild
            >
              <Link href="/dashboard">Anmelden</Link>
            </Button>
            <Button
              size="sm"
              className="bg-black text-white hover:bg-black/90 font-semibold rounded-full px-6"
              asChild
            >
              <Link href="/pricing">Kostenlos starten</Link>
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
                    className="w-full text-black/70 hover:text-black hover:bg-black/5 border-black/20 touch-manipulation min-h-[44px] rounded-full"
                    asChild
                  >
                    <Link href="/dashboard">Anmelden</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-black text-white hover:bg-black/90 font-semibold rounded-full touch-manipulation min-h-[44px]"
                    asChild
                  >
                    <Link href="/pricing">Kostenlos starten</Link>
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
