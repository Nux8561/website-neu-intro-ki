/**
 * Video Demo Section - Cinematic Browser Experience
 * Attio-Style: Sauberer Browser-Container mit Ambient Glow, Glassmorphism Play Button
 * Fokus auf das Video - keine Ablenkung
 */

"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Volume2, VolumeX, Maximize, Pause, AlertCircle, Zap, Database, Shield } from "lucide-react"
import { WorkflowSimulation } from "@/components/visuals/WorkflowSimulation"
import { DataEnrichmentVisual } from "@/components/visuals/DataEnrichmentVisual"
import { ReportingVisual } from "@/components/visuals/ReportingVisual"
import { attioTransition } from "@/lib/animations"

interface VideoDemoSectionProps {
  videoSrc?: string
  posterSrc?: string
  title?: string
  description?: string
}

// Browser Title Bar Component
function BrowserTitleBar() {
  return (
    <div className="h-10 bg-[#1A1A1A] border-b border-white/10 rounded-t-xl flex items-center px-4 gap-2">
      {/* Traffic Lights (macOS style) */}
      <div className="flex items-center gap-1.5">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
      </div>
      {/* URL Bar (optional, subtil) */}
      <div className="flex-1 flex items-center justify-center">
        <div className="h-6 px-3 rounded-md bg-white/5 border border-white/10 text-xs text-white/40 font-mono max-w-xs truncate">
          introki.app
        </div>
      </div>
    </div>
  )
}

// Glassmorphism Play Button
function GlassmorphismPlayButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="absolute inset-0 flex items-center justify-center z-20"
      aria-label="Video abspielen"
      title="Video abspielen"
    >
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Pulsing ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-white/20"
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
        {/* Glassmorphism Button */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl flex items-center justify-center group-hover:bg-white/15 transition-all duration-attio ease-attio-ease-out">
          <Play
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white ml-1"
            fill="currentColor"
            strokeWidth={0}
          />
        </div>
      </motion.div>
    </motion.button>
  )
}

// Feature Item Component (für Feature Row unter dem Video)
function FeatureItem({
  icon: Icon,
  title,
  description,
  delay = 0,
  isActive = false,
  onClick,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  delay?: number
  isActive?: boolean
  onClick?: () => void
}) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ...attioTransition, delay }}
      onClick={onClick}
      type="button"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group flex flex-col items-center text-center max-w-xs px-5 py-4 rounded-2xl border border-slate-200/70 bg-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-sm motion-safe transition-all duration-300 hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_20px_60px_rgba(15,23,42,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      style={{
        willChange: "opacity",
        transform: "translateZ(0)",
      }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-b from-blue-50 via-blue-50/80 to-blue-100/60 border border-blue-100 shadow-inner flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
      </div>
      <h3 className="font-inter-display font-semibold text-[#0A0A0A] mb-1 text-base sm:text-lg tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-inter text-gray-600">
        {description}
      </p>
      <motion.div
        className="mt-3 h-0.5 w-full rounded-full bg-slate-200/80 overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            width: isActive ? "100%" : "0%",
          }}
          transition={{ ...attioTransition, stiffness: 450 }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500"
        />
      </motion.div>
    </motion.button>
  )
}

