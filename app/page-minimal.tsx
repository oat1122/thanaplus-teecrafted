import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import EnhancedSEOContentSection from "@/components/EnhancedSEOSection-minimal";
import { products } from "@/data/products";
import Link from "next/link";
import {
  FaBox,
  FaDollarSign,
  FaPalette,
  FaShippingFast,
  FaCheckCircle,
  FaTruck,
  FaAward,
  FaClock,
  FaPhoneAlt,
  FaCommentDots,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdLocalShipping, MdDesignServices } from "react-icons/md";

export const metadata: Metadata = {
  title:
    "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก | ส่งฟรีทั่วประเทศ",
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
  openGraph: {
    title: "TeeCrafted - ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก",
    description:
      "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง รับสกรีนเสื้อยืดขั้นต่ำ 10 ตัว ส่งฟรีทั่วประเทศ สำหรับร้านค้า โรงเรียน บริษัท",
    type: "website",
    url: "https://teecrafted.com",
    siteName: "TeeCrafted",
    locale: "th_TH",
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
  alternates: {
    canonical: "https://teecrafted.com",
  },
};

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);

  // Structured Data for Homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TeeCrafted",
    url: "https://teecrafted.com",
    description: "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://teecrafted.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "THB",
      lowPrice: "99",
      highPrice: "999",
      offerCount: "100+",
      description: "ขายส่งเสื้อยืดและเสื้อสกรีนจำนวนมาก",
    },
  };

  // Organization Schema
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "TeeCrafted",
    description: "ขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก ราคาถูก คุณภาพสูง",
    url: "https://teecrafted.com",
    logo: "https://teecrafted.com/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
      addressRegion: "Bangkok",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+66-62-497-7952",
      contactType: "customer service",
      areaServed: "TH",
      availableLanguage: "Thai",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "THB",
      lowPrice: "99",
      highPrice: "999",
      offerCount: "100+",
      description: "ขายส่งเสื้อยืดและเสื้อสกรีนจำนวนมาก",
    },
    sameAs: [
      "https://www.facebook.com/TeeCraftedThailand",
      "https://line.me/ti/p/@teecrafted",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: "https://teecrafted.com",
      },
    ],
  };

  const wholesaleFeatures = [
    {
      icon: FaBox,
      title: "ขั้นต่ำ 10 ตัว",
      description:
        "รับสั่งทำขายส่งเสื้อยืดและเสื้อสกรีนขั้นต่ำเพียง 10 ตัว ราคาส่งพิเศษ",
    },
    {
      icon: FaDollarSign,
      title: "ราคาส่งพิเศษ",
      description:
        "ขายเสื้อยืดจำนวนมาก ยิ่งสั่งเยอะ ยิ่งถูก เริ่มต้น 99 บาท/ตัว",
    },
    {
      icon: FaPalette,
      title: "สกรีนตามสั่ง",
      description:
        "รับสกรีนลายตามต้องการ โลโก้บริษัท ชื่อโรงเรียน หรือดีไซน์ส่วนตัว",
    },
    {
      icon: FaShippingFast,
      title: "ผลิตรวดเร็ว",
      description:
        "ขายส่งเสื้อสกรีนจำนวนมาก ผลิตเสร็จภายใน 5-7 วัน ส่งฟรีทั่วประเทศ",
    },
  ];

  const benefits = [
    {
      icon: FaCheckCircle,
      title: "คุณภาพสูง",
      description:
        "วัสดุพรีเมียม สกรีนคมชัด ทนทาน เหมาะสำหรับขายส่งเสื้อยืดจำนวนมาก",
    },
    {
      icon: FaTruck,
      title: "ส่งฟรีทั่วประเทศ",
      description:
        "ขายส่งเสื้อสกรีนจำนวนมาก ส่งฟรี รวดเร็ว ปลอดภัย ได้ของตรงเวลา",
    },
    {
      icon: FaAward,
      title: "รับประกันคุณภาพ",
      description:
        "รับประกันคุณภาพทุกชิ้น เปลี่ยน-คืนได้ มั่นใจในการสั่งซื้อขายส่ง",
    },
    {
      icon: FaClock,
      title: "ผลิตรวดเร็ว",
      description:
        "ผลิตรวดเร็ว ส่งไว ได้ของตรงเวลา เหมาะสำหรับธุรกิจขายส่งเสื้อยืด",
    },
  ];

  const priceRanges = [
    { range: "10-29 ตัว", price: "149 บาท", bgColor: "bg-gray-100" },
    { range: "30-49 ตัว", price: "129 บาท", bgColor: "bg-gray-100" },
    { range: "50-99 ตัว", price: "109 บาท", bgColor: "bg-gray-100" },
    { range: "100+ ตัว", price: "99 บาท", bgColor: "bg-slate-100" },
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <Hero />

        {/* Enhanced SEO Content Section */}
        <EnhancedSEOContentSection />

        {/* Featured Products Section */}
        <section className="py-20 bg-white" aria-labelledby="featured-products">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1
                id="featured-products"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
              >
                ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                ขายเสื้อยืดจำนวนมาก ราคาส่ง คุณภาพสูง เหมาะสำหรับร้านค้า
                โรงเรียน บริษัท องค์กร รับสกรีนลายตามต้องการ ขั้นต่ำ 10 ตัว
                ส่งฟรีทั่วประเทศ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collection"
                className="btn-minimal bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center text-lg"
                aria-label="ดูขายส่งเสื้อยืดและเสื้อสกรีนทั้งหมด"
              >
                ดูขายส่งเสื้อยืดทั้งหมด
              </Link>
            </div>
          </div>
        </section>

        {/* Wholesale Section */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="wholesale-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="wholesale-section"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
              >
                ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
                เราเป็นผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                ราคาส่งพิเศษ เหมาะสำหรับร้านค้า โรงเรียน บริษัท องค์กร
                รับสั่งทำตั้งแต่ 10 ตัวขึ้นไป
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 animate-slide-in">
              {wholesaleFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="card-minimal p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Pricing Table */}
            <div className="text-center animate-fade-in-up">
              <div className="card-minimal p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ตารางราคาขายส่งเสื้อยืด
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {priceRanges.map((range, index) => (
                    <div
                      key={index}
                      className={`rounded-xl p-4 ${range.bgColor}`}
                    >
                      <div className="text-sm text-gray-600 mb-1">
                        {range.range}
                      </div>
                      <div className="text-2xl font-bold text-slate-700">
                        {range.price}
                      </div>
                      <div className="text-xs text-gray-500">ต่อตัว</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *ราคาไม่รวมค่าสกรีน | สอบถามรายละเอียดเพิ่มเติม{" "}
                  <a
                    href="tel:+66624977952"
                    className="text-slate-600 hover:text-slate-800 font-medium"
                  >
                    062-497-7952
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section
          className="py-20 bg-white"
          aria-labelledby="product-categories"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="product-categories"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
              >
                หมวดหมู่ขายส่งเสื้อยืดและเสื้อสกรีน
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
                เลือกประเภทเสื้อที่ต้องการสำหรับขายส่งเสื้อยืดจำนวนมาก
                ทั้งเสื้อยืด เสื้อโปโล เสื้อฮู้ด ราคาส่งพิเศษ คุณภาพพรีเมียม
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-in">
              {[
                {
                  href: "/collection?category=เสื้อยืด",
                  image:
                    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                  alt: "ขายส่งเสื้อยืดสกรีน คุณภาพสูง ดีไซน์สวย ราคาส่งพิเศษ",
                  title: "ขายส่งเสื้อยืด",
                  price: "เริ่มต้น 99 บาท/ตัว",
                },
                {
                  href: "/collection?category=เสื้อโปโล",
                  image:
                    "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                  alt: "ขายส่งเสื้อโปโลสกรีน ใส่สบาย ดูดี ราคาส่งพิเศษ",
                  title: "ขายส่งเสื้อโปโล",
                  price: "เริ่มต้น 149 บาท/ตัว",
                },
                {
                  href: "/collection?category=เสื้อฮู้ด",
                  image:
                    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                  alt: "ขายส่งเสื้อฮู้ดสกรีน แฟชั่น ใส่อุ่น ราคาส่งพิเศษ",
                  title: "ขายส่งเสื้อฮู้ด",
                  price: "เริ่มต้น 199 บาท/ตัว",
                },
              ].map((category, index) => (
                <Link key={index} href={category.href} className="group">
                  <article className="relative overflow-hidden rounded-2xl aspect-square card-minimal hover-lift">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="text-white text-sm">{category.price}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="our-benefits">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2
                id="our-benefits"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance"
              >
                ทำไมต้องเลือก TeeCrafted สำหรับขายส่งเสื้อยืด
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance">
                เราเป็นผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                ให้ความสำคัญกับคุณภาพและการบริการที่ดีที่สุด
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center card-minimal p-6 hover-lift"
                >
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              พร้อมสั่งขายส่งเสื้อยืดจำนวนมากแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
              ติดต่อเราวันนี้เพื่อขอใบเสนอราคาขายส่งเสื้อสกรีนพิเศษ
              รับส่วนลดสำหรับลูกค้าใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+66624977952"
                className="btn-minimal bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center text-lg"
              >
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                โทรเลย 062-497-7952
              </Link>
              <Link
                href="https://line.me/ti/p/@teecrafted"
                className="btn-minimal bg-green-600 text-white hover:bg-green-700 inline-flex items-center justify-center text-lg"
              >
                <FaCommentDots className="w-5 h-5 mr-2" />
                แชท LINE @teecrafted
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16" role="contentinfo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">TeeCrafted</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  ผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                  คุณภาพสูง ราคาส่งพิเศษ ส่งฟรีทั่วประเทศ
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/TeeCraftedThailand"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href="https://line.me/ti/p/@teecrafted"
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                    aria-label="LINE"
                  >
                    <FaCommentDots className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">เมนู</h4>
                <nav aria-label="Footer Navigation">
                  <ul className="space-y-2 text-gray-300">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-white transition-colors"
                      >
                        หน้าแรก
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/collection"
                        className="hover:text-white transition-colors"
                      >
                        ขายส่งเสื้อยืดทั้งหมด
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-white transition-colors"
                      >
                        เกี่ยวกับเรา
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-white transition-colors"
                      >
                        ติดต่อเรา
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  บริการขายส่งเสื้อยืด
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>ขายส่งเสื้อยืดขั้นต่ำ 10 ตัว</li>
                  <li>สกรีนลายตามสั่ง</li>
                  <li>ส่งฟรีทั่วประเทศ</li>
                  <li>รับประกันคุณภาพ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  ติดต่อขายส่งเสื้อยืด
                </h4>
                <address className="space-y-2 not-italic text-gray-300">
                  <div className="flex items-center">
                    <FaPhoneAlt className="w-4 h-4 mr-2" />
                    <a href="tel:+66624977952" className="hover:text-white">
                      062-497-7952
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    <a
                      href="mailto:wholesale@teecrafted.com"
                      className="hover:text-white"
                    >
                      wholesale@teecrafted.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaCommentDots className="w-4 h-4 mr-2" />
                    <a
                      href="https://line.me/ti/p/@teecrafted"
                      className="hover:text-white"
                    >
                      @teecrafted
                    </a>
                  </div>
                </address>
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
              <p>
                &copy; 2024 TeeCrafted - ขายส่งเสื้อยืด
                ขายส่งเสื้อสกรีนจำนวนมาก. สงวนลิขสิทธิ์. |{" "}
                <Link href="/privacy" className="hover:text-white">
                  นโยบายความเป็นส่วนตัว
                </Link>{" "}
                |{" "}
                <Link href="/terms" className="hover:text-white">
                  เงื่อนไขการใช้งาน
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
