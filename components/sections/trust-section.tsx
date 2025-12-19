"use client"

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Lock, Server, Globe } from "lucide-react";
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
          className="mb-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 md:gap-12"
        >
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...ENTERPRISE_SPRING, delay: index * 0.05 }}
              className="flex items-center justify-center h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={48}
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
            
            {/* Badge 1 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">SOC 2 Type II</h4>
                <p className="text-xs text-slate-500 mt-1">Jährlich auditiert</p>
              </div>
            </motion.div>

            {/* Badge 2 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">DSGVO / GDPR</h4>
                <p className="text-xs text-slate-500 mt-1">Server in Frankfurt</p>
              </div>
            </motion.div>

            {/* Badge 3 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">End-to-End Encrypted</h4>
                <p className="text-xs text-slate-500 mt-1">AES-256 Standard</p>
              </div>
            </motion.div>

            {/* Badge 4 */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={ENTERPRISE_SPRING}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">99.99% Uptime</h4>
                <p className="text-xs text-slate-500 mt-1">Status Page öffentlich</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

