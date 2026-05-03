'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function AboutPage() {
  return (
    <>
      {/* Hero — full bleed image */}
      <section className="relative min-h-[65vh] flex items-end pb-16 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1777773928/backkk_mbfzyh.jpg"
            alt="Christiana Akua Feyie"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-dark/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
            className="flex items-center gap-3 mb-4">
            <span className="adinkra-dot" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">About Her</span>
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
            className="font-display font-light text-5xl md:text-7xl text-cream leading-tight">
            Creating <span className="italic font-medium shimmer-text">Opportunities</span>
            <br />Building <span className="italic font-medium text-earth-300">Brands</span>
            <br />Improving <span className="italic font-medium text-cream/50">Lives</span>
          </motion.h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Text */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }} viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="deco-line" />
                  <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Background</span>
                </div>
                <div className="space-y-6 font-body text-base leading-loose text-dark/70">
                  <p>
                    Founder and CEO of <strong className="text-dark">SMIC360 Limited</strong>, Managing Director of <strong className="text-dark">Moonlight Shipping</strong>, and Facility Manager of <strong className="text-dark">Christie's Homestay</strong>. She also serves as the Project Manager of The Phoenix Enclave and the Business Manager for Eagle EL Salt Ghana Limited and Osabusquare.
                  </p>
                  <p>
                    With over 20 years of industry experience, Christiana has excelled in various fields, including Advertising and Marketing, Business Management, and Hospitality. She is a confident, self-driven, and multifaceted entrepreneur dedicated to making a positive impact in her community, society, and country.
                  </p>
                  <p>
                    Her passion for creating meaningful change and her commitment to using her skills to benefit humanity are evident in all her endeavors.
                  </p>
                </div>
              </motion.div>

              {/* Secondary photo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9 }} viewport={{ once: true }}
                className="mt-12 relative"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={IMAGES.photo6}
                    alt="Akua Feyie at work"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9 }} viewport={{ once: true }}
              >
                {/* Small portrait */}
                <div className="relative aspect-[4/5] overflow-hidden mb-8">
                  <Image
                    src={IMAGES.portrait3}
                    alt="Christiana Akua Feyie"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent">
                    <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-400">
                      Christiana Akua Feyie Yeboaa Okyere
                    </span>
                  </div>
                </div>

                {/* Education card */}
                <div className="bg-earth-50 p-8 border-l-2 border-gold-500">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Education</span>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="font-display text-xl font-medium text-dark">Executive MBA</p>
                      <p className="font-body text-sm text-earth-500 mt-1">Ghana Institute of Public Administration</p>
                    </div>
                    <div className="w-full h-px bg-gold-200" />
                    <div>
                      <p className="font-display text-xl font-medium text-dark">BFA · Communication Studies</p>
                      <p className="font-body text-sm text-earth-500 mt-1">Kwame Nkrumah University of Science and Technology, Kumasi</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gold-200">
                    <div className="grid grid-cols-3 gap-4">
                      {[['20+', 'Years'], ['6+', 'Ventures'], ['4', 'Industries']].map(([n, l]) => (
                        <div key={l} className="text-center">
                          <p className="font-display text-3xl font-bold text-gold-600">{n}</p>
                          <p className="font-body text-[10px] uppercase tracking-widest text-dark/50 mt-1">{l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
