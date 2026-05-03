'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IMAGES } from '@/lib/images'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/roles', label: 'Roles' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/real-estate', label: 'Real Estate' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/96 backdrop-blur-xl shadow-[0_1px_0_0_rgba(201,138,16,0.25),0_4px_24px_-4px_rgba(26,18,8,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-20 h-12 overflow-hidden border border-gold-400/40 bg-cream/10 backdrop-blur-sm" style={{ borderRadius: '3px' }}>
              <Image
                src={IMAGES.logo}
                alt="Akua Feyie Logo"
                fill
                className="object-contain p-1"
                sizes="80px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-accent text-2xl transition-colors duration-300 group-hover:text-gold-400 ${
                scrolled ? 'text-gold-600' : 'text-gold-300'
              }`}>
                Akua Feyie
              </span>
              <span className={`font-body text-[8px] tracking-[0.3em] uppercase mt-0.5 transition-colors duration-300 ${
                scrolled ? 'text-earth-500' : 'text-cream/60'
              }`}>
                Entrepreneur · CEO
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 relative group ${
                    pathname === link.href
                      ? 'text-gold-400'
                      : scrolled
                        ? 'text-dark hover:text-gold-600'
                        : 'text-cream/90 hover:text-gold-300'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    scrolled ? 'bg-gold-500' : 'bg-gold-300'
                  } ${
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden lg:flex items-center gap-2 border px-5 py-2 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
              scrolled
                ? 'border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-cream'
                : 'border-cream/60 text-cream hover:bg-cream/10 hover:border-cream'
            }`}
          >
            Get In Touch
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className={`block w-6 h-px transition-colors duration-300 ${scrolled ? 'bg-dark' : 'bg-cream'}`} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className={`block w-6 h-px transition-colors duration-300 ${scrolled ? 'bg-dark' : 'bg-cream'}`} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className={`block w-6 h-px transition-colors duration-300 ${scrolled ? 'bg-dark' : 'bg-cream'}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8"
          >
            <div className="relative w-28 h-16 overflow-hidden border-2 border-gold-400 mb-4 bg-cream" style={{ borderRadius: '3px' }}>
              <Image src={IMAGES.logo} alt="Akua Feyie" fill className="object-contain p-1.5" sizes="112px" />
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-dark hover:text-gold-600 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
