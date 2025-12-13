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
    { label: "Features", href: "/features", icon: Zap },
    { label: "Platform", href: "/platform", icon: Code },
    { label: "Security", href: "/security", icon: Shield },
    { label: "Changelog", href: "/changelog", icon: FileText },
    { label: "Downloads", href: "/downloads", icon: Download },
  ]

  const resourcesItems: Array<{ label: string; href: string; badge?: string; icon?: React.ComponentType<{ className?: string }> }> = [
    { label: "Help center", href: "/help", icon: HelpCircle },
    { label: "Developers", href: "/developers", icon: Code },
    { label: "Blog", href: "/blog", icon: BookOpen },
    { label: "Templates", href: "/templates", icon: FileText },
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
          ? "rgba(255, 255, 255, 0.9)" 
          : "rgba(255, 255, 255, 1)",
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
        borderBottom: isScrolled 
          ? "1px solid rgba(11, 12, 14, 0.08)" 
          : "1px solid transparent",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <IntroKILogo size="md" variant="default" animated={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasDropdown && item.items) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        className="text-sm text-text-secondary hover:text-text-primary transition-colors font-inter relative group flex items-center gap-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 text-text-muted group-hover:text-text-secondary transition-colors" />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-56 p-2 mt-2 bg-white border border-border shadow-lg rounded-xl"
                      sideOffset={8}
                    >
                      {item.items.map((dropdownItem) => {
                        const Icon = dropdownItem.icon
                        return (
                          <DropdownMenuItem 
                            key={dropdownItem.label} 
                            asChild
                            className="px-3 py-2.5 rounded-lg hover:bg-surface cursor-pointer transition-colors"
                          >
                            <Link 
                              href={dropdownItem.href} 
                              className="flex items-center gap-3 w-full text-sm"
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 text-text-muted" />
                              )}
                              <span className="text-text-secondary hover:text-text-primary transition-colors font-inter">
                                {dropdownItem.label}
                              </span>
                              {dropdownItem.badge && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue font-medium ml-auto">
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </Link>
                          </DropdownMenuItem>
                        )
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors font-inter"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-text-secondary hover:text-text-primary hover:bg-surface"
              asChild
            >
              <Link href="/dashboard">Sign in</Link>
            </Button>
            <Button
              size="sm"
              className="bg-brand text-text-inverse hover:bg-brand-light font-medium rounded-lg px-4"
              asChild
            >
              <Link href="/pricing">Start for free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2 -mr-2 touch-manipulation"
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
              className="md:hidden border-t border-border py-4 bg-white"
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
                      className="text-text-secondary hover:text-text-primary transition-colors font-inter py-2 touch-manipulation block"
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
                            className="text-text-muted hover:text-text-secondary transition-colors font-inter py-1 block text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-text-secondary hover:text-text-primary border-border touch-manipulation min-h-[44px]"
                    asChild
                  >
                    <Link href="/dashboard">Sign in</Link>
                  </Button>
                  <Button
                    size="sm"
                    className="w-full bg-brand text-text-inverse hover:bg-brand-light font-medium touch-manipulation min-h-[44px]"
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
