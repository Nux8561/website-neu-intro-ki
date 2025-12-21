"use client"

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { ENTERPRISE_SPRING } from "@/lib/animations";

export function CTAFooter() {
  return (
    <section className="bg-white py-32 md:py-40 border-b-2 border-black">
      <div className="mx-auto max-w-full px-4">
        
        {/* Industrial Tool Style: Schwarz-Weiß, brutal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black to-slate-900 px-8 py-20 text-center shadow-2xl md:px-20 md:py-24"
        >
          <div className="relative z-10">
            <h2 className="mx-auto mb-8 max-w-3xl text-4xl font-jakarta font-semibold tracking-tight text-white md:text-5xl">
              Bereit, dein CRM intelligent zu machen?
            </h2>
            
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/80 leading-relaxed font-inter">
              Sprich mit unserem Sales-Team für eine individuelle Demo.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02 }} transition={ENTERPRISE_SPRING}>
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-jakarta font-semibold text-black transition-all hover:bg-white/90 hover:scale-105 shadow-lg"
                >
                  Demo buchen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={ENTERPRISE_SPRING}>
                <Link
                  href="/kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-sm font-jakarta font-semibold text-white transition-all hover:bg-white hover:text-black hover:scale-105"
                >
                  Sales kontaktieren
                </Link>
              </motion.div>
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

