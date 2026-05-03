'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/roles', label: 'Roles' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/real-estate', label: 'Phoenix Enclave' },
  { href: '/contact', label: 'Contact' },
]

const ventureLogos = [
  { src: IMAGES.logoSmic360, alt: 'SMIC360 Limited' },
  { src: IMAGES.logoMoonlight, alt: 'Moonlight Shipping' },
  { src: IMAGES.logoAirbnb, alt: "Christie's Homestay" },
  { src: IMAGES.logoEagle, alt: 'Eagle EL Salt Ghana' },
]

export default function Footer() {
  return (
    <footer className="bg-dark text-cream/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Venture logos strip */}
        <div className="flex flex-wrap items-center gap-5 pb-14 border-b border-cream/10 mb-16">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-cream/30 mr-2">Ventures</span>
          {ventureLogos.map((v) => (
            <div
              key={v.alt}
              className="relative w-20 h-12 bg-cream/5 border border-cream/10 hover:border-gold-500/40 hover:bg-cream/10 transition-all duration-300 overflow-hidden"
              style={{ borderRadius: '3px' }}
              title={v.alt}
            >
              <Image src={v.src} alt={v.alt} fill className="object-contain p-2 opacity-70 hover:opacity-100 transition-opacity duration-300" sizes="80px" />
            </div>
          ))}
        </div>

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 pb-16 border-b border-cream/10">
          <div className="max-w-sm">
            <span className="font-accent text-5xl text-gold-400 block mb-3">Akua Feyie</span>
            <p className="font-body text-sm leading-relaxed text-cream/60">
              Entrepreneur. Mom. Optimist. Building brands, creating opportunities, and improving lives across Ghana and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3">
            {footerLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs tracking-[0.2em] uppercase text-cream/50 hover:text-gold-400 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="space-y-3">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-500 mb-4">Contact</p>
            <a href="tel:+233244783099" className="block font-body text-sm text-cream/60 hover:text-gold-400 transition-colors duration-300">
              +233 24 478 3099
            </a>
            <a href="mailto:christie@smic360.com" className="block font-body text-sm text-cream/60 hover:text-gold-400 transition-colors duration-300">
              christie@smic360.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-cream/30">
            ©2025. Akuafeyie. All Rights Reserved.
          </p>
          <p className="font-body text-xs text-cream/30">
            SMIC360 Creation
          </p>
        </div>
      </div>
    </footer>
  )
}
