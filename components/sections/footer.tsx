"use client"

import * as React from "react"
import Link from "next/link"
import { Linkedin, Twitter, Github, ExternalLink } from "lucide-react"
import { IntroKILogo } from "@/components/ui/introki-logo"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 w-full">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Grid - 5 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Column 1: Logo & Mission + Social */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <IntroKILogo size="md" variant="default" animated={false} />
            </Link>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed max-w-xs">
              The AI-native CRM for modern sales teams. Built for enterprise efficiency.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/company/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/introki"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/product/data-model"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Data Model
                </Link>
              </li>
              <li>
                <Link
                  href="/product/workflows"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Workflows
                </Link>
              </li>
              <li>
                <Link
                  href="/product/automation"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/help"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors inline-flex items-center gap-1"
                >
                  API Docs
                  <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-sm text-gray-500 hover:text-gray-900 block transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} IntroKI GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
