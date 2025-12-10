"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

interface EmptyStateProps {
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
  icon?: React.ReactNode
}

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  icon,
}: EmptyStateProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {icon && (
        <div className="mb-6 text-white/20">{icon}</div>
      )}
      <h2 className="text-2xl font-jakarta font-medium tracking-tight text-white mb-2">
        {title}
      </h2>
      <p className="text-white/70 font-inter mb-8 max-w-md text-center">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Link href={actionHref}>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700 rounded-full px-6"
          >
            <Plus className="mr-2 h-4 w-4" />
            {actionLabel}
          </Button>
        </Link>
      )}
    </motion.div>
  )
}

