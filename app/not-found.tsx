'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background portrait — blurred & darkened */}
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.portrait1}
          alt=""
          fill
          priority
          className="object-cover object-top opacity-20 blur-sm scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Kente stripe texture */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            #c98a10 0px, #c98a10 3px,
            transparent 3px, transparent 40px,
            #9e7750 40px, #9e7750 42px,
            transparent 42px, transparent 80px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="mb-10 flex justify-center"
        >
          <div className="relative w-24 h-14 overflow-hidden border border-gold-400/40 bg-cream/10 backdrop-blur-sm" style={{ borderRadius: '3px' }}>
            <Image src={IMAGES.logo} alt="Akua Feyie" fill className="object-contain p-1.5" sizes="96px" />
          </div>
        </motion.div>

        {/* 404 number */}
        <motion.p
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="font-display font-light text-[8rem] sm:text-[12rem] leading-none text-gold-400/20 select-none"
        >
          404
        </motion.p>

        {/* Heading */}
        <motion.h1
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="font-display font-light text-4xl sm:text-5xl text-cream leading-tight -mt-6 mb-4"
        >
          Page Not <span className="italic font-medium shimmer-text">Found</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="flex items-center justify-center gap-3 my-6"
        >
          <span className="deco-line" />
          <span className="adinkra-dot" />
          <span className="deco-line" />
        </motion.div>

        {/* Message */}
        <motion.p
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="font-body text-sm text-cream/60 leading-relaxed max-w-md mx-auto mb-10"
        >
          This page seems to have wandered off. Let's guide you back to something meaningful.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-cream px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300"
          >
            Back to Home
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-cream/30 hover:border-gold-400 text-cream hover:text-gold-400 px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Quote */}
        <motion.p
          custom={6} variants={fadeUp} initial="hidden" animate="show"
          className="font-display italic text-lg text-cream/30 mt-16"
        >
          "Every detour is a redirect toward something greater."
        </motion.p>
      </div>
    </section>
  )
}
