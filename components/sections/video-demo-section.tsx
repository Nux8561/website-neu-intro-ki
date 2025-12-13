"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Volume2, VolumeX, Maximize, Pause, AlertCircle } from "lucide-react"

interface VideoDemoSectionProps {
  videoSrc?: string
  posterSrc?: string
  title?: string
  description?: string
}

export function VideoDemoSection({
  videoSrc = "/videos/demo.mp4",
  posterSrc = "/images/video-poster.svg",
  title = "Sieh IntroKI in Aktion",
  description = "Entdecke, wie IntroKI dein Sales-Team in nur wenigen Minuten transformiert.",
}: VideoDemoSectionProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(false) // Start unmuted for better UX
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
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <>
      <section className="section-spacing bg-background relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-text-primary mb-4">
              {title}
            </h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
            className="max-w-5xl mx-auto"
          >
            <div
              className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group"
              onClick={handlePlayClick}
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
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
              
              {/* Fallback Poster Background (shows if video fails) */}
              <div 
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${posterSrc})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                  
                  {/* Button */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:shadow-white/25 transition-shadow">
                    <Play
                      className="h-8 w-8 md:h-10 md:w-10 text-brand ml-1"
                      fill="currentColor"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
                2:45
              </div>

              {/* Click to Play Text */}
              <div className="absolute bottom-4 left-4 text-white/80 text-sm font-medium">
                Klicken zum Abspielen
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "Deep Research",
                description: "KI-gestützte Recherche in unter 60 Sekunden",
              },
              {
                title: "Live Coaching",
                description: "Echtzeit-Unterstützung während Gesprächen",
              },
              {
                title: "Smart Pipeline",
                description: "Intelligente Lead-Priorisierung und Scoring",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="font-jakarta font-medium text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
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
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative w-full max-w-6xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Error State */}
              {videoError && (
                <div className="aspect-video rounded-2xl bg-surface border border-border-subtle flex items-center justify-center">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
                    <p className="text-text-primary font-medium mb-2">Video konnte nicht geladen werden</p>
                    <p className="text-text-muted text-sm">Bitte überprüfe deine Internetverbindung</p>
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl">
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
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
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
                        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="h-5 w-5" />
                        ) : (
                          <Volume2 className="h-5 w-5" />
                        )}
                      </button>

                      {/* Fullscreen */}
                      <button
                        onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}
                        className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
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

