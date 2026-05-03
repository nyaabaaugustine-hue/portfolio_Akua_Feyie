'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/lib/images'

export default function RealEstatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.phoenixHero}
            alt="The Phoenix Enclave"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-top"
            style={{ objectPosition: 'top center' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4">
            <span className="adinkra-dot" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">Real Estate</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-6xl md:text-8xl text-cream leading-tight">
            The <span className="italic shimmer-text">Phoenix</span>
            <br />Enclave
          </motion.h1>
        </div>
      </section>

      {/* Phoenix Enclave detail */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }} viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 border-2 border-gold-400/30 translate-x-4 translate-y-4" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={IMAGES.photo5}
                  alt="The Phoenix Enclave"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }} viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="deco-line" />
                <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Project Details</span>
              </div>
              <h2 className="font-display font-light text-4xl md:text-5xl text-dark mb-6">
                A Premier <span className="italic font-medium text-gold-600">Real Estate</span> Development
              </h2>
              <p className="font-body text-sm leading-loose text-dark/60 mb-8">
                The Phoenix Enclave is Christiana's flagship real estate project — a testament to her vision of creating spaces that uplift communities and redefine modern living in Ghana.
              </p>

              <div className="space-y-4 mb-10">
                {['Modern Architecture', 'Community-Centered Design', 'Premium Facilities', 'Strategic Location'].map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <span className="text-gold-500 text-lg">✦</span>
                    <span className="font-body text-sm text-dark/70">{f}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-cream px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                Enquire Now →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Christie's Homestay */}
      <section className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.photo6}
            alt="Christie's Homestay"
            fill
            className="object-cover opacity-30"
            loading="lazy"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-dark/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }} viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="deco-line" />
                <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-500">Hospitality</span>
              </div>
              <h2 className="font-display font-light text-4xl md:text-6xl text-cream mb-6">
                Christie's <span className="italic shimmer-text">Homestay</span>
              </h2>
              <p className="font-body text-sm text-cream/60 leading-loose mb-8">
                A warm, welcoming retreat managed with the same excellence and care that defines everything Christiana touches — where every guest feels at home.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-gold-400 text-gold-400 hover:bg-gold-600 hover:border-gold-600 hover:text-cream px-8 py-4 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300"
              >
                Book a Stay →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.9 }} viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={IMAGES.portrait2}
                alt="Christie's Homestay"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
