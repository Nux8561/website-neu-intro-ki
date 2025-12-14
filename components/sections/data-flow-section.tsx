"use client"

import * as React from "react"
import { LazyMotion, domAnimation } from "framer-motion"
import { DataFlowAnimation } from "@/components/ui/data-flow-animation"

export function DataFlowSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 12, 14, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 12, 14, 0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />
      
      {/* Content */}
      <LazyMotion features={domAnimation}>
        <div className="relative h-full w-full flex items-center justify-center p-8">
          <div className="w-full max-w-7xl h-full">
            <DataFlowAnimation />
          </div>
        </div>
      </LazyMotion>
    </section>
  )
}

