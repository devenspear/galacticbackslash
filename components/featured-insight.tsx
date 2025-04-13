"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function FeaturedInsight() {
  const ref = useRef(null)

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--accent-primary),0.05)] to-transparent z-0"></div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Zap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Featured Insight</h2>
            </motion.div>
          </div>

          <motion.div
            className="card-gradient rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              transition: { duration: 0.3 },
            }}
            className="glow-effect"
          >
            <motion.h3
              className="font-heading text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The Convergence of AI and Blockchain: A New Paradigm
            </motion.h3>

            <motion.p
              className="text-gray-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              The intersection of artificial intelligence and blockchain technology is creating unprecedented
              opportunities for decentralized autonomous systems. This analysis explores how these technologies are
              combining to reshape governance, finance, and digital identity.
            </motion.p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <motion.div
                className="text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                April 10, 2025
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button className="primary-button rounded-full px-6" whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                  Read Full Analysis <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
