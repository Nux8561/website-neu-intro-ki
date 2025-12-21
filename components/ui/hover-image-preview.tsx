"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Image from "next/image"

/**
 * Preview data for Intro KI Features
 * Replace with your actual data structure
 */
const previewData = {
  research: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=320&fit=crop",
    title: "Automatische Recherche",
    subtitle: "60 Sekunden statt 60 Minuten",
  },
  signals: {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=560&h=320&fit=crop",
    title: "Proaktive Signale",
    subtitle: "Dein CRM sagt dir, was zu tun ist",
  },
  priorities: {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=560&h=320&fit=crop",
    title: "Klare Prioritäten",
    subtitle: "Die ersten 20 Calls sind die besten",
  },
}

/**
 * HoverLink Component
 * 
 * A text link that triggers preview on hover
 */
const HoverLink = ({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string
  children: React.ReactNode
  onHoverStart: (key: string, e: React.MouseEvent) => void
  onHoverMove: (e: React.MouseEvent) => void
  onHoverEnd: () => void
}) => {
  return (
    <span
      className="hover-link cursor-pointer font-space-grotesk font-bold text-black relative inline-block transition-colors"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </span>
  )
}

/**
 * PreviewCard Component
 * 
 * Displays a floating card with image and text preview
 */
const PreviewCard = ({
  data,
  position,
  isVisible,
  cardRef,
}: {
  data: (typeof previewData)[keyof typeof previewData] | null
  position: { x: number; y: number }
  isVisible: boolean
  cardRef: React.RefObject<HTMLDivElement>
}) => {
  if (!data) return null

  return (
    <div
      ref={cardRef}
      className={`preview-card fixed pointer-events-none z-[1000] transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="preview-card-inner bg-white border-2 border-black rounded-2xl p-2 shadow-[8px_8px_0_0_rgba(0,0,0,1)] overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          width={288}
          height={200}
          className="preview-card-image w-full h-auto rounded-xl object-cover"
        />
        <div className="preview-card-title px-2 pt-3 pb-2 text-sm font-space-grotesk font-semibold text-black">
          {data.title}
        </div>
        <div className="preview-card-subtitle px-2 pb-2 text-xs font-inter text-black/70">
          {data.subtitle}
        </div>
      </div>
    </div>
  )
}

/**
 * HoverPreview Component
 * 
 * Main component that displays text content with hoverable links
 * that show preview cards on hover.
 */
export function HoverImagePreview() {
  const [activePreview, setActivePreview] = useState<(typeof previewData)[keyof typeof previewData] | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Preload all images on component mount for better performance
  useEffect(() => {
    Object.entries(previewData).forEach(([, data]) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.src = data.image
    })
  }, [])

  /**
   * Updates the position of the preview card based on mouse position
   * Includes boundary checks to keep card within viewport
   */
  const updatePosition = useCallback((e: React.MouseEvent | MouseEvent) => {
    const cardWidth = 300
    const cardHeight = 250
    const offsetY = 20

    let x = e.clientX - cardWidth / 2
    let y = e.clientY - cardHeight - offsetY

    // Keep card within horizontal bounds
    if (x + cardWidth > window.innerWidth - 20) {
      x = window.innerWidth - cardWidth - 20
    }
    if (x < 20) {
      x = 20
    }

    // If card would go above viewport, position below cursor instead
    if (y < 20) {
      y = e.clientY + offsetY
    }

    setPosition({ x, y })
  }, [])

  /**
   * Handles the start of hover interaction
   */
  const handleHoverStart = useCallback(
    (key: string, e: React.MouseEvent) => {
      setActivePreview(previewData[key as keyof typeof previewData])
      setIsVisible(true)
      updatePosition(e)
    },
    [updatePosition],
  )

  /**
   * Handles mouse movement during hover
   */
  const handleHoverMove = useCallback(
    (e: React.MouseEvent) => {
      if (isVisible) {
        updatePosition(e)
      }
    },
    [isVisible, updatePosition],
  )

  /**
   * Handles the end of hover interaction
   */
  const handleHoverEnd = useCallback(() => {
    setIsVisible(false)
  }, [])

  return (
    <>
      <style jsx>{`
        /* Hover link styles with underline effect */
        .hover-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: black;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hover-link:hover::after {
          width: 100%;
        }
      `}</style>
      
      <div className="relative min-h-[400px] bg-white p-8 md:p-16">
        {/* Orthogonal Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-black/80 font-inter">
            <p className="mb-6">
              Entdecke{" "}
              <HoverLink
                previewKey="research"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                automatische Recherche
              </HoverLink>{" "}
              für schnelle Lead-Analyse in 60 Sekunden.
            </p>

            <p className="mb-6">
              Erhalte{" "}
              <HoverLink
                previewKey="signals"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                proaktive Signale
              </HoverLink>{" "}
              oder setze{" "}
              <HoverLink
                previewKey="priorities"
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                klare Prioritäten
              </HoverLink>{" "}
              für dein Sales-Team.
            </p>
          </div>
        </div>

        {/* Preview Card */}
        <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
      </div>
    </>
  )
}
