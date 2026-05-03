'use client'
import Script from 'next/script'

/**
 * GoogleAnalytics — loads GA4 asynchronously via Next.js Script (afterInteractive).
 * Replace GA_ID in layout.tsx with your real Measurement ID from:
 * analytics.google.com → Admin → Data Streams → Web → Measurement ID (G-XXXXXXXXXX)
 */
export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  // Skip in development and if no real ID is set
  if (process.env.NODE_ENV === 'development' || gaId === 'G-XXXXXXXXXX') {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
