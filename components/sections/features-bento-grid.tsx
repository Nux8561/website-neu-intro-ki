"use client"

import * as React from "react"
import { LazyMotion, motion, domAnimation } from "framer-motion"
import InfiniteGallery from "@/components/ui/3d-gallery-photography"
import { ResearchOrchestratorSection } from "@/components/sections/research-orchestrator-section"
import { ScannerCardStream } from "@/components/ui/scanner-card-stream"

export function FeaturesBentoGrid() {
  return (
    <LazyMotion features={domAnimation}>
      {/* 3D Gallery Section - Full Screen */}
      <section 
        id="gallery-section" 
        className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full bg-background overflow-hidden"
        style={{ position: 'relative' }}
      >
        {/* 3D Gallery - Full Screen */}
        <div className="absolute inset-0 z-0">
          <InfiniteGallery
            images={[
              { src: '/images/36yKAhdd9x9dcFSS2FHeptQAe7w.svg', alt: 'Vector 1' },
              { src: '/images/36yKAjMivaURft5yY0O7PGw2HIH.svg', alt: 'Vector 2' },
              { src: '/images/36yKAlKafQLQDwvOsnGIrpxwo3k.svg', alt: 'Vector 3' },
              { src: '/images/36yKAma7Tal0KERnlqcjTSkcXif.svg', alt: 'Vector 4' },
              { src: '/images/36yKPQ9ixalIbSmxtFwXr6FZ9PC.svg', alt: 'Vector 5' },
              { src: '/images/36yKPRNWPCQ4g8LDoZTXhiPPl20.svg', alt: 'Vector 6' },
              { src: '/images/36yKPSNmcrPHrJQ2w1q3JT0j8PX.svg', alt: 'Vector 7' },
              { src: '/images/36yKPU1sR7o74m9rWaGsVxZCQXZ.svg', alt: 'Vector 8' },
              { src: '/images/36yKPWAsOrOttsjjojZqmJeOda1.svg', alt: 'Vector 9' },
            ]}
            speed={1.2}
            visibleCount={12}
            className="h-full w-full"
            fadeSettings={{
              fadeIn: { start: 0.05, end: 0.25 },
              fadeOut: { start: 0.4, end: 0.43 },
            }}
            blurSettings={{
              blurIn: { start: 0.0, end: 0.1 },
              blurOut: { start: 0.4, end: 0.43 },
              maxBlur: 8.0,
            }}
          />
        </div>

        {/* Text Overlay in Center */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl tracking-tight italic mix-blend-exclusion text-white"
            style={{
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.5)',
              paintOrder: 'stroke fill',
            } as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Research in Sekunden
          </motion.h1>
        </div>
      </section>

      {/* Research Orchestrator Section */}
      <ResearchOrchestratorSection />

      {/* Security Scanner Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen w-full overflow-hidden bg-surface-elevated">
        {/* Subtle Pattern Background for Contrast */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />
        
        {/* Headline Section */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-3 sm:mb-4 px-2">
                Deine Daten sind sicher
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary font-inter max-w-3xl mx-auto px-2">
                Eine vorab existierende CRM-Lösung mit KI-Power für erfolgreichen Vertrieb. 
                Mit End-to-End-Verschlüsselung, GDPR-Compliance und höchsten Sicherheitsstandards.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scanner Card Stream */}
        <div className="absolute inset-0 z-10">
          <ScannerCardStream
            showControls={false}
            showSpeed={false}
            initialSpeed={150}
            direction={-1}
            repeat={6}
            cardGap={60}
            friction={0.95}
            scanEffect="scramble"
          />
        </div>
      </section>
    </LazyMotion>
  )
}

