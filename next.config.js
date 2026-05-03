/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Compression ──────────────────────────────────────────────────────────
  // Gzip/Brotli compress all text assets (JS, CSS, HTML)
  compress: true,

  // ── Image optimisation ───────────────────────────────────────────────────
  images: {
    // Serve AVIF first (50% smaller than WebP), fall back to WebP
    formats: ['image/avif', 'image/webp'],

    // Tell Next.js how wide images can get — used for srcset breakpoints
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256],

    // Cache optimised images for 60 days (default is 60 s — way too short)
    minimumCacheTTL: 60 * 60 * 24 * 60, // 60 days in seconds

    // Allow Cloudinary images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dwsl2ktt2/**',
      },
    ],
  },

  // ── Long-lived cache headers for static assets ───────────────────────────
  async headers() {
    return [
      {
        // Next.js static chunks (JS/CSS) are content-hashed — safe to cache 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Optimised images from Next.js image endpoint
        source: '/_next/image:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=5184000, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
