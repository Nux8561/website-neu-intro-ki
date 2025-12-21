"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"
import { MegaDropdown } from "@/components/ui/mega-dropdown"
import { navigationItems, NavItem } from "@/components/navbar/nav-items"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

// Mobile Navigation Menu Component
function MobileNavMenu({
  items,
  onItemClick,
  onClose,
}: {
  items: NavItem[]
  onItemClick: (item: NavItem) => void
  onClose: () => void
}) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set())

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev)
      if (next.has(label)) {
        next.delete(label)
      } else {
        next.add(label)
      }
      return next
    })
  }

  return (
    <div className="flex flex-col py-4 gap-4">
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0
        const isExpanded = expandedItems.has(item.label)

        return (
          <div key={item.label}>
            {hasChildren ? (
              <>
                <button
                  onClick={() => toggleExpanded(item.label)}
                  className="w-full flex items-center justify-between text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 py-2 px-4 rounded border-2 border-transparent hover:border-black transition-all"
                >
                  {item.label}
                  <ChevronDown className={cn("h-3 w-3 transition-transform", isExpanded && "rotate-180")} />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={ENTERPRISE_SPRING}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block text-sm font-inter text-black/80 hover:text-black hover:bg-black/5 py-2 px-4 rounded transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                href={item.href}
                onClick={(e) => {
                  onItemClick(item)
                  if (item.isScroll) {
                    e.preventDefault()
                  }
                }}
                className="block text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 py-2 px-4 rounded border-2 border-transparent hover:border-black transition-all"
              >
                {item.label}
              </Link>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const triggerRefs = React.useRef<Record<string, React.RefObject<HTMLButtonElement>>>({})

  // Initialize refs for each nav item
  navigationItems.forEach((item) => {
    if (!triggerRefs.current[item.label]) {
      triggerRefs.current[item.label] = React.createRef<HTMLButtonElement>()
    }
  })

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
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

  const convertNavItemToDropdownSections = (item: NavItem) => {
    if (!item.children) return []
    
    return [{
      title: item.label,
      items: item.children.map(child => ({
        label: child.label,
        href: child.href,
        description: child.description,
        icon: child.icon,
      }))
    }]
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

          {/* Desktop Navigation with Mega Menus */}
          <div className="hidden md:flex items-center gap-2">
            {navigationItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0
              const isOpen = openDropdown === item.label

              return (
                <div key={item.label} className="relative">
                  {hasChildren ? (
                    <>
                      <button
                        ref={triggerRefs.current[item.label]}
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        className="flex items-center gap-1 text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 rounded border-2 border-transparent hover:border-black px-3 py-1 transition-all"
                      >
                        {item.label}
                        <ChevronDown className={cn("h-3 w-3 transition-transform", isOpen && "rotate-180")} />
                      </button>
                      {isOpen && (
                        <MegaDropdown
                          sections={convertNavItemToDropdownSections(item)}
                          isOpen={isOpen}
                          onClose={() => setOpenDropdown(null)}
                          triggerRef={triggerRefs.current[item.label]}
                        />
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="text-sm font-mono font-bold uppercase tracking-wider text-black hover:text-black/60 hover:bg-black/5 rounded border-2 border-transparent hover:border-black px-3 py-1 transition-all"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Buttons - Industrial Tool Style */}
          <div className="hidden md:flex items-center gap-4">
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
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
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
              <MobileNavMenu
                items={navigationItems}
                onItemClick={(item) => {
                  handleNavClick({ preventDefault: () => {} } as any, item)
                  setIsMobileMenuOpen(false)
                }}
                onClose={() => setIsMobileMenuOpen(false)}
              />
              <div className="flex flex-col gap-3 pt-4 border-t-2 border-black">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center border-2 border-black bg-black text-white hover:bg-white hover:text-black rounded px-4 py-2.5 text-sm font-mono font-bold uppercase tracking-wider transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Demo buchen
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
