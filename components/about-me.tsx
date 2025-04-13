"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function AboutMe() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 space-y-4"
          >
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Zap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
              <h2 className="font-heading text-3xl md:text-4xl font-bold">About Deven Spear</h2>
            </motion.div>

            <motion.h3
              className="text-xl accent-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Visionary Builder of Communities, Companies & Consciousness
            </motion.h3>

            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Deven Spear is a polymath entrepreneur and 6x founder with expertise in exponential technologies. His work
              spans artificial intelligence, blockchain, digital communities, and the future of human systems.
            </motion.p>

            <motion.p
              className="text-gray-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Through GalacticBackslash, Deven catalogs and shares insights on technological disruption and exponential
              change, helping organizations and individuals navigate the rapidly evolving landscape of the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button className="primary-button rounded-full px-6" whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                Full Bio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 rounded-xl overflow-hidden card-gradient"
                animate={{
                  boxShadow: [
                    "0 0 20px 0 rgba(var(--accent-primary), 0.3)",
                    "0 0 40px 0 rgba(var(--accent-primary), 0.5)",
                    "0 0 20px 0 rgba(var(--accent-primary), 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <img
                  src="/placeholder.svg?height=500&width=500"
                  alt="Deven Spear"
                  className="w-full h-full object-cover"
                />

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(var(--accent-primary),0.2)] to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
