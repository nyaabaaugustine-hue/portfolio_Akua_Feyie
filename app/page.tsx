'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

const roles = ['Entrepreneur', 'Mom', 'Optimist', 'Inspirer', 'Leader', 'CEO']

// Photo gallery data — mapped to your Cloudinary images
const galleryPhotos = [
  { src: IMAGES.portrait2, alt: 'Christiana Akua Feyie' },
  { src: IMAGES.portrait3, alt: 'Akua Feyie speaking' },
  { src: IMAGES.portrait4, alt: 'Akua Feyie at event' },
  { src: IMAGES.photo5,    alt: 'Akua Feyie profile' },
  { src: IMAGES.photo6,    alt: 'Akua Feyie portrait' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY    = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Full-bleed hero image with parallax */}
        <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
          <Image
            src={IMAGES.portrait1}
            alt="Christiana Akua Feyie"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          {/* Dark gradient overlay — left heavy so text reads */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/85 via-dark/60 to-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
        </motion.div>

        {/* Kente stripe texture on top */}
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

        {/* Floating adinkra ornament */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute right-16 top-24 w-48 h-48 opacity-20 z-[1]"
        >
          {[0, 45, 90, 135].map(deg => (
            <div
              key={deg}
              className="absolute inset-0 border border-gold-400 rounded-full"
              style={{ transform: `rotate(${deg}deg) scaleX(0.4)` }}
            />
          ))}
        </motion.div>

        {/* Content */}
        <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              custom={0} variants={fadeUp} initial="hidden" animate="show"
              className="flex items-center gap-3 mb-8"
            >
              <span className="adinkra-dot" />
              <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">
                Founder & CEO · SMIC360 Limited
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="font-display font-light text-6xl md:text-8xl lg:text-9xl leading-[0.88] text-cream mb-6"
            >
              Christiana
              <br />
              <span className="italic font-medium shimmer-text">Akua Feyie</span>
              <br />
              <span className="font-light text-4xl md:text-5xl lg:text-6xl text-cream/60">Yeboaa Okyere</span>
            </motion.h1>

            {/* Animated roles */}
            <motion.div
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap gap-x-4 gap-y-1 my-8"
            >
              {roles.map((role, i) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="font-body text-xs tracking-[0.25em] uppercase text-cream/60"
                >
                  {role}
                  {i < roles.length - 1 && <span className="ml-4 text-gold-500/60">·</span>}
                </motion.span>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="border-l-2 border-gold-400 pl-6 my-10 max-w-2xl"
            >
              <p className="font-display text-xl md:text-2xl font-light italic leading-relaxed text-cream/80">
                "Success gravitates towards the one with a definite desire or purpose backed by fearless faith, persistence, and perseverance."
              </p>
            </motion.blockquote>

            {/* CTA */}
            <motion.div
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-500 text-cream px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                Get In Touch
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border border-cream/30 hover:border-gold-400 text-cream hover:text-gold-400 px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 backdrop-blur-sm"
              >
                Discover Her Story
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="font-body text-[9px] tracking-[0.3em] uppercase text-cream/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-gradient-to-b from-gold-400 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── BIOGRAPHY STRIP ───────────────────────────────── */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg, #c98a10 0px, #c98a10 1px,
              transparent 1px, transparent 60px
            )`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — real portrait */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full max-w-sm mx-auto">
                {/* Gold offset frame */}
                <div className="absolute inset-0 border-2 border-gold-600/40 translate-x-5 translate-y-5 rounded-none" />
                {/* Main portrait */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={IMAGES.portrait2}
                    alt="Christiana Akua Feyie"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 400px"
                  />
                  {/* Subtle gold gradient at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>

                {/* Floating stat — 20+ years */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -right-6 top-10 bg-gold-600 p-5 text-cream z-10"
                >
                  <p className="font-display text-4xl font-bold leading-none">20+</p>
                  <p className="font-body text-[10px] tracking-widest uppercase mt-2 leading-tight">Years<br />Experience</p>
                </motion.div>

                {/* Floating stat — ventures */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="absolute -left-6 -bottom-6 bg-cream p-5 z-10"
                >
                  <p className="font-display text-4xl font-bold text-dark leading-none">6+</p>
                  <p className="font-body text-[10px] tracking-widest uppercase mt-2 text-dark/60 leading-tight">Ventures<br />Founded</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — text */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="adinkra-dot" />
                <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-500">Biography</span>
              </div>

              <h2 className="font-display font-light text-4xl md:text-5xl text-cream leading-tight mb-8">
                A Story of
                <br />
                <span className="italic font-medium shimmer-text">Purpose & Drive</span>
              </h2>

              <div className="space-y-5 font-body text-sm leading-relaxed text-cream/70">
                <p>
                  Founder and CEO of <span className="text-gold-400">SMIC360 Limited</span>, Managing Director of Moonlight Shipping, and Facility Manager of Christie's Homestay. I also serves as Project Manager of The Phoenix Enclave and Executive Manager for Eagle EL Salt Ghana Limited and Osabusquare.
                </p>
                <p>
                  With over 20 years of industry experience, Christiana has excelled in Advertising & Marketing, Business Management, and Hospitality — a confident, self-driven, and multifaceted entrepreneur dedicated to making a positive impact.
                </p>
                <p>
                  She holds an <span className="text-gold-400">Executive MBA</span> from the Ghana Institute of Public Administration and a <span className="text-gold-400">BFA in Communication Studies</span> from Kwame Nkrumah University of Science and Technology, Kumasi.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 mt-10 text-gold-400 font-body text-xs tracking-[0.25em] uppercase hover:gap-6 transition-all duration-300"
              >
                Full Story <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY STRIP ───────────────────────────── */}
      <section className="py-2 overflow-hidden bg-cream">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-2 w-max"
        >
          {[...galleryPhotos, ...galleryPhotos].map((photo, i) => (
            <div key={i} className="relative w-48 h-64 shrink-0 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                sizes="192px"
              />
              <div className="absolute inset-0 bg-gold-900/20 hover:bg-transparent transition-colors duration-700" />
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── VENTURES MARQUEE ──────────────────────────────── */}
      <section className="py-5 bg-gold-600 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex gap-8">
              {['SMIC360 Limited', 'Moonlight Shipping', "Christie's Homestay", 'The Phoenix Enclave', 'Eagle EL Salt Ghana', 'Osabusquare'].map(v => (
                <span key={v} className="font-body text-xs tracking-[0.3em] uppercase text-cream/80 flex items-center gap-8">
                  {v} <span className="text-cream/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="deco-line" />
              <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Industries</span>
              <span className="deco-line" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-6xl text-dark">
              WHAT I <span className="italic font-medium text-gold-600">DO</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { label: 'Advertising & Marketing', logo: IMAGES.logoSmic360, sub: 'SMIC360 Limited' },
              { label: 'Shipping & Freight', logo: IMAGES.logoMoonlight, sub: 'Moonlight Shipping' },
              { label: 'Real Estate & Construction', logo: null, sub: 'The Phoenix Enclave' },
              { label: 'Hospitality', logo: IMAGES.logoAirbnb, sub: "Christie's Homestay" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                viewport={{ once: true }}
                className="group relative bg-cream border border-earth-100 p-8 text-center hover:border-gold-400 hover:shadow-[0_8px_32px_-8px_rgba(201,138,16,0.15)] transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-gold-50/0 to-gold-50/0 group-hover:from-gold-50/60 group-hover:to-transparent transition-all duration-500" />
                <div className="relative">
                  {item.logo ? (
                    <div className="relative w-16 h-12 mx-auto mb-5 overflow-hidden bg-earth-50 border border-earth-100" style={{ borderRadius: '3px' }}>
                      <Image
                        src={item.logo}
                        alt={item.sub}
                        fill
                        className="object-contain p-1.5"
                        sizes="64px"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-12 mx-auto mb-5 bg-gold-50 border border-gold-200 flex items-center justify-center" style={{ borderRadius: '3px' }}>
                      <span className="font-display text-xl font-semibold text-gold-600">P</span>
                    </div>
                  )}
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-dark/70 group-hover:text-dark font-medium transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="font-body text-[10px] text-gold-600/80 mt-1.5 tracking-wide">{item.sub}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPLIT IMAGE + QUOTE ───────────────────────────── */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden"
            >
              <Image
                src={IMAGES.portrait3}
                alt="Christiana Akua Feyie"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-earth-50/80" />
            </motion.div>

            {/* Quote side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center bg-dark p-12 lg:p-16"
            >
              <div>
                <span className="font-accent text-9xl text-gold-400/30 leading-none block -mb-8">"</span>
                <p className="font-display font-light text-2xl md:text-3xl text-cream leading-relaxed italic">
                  You are capable of achieving incredible success. Go right ahead and let it happen.
                </p>
                <div className="flex items-center gap-4 mt-10">
                  <span className="deco-line" />
                  <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-500">Christiana Akua Feyie</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.photo5}
            alt="Akua Feyie"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="deco-line" />
              <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">Connect</span>
              <span className="deco-line" />
            </div>
            <h2 className="font-display font-light text-5xl md:text-7xl text-cream mb-6">
              Let's <span className="italic shimmer-text">Connect</span>
            </h2>
            <p className="font-body text-sm text-cream/60 max-w-md mx-auto mb-10">
              Ready to collaborate, partner, or simply have a conversation? Christiana welcomes every meaningful connection.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-gold-400 text-gold-400 hover:bg-gold-600 hover:border-gold-600 hover:text-cream px-12 py-5 font-body text-xs tracking-[0.3em] uppercase transition-all duration-300"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
