import { Metadata } from "next";

// Website brand configuration
export const SITE_CONFIG = {
  name: "CafeWearTH",
  displayName: "CafeWearTH | เสื้อแท้.com",
  domain: "เสื้อแท้.com",
  url: "https://เสื้อแท้.com", // Punycode for เสื้อแท้.com
  description: "เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาสบายกระเป๋า",
  keywords: {
    primary: [
      "เสื้อผ้าแฟชั่นผู้หญิง",
      "เสื้อผ้าไปคาเฟ่",
      "เสื้อครอปผู้หญิง",
      "เสื้อครอปผู้ชาย",
    ],
    secondary: [
      "เสื้อผ้าแฟชั่น",
      "ชุดไปคาเฟ่",
      "เสื้อครอป",
      "เสื้อยืดแฟชั่น",
      "เสื้อผ้าสตรีท",
      "เสื้อผ้าวินเทจ",
      "เสื้อผ้าโอเวอร์ไซส์",
      "เสื้อผ้าเกาหลี",
      "เสื้อผ้าคุณภาพ",
      "เสื้อผ้าราคาดี",
    ],
  },
  author: "CafeWearTH",
  phone: "+66624977952",
  address: {
    country: "TH",
    region: "กรุงเทพมหานคร",
  },
  pricing: {
    currency: "THB",
    lowPrice: "199",
    highPrice: "999",
    offerCount: "100+",
  },
  branding: {
    themeColor: "#900F0F", // แดงเข้มตามที่ใช้ใน layout
    tileColor: "#900F0F",
  },
  social: {
    twitter: "@cafewearth",
    instagram: "@cafewearth",
    facebook: "CafeWearTH",
  },
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    template: `%s | ${SITE_CONFIG.name} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    ...SITE_CONFIG.keywords.primary,
    ...SITE_CONFIG.keywords.secondary,
  ],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    description: "ช้อปเสื้อผ้าแฟชั่นผู้หญิง เสื้อไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย สไตล์เกาหลี ราคาดี ใส่ง่าย ถ่ายรูปสวย ที่ CafeWearTH",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.displayName,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    description: "คัดสรรแฟชั่นผู้หญิงและเสื้อครอปแนวคาเฟ่ ใส่ง่าย ราคาสบายกระเป๋า",
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
  category: "fashion",
  classification: "business",
  referrer: "origin-when-cross-origin",
  applicationName: SITE_CONFIG.name,
  generator: "Next.js",
  other: {
    "theme-color": SITE_CONFIG.branding.themeColor,
    "color-scheme": "light",
    "msapplication-TileColor": SITE_CONFIG.branding.tileColor,
    "msapplication-config": "/browserconfig.xml",
  },
};

// Structured Data Schema - ใช้สำหรับ layout.tsx
export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "@id": `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.domain,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo/LoGo.png`,
  image: [`${SITE_CONFIG.url}/logo/LoGo.png`],
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    addressCountry: SITE_CONFIG.address.country,
    addressRegion: SITE_CONFIG.address.region,
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: SITE_CONFIG.pricing.currency,
    lowPrice: SITE_CONFIG.pricing.lowPrice,
    highPrice: SITE_CONFIG.pricing.highPrice,
    offerCount: SITE_CONFIG.pricing.offerCount,
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "เสื้อผ้าแฟชั่นผู้หญิง",
        description: "สไตล์เกาหลี ใส่ง่าย ถ่ายรูปสวย",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "เสื้อผ้าไปคาเฟ่",
        description: "โทนหวาน/มินิมอล แมตช์ง่ายสำหรับสายคาเฟ่",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "เสื้อครอปผู้หญิง",
        description: "ทรงเข้ารูป เนื้อผ้าดี ระบายอากาศ",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "เสื้อครอปผู้ชาย",
        description: "ลุคสตรีท สปอร์ตแคชชวล ใส่ง่าย",
      },
    },
  ],
};

// Utility functions for generating metadata
export const generatePageMetadata = (
  title: string,
  description?: string,
  keywords?: string[],
  image?: string
): Metadata => {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const pageDescription = description || SITE_CONFIG.description;
  const pageKeywords = keywords 
    ? [...SITE_CONFIG.keywords.primary, ...keywords]
    : [...SITE_CONFIG.keywords.primary, ...SITE_CONFIG.keywords.secondary];

  return {
    title: fullTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      title: fullTitle,
      description: pageDescription,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: image ? [{ url: image }] : [{ url: "/og-image.jpg" }],
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: pageDescription,
      images: image ? [image] : ["/twitter-image.jpg"],
    },
    alternates: {
      canonical: SITE_CONFIG.url,
    },
  };
};

// Product page metadata generator
export const generateProductMetadata = (
  productName: string,
  productDescription: string,
  price: number,
  image?: string,
  category?: string
): Metadata => {
  const title = `${productName} - ${category || "เสื้อผ้าแฟชั่น"}`;
  const description = `${productDescription} ราคา ${price} บาท จาก ${SITE_CONFIG.name} เสื้อผ้าแฟชั่นคุณภาพพรีเมียม`;
  
  return {
    ...generatePageMetadata(title, description, [productName, category || ""]),
    other: {
      "product:price:amount": price.toString(),
      "product:price:currency": "THB",
      "og:type": "product",
    },
  };
};

// Collection page metadata generator
export const generateCollectionMetadata = (
  collectionName: string,
  collectionDescription?: string,
  image?: string
): Metadata => {
  const title = `คอลเลคชัน ${collectionName}`;
  const description = collectionDescription || 
    `สำรวจคอลเลคชัน ${collectionName} จาก ${SITE_CONFIG.name} เสื้อผ้าแฟชั่นสไตล์คาเฟ่ ทันสมัย`;
  
  return generatePageMetadata(
    title,
    description,
    [collectionName, "คอลเลคชัน", "เสื้อผ้าแฟชั่น"],
    image
  );
};
