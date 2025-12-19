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
    <section id="trust" className="border-b border-slate-200 bg-slate-50/50 py-24 attio-grid-pattern attio-connection-lines attio-network-nodes">
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


      </div>
    </section>
  );
}

