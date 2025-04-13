"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      {/* Glow effect that follows mouse */}
      <div
        className="pointer-events-none absolute opacity-30 z-0"
        style={{
          background: "radial-gradient(circle, rgba(255,125,59,0.4) 0%, rgba(13,13,23,0) 50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          transform: `translate(${mousePosition.x - 200}px, ${mousePosition.y - 200}px)`,
          transition: "transform 0.1s ease-out",
        }}
      ></div>

      <div className="container relative z-10 px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Flexible AI workflow
            <span className="block accent-text">for exponential disruption</span>
          </motion.h1>

          <motion.p
            className="font-body text-lg text-gray-300 max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Build with the precision of code or the speed of drag-n-drop. Explore curated insights on technological
            disruption, AI, blockchain, and the future of human systems.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="primary-button rounded-full px-8 py-6 text-base font-medium"
              onClick={() => {
                document.getElementById("library")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Explore the Library
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="secondary-button rounded-full px-8 py-6 text-base font-medium"
            >
              Learn More
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Lightning bolt graphic */}
          <div className="relative h-[400px] w-full">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                filter: [
                  "drop-shadow(0 0 15px rgba(255,125,59,0.5))",
                  "drop-shadow(0 0 25px rgba(255,125,59,0.8))",
                  "drop-shadow(0 0 15px rgba(255,125,59,0.5))",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            >
              <svg
                width="200"
                height="300"
                viewBox="0 0 200 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="lightning-glow"
              >
                <path d="M100 0L130 120H190L80 300L100 160H40L100 0Z" fill="url(#lightning-gradient)" />
                <defs>
                  <linearGradient id="lightning-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF7D3B" />
                    <stop offset="100%" stopColor="#4285F4" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Feature cards */}
      <div className="container relative z-10 mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "AI Revolution",
              description: "Explore the implications of artificial intelligence on society",
              icon: "⚡",
            },
            {
              title: "Blockchain",
              description: "Discover the trust protocol beyond cryptocurrency",
              icon: "⚡",
            },
            {
              title: "Robotics",
              description: "Analyze automation in the new industrial revolution",
              icon: "⚡",
            },
            {
              title: "Quantum Tech",
              description: "Understand the exponential impact of quantum computing",
              icon: "⚡",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="card-gradient rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-lg mb-2 accent-text">{feature.icon}</div>
              <h3 className="font-heading text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
