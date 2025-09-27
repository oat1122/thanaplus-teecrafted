import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import CartComponent from '@/components/CartComponent';
import { metadata as siteMetadata, SITE_CONFIG, STRUCTURED_DATA } from './metadata';
import './globals.css';
import './custom-animations-minimal.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Export metadata from metadata.ts
export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" dir="ltr">
      <head>
        {/* Additional SEO tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ใช้ theme color จาก SITE_CONFIG */}
        <meta name="theme-color" content={SITE_CONFIG.branding.themeColor} />
        <meta name="msapplication-TileColor" content={SITE_CONFIG.branding.tileColor} />
        <meta name="application-name" content={SITE_CONFIG.name} />
        <meta name="apple-mobile-web-app-title" content={SITE_CONFIG.name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Structured Data: ใช้จาก STRUCTURED_DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA),
          }}
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <CartProvider>
          {children}
          <CartComponent />
        </CartProvider>
      </body>
    </html>
  );
}
