"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IntroKILogo } from "@/components/ui/introki-logo"

// Attio Spring Physics
const attioTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17,
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  // Navigation Items - B2B Enterprise Focus
  const navItems = [
    { label: "Product", href: "/product" },
    { label: "Solutions", href: "/solutions" },
    { label: "Pricing", href: "/pricing" },
    { 
      label: "Resources", 
      href: "/resources",
      hasDropdown: true,
      dropdownItems: [
        { label: "Help Center", href: "/help" },
        { label: "API Docs", href: "/developers" },
        { label: "Blog", href: "/blog" },
        { label: "Templates", href: "/templates" },
      ]
    },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[100] h-16 bg-white border-b border-gray-200"
      initial={{ y: 0 }}
      animate={{
        backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 1)",
        backdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
      }}
      transition={attioTransition}
      style={{
        WebkitBackdropFilter: isScrolled ? "blur(12px) saturate(180%)" : "none",
      }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <IntroKILogo size="md" variant="default" animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        <span>{item.label}</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="start" 
                      className="w-48 p-2 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg"
                      sideOffset={8}
                    >
                      {item.dropdownItems.map((dropdownItem) => (
                        <DropdownMenuItem 
                          key={dropdownItem.label} 
                          asChild
                          className="px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <Link 
                            href={dropdownItem.href} 
                            className="text-sm text-gray-600 hover:text-gray-900 block"
                          >
                            {dropdownItem.label}
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
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* CTA Buttons - B2B Enterprise Focus */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2 text-sm font-medium transition-all duration-attio ease-attio-ease-out hover:scale-[1.02]"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" strokeWidth={1.5} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-200 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={attioTransition}
            >
              <div className="flex flex-col py-4 gap-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-sm font-medium text-gray-600 hover:text-gray-900 py-2 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && item.dropdownItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block text-sm text-gray-500 hover:text-gray-900 py-1 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center bg-black text-white hover:bg-gray-800 rounded-md px-4 py-2.5 text-sm font-medium transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book a demo
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
