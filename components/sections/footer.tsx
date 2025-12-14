"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Github } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"

export function Footer() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  }

  const footerColumns = [
    {
      title: "Platform",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Changelog", href: "/changelog" },
        { label: "Security", href: "/security" },
        { label: "Downloads", href: "/downloads" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Customers", href: "/customers" },
        { label: "Blog", href: "/blog" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/kontakt" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Developers", href: "/developers" },
        { label: "Templates", href: "/templates" },
        { label: "Status", href: "/status" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/datenschutz" },
        { label: "Terms", href: "/impressum" },
      ],
    },
  ]

  return (
    <footer
      ref={ref}
      className="bg-surface border-t border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
            {/* Logo & Description */}
            <motion.div variants={itemVariants} className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 md:mb-0">
              <Link href="/" className="inline-block mb-3 sm:mb-4">
                <IntroKILogo size="md" variant="default" animated={false} />
              </Link>
              <p className="text-xs sm:text-sm text-text-muted max-w-xs">
                Das KI-native CRM für moderne Sales-Teams. Deep Research, Live Coaching und intelligentes Lead Scoring.
              </p>
            </motion.div>

            {/* Footer Columns */}
            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={itemVariants} className="mb-4 md:mb-0">
                <h3 className="text-xs sm:text-sm font-medium text-text-primary mb-3 sm:mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors touch-manipulation block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border"
            variants={itemVariants}
          >
            <p className="text-xs sm:text-sm text-text-muted text-center sm:text-left">
              © {new Date().getFullYear()} IntroKI GmbH. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface transition-colors touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface transition-colors touch-manipulation"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
              <a
                href="https://github.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-surface-elevated flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface transition-colors touch-manipulation"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
