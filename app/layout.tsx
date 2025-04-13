import type React from "react"
import "@/app/globals.css"
import { Gemunu_Libre } from "next/font/google"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const gemunu = Gemunu_Libre({
  subsets: ["latin"],
  variable: "--font-gemunu",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "GalacticBackslash | Mapping the Curve of Exponential Disruption",
  description: "A platform for curated insights on technological disruption and exponential change by Deven Spear.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gemunu.variable} ${inter.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'