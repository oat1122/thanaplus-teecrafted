import { Metadata } from 'next';

// Website brand configuration
export const SITE_CONFIG = {
  name: 'CafeWearTH',
  displayName: 'CafeWearTH | เสื้อแท้.com',
  domain: 'เสื้อแท้.com',
  url: 'https://เสื้อแท้.com', // Punycode for เสื้อแท้.com
  description:
    'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
  keywords: {
    primary: ['เสื้อผ้าแฟชั่นผู้หญิง', 'เสื้อผ้าไปคาเฟ่', 'เสื้อครอปผู้หญิง', 'เสื้อครอปผู้ชาย'],
    secondary: [
      'เสื้อผ้าแฟชั่น',
      'ชุดไปคาเฟ่',
      'เสื้อครอป',
      'เสื้อยืดแฟชั่น',
      'เสื้อผ้าสตรีท',
      'เสื้อผ้าวินเทจ',
      'เสื้อผ้าโอเวอร์ไซส์',
      'เสื้อผ้าเกาหลี',
      'เสื้อผ้าคุณภาพ',
      'เสื้อผ้าราคาดี',
    ],
  },
  author: 'CafeWearTH',
  phone: '+66624977952',
  address: {
    country: 'TH',
    region: 'กรุงเทพมหานคร',
  },
  pricing: {
    currency: 'THB',
    lowPrice: '199',
    highPrice: '999',
    offerCount: '100+',
  },
  branding: {
    themeColor: '#6f4e1c', // Cafe brown theme color
    tileColor: '#6f4e1c',
  },
  social: {
    twitter: '@cafewearth',
    instagram: '@cafewearth',
    facebook: 'CafeWearTH',
  },
};

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    template: `%s | ${SITE_CONFIG.name} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords.primary, ...SITE_CONFIG.keywords.secondary],
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
    canonical: '/',
    languages: {
      'th-TH': '/',
    },
  },
  openGraph: {
    title: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.displayName,
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.displayName} - เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอปสุดฮิต`,
    description: SITE_CONFIG.description,
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'fashion',
  classification: 'business',
  referrer: 'origin-when-cross-origin',
  applicationName: SITE_CONFIG.name,
  generator: 'Next.js',
  other: {
    'theme-color': SITE_CONFIG.branding.themeColor,
    'color-scheme': 'light',
    'msapplication-TileColor': SITE_CONFIG.branding.tileColor,
    'msapplication-config': '/browserconfig.xml',
  },
};

// Structured Data Schema - ใช้สำหรับ layout.tsx
export const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  '@id': `${SITE_CONFIG.url}/#organization`,
  name: SITE_CONFIG.name,
  alternateName: SITE_CONFIG.domain,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo/LoGo.png`,
  image: [`${SITE_CONFIG.url}/logo/LoGo.png`],
  telephone: SITE_CONFIG.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: SITE_CONFIG.address.country,
    addressRegion: SITE_CONFIG.address.region,
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: SITE_CONFIG.pricing.currency,
    lowPrice: SITE_CONFIG.pricing.lowPrice,
    highPrice: SITE_CONFIG.pricing.highPrice,
    offerCount: SITE_CONFIG.pricing.offerCount,
  },
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'เสื้อผ้าแฟชั่นผู้หญิง',
        description:
          'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'เสื้อผ้าไปคาเฟ่',
        description:
          'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'เสื้อครอปผู้หญิง',
        description:
          'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: 'เสื้อครอปผู้ชาย',
        description:
          'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      },
    },
  ],
};

// Homepage Structured Data Schemas
export const HOMEPAGE_STRUCTURED_DATA = {
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: SITE_CONFIG.pricing.currency,
      lowPrice: SITE_CONFIG.pricing.lowPrice,
      highPrice: SITE_CONFIG.pricing.highPrice,
      offerCount: SITE_CONFIG.pricing.offerCount,
      description: SITE_CONFIG.description,
    },
  },
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo/LoGo.png`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: SITE_CONFIG.address.country,
      addressRegion: SITE_CONFIG.address.region,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.phone,
      contactType: 'customer service',
      areaServed: SITE_CONFIG.address.country,
      availableLanguage: 'Thai',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: SITE_CONFIG.pricing.currency,
      lowPrice: SITE_CONFIG.pricing.lowPrice,
      highPrice: SITE_CONFIG.pricing.highPrice,
      offerCount: SITE_CONFIG.pricing.offerCount,
      description: SITE_CONFIG.description,
    },
    sameAs: [
      `https://www.facebook.com/${SITE_CONFIG.social.facebook}`,
      `https://line.me/ti/p/${SITE_CONFIG.social.instagram}`, // LINE ID
    ],
  },
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'หน้าแรก',
        item: SITE_CONFIG.url,
      },
    ],
  },
};

