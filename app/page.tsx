"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Library from "@/components/library"
import FeaturedInsight from "@/components/featured-insight"
import Subscribe from "@/components/subscribe"
import AboutMe from "@/components/about-me"
import Footer from "@/components/footer"

export default function Home() {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.substring(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <main className="min-h-screen bg-[rgb(var(--background-rgb))] text-white">
      <Hero />
      <Library />
      <FeaturedInsight />
      <Subscribe />
      <AboutMe />
      <Footer />
    </main>
  )
}
