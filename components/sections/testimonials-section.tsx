"use client"

import * as React from "react"
import { DesignTestimonial } from "@/components/ui/design-testimonial"
import { TestimonialV2 } from "@/components/ui/testimonial-v2"
import { SectionDivider } from "@/components/ui/section-divider"

/**
 * Testimonials Section
 * 
 * Kombiniert beide Testimonial-Komponenten für maximale Wirkung
 */
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white border-b border-black/10">
      {/* Premium Design Testimonial */}
      <div className="border-b border-white/10">
        <DesignTestimonial />
      </div>
      
      {/* Scrolling Testimonials */}
      <TestimonialV2 />
    </section>
  )
}

