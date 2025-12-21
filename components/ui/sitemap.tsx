"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ENTERPRISE_SPRING } from "@/lib/animations"
import { navigationItems } from "@/components/navbar/nav-items"

interface SitemapCategory {
  title: string
  items: Array<{
    label: string
    href: string
    description?: string
  }>
}

export function Sitemap() {
  const categories: SitemapCategory[] = React.useMemo(() => {
    return navigationItems.map((item) => ({
      title: item.label,
      items: item.children?.map((child) => ({
        label: child.label,
        href: child.href,
        description: child.description,
      })) || [],
    }))
  }, [])

  return (
    <div className="bg-white py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={ENTERPRISE_SPRING}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] font-space-grotesk">
            Sitemap
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-black/80 font-inter leading-relaxed">
            Alle Seiten im Überblick
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ENTERPRISE_SPRING, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h2 className="text-lg font-space-grotesk font-semibold text-black mb-4">
                {category.title}
              </h2>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block text-sm text-black/60 hover:text-black transition-colors font-inter py-1"
                    >
                      {item.label}
                    </Link>
                    {item.description && (
                      <p className="text-xs text-black/40 font-inter mt-0.5">
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

