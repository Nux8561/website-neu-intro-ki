"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "text" | "avatar" | "card" | "table"
}) {
  const baseClasses = "relative overflow-hidden rounded-md bg-surface"
  
  const variantClasses = {
    default: "h-4 w-full",
    text: "h-4 w-full",
    avatar: "h-10 w-10 rounded-full",
    card: "h-32 w-full rounded-xl",
    table: "h-12 w-full rounded-lg",
  }

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

// Predefined skeleton components for common patterns
function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? "w-3/4" : "w-full"}
        />
      ))}
    </div>
  )
}

function SkeletonAvatar({ className }: { className?: string }) {
  return <Skeleton variant="avatar" className={className} />
}

function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4 p-4", className)}>
      <Skeleton variant="card" />
      <SkeletonText lines={2} />
    </div>
  )
}

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard }

