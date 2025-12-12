"use client"

import * as React from "react"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

// Company logos - relevant Sales/CRM/Tech companies
const logos = [
  { 
    name: "Salesforce", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 7.5C15.5 11.6 12.1 15 8 15C3.9 15 0.5 11.6 0.5 7.5C0.5 3.4 3.9 0 8 0C12.1 0 15.5 3.4 15.5 7.5Z" fill="#00A1E0"/>
        <path d="M30 7.5C30 11.6 26.6 15 22.5 15C18.4 15 15 11.6 15 7.5C15 3.4 18.4 0 22.5 0C26.6 0 30 3.4 30 7.5Z" fill="#00A1E0"/>
        <path d="M44.5 7.5C44.5 11.6 41.1 15 37 15C32.9 15 29.5 11.6 29.5 7.5C29.5 3.4 32.9 0 37 0C41.1 0 44.5 3.4 44.5 7.5Z" fill="#00A1E0"/>
        <path d="M59 7.5C59 11.6 55.6 15 51.5 15C47.4 15 44 11.6 44 7.5C44 3.4 47.4 0 51.5 0C55.6 0 59 3.4 59 7.5Z" fill="#00A1E0"/>
        <text x="65" y="12" fontSize="12" fill="#00A1E0" fontFamily="Arial, sans-serif" fontWeight="bold">salesforce</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "HubSpot", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="12" fill="#FF7A59"/>
        <path d="M15 3L20 10L15 17L10 10L15 3Z" fill="white"/>
        <text x="35" y="18" fontSize="14" fill="#FF7A59" fontFamily="Arial, sans-serif" fontWeight="bold">HubSpot</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Microsoft", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="12" height="12" fill="#F25022"/>
        <rect x="13" y="0" width="12" height="12" fill="#7FBA00"/>
        <rect x="0" y="13" width="12" height="12" fill="#00A4EF"/>
        <rect x="13" y="13" width="12" height="12" fill="#FFB900"/>
        <text x="30" y="18" fontSize="12" fill="#737373" fontFamily="Arial, sans-serif" fontWeight="600">Microsoft</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Stripe", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10L15 10L20 20L10 20L5 10Z" fill="#635BFF"/>
        <text x="25" y="18" fontSize="16" fill="#635BFF" fontFamily="Arial, sans-serif" fontWeight="bold">Stripe</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Notion", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5H15V25H5V5Z" fill="black"/>
        <path d="M15 5H25V15H15V5Z" fill="black"/>
        <text x="30" y="18" fontSize="14" fill="black" fontFamily="Arial, sans-serif" fontWeight="600">Notion</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Slack", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8C8 10.2 6.2 12 4 12C1.8 12 0 10.2 0 8C0 5.8 1.8 4 4 4H8V8Z" fill="#36C5F0"/>
        <path d="M12 8C12 5.8 13.8 4 16 4C18.2 4 20 5.8 20 8V16C20 18.2 18.2 20 16 20C13.8 20 12 18.2 12 16V8Z" fill="#36C5F0"/>
        <path d="M16 20C13.8 20 12 21.8 12 24C12 26.2 13.8 28 16 28C18.2 28 20 26.2 20 24V20H16Z" fill="#2EB67D"/>
        <path d="M16 12C18.2 12 20 10.2 20 8C20 5.8 18.2 4 16 4H8C5.8 4 4 5.8 4 8C4 10.2 5.8 12 8 12H16Z" fill="#ECB22E"/>
        <text x="25" y="18" fontSize="14" fill="#4A154B" fontFamily="Arial, sans-serif" fontWeight="bold">Slack</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Zapier", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="10" fill="#FF4A00"/>
        <path d="M15 5L20 15L15 25L10 15L15 5Z" fill="white"/>
        <text x="30" y="18" fontSize="14" fill="#FF4A00" fontFamily="Arial, sans-serif" fontWeight="600">Zapier</text>
      </svg>
    ),
    height: 24
  },
  { 
    name: "Linear", 
    component: (
      <svg viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5L15 5L20 15L10 15L5 5Z" fill="#5E6AD2"/>
        <path d="M15 15L25 15L30 25L20 25L15 15Z" fill="#5E6AD2"/>
        <text x="35" y="18" fontSize="14" fill="#5E6AD2" fontFamily="Arial, sans-serif" fontWeight="600">Linear</text>
      </svg>
    ),
    height: 24
  },
]

export function SocialProof() {
  return (
    <section className="py-16 border-y border-[#0B0C0E]/10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6 mb-6 md:mb-0">
            <p className="text-end text-sm text-[#0B0C0E]/50 font-inter">
              Vertraut von führenden Unternehmen
            </p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
            <InfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center"
                  style={{ height: `${logo.height}px`, minWidth: '120px' }}
                >
                  <div className="opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {logo.component}
                  </div>
                </div>
              ))}
            </InfiniteSlider>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

