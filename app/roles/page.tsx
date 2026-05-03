'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const roles = [
  {
    title: 'Founder & CEO',
    company: 'SMIC360 Limited',
    logo: IMAGES.logoSmic360,
    desc: 'Leading a dynamic 360° marketing and business solutions firm with a portfolio spanning advertising, media, and brand consulting.',
  },
  {
    title: 'Managing Director',
    company: 'Moonlight Shipping',
    logo: IMAGES.logoMoonlight,
    desc: 'Overseeing international freight, logistics, and shipping operations with precision, reliability, and deep industry expertise.',
  },
  {
    title: 'Facility Manager',
    company: "Christie's Homestay",
    logo: IMAGES.logoAirbnb,
    desc: 'Curating warm, premium short-stay accommodation experiences that blend comfort, hospitality, and a genuine sense of home.',
  },
  {
    title: 'Project Manager',
    company: 'The Phoenix Enclave',
    logo: null,
    desc: 'Driving a landmark real estate development that redefines premium living with modern architecture and community-centred design.',
  },
  {
    title: 'Executive Manager',
    company: 'Eagle EL Salt Ghana Limited',
    logo: IMAGES.logoEagle,
    desc: 'Managing operations and strategic growth for one of Ghana\'s foremost salt production and distribution enterprises.',
  },
  {
    title: 'Business Manager',
    company: 'Osabusquare',
    logo: null,
    desc: 'Directing day-to-day commercial operations, building partnerships, and nurturing new market opportunities across sectors.',
  },
]

export default function RolesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.photo5}
            alt="Akua Feyie Leadership"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4">
            <span className="adinkra-dot" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">What She Does</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-5xl md:text-8xl text-cream leading-tight">
            Leadership.<br />
            <span className="italic shimmer-text">Management.</span><br />
            <span className="text-cream/50">Marketing.</span>
          </motion.h1>
        </div>
      </section>

      {/* Roles grid */}
      <section className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative bg-white border border-earth-100 p-8 hover:border-gold-400 hover:shadow-[0_8px_40px_-8px_rgba(201,138,16,0.18)] transition-all duration-500 overflow-hidden"
              >
                {/* subtle gold corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-gold-400 to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-gold-400 to-transparent" />
                </div>

                {/* Logo / monogram */}
                <div className="mb-6">
                  {role.logo ? (
                    <div className="relative w-20 h-14 bg-earth-50 border border-earth-100 overflow-hidden" style={{ borderRadius: '3px' }}>
                      <Image
                        src={role.logo}
                        alt={role.company}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-gold-50 border border-gold-200 flex items-center justify-center" style={{ borderRadius: '3px' }}>
                      <span className="font-display text-2xl font-semibold text-gold-600">
                        {role.company.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold-600 mb-2">{role.title}</p>
                <h3 className="font-display text-xl font-medium text-dark mb-3 group-hover:text-gold-700 transition-colors duration-300">
                  {role.company}
                </h3>
                <p className="font-body text-xs leading-relaxed text-dark/55">{role.desc}</p>

                {/* bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom photo strip */}
      <section className="section-padding bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-3">
            {[IMAGES.portrait2, IMAGES.portrait3, IMAGES.photo6].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Akua Feyie"
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gold-900/40 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
