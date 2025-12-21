"use client"

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { ENTERPRISE_SPRING } from "@/lib/animations";
import { ExpensiveCard } from "@/components/ui/3d-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { StaggerReveal } from "@/components/ui/stagger-reveal";

export function FeaturesBento() {
  return (
    <section id="features" className="bg-white py-32 md:py-40 border-b-2 border-black">
      <div className="mx-auto max-w-full px-0">
        
        {/* Section Header - Premium Style (Team Page Fonts) */}
        <ScrollReveal direction="up" distance={50}>
          <div className="relative mb-16 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-jakarta font-semibold tracking-tight text-black mb-4">
              Clarity für dich und dein Team
            </h2>
            <p className="text-lg text-black/70 leading-relaxed font-inter">
              Die ersten 20 Calls sind immer die mit dem besten Potential.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO GRID LAYOUT - Industrial Tool Style (Schwarz-Weiß, brutal) */}
        {/* Der Hintergrund ist schwarz, gap-px erzeugt messerscharfe 2px Linien */}
        <StaggerReveal className="grid gap-[2px] bg-black md:grid-cols-3 md:grid-rows-3 h-auto md:h-[800px]">
          
          {/* CARD 1: CLARITY & FOCUS (Groß, Links Oben) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={8}
            className="group relative flex flex-col justify-between overflow-hidden md:col-span-2 md:row-span-1 bg-white border-2 border-black"
          >
            <div className="p-10">
              <h3 className="mb-4 text-3xl font-jakarta font-semibold tracking-tight text-black">Clarity & Focus</h3>
              <p className="max-w-md text-black/80 text-base leading-relaxed mb-8 font-inter">
                Top Opportunities heute. Was zu tun ist. Worauf du dich fokussieren musst.
              </p>
            </div>

            {/* Fake UI: Focus Dashboard - Industrial Tool Style */}
            <div className="relative mt-auto h-48 w-full border-t-2 border-black bg-white p-6">
              <div className="relative z-10 space-y-3">
                {/* Top Opportunity */}
                <div className="flex items-center justify-between rounded border-2 border-black bg-white p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded border-2 border-black bg-white font-mono text-xs font-bold text-black">
                      #1
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-jakarta font-semibold text-black mb-1">Acme Corp</div>
                      <div className="text-[10px] text-black/80 font-mono">Strong Buy Signal • €50K Deal</div>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-bold text-black px-2 py-1 bg-black text-white uppercase tracking-wider">Priority</div>
                </div>

                {/* Today's Tasks */}
                <div className="flex items-center gap-3 rounded border-2 border-black bg-white p-3 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                  <div className="h-2 w-2 rounded-full bg-black" />
                  <div className="flex-1">
                    <div className="text-xs font-jakarta font-semibold text-black">Call Acme Corp - Decision Maker</div>
                    <div className="text-[10px] text-black/80 font-mono">Heute 14:00 • Warm Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 2: PROJECT MANAGEMENT (Rechts Oben) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={6}
            className="group relative overflow-hidden md:col-span-1 md:row-span-1 bg-white border-2 border-black"
          >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-jakarta font-semibold tracking-tight text-black mb-3">Project Management</h3>
                        <p className="text-sm text-black/80 mb-6 leading-relaxed font-inter">Goals, Sequences, Smart Automation.</p>
                      </div>

              {/* Fake UI: Sequence Flow - Industrial Tool Style */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-black font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Lead called → Not reached
                </div>
                <div className="flex items-center gap-2 text-[10px] text-black font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Email sent → Tracking link
                </div>
                <div className="flex items-center gap-2 text-[10px] text-black font-mono">
                  <div className="h-1.5 w-1.5 rounded-full bg-black" />
                  Link opened → Task created
                </div>
                <div className="mt-3 pt-3 border-t-2 border-black">
                  <div className="text-[10px] font-bold text-black font-mono uppercase tracking-wider">Smart Automation</div>
                  <div className="text-[9px] text-black/60 mt-1 font-mono">Automatisch • Kein manueller Input</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 3: DEAL MANAGEMENT (Links Mitte) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={6}
            className="group relative overflow-hidden md:col-span-1 md:row-span-1 bg-white border-2 border-black"
          >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-jakarta font-semibold tracking-tight text-black mb-3">Deal Management</h3>
                        <p className="text-sm text-black/80 mb-6 leading-relaxed font-inter">Next Steps für Bestandskunden finden.</p>
                      </div>

              {/* Fake UI: Deal Card - Industrial Tool Style */}
              <div className="mt-auto rounded border-2 border-black bg-white p-4 shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-2 w-20 bg-black rounded" />
                  <div className="h-2 w-12 bg-black rounded" />
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-black/60 font-mono uppercase tracking-wider">Next Step</div>
                  <div className="text-xs font-bold text-black font-space-grotesk">Follow-up Call • Q1 Review</div>
                  <div className="text-[9px] text-black/60 mt-2 font-mono">Bestandskunde • 6 Monate inaktiv</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 4: RESEARCH (Mitte) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={6}
            className="group relative overflow-hidden md:col-span-1 md:row-span-1 bg-white border-2 border-black"
          >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-black mb-3 font-space-grotesk">Research</h3>
                        <p className="text-sm text-black/70 mb-6 leading-relaxed font-inter">Kontaktpersonen & Insider-Infos finden.</p>
                      </div>

              {/* Fake UI: Research Results - Industrial Tool Style */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 rounded border-2 border-black bg-white p-2 shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                  <div className="h-6 w-6 rounded border-2 border-black bg-black" />
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-black font-space-grotesk">CEO gefunden</div>
                    <div className="text-[9px] text-black/60 font-mono">LinkedIn • Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded border-2 border-black bg-white p-2 shadow-[1px_1px_0_0_rgba(0,0,0,1)]">
                  <div className="h-6 w-6 rounded border-2 border-black bg-black" />
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-black font-space-grotesk">Funding News</div>
                    <div className="text-[9px] text-black/60 font-mono">Series B • €5M</div>
                  </div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 5: DATA HUB (Rechts Mitte) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={6}
            className="group relative overflow-hidden md:col-span-1 md:row-span-1 bg-white border-2 border-black"
          >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-black mb-3 font-space-grotesk">Data Hub</h3>
                        <p className="text-sm text-black/70 mb-6 leading-relaxed font-inter">Excel, PDFs, alles verstehen.</p>
                      </div>

              {/* Fake UI: Data Sources - Industrial Tool Style */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-black font-mono">
                  <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                  <span>Leads.xlsx</span>
                  <span className="ml-auto text-black/60">1,234 rows</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-black font-mono">
                  <div className="h-4 w-4 rounded border-2 border-black bg-white" />
                  <span>Company_Data.pdf</span>
                  <span className="ml-auto text-black/60">Processed</span>
                </div>
                <div className="mt-2 pt-2 border-t-2 border-black">
                  <div className="text-[9px] text-black/60 font-mono uppercase tracking-wider">Smart Algorithm versteht alles</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 6: AUTOMATION & CAMPAIGNS (Groß, Unten) - Industrial Tool Style */}
          <ExpensiveCard 
            intensity={8}
            className="group relative flex flex-col justify-between overflow-hidden md:col-span-2 md:row-span-1 bg-white border-2 border-black"
          >
            <div className="p-10">
              <h3 className="mb-4 text-3xl font-bold tracking-tight text-black font-space-grotesk">Email Campaigns & Lead Forms</h3>
              <p className="max-w-md text-black/70 text-base leading-relaxed font-inter">
                Erstelle Email-Kampagnen und Lead-Forms. Team-Management und ICP-Scoring für maximale Effizienz.
              </p>
            </div>

            {/* Fake UI: Campaign Stats - Industrial Tool Style */}
            <div className="relative mt-auto h-40 w-full border-t-2 border-black bg-white p-6">
              <div className="relative z-10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-black font-mono tabular-nums">24</div>
                  <div className="text-[10px] text-black/60 font-mono uppercase tracking-wider mt-1">Active Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-black font-mono tabular-nums">1,456</div>
                  <div className="text-[10px] text-black/60 font-mono uppercase tracking-wider mt-1">Leads Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-black font-mono tabular-nums">89%</div>
                  <div className="text-[10px] text-black/60 font-mono uppercase tracking-wider mt-1">ICP Match Rate</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

        </StaggerReveal>
      </div>
    </section>
  );
}
