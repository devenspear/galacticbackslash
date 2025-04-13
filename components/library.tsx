"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap } from "lucide-react"

// Sample library data with n8n-inspired styling
const libraryItems = [
  {
    id: 1,
    title: "The AI Revolution: Implications for Society",
    subtitle: "Artificial Intelligence",
    date: "April 2025",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "An exploration of how artificial intelligence is reshaping society, work, and human potential. This paper examines the exponential growth of AI capabilities and provides a framework for understanding its impact across sectors.",
    externalUrl: "https://example.com/ai-revolution",
  },
  {
    id: 2,
    title: "Blockchain Beyond Crypto: The Trust Protocol",
    subtitle: "Blockchain",
    date: "March 2025",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "A deep dive into blockchain technology's applications beyond cryptocurrency, examining how distributed ledger technology is creating new paradigms of trust in digital systems.",
    externalUrl: "https://example.com/blockchain-trust",
  },
  {
    id: 3,
    title: "Robotics & Automation: The New Industrial Revolution",
    subtitle: "Robotics",
    date: "February 2025",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "An analysis of how robotics and automation are transforming manufacturing, logistics, and service industries, with projections for the next decade of development.",
    externalUrl: "https://example.com/robotics-revolution",
  },
  {
    id: 4,
    title: "Quantum Computing: When Exponential Meets Exponential",
    subtitle: "Quantum Technology",
    date: "January 2025",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "A technical overview of quantum computing advances and their potential impact on cryptography, drug discovery, materials science, and artificial intelligence.",
    externalUrl: "https://example.com/quantum-computing",
  },
  {
    id: 5,
    title: "Biotech Frontiers: Engineering Life Itself",
    subtitle: "Biotechnology",
    date: "December 2024",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "An examination of cutting-edge biotechnology advances including CRISPR, synthetic biology, and bioprinting, with ethical considerations and future projections.",
    externalUrl: "https://example.com/biotech-frontiers",
  },
  {
    id: 6,
    title: "The Metaverse Economy: Virtual Worlds, Real Value",
    subtitle: "Virtual Reality",
    date: "November 2024",
    image: "/placeholder.svg?height=400&width=600",
    summary:
      "A strategic analysis of the emerging metaverse economy, examining digital ownership, virtual real estate, and the convergence of physical and digital reality.",
    externalUrl: "https://example.com/metaverse-economy",
  },
]

export default function Library() {
  const [selectedItem, setSelectedItem] = useState<(typeof libraryItems)[0] | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="library" className="py-20 relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid z-0"></div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Curated Library</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of insights, whitepapers, and analyses on exponential technologies and their impact.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {libraryItems.map((item, index) => (
            <LibraryCard key={item.id} item={item} index={index} onClick={() => setSelectedItem(item)} />
          ))}
        </motion.div>
      </div>

      <LibraryItemModal item={selectedItem} open={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  )
}

function LibraryCard({
  item,
  index,
  onClick,
}: {
  item: (typeof libraryItems)[0]
  index: number
  onClick: () => void
}) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300,
      },
    },
  }

  return (
    <motion.div variants={cardVariants} whileHover="hover" className="glow-effect">
      <Card className="card-gradient overflow-hidden border-0 h-full cursor-pointer" onClick={onClick}>
        <div className="relative h-48 overflow-hidden">
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,23,0.8)] to-transparent z-10"></div>

          {/* Lightning icon */}
          <div className="absolute top-4 left-4 z-20">
            <Zap className="h-6 w-6 text-[rgb(var(--accent-primary))]" />
          </div>

          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />

          <div className="absolute bottom-4 right-4 z-20">
            <Badge variant="secondary" className="bg-[rgba(var(--card-bg),0.8)] text-white border-0">
              {item.subtitle}
            </Badge>
          </div>
        </div>

        <CardContent className="p-5">
          <h3 className="font-heading text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
          <p className="text-gray-400 text-sm mb-2">{item.date}</p>
          <p className="text-gray-300 line-clamp-3">{item.summary}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function LibraryItemModal({
  item,
  open,
  onClose,
}: {
  item: (typeof libraryItems)[0] | null
  open: boolean
  onClose: () => void
}) {
  if (!item) return null

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl card-gradient border-0 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl flex items-center gap-2">
              <Zap className="h-5 w-5 text-[rgb(var(--accent-primary))]" />
              {item.title}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {item.subtitle} • {item.date}
            </DialogDescription>
          </DialogHeader>

          <div className="relative h-56 sm:h-64 overflow-hidden rounded-md my-4">
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,13,23,0.8)] to-transparent z-10"></div>
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">{item.summary}</p>

            <motion.a
              href={item.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center accent-text hover:opacity-80 transition-opacity"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              Read full article <ExternalLink className="ml-2 h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
