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
    <section id="features" className="bg-white py-32 md:py-40 border-b border-slate-200 attio-grid-pattern attio-connection-lines">
      <div className="mx-auto max-w-[1200px] px-4">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={50}>
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
              Clarity für dich und dein Team.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Intro KI sorgt dafür, dass nichts untergeht. Die ersten 20 Calls sind immer die mit dem besten Potential – nicht 100 zufällige.
            </p>
          </div>
        </ScrollReveal>

        {/* BENTO GRID LAYOUT mit echten CRM-Features */}
        <StaggerReveal className="grid gap-6 md:grid-cols-3 md:grid-rows-3 h-auto md:h-[800px]">
          
          {/* CARD 1: CLARITY & FOCUS (Groß, Links Oben) */}
          <ExpensiveCard 
            intensity={8}
            className="group relative flex flex-col justify-between overflow-hidden md:col-span-2 md:row-span-1"
          >
            <div className="p-10">
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">Clarity & Focus</h3>
              <p className="max-w-md text-slate-600 text-base leading-relaxed mb-8">
                Immer die richtige Klarheit. Top Opportunities heute, was zu tun ist, worauf du dich heute fokussieren musst.
              </p>
            </div>

            {/* Fake UI: Focus Dashboard */}
            <div className="relative mt-auto h-48 w-full border-t border-slate-200/50 bg-white/60 backdrop-blur-sm p-6">
              <div className="relative z-10 space-y-3">
                {/* Top Opportunity */}
                <div className="flex items-center justify-between rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-attio-sm">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
                      <div className="h-6 w-6 rounded bg-slate-200" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-900 mb-1">Acme Corp</div>
                      <div className="text-[10px] text-slate-500">Strong Buy Signal • €50K Deal</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-slate-700 px-2 py-1 bg-slate-100 rounded">#1 Priority</div>
                </div>

                {/* Today's Tasks */}
                <div className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-3 shadow-attio-sm">
                  <div className="h-2 w-2 rounded-full bg-slate-400" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-slate-900">Call Acme Corp - Decision Maker</div>
                    <div className="text-[10px] text-slate-500">Heute 14:00 • Warm Lead</div>
                  </div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 2: PROJECT MANAGEMENT (Rechts Oben) */}
          <ExpensiveCard 
            intensity={6}
                    className="group relative overflow-hidden md:col-span-1 md:row-span-1"
                  >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Project Management</h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">Goals, Sequences, Smart Automation.</p>
                      </div>

              {/* Fake UI: Sequence Flow */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Lead called → Not reached
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Email sent → Tracking link
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Link opened → Task created
                </div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-[10px] font-medium text-slate-700">Smart Automation</div>
                  <div className="text-[9px] text-slate-500 mt-1">Automatisch • Kein manueller Input</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 3: DEAL MANAGEMENT (Links Mitte) */}
          <ExpensiveCard 
            intensity={6}
                    className="group relative overflow-hidden md:col-span-1 md:row-span-1"
                  >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Deal Management</h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">Next Steps für Bestandskunden finden.</p>
                      </div>

              {/* Fake UI: Deal Card */}
              <div className="mt-auto rounded-lg border border-slate-200/60 bg-white/90 backdrop-blur-sm p-4 shadow-attio-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="h-2 w-20 bg-slate-200 rounded" />
                  <div className="h-2 w-12 bg-slate-200 rounded" />
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] text-slate-500">Next Step</div>
                  <div className="text-xs font-medium text-slate-900">Follow-up Call • Q1 Review</div>
                  <div className="text-[9px] text-slate-500 mt-2">Bestandskunde • 6 Monate inaktiv</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 4: RESEARCH (Mitte) */}
          <ExpensiveCard 
            intensity={6}
                    className="group relative overflow-hidden md:col-span-1 md:row-span-1"
                  >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Research</h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">Kontaktpersonen & Insider-Infos finden.</p>
                      </div>

              {/* Fake UI: Research Results */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 rounded border border-slate-200 bg-white p-2">
                  <div className="h-6 w-6 rounded bg-slate-200" />
                  <div className="flex-1">
                    <div className="text-[10px] font-medium text-slate-900">CEO gefunden</div>
                    <div className="text-[9px] text-slate-500">LinkedIn • Email</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded border border-slate-200 bg-white p-2">
                  <div className="h-6 w-6 rounded bg-slate-200" />
                  <div className="flex-1">
                    <div className="text-[10px] font-medium text-slate-900">Funding News</div>
                    <div className="text-[9px] text-slate-500">Series B • €5M</div>
                  </div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 5: DATA HUB (Rechts Mitte) */}
          <ExpensiveCard 
            intensity={6}
                    className="group relative overflow-hidden md:col-span-1 md:row-span-1"
                  >
                    <div className="flex h-full flex-col justify-between p-8">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Data Hub</h3>
                        <p className="text-sm text-slate-600 mb-6 leading-relaxed">Excel, PDFs, alles verstehen.</p>
                      </div>

              {/* Fake UI: Data Sources */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                  <span>Leads.xlsx</span>
                  <span className="ml-auto text-slate-400">1,234 rows</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-600">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                  <span>Company_Data.pdf</span>
                  <span className="ml-auto text-slate-400">Processed</span>
                </div>
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <div className="text-[9px] text-slate-500">Smart Algorithm versteht alles</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

          {/* CARD 6: AUTOMATION & CAMPAIGNS (Groß, Unten) */}
          <ExpensiveCard 
            intensity={8}
            className="group relative flex flex-col justify-between overflow-hidden md:col-span-2 md:row-span-1"
          >
            <div className="p-10">
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">Email Campaigns & Lead Forms</h3>
              <p className="max-w-md text-slate-600 text-base leading-relaxed">
                Erstelle Email-Kampagnen und Lead-Forms. Team-Management und ICP-Scoring für maximale Effizienz.
              </p>
            </div>

            {/* Fake UI: Campaign Stats */}
            <div className="relative mt-auto h-40 w-full border-t border-slate-200/50 bg-white/60 backdrop-blur-sm p-6">
              <div className="relative z-10 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900">24</div>
                  <div className="text-[10px] text-slate-500">Active Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900">1,456</div>
                  <div className="text-[10px] text-slate-500">Leads Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900">89%</div>
                  <div className="text-[10px] text-slate-500">ICP Match Rate</div>
                </div>
              </div>
            </div>
          </ExpensiveCard>

        </StaggerReveal>
      </div>
    </section>
  );
}
