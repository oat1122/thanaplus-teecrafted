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
        <section className="py-20 cafe-section-bg" aria-labelledby="featured-products">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1
                id="featured-products"
                className="text-3xl sm:text-4xl font-bold cafe-heading-primary mb-4 text-balance animate-on-scroll opacity-0 animate-duration-800"
                style={{ transitionDelay: '0.3s' }}
              >
                {SITE_CONFIG.displayName} — เสื้อผ้าแฟชั่นผู้หญิง | เสื้อผ้าไปคาเฟ่ | เสื้อครอปผู้หญิง | เสื้อครอปผู้ชาย</h1>
              <p className="text-xl cafe-text-muted max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8 animate-duration-800"
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
                className="cafe-button-primary inline-flex items-center justify-center text-lg animate-scale-in hover-lift"
                aria-label="ดูเสื้อผ้าแฟชั่นผู้หญิง เสื้อไปคาเฟ่ และเสื้อครอปทั้งหมด"
              >
                ดูเสื้อผ้าแฟชั่นทั้งหมด
              </Link>
            </div>
          </div>
        </section>        {/* Fashion Section */}
        <section
          className="py-20 cafe-section-accent"
          aria-labelledby="fashion-section"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="fashion-section"
                className="text-3xl sm:text-4xl font-bold cafe-heading-primary mb-4 text-balance animate-on-scroll opacity-0"
                style={{ transitionDelay: '0.1s' }}
              >
                {SITE_CONFIG.keywords.primary.slice(0, 2).join(" และ ")}
              </h2>
              <p className="text-xl cafe-text-muted max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8"
                 style={{ transitionDelay: '0.3s' }}>
                เราคัดสรรเสื้อผ้าแฟชั่นผู้หญิง สไตล์เกาหลีและสตรีท เหมาะสำหรับใส่ไปคาเฟ่ ใส่ง่าย ถ่ายรูปสวย ราคาสบายกระเป๋า ครอบคลุมเสื้อครอปผู้หญิง/ผู้ชาย เสื้อยืดแฟชั่น เสื้อผ้าวินเทจ และเสื้อผ้าโอเวอร์ไซส์คุณภาพดี
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {wholesaleFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="cafe-card p-6 text-center hover-lift cafe-animate-float animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="cafe-icon-box w-16 h-16 mx-auto mb-4">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold cafe-heading-secondary mb-2">
                    {feature.title}
                  </h3>
                  <p className="cafe-text-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>            {/* Pricing Table */}
            <div className="text-center animate-on-scroll opacity-0" style={{ animationDuration: '1s', transitionDelay: '0.4s' }}>
              <div className="cafe-card p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold cafe-heading-primary mb-6"
                    style={{ animationDuration: '0.6s' }}>
                  ตารางราคา{SITE_CONFIG.keywords.primary[0]}
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {priceRanges.map((range, index) => (
                    <div
                      key={index}
                      className={`cafe-card rounded-xl p-4 hover-glow animate-on-scroll opacity-0`}
                      style={{ transitionDelay: `${0.2 * (index + 1) + 0.3}s` }}
                    >
                      <div className="text-sm cafe-text-muted mb-1">
                        {range.range}
                      </div>
                      <div className="text-2xl font-bold cafe-heading-primary">
                        {range.price}
                      </div>
                      <div className="text-xs cafe-text-muted">ต่อตัว</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm cafe-text-muted mt-4">
                  *ราคาพิเศษสำหรับสมาชิก | สอบถามรายละเอียดเพิ่มเติม{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="cafe-text-secondary hover:text-slate-800 font-medium"
                  >
                    {SITE_CONFIG.phone.replace('+66', '0').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>        {/* Categories Section */}
        <section
          className="py-20 cafe-section-bg"
          aria-labelledby="product-categories"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDuration: '0.7s' }}>
              <h2
                id="product-categories"
                className="text-3xl sm:text-4xl font-bold cafe-heading-primary mb-4 text-balance animate-on-scroll opacity-0"
                style={{ animationDuration: '0.8s', transitionDelay: '0.2s' }}
              >
                หมวดหมู่เสื้อผ้าแฟชั่นผู้หญิงและเสื้อครอป
              </h2>
              <p className="text-lg cafe-text-muted max-w-3xl mx-auto text-balance animate-on-scroll translate-y-8"
                 style={{ animationDuration: '0.7s', transitionDelay: '0.3s' }}>
                เลือกประเภทเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ เสื้อครอปผู้หญิง/ผู้ชาย เสื้อยืดแฟชั่น เสื้อผ้าสตรีท วินเทจ และโอเวอร์ไซส์ คุณภาพพรีเมียม ราคาดี ส่งฟรีทั่วประเทศ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll opacity-0" style={{ animationDuration: '0.8s', transitionDelay: '0.4s' }}>
              {HOMEPAGE_CONTENT.categories.map((category, index) => (
                <Link key={index} href={category.href} className="group animate-on-scroll opacity-0" style={{ transitionDelay: `${0.2 * (index + 1) + 0.3}s` }}>
                  <article className="relative overflow-hidden rounded-2xl aspect-square cafe-product-card hover-lift">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.title}
                        </h3>
                        <p className="cafe-price-tag text-sm">{category.price}</p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>        {/* Benefits Section */}
        <section className="py-20 cafe-section-accent" aria-labelledby="our-benefits">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in" style={{ animationDuration: '0.7s' }}>
              <h2
                id="our-benefits"
                className="text-3xl sm:text-4xl font-bold cafe-heading-primary mb-4 text-balance animate-fade-in"
                style={{ animationDuration: '0.8s', animationDelay: '0.1s' }}
              >
                ทำไมต้องเลือก {SITE_CONFIG.name} สำหรับเสื้อผ้าแฟชั่น
              </h2>
              <p className="text-lg cafe-text-muted max-w-3xl mx-auto text-balance animate-fade-in-up"
                 style={{ animationDuration: '0.8s', animationDelay: '0.3s' }}>
                เราเน้นเสื้อผ้าแฟชั่นผู้หญิง เสื้อผ้าไปคาเฟ่ และเสื้อครอป ทั้งสไตล์เกาหลี สตรีท วินเทจ และโอเวอร์ไซส์ พร้อมคุณภาพและการบริการที่ดีที่สุด
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center cafe-card p-6 hover-lift cafe-animate-float animate-on-scroll opacity-0"
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  <div className="cafe-icon-box w-16 h-16 mx-auto mb-4">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold cafe-heading-secondary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="cafe-text-muted text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>        {/* CTA Section */}
        <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--cafe-coffee) 0%, var(--cafe-espresso) 100%)' }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance animate-on-scroll opacity-0 text-white" style={{ transitionDelay: '0.1s' }}>
              พร้อมช้อปเสื้อผ้าแฟชั่นแล้วหรือยัง?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-balance animate-on-scroll translate-y-8" style={{ transitionDelay: '0.3s', color: 'var(--cafe-light-brown)' }}>
              ติดต่อเราวันนี้เพื่อสั่งซื้อเสื้อผ้าแฟชั่นผู้หญิง เสื้อไปคาเฟ่ และเสื้อครอป รับส่วนลดสำหรับลูกค้าใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll opacity-0" style={{ transitionDelay: '0.5s' }}>
              <Link
                href={`tel:${SITE_CONFIG.phone}`}
                className="cafe-button-secondary inline-flex items-center justify-center text-lg"
              >
                <FaPhoneAlt className="w-5 h-5 mr-2" />
                โทรเลย {SITE_CONFIG.phone.replace('+66', '0').replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
              </Link>
              <Link
                href={`https://line.me/ti/p/${SITE_CONFIG.social.instagram}`}
                className="cafe-button-primary inline-flex items-center justify-center text-lg"
                style={{ background: 'var(--cafe-sage)' }}
              >
                <FaCommentDots className="w-5 h-5 mr-2" />
                แชท LINE {SITE_CONFIG.social.instagram}
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16" style={{ background: 'var(--cafe-mocha)' }} role="contentinfo">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{SITE_CONFIG.name}</h3>
                <p className="mb-4 leading-relaxed" style={{ color: 'var(--cafe-light-brown)' }}>
                  คัดสรรเสื้อผ้าแฟชั่นผู้หญิง เสื้อครอป และเสื้อผ้าไปคาเฟ่ รวมถึงเสื้อยืดแฟชั่น เสื้อผ้าสตรีท วินเทจ และโอเวอร์ไซส์ คุณภาพสูง สไตล์เกาหลี ราคาดี ส่งฟรีทั่วประเทศ
                </p>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.facebook.com/${SITE_CONFIG.social.facebook}`}
                    className="cafe-icon-box w-10 h-10 hover:scale-105 transition-transform"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://line.me/ti/p/${SITE_CONFIG.social.instagram}`}
                    className="cafe-icon-box w-10 h-10 hover:scale-105 transition-transform"
                    aria-label="LINE"
                  >
                    <FaCommentDots className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">เมนู</h4>
                <nav aria-label="Footer Navigation">
                  <ul className="space-y-2" style={{ color: 'var(--cafe-light-brown)' }}>
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
                        เสื้อผ้าแฟชั่นทั้งหมด
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
                <h4 className="text-lg font-semibold mb-4 text-white">
                  บริการเสื้อผ้าแฟชั่น
                </h4>
                <ul className="space-y-2" style={{ color: 'var(--cafe-light-brown)' }}>
                  <li>เสื้อผ้าแฟชั่นผู้หญิง</li>
                  <li>เสื้อครอปและเสื้อผ้าไปคาเฟ่</li>
                  <li>ส่งฟรีทั่วประเทศ</li>
                  <li>รับประกันคุณภาพ</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">
                  ติดต่อสั่งซื้อเสื้อผ้าแฟชั่น
                </h4>
                <address className="space-y-2 not-italic" style={{ color: 'var(--cafe-light-brown)' }}>
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
            <div className="pt-8 mt-8 border-t border-opacity-30 text-center" style={{ borderColor: 'var(--cafe-medium-brown)', color: 'var(--cafe-medium-brown)' }}>
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
