"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Breadcrumbs } from "./breadcrumbs"
import { ENTERPRISE_SPRING, snappySpring } from "@/lib/animations"

interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: Array<{ label: string; href: string }>
  className?: string
  children?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
  children,
}: PageHeaderProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ ...snappySpring, delay: 0.1 }}
      className={`border-b-2 border-black bg-white py-16 md:py-24 ${className || ""}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className="max-w-3xl">
          <h1 className="mb-6 text-[32px] leading-[40px] -tracking-[0.02em] font-medium text-black md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] font-space-grotesk">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-black/80 font-inter leading-relaxed md:text-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </motion.header>
  )
}

