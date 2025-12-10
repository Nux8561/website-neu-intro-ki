"use client"

import * as React from "react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

const logos = [
  { src: "https://html.tailus.io/blocks/customers/openai.svg", alt: "OpenAI", height: 24 },
  { src: "https://html.tailus.io/blocks/customers/nvidia.svg", alt: "Nvidia", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/column.svg", alt: "Column", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/github.svg", alt: "GitHub", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/nike.svg", alt: "Nike", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg", alt: "Lemon Squeezy", height: 20 },
  { src: "https://html.tailus.io/blocks/customers/laravel.svg", alt: "Laravel", height: 16 },
  { src: "https://html.tailus.io/blocks/customers/lilly.svg", alt: "Lilly", height: 28 },
]

export function SocialProof() {
  return (
    <section className="py-16 border-y border-[#0B0C0E]/10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6 mb-6 md:mb-0">
            <p className="text-end text-sm text-[#0B0C0E]/50 font-inter">
              Powering the best teams
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
            >
              {logos.map((logo, index) => (
                <div key={index} className="flex">
                  <img
                    className="mx-auto h-auto w-fit dark:invert"
                    src={logo.src}
                    alt={logo.alt}
                    height={logo.height}
                    width="auto"
                  />
                </div>
              ))}
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

