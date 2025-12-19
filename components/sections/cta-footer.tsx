"use client"

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { ENTERPRISE_SPRING } from "@/lib/animations";

export function CTAFooter() {
  return (
    <section className="bg-white py-24 attio-grid-pattern attio-connection-lines">
      <div className="mx-auto max-w-[1000px] px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-attio-diffuse md:px-16 md:py-20"
        >
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-blue-500/10 blur-[100px]"></div>

          <div className="relative z-10">
            <h2 className="mx-auto mb-6 max-w-2xl text-3xl font-semibold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Bereit, dein CRM <br />
              <span className="text-slate-400">intelligent zu machen?</span>
            </h2>
            
            <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
              Maßgeschneiderte Enterprise-Lizenzen. Sprich mit unserem Sales-Team für eine individuelle Demo.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileHover={{ scale: 1.02 }} transition={ENTERPRISE_SPRING}>
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-slate-900 transition-all shadow-attio-md hover:shadow-attio-lg hover:bg-slate-50"
                >
                  Demo buchen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} transition={ENTERPRISE_SPRING}>
                <Link
                  href="/kontakt"
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 text-sm font-medium text-white transition-all hover:bg-slate-800 hover:border-slate-600"
                >
                  Sales kontaktieren
                </Link>
              </motion.div>
            </div>

            <p className="mt-8 text-xs text-slate-500">
              Enterprise-Grade Sicherheit • DSGVO-konform • SOC 2 Type II zertifiziert
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

