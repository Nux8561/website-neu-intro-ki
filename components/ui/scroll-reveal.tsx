"use client"

import * as React from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  start?: string
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 1,
  start = "top 80%",
  once = true,
}: ScrollRevealProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const offset = direction === "up" ? 50 : direction === "down" ? -50 : direction === "left" ? 50 : -50
    const axis = direction === "up" || direction === "down" ? "y" : "x"

    gsap.fromTo(
      element,
      {
        opacity: 0,
        [axis]: offset,
      },
      {
        opacity: 1,
        [axis]: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [delay, direction, duration, start, once])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}

