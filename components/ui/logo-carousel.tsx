"use client"

import * as React from "react"
import Image from "next/image"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"
import { cn } from "@/lib/utils"

export interface LogoItem {
  name: string
  imagePath?: string // Path to logo image in public/logos/
  fallbackSvg?: React.ReactNode // Fallback SVG if image not available
  width?: number
  height?: number
  grayscale?: boolean // Apply grayscale filter (default: true)
}

interface LogoCarouselProps {
  logos: LogoItem[]
  title?: string
  className?: string
  speed?: number
  speedOnHover?: number
  gap?: number
  grayscale?: boolean // Default grayscale for all logos
  showTitle?: boolean
}

export function LogoCarousel({
  logos,
  title = "Vertraut von führenden Unternehmen",
  className,
  speed = 40,
  speedOnHover = 20,
  gap = 80,
  grayscale: defaultGrayscale = true,
  showTitle = true,
}: LogoCarouselProps) {
  return (
    <section className={cn("py-16 border-y border-[#0B0C0E]/10 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          {showTitle && (
            <div className="md:max-w-44 md:border-r md:pr-6 mb-6 md:mb-0 w-full md:w-auto">
              <p className="text-center md:text-end text-sm text-[#0B0C0E]/50 font-inter">
                {title}
              </p>
            </div>
          )}
          <div className={cn(
            "relative py-6 w-full",
            showTitle ? "md:w-[calc(100%-11rem)]" : "w-full"
          )}>
            <InfiniteSlider
              speedOnHover={speedOnHover}
              speed={speed}
              gap={gap}
            >
              {logos.map((logo, index) => (
                <LogoItem
                  key={`${logo.name}-${index}`}
                  logo={logo}
                  grayscale={logo.grayscale ?? defaultGrayscale}
                />
              ))}
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoItem({ logo, grayscale }: { logo: LogoItem; grayscale: boolean }) {
  const [imageError, setImageError] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  
  const width = logo.width ?? 120
  const height = logo.height ?? 40

  return (
    <div
      className="flex items-center justify-center px-4"
      style={{ minWidth: `${width}px`, height: `${height}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "transition-all duration-300 flex items-center justify-center",
          grayscale && !isHovered
            ? "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
            : "opacity-80 hover:opacity-100"
        )}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {logo.imagePath && !imageError ? (
          <Image
            src={logo.imagePath}
            alt={logo.name}
            width={width}
            height={height}
            className="object-contain max-w-full max-h-full"
            onError={() => setImageError(true)}
            quality={90}
            loading="lazy"
          />
        ) : logo.fallbackSvg ? (
          <div className="w-full h-full flex items-center justify-center">
            {logo.fallbackSvg}
          </div>
        ) : (
          <div className="text-[#0B0C0E]/40 font-inter text-sm font-medium">
            {logo.name}
          </div>
        )}
      </div>
    </div>
  )
}

