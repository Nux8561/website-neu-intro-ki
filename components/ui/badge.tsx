import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-accent/30 bg-surface text-accent-light",
        secondary:
          "border-[#0B0C0E]/10 bg-surface text-[#0B0C0E]/70",
        destructive:
          "border-accent/30 bg-surface text-accent",
        outline: "border-[#0B0C0E]/10 text-[#0B0C0E] bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
