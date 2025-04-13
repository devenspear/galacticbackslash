"use client"

import { motion } from "framer-motion"
import { Twitter, Linkedin, Youtube, ExternalLink, Zap } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "https://x.com", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com", label: "YouTube" },
    {
      icon: (
        <>
          <span>deven.blog</span> <ExternalLink className="h-3 w-3" />
        </>
      ),
      href: "https://deven.blog",
      label: "Blog",
    },
  ]

  return (
    <footer className="py-10 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
              GALACTIC<span className="accent-text">/</span>BACKSLASH
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                aria-label={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, color: "rgb(var(--accent-primary))" }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="border-t border-[rgba(255,255,255,0.1)] mt-6 pt-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Deven Spear. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
