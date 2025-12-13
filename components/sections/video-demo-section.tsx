"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, X, Volume2, VolumeX, Maximize, Pause } from "lucide-react"

interface VideoDemoSectionProps {
  videoSrc?: string
  posterSrc?: string
  title?: string
  description?: string
}

export function VideoDemoSection({
  videoSrc = "/videos/demo.mp4",
  posterSrc = "/images/video-poster.jpg",
  title = "Sieh IntroKI in Aktion",
  description = "Entdecke, wie IntroKI dein Sales-Team in nur wenigen Minuten transformiert.",
}: VideoDemoSectionProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isMuted, setIsMuted] = React.useState(true)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const modalVideoRef = React.useRef<HTMLVideoElement>(null)

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
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
        modalVideoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleFullscreen = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.requestFullscreen) {
        modalVideoRef.current.requestFullscreen()
      }
    }
  }

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
            <span className="pill-button mb-6 inline-flex">
              <Play className="h-3 w-3 mr-1" /> Video Demo
            </span>
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
                className="w-full h-full object-cover"
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
            >
              <video
                ref={modalVideoRef}
                src={videoSrc}
                autoPlay
                muted={isMuted}
                controls={false}
                className="w-full rounded-2xl shadow-2xl"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Custom Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                    )}
                  </button>

                  {/* Progress Bar Placeholder */}
                  <div className="flex-1 h-1 bg-white/20 rounded-full">
                    <div className="h-full w-1/3 bg-white rounded-full" />
                  </div>

                  {/* Mute/Unmute */}
                  <button
                    onClick={toggleMute}
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
                    onClick={handleFullscreen}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                  >
                    <Maximize className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

