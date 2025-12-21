"use client"

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { ENTERPRISE_SPRING } from "@/lib/animations";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function CTAFooter() {
  return (
    <section className="bg-white py-32 md:py-40 border-b-2 border-black">
      <div className="mx-auto max-w-full px-4">
        
        {/* Industrial Tool Style: Schwarz-Weiß, brutal - Mit animierten Backgrounds */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-slate-900 px-8 py-20 text-center shadow-2xl md:px-20 md:py-24"
        >
          {/* Animierte Gradient-Orbs im Hintergrund */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>
          <div className="relative z-10">
            <h2 className="mx-auto mb-8 max-w-4xl text-5xl font-space-grotesk font-bold -tracking-[0.02em] text-white md:text-6xl lg:text-7xl leading-tight">
              Bereit, dein CRM intelligent zu machen?
            </h2>
            
            <p className="mx-auto mb-16 max-w-2xl text-xl text-white/90 leading-relaxed font-inter">
              Sprich mit unserem Sales-Team für eine individuelle Demo.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link href="/demo" className="group">
                <MagneticButton
                  variant="primary"
                  className="bg-white text-black hover:bg-white/95 shadow-[8px_8px_0_0_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.3)]"
                >
                  Demo buchen
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </Link>
              <Link href="/kontakt">
                <MagneticButton
                  variant="secondary"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]"
                >
                  Sales kontaktieren
                </MagneticButton>
              </Link>
            </div>

            <p className="mt-8 text-xs text-white/60 font-mono uppercase tracking-wider">
              Enterprise-Grade Sicherheit • DSGVO-konform • SOC 2 Type II zertifiziert
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

