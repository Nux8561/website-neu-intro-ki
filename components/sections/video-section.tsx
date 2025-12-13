"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Play, ExternalLink, Pause, X, Volume2, VolumeX, Maximize } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface VideoSectionProps {
  videoUrl?: string
  thumbnailUrl?: string
  title?: string
  description?: string
  className?: string
  badge?: string
}

// Animation variants
const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springTransition,
  },
}

// Animated Play Button Component
function PlayButton({ 
  isHovered, 
  onClick,
  isPlaying,
}: { 
  isHovered: boolean
  onClick: () => void
  isPlaying: boolean
}) {
  return (
    <motion.button
      onClick={onClick}
      className="absolute inset-0 flex items-center justify-center z-10"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={springTransition}
    >
      <motion.div
        className="relative"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={springTransition}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isHovered
              ? "0 0 60px 20px rgba(59, 130, 246, 0.3), 0 0 100px 40px rgba(139, 92, 246, 0.2)"
              : "0 0 30px 10px rgba(59, 130, 246, 0.1)",
          }}
          transition={springTransition}
        />

        {/* Pulsing ring animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main button */}
        <motion.div
          className={cn(
            "relative w-20 h-20 md:w-24 md:h-24 rounded-full",
            "bg-white/10 backdrop-blur-xl",
            "border border-white/20",
            "flex items-center justify-center",
            "shadow-2xl"
          )}
          animate={{
            backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
            borderColor: isHovered ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)",
          }}
          transition={springTransition}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          
          {isPlaying ? (
            <Pause
              className="h-10 w-10 md:h-12 md:w-12 text-white"
              strokeWidth={2}
            />
          ) : (
            <Play
              className="h-10 w-10 md:h-12 md:w-12 text-white ml-1"
              strokeWidth={2}
              fill="white"
            />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

// Video Modal Component
function VideoModal({
  isOpen,
  onClose,
  videoUrl,
}: {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}) {
  const [isMuted, setIsMuted] = React.useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-border-subtle bg-surface"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={springTransition}
          >
            {/* Video Player Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Play className="h-8 w-8 text-white ml-1" strokeWidth={1.5} fill="white" />
                </div>
                <p className="text-text-secondary font-inter text-sm">
                  Video wird geladen...
                </p>
                <p className="text-text-muted font-inter text-xs mt-2">
                  {videoUrl}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4 text-white" />
                    ) : (
                      <Volume2 className="h-4 w-4 text-white" />
                    )}
                  </button>
                </div>
                <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Maximize className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main Component
export function VideoSection({
  videoUrl = "https://example.com/demo",
  thumbnailUrl,
  title = "Sieh IntroKI in Aktion",
  description = "Erfahre, wie IntroKI dein Sales-Team transformiert und die Produktivität um das Dreifache steigert.",
  badge = "2 Min Demo",
  className,
}: VideoSectionProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handlePlay = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section
        ref={ref}
        className={cn(
          "py-24 bg-background relative overflow-hidden",
          className
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ ...springTransition, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-border-subtle text-sm font-inter text-text-secondary mb-6"
              >
                <Play className="h-3.5 w-3.5 text-blue-400" fill="currentColor" />
                {badge}
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-text-secondary font-inter max-w-2xl mx-auto">
                {description}
              </p>
            </motion.div>

            {/* Video Container */}
            <motion.div
              variants={itemVariants}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative"
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
                animate={{
                  opacity: isHovered ? 0.8 : 0.3,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={springTransition}
              />

              {/* Video Frame */}
              <motion.div
                className="relative aspect-video rounded-2xl overflow-hidden border border-border-subtle bg-surface cursor-pointer"
                animate={{
                  scale: isHovered ? 1.01 : 1,
                  borderColor: isHovered
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(255, 255, 255, 0.05)",
                }}
                transition={springTransition}
              >
                {/* Video Thumbnail or Placeholder */}
                {thumbnailUrl ? (
                  <Image
                    src={thumbnailUrl}
                    alt="Video Thumbnail"
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-elevated to-surface">
                    {/* Animated gradient background */}
                    <motion.div
                      className="absolute inset-0 opacity-50"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
                          "linear-gradient(90deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                          "linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
                          "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))",
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Mock Dashboard Preview */}
                    <div className="absolute inset-8 md:inset-12 rounded-xl border border-border-subtle bg-surface/50 backdrop-blur-sm overflow-hidden">
                      {/* Mock Header */}
                      <div className="h-10 border-b border-border-subtle flex items-center px-4 gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500/50" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                          <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 h-5 mx-8 rounded bg-white/5" />
                      </div>
                      {/* Mock Content */}
                      <div className="p-4 space-y-3">
                        <div className="h-4 w-1/3 rounded bg-white/5" />
                        <div className="h-4 w-1/2 rounded bg-white/5" />
                        <div className="h-20 rounded bg-white/5" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-16 rounded bg-white/5" />
                          <div className="h-16 rounded bg-white/5" />
                          <div className="h-16 rounded bg-white/5" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Overlay Gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  animate={{
                    opacity: isHovered ? 0.8 : 0.4,
                  }}
                  transition={springTransition}
                />

                {/* Play Button */}
                <PlayButton
                  isHovered={isHovered}
                  onClick={handlePlay}
                  isPlaying={false}
                />

                {/* Video Info Badge */}
                <motion.div
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-inter text-white"
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                    y: isHovered ? 0 : 4,
                  }}
                  transition={springTransition}
                >
                  <ExternalLink className="h-3 w-3" strokeWidth={2} />
                  <span>Demo ansehen</span>
                </motion.div>

                {/* Duration Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-inter text-white/80"
                  animate={{
                    opacity: isHovered ? 1 : 0.7,
                  }}
                  transition={springTransition}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>2:34</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-6 mt-10 text-text-muted font-inter text-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Keine Kreditkarte erforderlich
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                14 Tage kostenlos testen
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Setup in unter 5 Minuten
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  )
}
