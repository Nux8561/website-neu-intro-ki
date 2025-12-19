 "use client"

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ENTERPRISE_SPRING } from "@/lib/animations";

export function FeaturesBento() {
  return (
    <section id="features" className="bg-slate-50/50 py-24 border-b border-slate-200 attio-grid-pattern">
      <div className="mx-auto max-w-[1200px] px-4">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tighter text-slate-900 sm:text-4xl mb-4">
            Die komplette Revenue-Architektur.
          </h2>
          <p className="text-lg text-slate-500">
            Intro KI ersetzt isolierte Tools durch eine integrierte Plattform. 
            Von der ersten Recherche bis zum Closing.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">
          
          {/* CARD 1: RESEARCH ORCHESTRATOR (Groß, Links) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.01 }}
            transition={ENTERPRISE_SPRING}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl md:col-span-2 md:row-span-2 shadow-attio-diffuse hover:shadow-attio-diffuse-hover transition-all"
          >
            <div className="p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/80 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-blue-700">
                <div className="h-3 w-3 rounded-full bg-blue-500/20 border border-blue-300/30 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                </div>
                Global Research
              </div>
              <h3 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900">Research Orchestrator</h3>
              <p className="max-w-md text-slate-500 text-sm leading-relaxed">
                Unser Multi-Agent-System durchsucht das Web, Handelsregister und News in Echtzeit. 
                Du erhältst keine rohen Daten, sondern kuratierte Profile.
              </p>
            </div>

            {/* FAKE UI: Agent Process */}
            <div className="relative mt-auto h-64 w-full border-t border-slate-200/50 bg-white/60 backdrop-blur-sm p-6">
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
              
              <div className="relative z-10 space-y-3">
                {/* Agent Item 1 */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 shadow-attio-sm group-hover:translate-x-1 transition-transform duration-attio-fast ease-attio-ease-out">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-200/50 bg-emerald-50/80 backdrop-blur-sm shadow-attio-sm">
                      <div className="h-2 w-2 rounded-full bg-emerald-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">Company Agent</div>
                      <div className="text-[10px] text-slate-500">Scraping TechStack & Funding</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
                    Active
                  </div>
                </div>

                {/* Agent Item 2 */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 shadow-attio-sm group-hover:translate-x-1 transition-transform duration-attio-fast ease-attio-ease-out delay-75">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200/50 bg-blue-50/80 backdrop-blur-sm shadow-attio-sm">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">People Agent</div>
                      <div className="text-[10px] text-slate-500">Enriching Decision Makers</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                    Done
                  </div>
                </div>
                
                {/* Connection Lines */}
                <div className="absolute left-7 top-10 h-8 w-0.5 bg-slate-200 -z-10"></div>
              </div>
            </div>
          </motion.div>


          {/* CARD 2: PIPELINE (Rechts Oben) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            transition={ENTERPRISE_SPRING}
            className="group relative overflow-hidden rounded-xl border border-white/60 bg-white/80 backdrop-blur-xl md:col-span-1 md:row-span-1 shadow-attio-diffuse hover:shadow-attio-diffuse-hover transition-all"
          >
            {/* Fake UI: Mini Chart statt Icon */}
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-attio-fast">
              <div className="flex items-end gap-1 h-24 w-24">
                {[40, 60, 45, 80, 55, 70].map((h, i) => (
                  <div key={i} className="flex-1 bg-slate-400 rounded-t" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-900">Smart Pipeline</h3>
                <p className="mt-2 text-xs text-slate-500">Priorisierung basierend auf Buying-Signals.</p>
              </div>

              {/* Fake UI: Deal Card */}
              <div className="mt-6 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 shadow-attio-sm group-hover:scale-105 transition-transform duration-attio-fast ease-attio-ease-out">
                <div className="flex justify-between items-start mb-2">
                  <div className="h-2 w-16 bg-slate-200 rounded"></div>
                  <div className="h-2 w-8 bg-green-200 rounded"></div>
                </div>
                <div className="space-y-1.5">
                   <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>Win Probability</span>
                      <span className="text-emerald-600">84%</span>
                   </div>
                   <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-[84%] bg-emerald-500 rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>


          {/* CARD 3: CALL COACHING (Rechts Unten) */}
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            transition={ENTERPRISE_SPRING}
            className="group relative overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/95 backdrop-blur-xl md:col-span-1 md:row-span-1 shadow-attio-diffuse hover:shadow-attio-diffuse-hover transition-all"
          >
            <div className="flex h-full flex-col justify-between p-6">
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-400">
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" /> Live Analysis
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">Call Coaching</h3>
                <p className="mt-2 text-xs text-slate-400">Echtzeit-Hilfe während des Calls.</p>
              </div>

              {/* Fake UI: Audio Wave */}
              <div className="mt-4 flex items-center justify-center gap-1">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [12, 24, 12] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5, 
                      ease: "easeInOut", 
                      delay: i * 0.1 
                    }}
                    className="w-1 rounded-full bg-blue-500 opacity-80"
                    style={{ height: 12 + Math.random() * 12 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

