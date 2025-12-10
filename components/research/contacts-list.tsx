"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ContactsList() {
  const contacts = [
    {
      id: "1",
      name: "John Doe",
      title: "CEO",
      email: "john@acme.com",
      phone: "+1 234 567 890",
      linkedin: "linkedin.com/in/johndoe",
    },
    {
      id: "2",
      name: "Jane Smith",
      title: "CTO",
      email: "jane@acme.com",
      phone: "+1 234 567 891",
      linkedin: "linkedin.com/in/janesmith",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8"
    >
      <h2 className="text-xl font-jakarta font-medium tracking-tight text-white mb-6">
        Key Contacts
      </h2>
      <div className="space-y-4">
        {contacts.map((contact) => (
          <motion.div
            key={contact.id}
            className="flex items-start justify-between p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-white font-inter font-medium">
                  {contact.name}
                </h3>
                <Badge
                  variant="outline"
                  className="bg-white/5 text-white/70 border-white/10"
                >
                  {contact.title}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-white/70 font-inter text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {contact.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  {contact.linkedin}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

