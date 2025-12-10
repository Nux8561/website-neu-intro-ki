"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { useInView } from "framer-motion"

export function Footer() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer
      ref={ref}
      className="bg-[#0B0C0E] border-t border-white/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Product Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-white mb-6">
                Product
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Features", href: "/features" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Enterprise", href: "/enterprise" },
                  { label: "Changelog", href: "/changelog" },
                  { label: "Roadmap", href: "/roadmap" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Unternehmen Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-white mb-6">
                Unternehmen
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Karriere", href: "/careers" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "Datenschutz", href: "/datenschutz" },
                  { label: "Kontakt", href: "/kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5"
            variants={itemVariants}
          >
            <p className="text-white/50 font-inter text-sm">
              © 2024 IntroKI. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

