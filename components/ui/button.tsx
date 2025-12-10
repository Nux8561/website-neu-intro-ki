"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium font-jakarta tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0C0E]/20 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-[#0B0C0E] text-white hover:bg-[#0B0C0E]/90 border border-[#0B0C0E]/20 shadow-inner-glow",
        destructive:
          "bg-accent text-white hover:bg-accent-light border border-accent/20",
        outline:
          "border border-[#0B0C0E]/20 bg-[#0B0C0E]/5 hover:bg-[#0B0C0E]/10 hover:border-[#0B0C0E]/20 text-[#0B0C0E]",
        secondary:
          "bg-surface text-[#0B0C0E] border border-[#0B0C0E]/10 hover:border-[#0B0C0E]/20",
        ghost: "hover:bg-[#0B0C0E]/5 text-[#0B0C0E] hover:border-[#0B0C0E]/10 border border-transparent",
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
