"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useInView } from "framer-motion"

export function VideoSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(168, 85, 247, 0.3), transparent 50%)",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 group cursor-pointer">
            {/* Video Thumbnail Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
            
            {/* Play Button */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-6 group-hover:bg-white/20 transition-all">
                <Play className="h-12 w-12 text-white ml-1" fill="white" strokeWidth={1.5} />
              </div>
            </motion.div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

