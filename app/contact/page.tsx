'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { IMAGES } from '@/lib/images'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '', address: '', city: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const fields = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'phone', label: 'Phone Number', type: 'tel' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'address', label: 'Address', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.photo6}
            alt="Contact Akua Feyie"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-top"
            style={{ objectPosition: 'top center' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4">
            <span className="adinkra-dot" />
            <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-400">Reach Out</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-light text-6xl md:text-8xl text-cream">
            Let's <span className="italic shimmer-text">Connect</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }} viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              {/* Logo */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gold-300/50">
                <Image src={IMAGES.logo} alt="Akua Feyie" fill className="object-cover" sizes="96px" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="deco-line" />
                  <span className="font-body text-xs tracking-[0.35em] uppercase text-gold-600">Contact Details</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-earth-400 mb-2">Phone</p>
                    <a href="tel:+233244783099"
                      className="font-display text-2xl text-dark hover:text-gold-600 transition-colors duration-300">
                      +233 24 478 3099
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-widest text-earth-400 mb-2">Email</p>
                    <a href="mailto:christie@smic360.com"
                      className="font-display text-xl text-dark hover:text-gold-600 transition-colors duration-300">
                      christie@smic360.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-gold-400 pl-6 py-4">
                <p className="font-display italic text-xl text-dark/70 leading-relaxed">
                  "Tell me a little bit more about how I can help you."
                </p>
                <p className="font-body text-xs text-gold-600 tracking-widest uppercase mt-4">
                  — Christiana Akua Feyie
                </p>
              </div>

              {/* Side photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={IMAGES.portrait2}
                  alt="Christiana Akua Feyie"
                  fill
                  loading="lazy"
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 80vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }} viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <span className="font-accent text-8xl text-gold-400 block mb-4">✦</span>
                  <h2 className="font-display text-4xl text-dark mb-4">Message Sent!</h2>
                  <p className="font-body text-sm text-dark/60">Christiana will be in touch with you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {fields.map((field) => (
                      <div key={field.name}>
                        <label className="font-body text-xs tracking-[0.2em] uppercase text-dark/50 block mb-3">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={(formData as any)[field.name]}
                          onChange={handleChange}
                          required
                          placeholder={field.label}
                          className="w-full border-b border-earth-200 focus:border-gold-500 bg-transparent py-3 font-body text-sm text-dark outline-none transition-colors duration-300 placeholder:text-dark/20"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-dark/50 block mb-3">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me a little bit more about how I can help you…"
                      className="w-full border-b border-earth-200 focus:border-gold-500 bg-transparent py-3 font-body text-sm text-dark outline-none transition-colors duration-300 placeholder:text-dark/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center gap-4 bg-gold-600 hover:bg-gold-700 text-cream px-10 py-4 font-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
                  >
                    Send Message
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
