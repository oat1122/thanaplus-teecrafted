"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import EnhancedSEOContentSection from "@/components/EnhancedSEOSection";
import { products } from "@/data/products";
import { 
  SITE_CONFIG, 
  HOMEPAGE_STRUCTURED_DATA, 
  HOMEPAGE_CONTENT 
} from "./metadata";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
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
} from "react-icons/fa";

export default function HomePage() {
  const featuredProducts = products.filter((product) => product.featured);
  
  // Initialize scroll animation
  useScrollAnimation();

  // ใช้ Structured Data จาก metadata.ts
  const structuredData = HOMEPAGE_STRUCTURED_DATA.website;
  const organizationData = HOMEPAGE_STRUCTURED_DATA.organization;
  const breadcrumbData = HOMEPAGE_STRUCTURED_DATA.breadcrumb;

  // ใช้ Content จาก metadata.ts
  const wholesaleFeatures = HOMEPAGE_CONTENT.features.map((feature, index) => ({
    icon: [FaBox, FaDollarSign, FaPalette, FaShippingFast][index],
    title: feature.title,
    description: feature.description,
  }));

  const benefits = HOMEPAGE_CONTENT.benefits.map((benefit, index) => ({
    icon: [FaCheckCircle, FaTruck, FaAward, FaClock][index],
    title: benefit.title,
    description: benefit.description,
  }));

  const priceRanges = HOMEPAGE_CONTENT.priceRanges;

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
      />      <div className="min-h-screen bg-white">
        <Header />
        <Hero />

        {/* Enhanced SEO Content Section */}
        <div className="animate-fade-in" style={{ animationDuration: '1s' }}>
          <EnhancedSEOContentSection />
        </div>

        {/* Featured Products Section */}
        <section className="py-20 bg-white" aria-labelledby="featured-products">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1
                id="featured-products"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance animate-on-scroll opacity-0 animate-duration-800"
                style={{ transitionDelay: '0.3s' }}
              >
                {SITE_CONFIG.displayName} - {SITE_CONFIG.keywords.primary.join(", ")}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8 animate-duration-800"
                 style={{ transitionDelay: '0.5s' }}>
                {SITE_CONFIG.description}
              </p>
            </div>            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="animate-on-scroll opacity-0" style={{ transitionDelay: `${0.1 * (index + 1)}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-on-scroll opacity-0" style={{ transitionDelay: '0.5s' }}>
              <Link
                href="/collection"
                className="btn-minimal bg-gray-900 text-white hover:bg-gray-800 inline-flex items-center justify-center text-lg animate-scale-in hover-lift"
                aria-label="ดูขายส่งเสื้อยืดและเสื้อสกรีนทั้งหมด"
              >
                ดูขายส่งเสื้อยืดทั้งหมด
              </Link>
            </div>
          </div>
        </section>        {/* Wholesale Section */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="wholesale-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="wholesale-section"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance animate-on-scroll opacity-0"
                style={{ transitionDelay: '0.1s' }}
              >
                {SITE_CONFIG.keywords.primary.slice(0, 2).join(" และ ")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8"
                 style={{ transitionDelay: '0.3s' }}>
                เราเป็นผู้เชี่ยวชาญด้าน{SITE_CONFIG.keywords.primary.join("และ")}
                ราคาส่งพิเศษ เหมาะสำหรับร้านค้า โรงเรียน บริษัท องค์กร
                รับสั่งทำตั้งแต่ 10 ตัวขึ้นไป
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {wholesaleFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="card-minimal p-6 text-center hover-lift animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-soft-glow">
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
            </div>            {/* Pricing Table */}
            <div className="text-center animate-on-scroll opacity-0" style={{ animationDuration: '1s', transitionDelay: '0.4s' }}>
              <div className="card-minimal p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-6"
                    style={{ animationDuration: '0.6s' }}>
                  ตารางราคา{SITE_CONFIG.keywords.primary[0]}
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {priceRanges.map((range, index) => (
                    <div
                      key={index}
                      className={`rounded-xl p-4 ${range.bgColor} animate-on-scroll opacity-0`}
                      style={{ transitionDelay: `${0.2 * (index + 1) + 0.3}s` }}
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
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-slate-600 hover:text-slate-800 font-medium"
                  >
                    {SITE_CONFIG.phone.replace('+66', '0').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>        {/* Categories Section */}
        <section
          className="py-20 bg-white"
          aria-labelledby="product-categories"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDuration: '0.7s' }}>
              <h2
                id="product-categories"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance animate-on-scroll opacity-0"
                style={{ animationDuration: '0.8s', transitionDelay: '0.2s' }}
              >
                หมวดหมู่{SITE_CONFIG.keywords.primary[0]}และเสื้อแฟชั่น
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8"
                 style={{ animationDuration: '0.7s', transitionDelay: '0.3s' }}>
                เลือกประเภทเสื้อที่ต้องการสำหรับ{SITE_CONFIG.keywords.primary.join("และ")}
                คุณภาพพรีเมียม ราคาดี ส่งฟรีทั่วประเทศ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll opacity-0" style={{ animationDuration: '0.8s', transitionDelay: '0.4s' }}>
              {HOMEPAGE_CONTENT.categories.map((category, index) => (
                <Link key={index} href={category.href} className="group animate-on-scroll opacity-0" style={{ transitionDelay: `${0.2 * (index + 1) + 0.3}s` }}>
                  <article className="relative overflow-hidden rounded-2xl aspect-square card-minimal hover-lift">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      width={600}
                      height={600}
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
        </section>        {/* Benefits Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="our-benefits">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDuration: '0.7s' }}>
              <h2
                id="our-benefits"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance animate-fade-in"
                style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}
              >
                ทำไมต้องเลือก {SITE_CONFIG.name} สำหรับ{SITE_CONFIG.keywords.primary[0]}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance animate-fade-in-up"
                 style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
                เราเป็นผู้เชี่ยวชาญด้าน{SITE_CONFIG.keywords.primary.join("และ")}
                ให้ความสำคัญกับคุณภาพและการบริการที่ดีที่สุด
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center card-minimal p-6 hover-lift animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-soft-glow">
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
        </section>        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance animate-on-scroll opacity-0" style={{ transitionDelay: '0.1s' }}>
              พร้อมสั่ง{SITE_CONFIG.keywords.primary[0]}แล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance animate-on-scroll translate-y-8" style={{ transitionDelay: '0.3s' }}>
              ติดต่อเราวันนี้เพื่อขอใบเสนอราคาพิเศษ รับส่วนลดสำหรับลูกค้าใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0" style={{ transitionDelay: '0.5s' }}>
              <Link
                href={`tel:${SITE_CONFIG.phone}`}
                className="btn-minimal bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center text-lg"
              >
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                โทรเลย {SITE_CONFIG.phone.replace('+66', '0').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
              </Link>
              <Link
                href={`https://line.me/ti/p/${SITE_CONFIG.social.instagram}`}
                className="btn-minimal bg-green-600 text-white hover:bg-green-700 inline-flex items-center justify-center text-lg"
              >
                <FaCommentDots className="w-5 h-5 mr-2" />
                แชท LINE {SITE_CONFIG.social.instagram}
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16" role="contentinfo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">{SITE_CONFIG.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  ผู้เชี่ยวชาญด้าน{SITE_CONFIG.keywords.primary.join("และ")}
                  คุณภาพสูง ราคาดี ส่งฟรีทั่วประเทศ
                </p>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/${SITE_CONFIG.social.facebook}`}
                    className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://line.me/ti/p/${SITE_CONFIG.social.instagram}`}
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
                        {SITE_CONFIG.keywords.primary[0]}ทั้งหมด
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
                  บริการ{SITE_CONFIG.keywords.primary[0]}
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>{SITE_CONFIG.keywords.primary[0]}ขั้นต่ำ 10 ตัว</li>
                  <li>{SITE_CONFIG.keywords.primary[2]}และ{SITE_CONFIG.keywords.primary[3]}</li>
                  <li>ส่งฟรีทั่วประเทศ</li>
                  <li>รับประกันคุณภาพ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  ติดต่อ{SITE_CONFIG.keywords.primary[0]}
                </h4>
                <address className="space-y-2 not-italic text-gray-300">
                  <div className="flex items-center">
                    <FaPhoneAlt className="w-4 h-4 mr-2" />
                    <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white">
                      {SITE_CONFIG.phone.replace('+66', '0').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    <a
                      href={`mailto:info@${SITE_CONFIG.domain}`}
                      className="hover:text-white"
                    >
                      info@{SITE_CONFIG.domain}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaCommentDots className="w-4 h-4 mr-2" />
                    <a
                      href={`https://line.me/ti/p/${SITE_CONFIG.social.instagram}`}
                      className="hover:text-white"
                    >
                      {SITE_CONFIG.social.instagram}
                    </a>
                  </div>
                </address>
              </div>
            </div>
            <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
              <p>
                &copy; 2024 {SITE_CONFIG.name} - {SITE_CONFIG.keywords.primary.join(", ")}. สงวนลิขสิทธิ์. |{" "}
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
