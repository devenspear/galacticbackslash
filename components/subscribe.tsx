"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap } from "lucide-react"

export default function Subscribe() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            className="inline-flex items-center justify-center gap-2 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Zap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Join the Exponential Briefing</h2>
          </motion.div>

          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stay updated with curated insights on exponential technologies and their impact on business, society, and
            human potential.
          </motion.p>

          {/* Substack embedded form styled to match n8n */}
          <motion.div
            className="card-gradient rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glow-effect"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-[rgba(var(--background-rgb),0.5)] border-[rgba(255,255,255,0.1)] text-white h-12 rounded-full px-6"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    className="primary-button rounded-full px-8 h-12 w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Subscribe
                  </Button>
                </motion.div>
              </div>
              <motion.p
                className="text-xs text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                No spam, ever. Your email address will only be used for the Exponential Briefing and you can unsubscribe
                at any time.
              </motion.p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
