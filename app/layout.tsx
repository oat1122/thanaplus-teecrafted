import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./custom-animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก | ส่งฟรีทั่วประเทศ",
    template: "%s | TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีน",
  },
  description:
    "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง รับสกรีนเสื้อยืดขั้นต่ำ 10 ตัว ส่งฟรีทั่วประเทศ รับประกันคุณภาพ สำหรับร้านค้า โรงเรียน บริษัท องค์กร",
  keywords: [
    "ขายส่งเสื้อยืด",
    "ขายเสื้อยืดจำนวนมาก",
    "ขายส่งเสื้อสกรีน",
    "ขายส่งเสื้อสกรีนจำนวนมาก",
    "เสื้อยืดขายส่ง",
    "เสื้อสกรีนขายส่ง",
    "เสื้อยืดราคาส่ง",
    "เสื้อสกรีนราคาส่ง",
    "สั่งเสื้อยืดจำนวนมาก",
    "สั่งเสื้อสกรีนจำนวนมาก",
    "เสื้อยืดโรงเรียน",
    "เสื้อยืดบริษัท",
    "เสื้อยืดองค์กร",
    "เสื้อยืดกิจกรรม",
    "เสื้อสกรีนลายตามสั่ง",
    "ผลิตเสื้อยืดจำนวนมาก",
  ],
  authors: [{ name: "TeeCrafted" }],
  creator: "TeeCrafted",
  publisher: "TeeCrafted",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://teecrafted.com"),
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
    },
  },
  openGraph: {
    title: "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก",
    description:
      "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง รับสกรีนเสื้อยืดขั้นต่ำ 10 ตัว ส่งฟรีทั่วประเทศ สำหรับร้านค้า โรงเรียน บริษัท",
    url: "https://teecrafted.com",
    siteName: "TeeCrafted",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีน",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก",
    description:
      "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง ส่งฟรีทั่วประเทศ",
    creator: "@teecrafted",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

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
        <meta name="theme-color" content="#111827" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="application-name" content="TeeCrafted" />
        <meta name="apple-mobile-web-app-title" content="TeeCrafted" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TeeCrafted",
              description:
                "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง",
              url: "https://teecrafted.com",
              logo: "https://teecrafted.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+66-2-xxx-xxxx",
                contactType: "customer service",
                areaServed: "TH",
                availableLanguage: "Thai",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "TH",
                addressRegion: "Bangkok",
              },
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "THB",
                lowPrice: "199",
                highPrice: "999",
                offerCount: "100+",
              },
              serviceArea: {
                "@type": "Country",
                name: "Thailand",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "ขายส่งเสื้อยืด",
                    description: "ขายส่งเสื้อยืดจำนวนมาก ราคาถูก คุณภาพสูง",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "ขายส่งเสื้อสกรีน",
                    description: "ขายส่งเสื้อสกรีนจำนวนมาก ราคาส่ง",
                  },
                },
              ],
              sameAs: [
                "https://www.facebook.com/TeeCraftedThailand",
                "https://line.me/ti/p/@teecrafted",
              ],
            }),
          }}
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
