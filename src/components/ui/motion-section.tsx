"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function MotionSection({ 
  children, 
  className = "", 
  delay = 0,
  stagger = false 
}: MotionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  const bounceVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        stiffness: 150,
        damping: 8,
        delay,
        ...(stagger && {
          staggerChildren: 0.3,
          delayChildren: 0.2
        })
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.2,
        stiffness: 150,
        damping: 8
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={bounceVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {stagger ? (
        <motion.div variants={childVariants}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  )
}
