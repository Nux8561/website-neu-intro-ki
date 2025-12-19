import * as React from "react";
import { Shield, Lock, Server, Globe } from "lucide-react";

const COMPANIES = [
  "Linear", "Raycast", "Vercel", "Loom", "Notion", "Intercom"
];

export function TrustSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/50 py-24">
      <div className="mx-auto max-w-[1200px] px-4 text-center">
        
        {/* Headline */}
        <p className="mb-8 text-sm font-medium text-slate-500">
          Vertraut von modernen GTM-Teams weltweit
        </p>

        {/* LOGO GRID (Monochrome) */}
        <div className="mb-20 grid grid-cols-2 gap-8 opacity-60 md:grid-cols-6 md:gap-12">
          {COMPANIES.map((name) => (
            <div key={name} className="flex items-center justify-center font-semibold text-slate-400 text-xl tracking-tight grayscale transition-all hover:grayscale-0 hover:text-slate-700">
              {/* Hier normalerweise <Image /> nutzen, wir nehmen Text als Platzhalter */}
              {name}
            </div>
          ))}
        </div>

        {/* SECURITY & COMPLIANCE (Der "Enterprise" Teil) */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Badge 1 */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">SOC 2 Type II</h4>
                <p className="text-xs text-slate-500 mt-1">Jährlich auditiert</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">DSGVO / GDPR</h4>
                <p className="text-xs text-slate-500 mt-1">Server in Frankfurt</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600">
                <Server className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">End-to-End Encrypted</h4>
                <p className="text-xs text-slate-500 mt-1">AES-256 Standard</p>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-sm">99.99% Uptime</h4>
                <p className="text-xs text-slate-500 mt-1">Status Page öffentlich</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

