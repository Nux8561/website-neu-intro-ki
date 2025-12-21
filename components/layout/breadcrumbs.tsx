"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const pathname = usePathname()
  const [breadcrumbs, setBreadcrumbs] = React.useState<BreadcrumbItem[]>([])

  React.useEffect(() => {
    if (items) {
      setBreadcrumbs(items)
      return
    }

    // Auto-generate breadcrumbs from pathname
    const pathSegments = pathname.split("/").filter(Boolean)
    const generated: BreadcrumbItem[] = [
      { label: "Home", href: "/" },
    ]

    let currentPath = ""
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
      generated.push({ label, href: currentPath })
    })

    setBreadcrumbs(generated)
  }, [pathname, items])

  if (breadcrumbs.length <= 1) return null

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center gap-2 text-sm", className)}
    >
      <ol className="flex items-center gap-2">
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <li key={item.href} className="flex items-center gap-2">
              {index === 0 ? (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-black/60 hover:text-black transition-colors"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Home</span>
                </Link>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4 text-black/40" />
                  {isLast ? (
                    <span className="font-space-grotesk font-medium text-black">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-black/60 hover:text-black transition-colors font-inter"
                    >
                      {item.label}
                    </Link>
                  )}
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

