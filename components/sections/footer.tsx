"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"
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
        damping: 17,
      },
    },
  }

  const footerColumns = [
    {
      title: "Platform",
      links: [
        { label: "Refer a team", href: "/refer", badge: "New" },
        { label: "Changelog", href: "/changelog" },
        { label: "Gmail extension", href: "/gmail-extension" },
        { label: "iOS app", href: "/ios-app" },
        { label: "Android app", href: "/android-app" },
        { label: "Security", href: "/security" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Customers", href: "/customers" },
        { label: "Announcements", href: "/announcements" },
        { label: "Engineering blog", href: "/blog", badge: "New" },
        { label: "Careers", href: "/careers" },
        { label: "Manifesto", href: "/manifesto" },
        { label: "Become a partner", href: "/partners" },
      ],
    },
    {
      title: "Import from",
      links: [
        { label: "Salesforce", href: "/import/salesforce" },
        { label: "Hubspot", href: "/import/hubspot" },
        { label: "Pipedrive", href: "/import/pipedrive" },
        { label: "Zoho", href: "/import/zoho" },
        { label: "Excel", href: "/import/excel" },
        { label: "CSV", href: "/import/csv" },
      ],
    },
    {
      title: "IntroKI for",
      links: [
        { label: "Startups", href: "/for/startups" },
        { label: "Deal flow", href: "/for/deal-flow" },
      ],
    },
    {
      title: "Apps",
      links: [
        { label: "Gmail", href: "/apps/gmail" },
        { label: "Outlook", href: "/apps/outlook" },
        { label: "Segment", href: "/apps/segment" },
        { label: "Mailchimp", href: "/apps/mailchimp" },
        { label: "Slack", href: "/apps/slack" },
        { label: "Outreach", href: "/apps/outreach" },
        { label: "Mixmax", href: "/apps/mixmax" },
        { label: "Typeform", href: "/apps/typeform" },
        { label: "Zapier", href: "/apps/zapier" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Startup program", href: "/startup-program" },
        { label: "Help center", href: "/help" },
        { label: "Automation templates", href: "/templates" },
        { label: "Developers", href: "/developers" },
        { label: "System status", href: "/status" },
        { label: "Hire an expert", href: "/experts" },
        { label: "Downloads", href: "/downloads" },
      ],
    },
  ]

  return (
    <footer
      ref={ref}
      className="bg-white border-t border-black/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={itemVariants}>
                <h3 className="text-sm font-jakarta font-medium tracking-tight text-black mb-6">
                  {column.title}
                </h3>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-black/70 hover:text-black transition-colors font-inter text-sm flex items-center gap-2"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-xs px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-600 font-mono">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-black/10"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/" className="flex items-center">
                <IntroKILogo size="sm" variant="default" animated={false} />
              </Link>
              <p className="text-black/50 font-inter text-sm">
                © 2025 IntroKI GmbH. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black/50 hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <Link
                href="/datenschutz"
                className="text-black/50 hover:text-black transition-colors font-inter text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/impressum"
                className="text-black/50 hover:text-black transition-colors font-inter text-sm"
              >
                Terms & Conditions
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
