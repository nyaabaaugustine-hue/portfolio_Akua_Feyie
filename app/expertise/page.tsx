'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const skills = [
  'Communication Skills', 'Interpersonal Skills', 'Business & Investment Liaison',
  'Business Start-up', 'Business Management', 'Negotiation',
  'Branding', 'Leadership', 'Marketing Consultancy', 'Mentorship',
]

const industries = [
  { label: 'Advertising & Marketing', logo: IMAGES.logoSmic360, company: 'SMIC360 Limited' },
  { label: 'Shipping & Freight Forwarding', logo: IMAGES.logoMoonlight, company: 'Moonlight Shipping' },
  { label: 'Real Estate & Construction', logo: null, company: 'The Phoenix Enclave' },
  { label: 'Hospitality', logo: IMAGES.logoAirbnb, company: "Christie's Homestay" },
]

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.portrait3}
            alt="Akua Feyie Expertise"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4">
            <span className="adinkra-dot" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">Expertise</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-5xl md:text-7xl text-cream leading-tight">
            Communication.<br />
            <span className="italic shimmer-text">Negotiation.</span><br />
            <span className="text-cream/60">Small Business Restructuring.</span>
          </motion.h1>
        </div>
      </section>

      {/* Skills + Industries */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">

            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="deco-line" />
                <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Core Skills</span>
              </div>
              <div className="space-y-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group py-2 border-b border-earth-100"
                  >
                    <div className="w-6 h-px bg-gold-400 group-hover:w-12 transition-all duration-500 shrink-0" />
                    <span className="font-body text-sm text-dark/70 group-hover:text-gold-600 transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="deco-line" />
                <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Industries</span>
              </div>

              {/* Side portrait */}
              <div className="relative aspect-[4/3] overflow-hidden mb-8">
                <Image
                  src={IMAGES.portrait2}
                  alt="Akua Feyie"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              </div>

              <div className="space-y-3">
                {industries.map((ind, i) => (
                  <motion.div
                    key={ind.label}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.7 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-5 p-4 border border-earth-100 hover:border-gold-400 hover:bg-earth-50 hover:shadow-[0_4px_16px_-4px_rgba(201,138,16,0.12)] transition-all duration-300 group"
                  >
                    <div className="shrink-0">
                      {ind.logo ? (
                        <div className="relative w-14 h-10 bg-earth-50 border border-earth-100 overflow-hidden" style={{ borderRadius: '2px' }}>
                          <Image src={ind.logo} alt={ind.company} fill className="object-contain p-1" sizes="56px" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gold-50 border border-gold-200 flex items-center justify-center" style={{ borderRadius: '2px' }}>
                          <span className="font-display text-lg font-semibold text-gold-600">P</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className="font-body text-sm text-dark/70 group-hover:text-dark transition-colors duration-300 block">
                        {ind.label}
                      </span>
                      <span className="font-body text-[10px] text-gold-600/70 tracking-wide">{ind.company}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