// Features และ Benefits สำหรับหน้า Homepage
export const HOMEPAGE_CONTENT = {
  features: [
    {
      title: 'เสื้อผ้าแฟชั่นผู้หญิง',
      description: `คัดสรรเสื้อผ้าแฟชั่นสไตล์เกาหลี โทนหวาน ใส่ง่าย ถ่ายรูปสวย`,
      icon: 'FaBox',
    },
    {
      title: 'ราคาดีที่สุด',
      description: `เสื้อผ้าแฟชั่นคุณภาพ เริ่มต้น ${SITE_CONFIG.pricing.lowPrice} บาท ราคาสบายกระเป๋า`,
      icon: 'FaDollarSign',
    },
    {
      title: 'สไตล์หลากหลาย',
      description:
        'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      icon: 'FaPalette',
    },
    {
      title: 'ส่งฟรีรวดเร็ว',
      description: `ส่งฟรีทั่วประเทศ ได้ของภายใน 2-3 วัน พร้อมบริการหลังการขาย`,
      icon: 'FaShippingFast',
    },
  ],
  benefits: [
    {
      title: 'คุณภาพพรีเมียม',
      description: `วัสดุคุณภาพสูง ผ้านิ่ม ใส่สบาย เหมาะสำหรับเสื้อผ้าแฟชั่นทุกโอกาส`,
      icon: 'FaCheckCircle',
    },
    {
      title: 'ส่งฟรีทั่วประเทศ',
      description: `ส่งฟรีเสื้อผ้าแฟชั่น รวดเร็ว ปลอดภัย ได้ของตรงเวลา`,
      icon: 'FaTruck',
    },
    {
      title: 'รับประกันคุณภาพ',
      description:
        'เสื้อแท้.com ร้านเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง-ผู้ชาย โทนเกาหลี คุณภาพดี ใส่ง่าย ถ่ายรูปสวย ราคาดี เหมาะทั้งสายสตรีท วินเทจ และโอเวอร์ไซส์',
      icon: 'FaAward',
    },
    {
      title: 'อัพเดทแฟชั่นใหม่',
      description: `อัพเดทเสื้อผ้าแฟชั่นใหม่ทุกสัปดาห์ ตามเทรนด์เกาหลีล่าสุด`,
      icon: 'FaClock',
    },
  ],
  priceRanges: [
    { range: '1-2 ตัว', price: '299 บาท', bgColor: 'bg-gray-100' },
    { range: '3-5 ตัว', price: '249 บาท', bgColor: 'bg-gray-100' },
    { range: '6-10 ตัว', price: '219 บาท', bgColor: 'bg-gray-100' },
    { range: '10+ ตัว', price: `${SITE_CONFIG.pricing.lowPrice} บาท`, bgColor: 'bg-slate-100' },
  ],
  categories: [
    {
      href: '/collection?category=เสื้อครอปผู้หญิง',
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: `${SITE_CONFIG.keywords.primary[2]} คุณภาพสูง ดีไซน์สวย ราคาดี`,
      title: SITE_CONFIG.keywords.primary[2],
      price: `เริ่มต้น ${SITE_CONFIG.pricing.lowPrice} บาท/ตัว`,
    },
    {
      href: '/collection?category=เสื้อผ้าไปคาเฟ่',
      image:
        'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: `${SITE_CONFIG.keywords.primary[1]} ใส่สบาย ดูดี สไตล์เกาหลี`,
      title: SITE_CONFIG.keywords.primary[1],
      price: 'เริ่มต้น 249 บาท/ตัว',
    },
    {
      href: '/collection?category=เสื้อครอปผู้ชาย',
      image:
        'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: `${SITE_CONFIG.keywords.primary[3]} แฟชั่น สไตล์สตรีท ใส่เท่`,
      title: SITE_CONFIG.keywords.primary[3],
      price: 'เริ่มต้น 299 บาท/ตัว',
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
      images: image ? [{ url: image }] : [{ url: '/og-image.jpg' }],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: pageDescription,
      images: image ? [image] : ['/twitter-image.jpg'],
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
  const title = `${productName} - ${category || 'เสื้อผ้าแฟชั่น'}`;
  const description = `${productDescription} ราคา ${price} บาท จาก ${SITE_CONFIG.name} เสื้อผ้าแฟชั่นคุณภาพพรีเมียม`;

  return {
    ...generatePageMetadata(title, description, [productName, category || '']),
    other: {
      'product:price:amount': price.toString(),
      'product:price:currency': 'THB',
      'og:type': 'product',
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
  const description =
    collectionDescription ||
    `สำรวจคอลเลคชัน ${collectionName} จาก ${SITE_CONFIG.name} เสื้อผ้าแฟชั่นสไตล์คาเฟ่ ทันสมัย`;

  return generatePageMetadata(
    title,
    description,
    [collectionName, 'คอลเลคชัน', 'เสื้อผ้าแฟชั่น'],
    image
  );
};
