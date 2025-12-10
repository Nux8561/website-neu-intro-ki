"use client"

import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export function ChartSkeleton({ height = 300 }: { height?: number }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <div className="space-y-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-32" />
        <div style={{ height }} className="relative">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    </div>
  )
}

export function MetricCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-8 w-32 mb-4" />
      <Skeleton className="h-3 w-16" />
    </div>
  )
}

export function MetricGridSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <MetricCardSkeleton key={i} />
      ))}
    </div>
  )
}

