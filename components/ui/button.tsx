"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-jakarta tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-accent text-background hover:bg-accent-light border border-accent/20 shadow-inner-glow",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 border border-red-500/20",
        outline:
          "border border-border bg-surface hover:bg-surface-elevated hover:border-border-active text-text-primary",
        secondary:
          "bg-surface text-text-primary border border-border-subtle hover:border-border-active",
        ghost: "hover:bg-white/5 text-text-primary hover:border-border-subtle border border-transparent",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-11 rounded-lg px-8",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const MotionButton = motion("button")

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, type, disabled, onClick, onMouseEnter, onMouseLeave, children, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    // Use motion("button") instead of motion.button to avoid TypeScript drag handler conflicts
    // This approach avoids the type conflict between HTML's onDrag and Framer Motion's onDrag
    // We don't spread props to avoid drag handler conflicts
    return (
      <MotionButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        {children}
      </MotionButton>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
