"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <motion.div
        className="relative flex items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: [0, 12, -12, 0]
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          y: { duration: 0.6, ease: "easeOut" },
          x: {
            duration: 5,
            times: [0, 0.25, 0.75, 1],
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0.6,
            repeatDelay: 0.3
          }
        }}
        whileHover={{
          scale: 1.05,
          transition: { 
            duration: 0.3, 
            ease: "easeInOut"
          }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl font-bold text-primary">CMS</span>
        <span className="ml-2 text-lg font-medium text-foreground">Toilet Hire</span>
      </motion.div>
    </Link>
  )
}
