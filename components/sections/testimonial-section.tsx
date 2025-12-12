"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export function TestimonialSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-24 border-y border-black/10 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
        >
          <motion.blockquote
            className="text-2xl md:text-3xl font-jakarta font-medium tracking-tight text-black/60 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            &ldquo;Als ich IntroKI zum ersten Mal öffnete, hatte ich sofort das Gefühl, dass dies
            die nächste Generation von CRM ist.&rdquo;
          </motion.blockquote>
          <motion.div
            className="text-black/40 font-inter text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-medium">Margaret Shen</p>
            <p>Head of Business Operations · Modal</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

