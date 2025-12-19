"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  // Navigation Items - B2B Enterprise Focus (nur existierende Seiten)
  const navItems = [
    { 
      label: "Features", 
      href: "#features",
      isScroll: true
    },
    { 
      label: "Team", 
      href: "/team"
    },
    { 
      label: "Kontakt", 
      href: "/kontakt"
    },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.isScroll) {
      e.preventDefault()
      const targetId = item.href.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <motion.nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50",
        "bg-white/60 backdrop-blur-xl",
        "border-b border-white/50",
        "shadow-sm",
        "relative overflow-hidden"
      )}
      animate={{
        height: isScrolled ? 56 : 64, // h-14 (56px) when scrolled, h-16 (64px) when not
      }}
      transition={ENTERPRISE_SPRING}
    >
      {/* Animierter Hintergrund */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(71, 85, 105, 0.1) 49%, rgba(71, 85, 105, 0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(71, 85, 105, 0.1) 49%, rgba(71, 85, 105, 0.1) 51%, transparent 52%)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10">
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <IntroKILogo size="md" variant="default" animated={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-full px-3 py-1 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - B2B Enterprise Focus */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Anmelden
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 rounded-md px-4 py-2 text-sm font-medium transition-all shadow-attio-sm hover:scale-[1.02]"
            >
              Demo buchen
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
              className="md:hidden border-t border-white/50 bg-white/60 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={ENTERPRISE_SPRING}
            >
              <div className="flex flex-col py-4 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item)
                      setIsMobileMenuOpen(false)
                    }}
                    className="block text-sm font-medium text-slate-600 hover:text-slate-900 py-2 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Anmelden
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 rounded-md px-4 py-2.5 text-sm font-medium transition-all shadow-attio-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Demo buchen
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </motion.nav>
  )
}
