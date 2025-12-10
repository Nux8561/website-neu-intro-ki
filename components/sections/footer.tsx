"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Instagram } from "lucide-react"
import { useInView } from "framer-motion"
import Link from "next/link"

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

  return (
    <footer
      ref={ref}
      className="bg-white border-t border-[#0B0C0E]/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
            {/* Product Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
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
                    <Link
                      href={link.href}
                      className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Resources
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Help Center", href: "/faq" },
                  { label: "Documentation", href: "#" },
                  { label: "API Reference", href: "#" },
                  { label: "Integrations", href: "#" },
                  { label: "Templates", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "About", href: "/about" },
                  { label: "Blog", href: "#" },
                  { label: "Careers", href: "/careers" },
                  { label: "Customers", href: "#" },
                  { label: "Partners", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Privacy Policy", href: "/datenschutz" },
                  { label: "Terms & Conditions", href: "#" },
                  { label: "Impressum", href: "/impressum" },
                  { label: "Cookie Policy", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Support
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Contact", href: "/kontakt" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Status", href: "#" },
                  { label: "Security", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-sm font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-6">
                Follow Us
              </h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/introki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B0C0E]/50 hover:text-[#0B0C0E] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://twitter.com/introki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B0C0E]/50 hover:text-[#0B0C0E] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href="https://instagram.com/introki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B0C0E]/50 hover:text-[#0B0C0E] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-[#0B0C0E]/10"
            variants={itemVariants}
          >
            <p className="text-[#0B0C0E]/50 font-inter text-sm">
              © 2024 IntroKI. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/datenschutz"
                className="text-[#0B0C0E]/50 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-[#0B0C0E]/50 hover:text-[#0B0C0E] transition-colors font-inter text-sm"
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
