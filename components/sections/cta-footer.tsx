import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTAFooter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1000px] px-4">
        
        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center shadow-2xl shadow-slate-200 md:px-16 md:py-20">
          
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-blue-500/20 blur-[100px]"></div>

          <div className="relative z-10">
            <h2 className="mx-auto mb-6 max-w-2xl text-3xl font-semibold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Bereit, dein CRM <br />
              <span className="text-slate-400">intelligent zu machen?</span>
            </h2>
            
            <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
              Starte in unter 5 Minuten. Importiere deine Daten aus HubSpot oder Pipedrive mit einem Klick.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Kostenlos starten
              </Link>
              <Link
                href="/demo"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-slate-800"
              >
                Sales kontaktieren
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <p className="mt-8 text-xs text-slate-500">
              Keine Kreditkarte erforderlich • 14 Tage Pro-Trial inklusive
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

