"use client"

import * as React from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap-utils"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({
  children,
  className,
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const multiplier = direction === "up" ? -1 : 1

    gsap.to(element, {
      y: () => multiplier * speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [speed, direction])

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  )
}

