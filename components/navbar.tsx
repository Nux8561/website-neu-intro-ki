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
import { MegaDropdown, IconComponents } from "@/components/ui/mega-dropdown"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)
  const platformTriggerRef = React.useRef<HTMLButtonElement>(null)
  const resourcesTriggerRef = React.useRef<HTMLButtonElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Platform Mega Dropdown Sections - Using exact same images as Gallery
  const platformSections = [
    {
      title: "CRM PLATFORM",
      items: [
        {
          label: "Data model",
          href: "/platform/data-model",
          description: "Sync and enrich your data",
          icon: IconComponents.DataModel,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=80"
              alt="Company Agent"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
        {
          label: "Productivity & collaboration",
          href: "/platform/productivity",
          description: "Context for your team operations",
          icon: IconComponents.Productivity,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1754769440490-2eb64d715775?w=800&auto=format&fit=crop&q=80"
              alt="People Agent"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
        {
          label: "AI",
          href: "/platform/ai",
          description: "Native to your CRM",
          icon: IconComponents.AI,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=80"
              alt="AI Agent"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
        {
          label: "Apps & integrations",
          href: "/platform/integrations",
          description: "Connect all your favorite tools",
          icon: IconComponents.Apps,
          visualization: (
            <Image
              src="https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=800&auto=format&fit=crop&q=80"
              alt="Validation Agent"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "AUTOMATIONS",
      items: [
        {
          label: "Workflows",
          href: "/platform/workflows",
          description: "Automate any process",
          icon: IconComponents.Workflows,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=800&auto=format&fit=crop&q=80"
              alt="Research 1"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
        {
          label: "Sequences",
          href: "/platform/sequences",
          description: "Personalized outreach",
          icon: IconComponents.Sequences,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=800&auto=format&fit=crop&q=80"
              alt="Research 2"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "INSIGHTS",
      items: [
        {
          label: "Call intelligence",
          href: "/platform/call-intelligence",
          description: "Record and analyze meetings",
          icon: IconComponents.CallIntelligence,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1725878746053-407492aa4034?w=800&auto=format&fit=crop&q=80"
              alt="Research 3"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
        {
          label: "Reporting",
          href: "/platform/reporting",
          description: "Insights in real time",
          icon: IconComponents.Reporting,
          visualization: (
            <Image
              src="https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=800&auto=format&fit=crop&q=80"
              alt="Research 4"
              fill
              className="rounded-lg object-cover"
            />
          ),
        },
      ],
    },
    {
      title: "DEVELOPERS",
      items: [
        {
          label: "Developer Platform",
          href: "/developers",
          description: "Build with the IntroKI API and SDK",
          icon: IconComponents.DeveloperPlatform,
        },
      ],
    },
  ]

  const platformGetStartedItems = [
    { label: "IntroKI 101", href: "/getting-started" },
    { label: "Hire an expert", href: "/experts" },
  ]

  const platformTabs = [
    { label: "Data", href: "/platform/data" },
    { label: "Workflows", href: "/platform/workflows" },
    { label: "Reporting", href: "/platform/reporting" },
  ]

  // Resources Dropdown (simpler)
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
      isMega: true,
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
              if (item.hasDropdown && item.isMega && item.label === "Platform") {
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown("platform")}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <motion.button
                      ref={platformTriggerRef}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors font-inter relative group flex items-center gap-1"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className={openDropdown === "platform" ? "text-text-primary" : ""}>
                        {item.label}
                      </span>
                      <ChevronDown 
                        className={`w-4 h-4 text-text-muted group-hover:text-text-secondary transition-transform ${
                          openDropdown === "platform" ? "rotate-180" : ""
                        }`}
                      />
                    </motion.button>
                    <MegaDropdown
                      sections={platformSections}
                      getStartedItems={platformGetStartedItems}
                      tabs={platformTabs}
                      isOpen={openDropdown === "platform"}
                      onClose={() => setOpenDropdown(null)}
                      triggerRef={platformTriggerRef}
                    />
                  </div>
                )
              }
              
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
