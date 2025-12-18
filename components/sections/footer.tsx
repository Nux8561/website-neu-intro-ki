"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Github, ExternalLink, ArrowRight } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

export function Footer() {
  const footerRef = React.useRef<HTMLDivElement>(null)
  const footerInView = useInView(footerRef, { once: true, margin: "-100px" })

  const [email, setEmail] = React.useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
  }

  return (
    <footer
      ref={footerRef}
      className="relative bg-white border-t border-gray-100 w-full overflow-hidden"
    >
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* Massive Watermark Text "Intro KI" */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          className="text-[12rem] leading-none font-bold tracking-tighter text-gray-900/5"
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.3 }}
        >
          Intro KI
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        {/* Main Footer Grid - 5 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={footerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={ENTERPRISE_SPRING}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12"
        >
          {/* Column 1: Brand & Mission */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <IntroKILogo size="md" variant="default" animated={false} />
            </Link>
            <p className="text-[14px] leading-[20px] text-gray-600 mb-6 max-w-xs">
              Das Betriebssystem für Ihre Kundenbeziehungen.
            </p>

            {/* System Status Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={footerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-[12px] leading-[16px] font-medium text-green-700">
                All systems operational
              </span>
            </motion.div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white/80 transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white/80 transition-colors shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white/80 transition-colors shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-[14px] leading-[20px] font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product/data-model"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Data Model
                </Link>
              </li>
              <li>
                <Link
                  href="/product/workflows"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/product/automation"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-[14px] leading-[20px] font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-[14px] leading-[20px] font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors inline-flex items-center gap-1"
                >
                  API Docs
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-[14px] leading-[20px] text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h3 className="text-[14px] leading-[20px] font-semibold text-gray-900 mb-4">
              Bleiben Sie informiert.
            </h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "flex-1 h-10 px-4 rounded-md",
                    "bg-white/50 border border-gray-200",
                    "focus:outline-none focus:border-gray-900 focus:ring-0",
                    "backdrop-blur-sm",
                    "text-[14px] leading-[20px] text-gray-900 placeholder:text-gray-400",
                    "transition-colors"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "h-10 w-10 rounded-md",
                    "bg-black text-white",
                    "hover:bg-gray-800",
                    "flex items-center justify-center",
                    "transition-colors",
                    "shadow-sm"
                  )}
                  aria-label="Newsletter abonnieren"
                >
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-[12px] leading-[16px] text-gray-500">
                Kein Spam. Abmeldung jederzeit möglich.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200"
        >
          <p className="text-[14px] leading-[20px] text-gray-500">
            © {new Date().getFullYear()} IntroKI GmbH. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}