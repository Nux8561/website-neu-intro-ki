"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineContentProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements
  animationNum: number
  timelineRef: React.RefObject<HTMLElement>
  customVariants?: any
}

export function TimelineContent({
  as: Component = "div",
  animationNum,
  timelineRef,
  customVariants,
  className,
  children,
  ...props
}: TimelineContentProps) {
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [20, 0, 0, -20]
  )

  const variants = customVariants || {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
  }

  return (
    <motion.div
      as={Component}
      style={{ opacity, y }}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(className)}
      {...(props as any)}
    >
      {children}
    </motion.div>
  )
}

