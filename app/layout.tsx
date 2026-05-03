import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost, Pinyon_Script } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-jost',
})

const pinyon = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon',
})

// ─── CHANGE THIS to your live domain once deployed ───────────────────────────
const SITE_URL = 'https://akuafeyie.com'
// ─────────────────────────────────────────────────────────────────────────────

// Cloudinary logo resized & padded to perfect 1200×630 OG format
// c_pad keeps aspect-ratio; b_rgb:1a1208 fills gaps with brand dark colour
const OG_IMAGE =
  'https://res.cloudinary.com/dwsl2ktt2/image/upload/w_1200,h_630,c_pad,b_rgb:1a1208/v1777771615/akuafeyielogo_ypjemo.jpg'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Christiana Akua Feyie | Entrepreneur · CEO · Optimist',
  description:
    'Founder and CEO of SMIC360 Limited. Ghanaian entrepreneur with over 20 years of experience in Advertising, Business Management, and Hospitality.',
  keywords: 'Akua Feyie, Entrepreneur, CEO, SMIC360, Ghana, Leadership, Business',

  // ── Open Graph (WhatsApp, Facebook, LinkedIn, Telegram) ──────────────────
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Akua Feyie',
    title: 'Christiana Akua Feyie | Entrepreneur · CEO · Optimist',
    description:
      'Founder and CEO of SMIC360 Limited. 20+ years across Advertising, Shipping, Real Estate & Hospitality.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Akua Feyie – Entrepreneur · CEO · SMIC360',
        type: 'image/jpeg',
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Christiana Akua Feyie | Entrepreneur · CEO · Optimist',
    description:
      'Founder and CEO of SMIC360 Limited. 20+ years across Advertising, Shipping, Real Estate & Hospitality.',
    images: [OG_IMAGE],
  },

  // ── Robots / Indexing ─────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${jost.variable} ${pinyon.variable} bg-cream text-dark antialiased`}>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/233244783099"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 group"
          style={{ filter: 'drop-shadow(0 4px 16px rgba(37,211,102,0.35))' }}
        >
          <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20c05c] transition-all duration-300 hover:scale-110" style={{ borderRadius: '14px' }}>
            {/* WhatsApp SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-7 h-7"
              fill="white"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.665 4.786 1.826 6.77L2 30l7.424-1.802A13.927 13.927 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.593l-.418-.248-4.406 1.07 1.107-4.29-.272-.44A11.461 11.461 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.558c-.345-.172-2.04-1.006-2.356-1.12-.315-.115-.545-.172-.775.172-.23.345-.89 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.773-1.711-1.025-.914-1.717-2.044-1.917-2.389-.2-.345-.021-.531.15-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.575.115-.23.057-.431-.029-.603-.086-.172-.775-1.868-1.062-2.558-.28-.672-.564-.58-.775-.591l-.66-.011a1.27 1.27 0 0 0-.919.431c-.315.345-1.205 1.178-1.205 2.874s1.233 3.333 1.405 3.563c.172.23 2.427 3.707 5.878 5.197.822.355 1.463.567 1.963.726.824.262 1.575.225 2.168.137.661-.099 2.04-.834 2.327-1.638.287-.805.287-1.495.2-1.638-.086-.143-.315-.23-.66-.402z" />
            </svg>
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-[14px] bg-[#25D366] animate-ping opacity-30" />
          </div>
          {/* Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark text-cream text-xs font-body tracking-wide px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ borderRadius: '4px' }}>
            Chat on WhatsApp
          </span>
        </a>
      </body>
    </html>
  )
}
