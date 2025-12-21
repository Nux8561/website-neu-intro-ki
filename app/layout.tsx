import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

// Body Text: Inter (bleibt, ist gut)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Headlines: Plus Jakarta Sans (wie Team Page - Premium Look)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Headlines Alternative: Space Grotesk (Industrial Tool Vibe - Railway/Linear Style)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Monospace: JetBrains Mono (für Code, Zahlen, technische Details)
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intro KI - AI-native CRM",
  description: "Das moderne CRM für die Zukunft",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${mono.variable} antialiased attio-grid-pattern bg-noise min-h-screen`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

