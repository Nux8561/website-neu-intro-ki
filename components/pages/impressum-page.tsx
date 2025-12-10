"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export function ImpressumPage() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
          >
            <h1 className="text-4xl md:text-5xl font-jakarta font-medium tracking-tight text-[#0B0C0E] mb-8">
              Impressum
            </h1>
            <div className="space-y-8 text-[#0B0C0E]/70 font-inter">
              <div>
                <h2 className="text-xl font-jakarta font-medium text-[#0B0C0E] mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p>
                  IntroKI GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                  <br />
                  Deutschland
                </p>
              </div>
              <div>
                <h2 className="text-xl font-jakarta font-medium text-[#0B0C0E] mb-4">
                  Kontakt
                </h2>
                <p>
                  Telefon: +49 (0) 123 456 789
                  <br />
                  E-Mail: info@introki.app
                </p>
              </div>
              <div>
                <h2 className="text-xl font-jakarta font-medium text-[#0B0C0E] mb-4">
                  Registereintrag
                </h2>
                <p>
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: Amtsgericht Berlin
                  <br />
                  Registernummer: HRB 123456 B
                </p>
              </div>
              <div>
                <h2 className="text-xl font-jakarta font-medium text-[#0B0C0E] mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p>
                  IntroKI GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                  <br />
                  Deutschland
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

