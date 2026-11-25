import "./globals.css";

import type { Metadata, Viewport } from 'next';
import { Play, Inter, Nunito_Sans, JetBrains_Mono } from 'next/font/google';

const play = Play({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-play', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'], variable: '--font-inter', display: 'swap' });
const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['400', '600', '700', '800', '900'], variable: '--font-nunito-sans', display: 'swap' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['700'], variable: '--font-jetbrains-mono', display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://watchman.blinkeye.app'),
  title: "Watchman - Know where your internet is going.",
  description: "See live per-app bandwidth monitoring, track active background tasks, and see exactly what is consuming your data—all from a lightweight taskbar widget.",
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "Watchman - Know where your internet is going.",
    description: "See live per-app bandwidth monitoring, track active background tasks, and see exactly what is consuming your data.",
    siteName: "Watchman",
    type: "website",
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    site: "@blinkeye",
    title: "Watchman - Know where your internet is going.",
    description: "See live per-app bandwidth monitoring, track active background tasks, and see exactly what is consuming your data.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${play.variable} ${inter.variable} ${nunitoSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta property="og:logo" content="https://watchman.blinkeye.app/watchman-logo.svg" />
        {/* Google Tag Manager (Google tag) — container GTM-MVLTGM32 */}
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-MVLTGM32" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Watchman - Know where your internet is going.",
              "description": "See live per-app bandwidth monitoring, track active background tasks, and see exactly what is consuming your data—all from a lightweight taskbar widget.",
              "url": "https://watchman.blinkeye.app"
            })
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) — GTM-MVLTGM32 */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MVLTGM32"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
