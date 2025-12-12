"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface VideoSectionProps {
  videoUrl?: string
  thumbnailUrl?: string
  title?: string
  description?: string
  className?: string
}

export function VideoSection({
  videoUrl,
  thumbnailUrl,
  title = "Sieh IntroKI in Aktion",
  description = "Erfahre, wie IntroKI dein Sales-Team transformiert",
  className,
}: VideoSectionProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handlePlay = () => {
    if (videoUrl) {
      setIsPlaying(true)
      // In a real implementation, you would open a modal or navigate to the video
      window.open(videoUrl, "_blank")
    }
  }

  return (
    <section className={cn("py-24 bg-white relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-[#0B0C0E]/70 font-inter">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 17 }}
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#0B0C0E]/10 bg-[#0B0C0E]/5 shadow-xl group cursor-pointer">
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white ml-1" strokeWidth={1.5} />
                  </div>
                  <p className="text-white/80 font-inter text-sm">Video Thumbnail</p>
                </div>
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Play Button */}
            <motion.button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <motion.div
                className={cn(
                  "relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-2xl",
                  isHovered && "bg-white border-white"
                )}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  boxShadow: isHovered
                    ? "0 0 40px rgba(59, 130, 246, 0.5)"
                    : "0 10px 40px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Play
                  className="h-10 w-10 md:h-12 md:w-12 text-[#0B0C0E] ml-1"
                  strokeWidth={2}
                  fill="currentColor"
                />
                {/* Glow Effect */}
                {isHovered && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.div>
            </motion.button>

            {/* Video Info Badge */}
            {videoUrl && (
              <motion.div
                className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#0B0C0E]/10 text-xs font-inter text-[#0B0C0E]/70"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <ExternalLink className="h-3 w-3" strokeWidth={2} />
                <span>Video öffnen</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
