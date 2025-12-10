"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      className={`flex items-center gap-2 text-sm font-inter ${className || ""}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const isActive = isLast

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-[#0B0C0E]/70 hover:text-[#0B0C0E] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={isActive ? "text-[#0B0C0E] font-medium" : "text-[#0B0C0E]/70"}
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <ChevronRight className="h-4 w-4 text-[#0B0C0E]/30" />
            )}
          </React.Fragment>
        )
      })}
    </nav>
  )
}

