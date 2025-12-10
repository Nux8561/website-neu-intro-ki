"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

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
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto z-50 max-w-md"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
            <p className="text-white/70 font-inter text-sm mb-4">
              We use cookies to improve your experience. You can opt out of
              certain cookies.{" "}
              <a
                href="/privacy"
                className="text-white hover:text-white/80 underline"
              >
                Find out more in our privacy policy.
              </a>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAccept}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-lg touch-manipulation min-h-[44px]"
              >
                Continue
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-lg touch-manipulation min-h-[44px]"
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

