"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Linkedin, Twitter, Instagram, Github } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"
import { AttioContainer } from "@/components/providers/attio-theme-provider"

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
      className="bg-white border-t border-attio-subtle"
    >
      <AttioContainer size="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-5 gap-8 py-12">
            {/* Logo & Description */}
            <motion.div variants={itemVariants} className="col-span-1">
              <Link href="/" className="inline-block mb-3">
                <IntroKILogo size="md" variant="default" animated={false} />
              </Link>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
                Das KI-native CRM für moderne Sales-Teams.
              </p>
            </motion.div>

            {/* Footer Columns */}
            {footerColumns.map((column) => (
              <motion.div key={column.title} variants={itemVariants}>
                <h3 className="text-xs font-inter font-medium text-attio-text mb-3">
                  {column.title}
                </h3>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs font-inter text-gray-500 hover:text-attio-text transition-colors duration-attio ease-attio-ease-out block"
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
            className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-attio-subtle"
            variants={itemVariants}
          >
            <p className="text-xs font-inter text-gray-500">
              © {new Date().getFullYear()} IntroKI GmbH. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-50 border border-attio-subtle flex items-center justify-center text-gray-500 hover:text-attio-text hover:border-gray-300 transition-all duration-attio ease-attio-ease-out"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-50 border border-attio-subtle flex items-center justify-center text-gray-500 hover:text-attio-text hover:border-gray-300 transition-all duration-attio ease-attio-ease-out"
                aria-label="Twitter"
              >
                <Twitter className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-50 border border-attio-subtle flex items-center justify-center text-gray-500 hover:text-attio-text hover:border-gray-300 transition-all duration-attio ease-attio-ease-out"
                aria-label="GitHub"
              >
                <Github className="h-3.5 w-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AttioContainer>
    </footer>
  )
}
