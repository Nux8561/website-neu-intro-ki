"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { attioTransition } from "@/lib/animations"

export function CookieConsent() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={attioTransition}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 max-w-md"
        >
          <div className="bg-white border border-attio-subtle rounded-xl p-6 shadow-attio-card">
            <p className="text-text-secondary font-inter text-sm mb-4">
              We use cookies to improve your experience. You can opt out of
              certain cookies.{" "}
              <a
                href="/privacy"
                className="text-text-primary hover:text-text-secondary underline"
              >
                Find out more in our privacy policy.
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                className="bg-text-primary hover:bg-text-primary/90 text-white border border-text-primary rounded-lg touch-manipulation min-h-[44px]"
              >
                Continue
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="border-attio-subtle text-text-secondary hover:text-text-primary hover:border-attio-subtle rounded-lg touch-manipulation min-h-[44px]"
              >
                Reject
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

