"use client"

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ENTERPRISE_SPRING } from "@/lib/animations";

const LOGOS = [
  { name: "Linear", src: "/logos/linear.svg" },
  { name: "Notion", src: "/logos/notion.svg" },
  { name: "Stripe", src: "/logos/stripe.svg" },
  { name: "HubSpot", src: "/logos/hubspot.svg" },
  { name: "Slack", src: "/logos/slack.svg" },
  { name: "Zapier", src: "/logos/zapier.svg" },
];

export function TrustSection() {
  return (
    <section id="trust" className="border-b border-slate-200 bg-slate-50/50 py-24 attio-grid-pattern">
      <div className="mx-auto max-w-[1200px] px-4 text-center relative z-10">
        
        {/* Headline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={ENTERPRISE_SPRING}
          className="mb-12 text-sm font-medium text-slate-500"
        >
          Vertraut von modernen GTM-Teams weltweit
        </motion.p>

        {/* LOGO GRID (Monochrome mit echten Logos) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.1 }}
              className="mb-20 grid grid-cols-2 gap-12 md:grid-cols-3 lg:grid-cols-6 md:gap-16"
        >
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...ENTERPRISE_SPRING, delay: index * 0.05 }}
              className="flex items-center justify-center h-16 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
                <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={56}
                className="object-contain max-w-full max-h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* SECURITY & COMPLIANCE (Der "Enterprise" Teil) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...ENTERPRISE_SPRING, delay: 0.2 }}
          className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-attio-diffuse md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* GDPR Ready Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-3">
                <div className="relative">
                  <div className="h-8 w-8 rounded-full border-2 border-slate-300 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-slate-400" />
                  </div>
                  <div className="absolute -top-1 -right-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="h-1 w-1 rounded-full bg-slate-300" />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">GDPR</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">READY</p>
              </div>
            </motion.div>

            {/* CCPA Ready Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-3">
                <div className="relative">
                  <div className="h-8 w-6 rounded border border-slate-300 relative">
                    <div className="absolute top-0 right-0 h-3 w-3 rounded-full border border-slate-300 bg-white flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">CCPA</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">READY</p>
              </div>
            </motion.div>

            {/* ISO 9001 Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-3">
                <div className="relative">
                  <div className="h-8 w-8 rounded border border-slate-300 bg-slate-50 flex items-center justify-center">
                    <div className="text-xs font-bold text-slate-600">LR</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">ISO 9001</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">CERTIFIED</p>
              </div>
            </motion.div>

            {/* ISO 27001 Badge */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-slate-200 bg-white p-3">
                <div className="relative">
                  <div className="h-8 w-8 rounded border border-slate-300 bg-slate-50 flex items-center justify-center">
                    <div className="text-xs font-bold text-slate-600">V</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">ISO 27001</h4>
                <p className="text-xs text-slate-500 mt-1 font-medium">CERTIFIED</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

