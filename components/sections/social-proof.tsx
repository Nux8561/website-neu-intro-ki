"use client"

import * as React from "react"
import { Marquee } from "@/components/ui/marquee"

const logos = [
  { name: "OpenAI", logo: "🤖" },
  { name: "Coca-Cola", logo: "🥤" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Google", logo: "🔍" },
  { name: "Amazon", logo: "📦" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "👤" },
  { name: "Tesla", logo: "⚡" },
]

export function SocialProof() {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-400 font-inter mb-12">
          Vertraut von führenden Unternehmen weltweit
        </p>
        <Marquee duration={30}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 px-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <span className="text-2xl mr-2">{logo.logo}</span>
              <span className="text-sm text-slate-400 font-inter">
                {logo.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

