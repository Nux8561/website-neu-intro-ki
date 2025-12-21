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
        "bg-white",
        "border-b-2 border-black",
        "shadow-[0_2px_0_0_rgba(0,0,0,1)]"
      )}
      animate={{
        height: isScrolled ? 56 : 64, // h-14 (56px) when scrolled, h-16 (64px) when not
      }}
      transition={ENTERPRISE_SPRING}
    >
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
                className="text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 rounded border-2 border-transparent hover:border-black px-3 py-1 transition-all"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Industrial Tool Style */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 transition-colors"
            >
              Anmelden
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded px-4 py-2 text-sm font-mono font-bold uppercase tracking-wider transition-all hover:scale-[1.02]"
            >
              Demo buchen
            </Link>
          </div>

          {/* Mobile Menu Button - Industrial Tool Style */}
          <button
            className="md:hidden text-black p-2 -mr-2 border-2 border-transparent hover:border-black rounded transition-all"
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
              className="md:hidden border-t-2 border-black bg-white"
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
                    className="block text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 py-2 px-4 rounded border-2 border-transparent hover:border-black transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t-2 border-black">
                  <Link
                    href="/dashboard"
                    className="text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 py-2 px-4 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Anmelden
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider transition-all"
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
    </motion.nav>
  )
}
