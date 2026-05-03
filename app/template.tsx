'use client'
import { motion } from 'framer-motion'

/**
 * template.tsx — re-mounts on every route change (unlike layout.tsx).
 * Framer Motion handles the enter animation; Next.js handles unmounting.
 * The exit is a quick fade-out achieved via initial opacity state.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
