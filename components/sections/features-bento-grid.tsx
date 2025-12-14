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
        className="relative h-screen w-full bg-background overflow-hidden"
        style={{ position: 'relative' }}
      >
        {/* 3D Gallery - Full Screen */}
        <div className="absolute inset-0 z-0">
          <InfiniteGallery
            images={[
              { src: 'https://images.unsplash.com/photo-1741332966416-414d8a5b8887?w=800&auto=format&fit=crop&q=80', alt: 'Company Agent' },
              { src: 'https://images.unsplash.com/photo-1754769440490-2eb64d715775?w=800&auto=format&fit=crop&q=80', alt: 'People Agent' },
              { src: 'https://images.unsplash.com/photo-1758640920659-0bb864175983?w=800&auto=format&fit=crop&q=80', alt: 'AI Agent' },
              { src: 'https://plus.unsplash.com/premium_photo-1758367454070-731d3cc11774?w=800&auto=format&fit=crop&q=80', alt: 'Validation Agent' },
              { src: 'https://images.unsplash.com/photo-1746023841657-e5cd7cc90d2c?w=800&auto=format&fit=crop&q=80', alt: 'Research 1' },
              { src: 'https://images.unsplash.com/photo-1741715661559-6149723ea89a?w=800&auto=format&fit=crop&q=80', alt: 'Research 2' },
              { src: 'https://images.unsplash.com/photo-1725878746053-407492aa4034?w=800&auto=format&fit=crop&q=80', alt: 'Research 3' },
              { src: 'https://images.unsplash.com/photo-1752588975168-d2d7965a6d64?w=800&auto=format&fit=crop&q=80', alt: 'Research 4' },
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
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center text-center px-3">
          <motion.h1 
            className="font-serif text-4xl md:text-7xl tracking-tight italic mix-blend-exclusion text-white"
            style={{
              WebkitTextStroke: '2px rgba(0, 0, 0, 0.5)',
              textStroke: '2px rgba(0, 0, 0, 0.5)',
              paintOrder: 'stroke fill',
            }}
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
      <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#F5F5F5' }}>
        {/* Subtle Pattern Background for Contrast */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />
        
        {/* Headline Section */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
                Deine Daten sind sicher
              </h2>
              <p className="text-lg md:text-xl text-text-secondary font-inter max-w-3xl mx-auto">
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