export function VideoDemoSection({
  videoSrc = "/videos/demo.mp4",
  posterSrc = "/images/video-poster.svg",
  title = "Sieh IntroKI in Aktion",
  description = "In 60 Sekunden erklärt.",
}: VideoDemoSectionProps) {
  const [activeFeature, setActiveFeature] = React.useState<
    "integration" | "realtime" | "control"
  >("integration")
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false)
  const [videoError, setVideoError] = React.useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const modalVideoRef = React.useRef<HTMLVideoElement>(null)

  // Handle preview video autoplay
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, that's okay
      })
    }
  }, [])

  const handlePlayClick = () => {
    setIsModalOpen(true)
    setVideoError(false)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsPlaying(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
  }

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause()
      } else {
        modalVideoRef.current.play().catch(() => setVideoError(true))
      }
    }
  }

  const handleFullscreen = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.requestFullscreen) {
        modalVideoRef.current.requestFullscreen()
      }
    }
  }

  const handleVideoError = () => {
    setVideoError(true)
    setIsVideoLoaded(false)
  }

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true)
    setVideoError(false)
    if (modalVideoRef.current) {
      setDuration(modalVideoRef.current.duration)
    }
  }

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalVideoRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect()
      const pos = (e.clientX - rect.left) / rect.width
      modalVideoRef.current.currentTime = pos * duration
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <>
      <section className="section-spacing bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-center mb-8 sm:mb-12 px-4 motion-safe"
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter-display font-semibold tracking-tight text-[#0A0A0A] mb-3 sm:mb-4">
              {title}
            </h2>
            <p className="text-base sm:text-lg font-inter text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Video Container mit Browser-Frame */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
            className="max-w-6xl mx-auto relative motion-safe"
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          >
            {/* Ambient Glow hinter dem Video - Verstärkt */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-full blur-3xl" />
            </motion.div>

            {/* Browser Container - Verfeinert */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-2xl bg-[#0A0A0A]">
              {/* Browser Title Bar */}
              <BrowserTitleBar />

              {/* Video Area */}
              <div className="relative aspect-video bg-black cursor-pointer group">
                {/* Video Preview (muted, autoplay loop) */}
                <video
                  ref={videoRef}
                  src={videoSrc}
                  poster={posterSrc}
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={() => {
                    // If video fails, show poster as fallback
                  }}
                />

                {/* Fallback Poster Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center -z-10"
                  style={{ backgroundImage: `url(${posterSrc})` }}
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/50 transition-all duration-attio ease-attio-ease-out" />

                {/* Glassmorphism Play Button */}
                <GlassmorphismPlayButton onClick={handlePlayClick} />

                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium z-10">
                  2:45
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Row unter dem Video */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...attioTransition, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 motion-safe"
            style={{
              willChange: "opacity",
              transform: "translateZ(0)",
            }}
          >
            <FeatureItem
              icon={Zap}
              title="Schnelle Integration"
              description="In unter 5 Minuten eingerichtet"
              delay={0.1}
              isActive={activeFeature === "integration"}
              onClick={() => setActiveFeature("integration")}
            />
            <FeatureItem
              icon={Database}
              title="Echtzeit Daten"
              description="Kontinuierliche Synchronisation"
              delay={0.2}
              isActive={activeFeature === "realtime"}
              onClick={() => setActiveFeature("realtime")}
            />
            <FeatureItem
              icon={Shield}
              title="Volle Kontrolle"
              description="Deine Daten, deine Regeln"
              delay={0.3}
              isActive={activeFeature === "control"}
              onClick={() => setActiveFeature("control")}
            />
          </motion.div>

          {/* Interaktive Demo unter den Feature-Kacheln */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...attioTransition, delay: 0.4 }}
            className="mt-10 w-full max-w-5xl mx-auto"
          >
            <AnimatePresence mode="wait">
              {activeFeature === "integration" && (
                <motion.div
                  key="integration-demo"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={attioTransition}
                  className="h-[260px] rounded-2xl border border-attio-subtle bg-white shadow-attio-card overflow-hidden"
                >
                  <WorkflowSimulation />
                </motion.div>
              )}
              {activeFeature === "realtime" && (
                <motion.div
                  key="realtime-demo"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={attioTransition}
                  className="h-[260px] rounded-2xl border border-attio-subtle bg-white shadow-attio-card overflow-hidden"
                >
                  <DataEnrichmentVisual />
                </motion.div>
              )}
              {activeFeature === "control" && (
                <motion.div
                  key="control-demo"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={attioTransition}
                  className="h-[260px] rounded-2xl border border-attio-subtle bg-white shadow-attio-card overflow-hidden"
                >
                  <ReportingVisual />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Video schließen"
              title="Video schließen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative w-full max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Error State */}
              {videoError && (
                <div className="aspect-video rounded-2xl bg-surface border border-border-subtle flex items-center justify-center">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                    <p className="text-text-primary font-medium mb-2">
                      Video konnte nicht geladen werden
                    </p>
                    <p className="text-text-muted text-sm">
                      Bitte überprüfe deine Internetverbindung
                    </p>
                  </div>
                </div>
              )}

              {/* Video Player */}
              {!videoError && (
                <>
                  <video
                    ref={modalVideoRef}
                    src={videoSrc}
                    poster={posterSrc}
                    autoPlay
                    muted={isMuted}
                    controls={false}
                    playsInline
                    preload="auto"
                    className="w-full rounded-2xl shadow-2xl bg-black"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoaded}
                    onTimeUpdate={handleTimeUpdate}
                  />

                  {/* Loading State */}
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 rounded-2xl bg-surface flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-text-muted text-sm">Video wird geladen...</p>
                      </div>
                    </div>
                  )}

                  {/* Click to Play/Pause Overlay */}
                  <div
                    className="absolute inset-0 cursor-pointer rounded-2xl"
                    onClick={togglePlay}
                  />

                  {/* Custom Controls */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                    {/* Progress Bar */}
                    <div
                      className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group"
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-full bg-white rounded-full relative transition-all"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      {/* Play/Pause */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePlay()
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        aria-label={isPlaying ? "Pause" : "Abspielen"}
                        title={isPlaying ? "Pause" : "Abspielen"}
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                        )}
                      </button>

                      {/* Time Display */}
                      <span className="text-white/80 text-sm font-mono min-w-[80px]">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>

                      <div className="flex-1" />

                      {/* Mute/Unmute */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleMute()
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
                        title={isMuted ? "Ton einschalten" : "Ton ausschalten"}
                      >
                        {isMuted ? (
                          <VolumeX className="h-5 w-5" />
                        ) : (
                          <Volume2 className="h-5 w-5" />
                        )}
                      </button>

                      {/* Fullscreen */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleFullscreen()
                        }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                        aria-label="Vollbild"
                        title="Vollbild"
                      >
                        <Maximize className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
