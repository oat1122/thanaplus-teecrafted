import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import EnhancedSEOContentSection from "@/components/EnhancedSEOSection";
import { products } from "@/data/products";
import Link from "next/link";
  return (    <section className="py-20 bg-gradient-to-br from-gray-100 via-amber-50 to-stone-100 relative overflow-hidden" style={{backgroundColor: '#F2F2F2'}}>
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse" style={{backgroundColor: '#EAE4D5'}}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full animate-bounce" style={{backgroundColor: '#B6B09F'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full animate-pulse" style={{backgroundColor: '#EAE4D5'}}></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 rounded-full animate-bounce" style={{backgroundColor: '#B6B09F'}}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block animate-bounce">
              <span className="text-6xl">👕</span>
            </div>            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#000000'}}>
              ขายส่งเสื้อยืด ผู้เชี่ยวชาญด้านเสื้อสกรีนจำนวนมาก
            </h2>
            <div className="w-32 h-2 mx-auto rounded-full animate-pulse" style={{backgroundColor: '#B6B09F'}}></div>
            <p className="text-xl mt-6 max-w-3xl mx-auto leading-relaxed" style={{color: '#000000'}}>
              บริการครบวงจรสำหรับการ<strong style={{color: '#B6B09F'}}>ขายเสื้อยืดจำนวนมาก</strong> 
              และ<strong style={{color: '#B6B09F'}}>ขายส่งเสื้อสกรีน</strong>คุณภาพสูง ราคาส่งพิเศษ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main SEO Content */}
            <div className="space-y-8">              <div className="group rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:scale-105" style={{backgroundColor: '#EAE4D5', borderColor: '#B6B09F'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300" style={{backgroundColor: '#B6B09F'}}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold" style={{color: '#000000'}}>
                    ทำไมต้องเลือก TeeCrafted สำหรับ<span style={{color: '#B6B09F'}}>ขายส่งเสื้อยืด</span>?
                  </h3>
                </div>
                <div className="space-y-4 leading-relaxed" style={{color: '#000000'}}>
                  <p>
                    <strong>TeeCrafted</strong> เป็นผู้นำด้าน<strong style={{color: '#B6B09F'}}>ขายส่งเสื้อยืด</strong>และ<strong style={{color: '#B6B09F'}}>ขายส่งเสื้อสกรีน</strong>ที่มีประสบการณ์กว่า 10 ปี 
                    เราเชี่ยวชาญใน<strong style={{color: '#B6B09F'}}>ขายเสื้อยืดจำนวนมาก</strong>สำหรับทุกกลุ่มลูกค้า ทั้ง<strong style={{color: '#B6B09F'}}>เสื้อยืดโรงเรียน</strong>, 
                    <strong style={{color: '#B6B09F'}}>เสื้อยืดบริษัท</strong>, และ<strong style={{color: '#B6B09F'}}>เสื้อยืดองค์กร</strong> ด้วยคุณภาพที่เป็นเลิศ
                  </p>
                  <p>
                    การ<strong style={{color: '#B6B09F'}}>ขายส่งเสื้อสกรีนจำนวนมาก</strong>ของเรามาพร้อมกับบริการ<strong style={{color: '#B6B09F'}}>เสื้อสกรีนลายตามสั่ง</strong>ที่ตอบโจทย์ทุกความต้องการ 
                    ไม่ว่าจะเป็น<strong style={{color: '#B6B09F'}}>เสื้อยืดกิจกรรม</strong>หรือ<strong style={{color: '#B6B09F'}}>ผลิตเสื้อยืดจำนวนมาก</strong>สำหรับอีเวนต์พิเศษ
                  </p>
                  <p>
                    เรามี<strong style={{color: '#B6B09F'}}>เสื้อยืดขายส่ง</strong>และ<strong style={{color: '#B6B09F'}}>เสื้อสกรีนขายส่ง</strong>หลากหลายแบบ 
                    พร้อมให้บริการ<strong style={{color: '#B6B09F'}}>สั่งเสื้อยืดจำนวนมาก</strong>และ<strong style={{color: '#B6B09F'}}>สั่งเสื้อสกรีนจำนวนมาก</strong>
                    ด้วยระบบการผลิตที่ทันสมัยและมีคุณภาพมาตรฐานสากล
                  </p>
                </div>
              </div>              <div className="group rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:scale-105" style={{backgroundColor: '#EAE4D5', borderColor: '#B6B09F'}}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300" style={{backgroundColor: '#B6B09F'}}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold" style={{color: '#000000'}}>
                    <span style={{color: '#B6B09F'}}>เสื้อยืดราคาส่ง</span> และ <span style={{color: '#B6B09F'}}>เสื้อสกรีนราคาส่ง</span>
                  </h3>
                </div>
                <div className="space-y-4 leading-relaxed" style={{color: '#000000'}}>
                  <p>
                    <strong style={{color: '#B6B09F'}}>เสื้อยืดขายส่ง</strong>ของเรามีราคาเริ่มต้นเพียง <span className="text-2xl font-bold" style={{color: '#000000'}}>99 บาท/ตัว</span> 
                    สำหรับ<strong style={{color: '#B6B09F'}}>สั่งเสื้อยืดจำนวนมาก</strong> 100 ตัวขึ้นไป 
                    ขณะที่<strong style={{color: '#B6B09F'}}>เสื้อสกรีนขายส่ง</strong>เริ่มต้นที่ <span className="text-2xl font-bold" style={{color: '#000000'}}>119 บาท/ตัว</span> รวมค่าสกรีน 1 สี แล้ว
                  </p>
                  <p>
                    <strong style={{color: '#B6B09F'}}>เสื้อยืดราคาส่ง</strong>และ<strong style={{color: '#B6B09F'}}>เสื้อสกรีนราคาส่ง</strong>ของเรายิ่งสั่งมาก ยิ่งถูก 
                    พร้อมบริการ<strong style={{color: '#B6B09F'}}>สั่งเสื้อสกรีนจำนวนมาก</strong>ที่มีคุณภาพเหมือนกันทุกตัว 
                    ไม่ว่าจะสั่ง 10 ตัว หรือ 10,000 ตัว เราดูแลด้วยมาตรฐานเดียวกัน
                  </p>
                  <div className="rounded-2xl p-6 mt-6" style={{backgroundColor: '#F2F2F2'}}>
                    <h4 className="font-bold mb-3" style={{color: '#000000'}}>💰 ราคาพิเศษสำหรับ<span style={{color: '#B6B09F'}}>ขายส่งเสื้อยืด</span>:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 10-49 ตัว: <span className="font-bold" style={{color: '#B6B09F'}}>149 บาท/ตัว</span></li>
                      <li>• 50-99 ตัว: <span className="font-bold" style={{color: '#B6B09F'}}>129 บาท/ตัว</span></li>
                      <li>• 100-499 ตัว: <span className="font-bold" style={{color: '#B6B09F'}}>109 บาท/ตัว</span></li>
                      <li>• 500+ ตัว: <span className="font-bold" style={{color: '#000000'}}>99 บาท/ตัว</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Stats & Features */}
            <div className="space-y-8">              {/* Animated Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl" style={{backgroundColor: '#B6B09F'}}>
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">10+</div>
                  <div className="text-sm opacity-90">ปีประสบการณ์</div>
                  <div className="text-xs opacity-75 mt-1">ขายส่งเสื้อยืด</div>
                </div>
                <div className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl" style={{backgroundColor: '#000000'}}>
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">5000+</div>
                  <div className="text-sm opacity-90">ลูกค้าพึงพอใจ</div>
                  <div className="text-xs opacity-75 mt-1">ขายเสื้อยืดจำนวนมาก</div>
                </div>
                <div className="group rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl" style={{backgroundColor: '#EAE4D5', color: '#000000'}}>
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">99฿</div>
                  <div className="text-sm opacity-90">ราคาเริ่มต้น</div>
                  <div className="text-xs opacity-75 mt-1">เสื้อยืดขายส่ง</div>
                </div>
                <div className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl" style={{backgroundColor: '#B6B09F'}}>
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">24ชม</div>
                  <div className="text-sm opacity-90">ตอบกลับเร็ว</div>
                  <div className="text-xs opacity-75 mt-1">ใบเสนอราคา</div>
                </div>
              </div>              {/* Service Highlights with Animations */}
              <div className="rounded-3xl p-8 shadow-xl border" style={{backgroundColor: '#EAE4D5', borderColor: '#B6B09F'}}>
                <h3 className="text-2xl font-bold mb-6 text-center" style={{color: '#000000'}}>
                  🎯 บริการเด่นสำหรับ<span style={{color: '#B6B09F'}}>ขายส่งเสื้อยืด</span>
                </h3>
                <div className="space-y-4">
                  {[
                    { title: "เสื้อยืดโรงเรียน", desc: "รับสกรีนโลโก้โรงเรียน ตราสัญลักษณ์ ขั้นต่ำ 20 ตัว", icon: "🏫" },
                    { title: "เสื้อยืดบริษัท", desc: "เครื่องแบบพนักงาน โลโก้บริษัท สีและขนาดครบ", icon: "🏢" },
                    { title: "เสื้อยืดองค์กร", desc: "สำหรับกิจกรรมองค์กร อีเวนต์ ประชุม เซมินาร์", icon: "🏛️" },
                    { title: "เสื้อยืดกิจกรรม", desc: "งานวิ่ง คอนเสิร์ต เทศกาล งานแต่งงาน", icon: "🎉" }
                  ].map((service, index) => (
                    <div key={index} className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-opacity-50" style={{backgroundColor: 'transparent'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F2F2F2'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold group-hover:text-opacity-80 transition-colors" style={{color: '#000000'}}>
                          {service.title}
                        </h4>
                        <p className="text-sm" style={{color: '#000000', opacity: 0.8}}>{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>              {/* Quality Guarantee */}
              <div className="rounded-3xl p-8 text-white relative overflow-hidden" style={{backgroundColor: '#000000'}}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">🏆</div>
                    <h4 className="text-2xl font-bold">รับประกันคุณภาพ 100%</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <p>✅ ผ้าคอตตอน 100% นำเข้าจากต่างประเทศ</p>
                    <p>✅ เทคนิคสกรีนทันสมัย ใช้หมึกคุณภาพสูง</p>
                    <p>✅ ตรวจสอบคุณภาพทุกขั้นตอน</p>
                    <p>✅ รับประกันเปลี่ยน-คืนภายใน 7 วัน</p>
                  </div>
                  <div className="rounded-2xl p-4 mt-6 text-center" style={{backgroundColor: '#B6B09F'}}>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">ลูกค้าพึงพอใจ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>          {/* Process Section with Animations */}
          <div className="mt-20 rounded-3xl p-8 lg:p-12 shadow-2xl border" style={{backgroundColor: '#EAE4D5', borderColor: '#B6B09F'}}>
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#000000'}}>
                🚀 ขั้นตอนการสั่ง<span style={{color: '#B6B09F'}}>ขายส่งเสื้อสกรีนจำนวนมาก</span>
              </h3>
              <p className="text-lg" style={{color: '#000000', opacity: 0.8}}>กระบวนการสั่งซื้อที่ง่ายและรวดเร็ว เพียง 4 ขั้นตอน</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "ส่งรายละเอียด", desc: "แจ้งจำนวน ขนาด สี และลายที่ต้องการสกรีน", icon: "📝" },
                { step: "2", title: "รับใบเสนอราคา", desc: "ราคาขายส่งพิเศษ ตามจำนวนที่สั่งซื้อ", icon: "💰" },
                { step: "3", title: "ชำระเงิน", desc: "โอนเงินมัดจำ 50% เริ่มผลิตทันที", icon: "💳" },
                { step: "4", title: "ส่งของ", desc: "ผลิตเสร็จภายใน 5-7 วัน ส่งฟรีทั่วไทย", icon: "🚚" }
              ].map((process, index) => (
                <div key={index} className="group text-center hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl group-hover:animate-bounce shadow-lg" style={{backgroundColor: index % 2 === 0 ? '#B6B09F' : '#000000'}}>
                    {process.step}
                  </div>
                  <div className="text-3xl mb-2 group-hover:animate-pulse">{process.icon}</div>
                  <h4 className="font-semibold mb-2 transition-colors" style={{color: '#000000'}}>
                    {process.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{color: '#000000', opacity: 0.8}}>{process.desc}</p>
                </div>
              ))}
            </div>
          </div>          {/* Final CTA with Animation */}
          <div className="mt-16 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden" style={{backgroundColor: '#000000'}}>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-bounce">🎉</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                พร้อมเริ่มต้น<span style={{color: '#B6B09F'}}>ขายส่งเสื้อยืด</span>แล้วหรือยัง?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                ติดต่อเราวันนี้เพื่อขอใบเสนอราคาพิเศษ รับส่วนลด <span className="text-3xl font-bold" style={{color: '#B6B09F'}}>10%</span> สำหรับลูกค้าใหม่
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+66624977952"
                  className="group inline-flex items-center justify-center px-8 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl" style={{backgroundColor: '#EAE4D5', color: '#000000'}}
                >
                  <span className="text-2xl mr-2 group-hover:animate-ring">📞</span>
                  โทร 062-497-7952
                </Link>
                <Link
                  href="https://line.me/ti/p/@teecrafted"
                  className="group inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl" style={{backgroundColor: '#B6B09F'}}
                >
                  <span className="text-2xl mr-2 group-hover:animate-pulse">💬</span>
                  แชท LINE @teecrafted
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

      <div className="min-h-screen bg-white">        <Header />
        <Hero />

        {/* Enhanced SEO Content Section - 500+ words */}
        <EnhancedSEOContentSection />

        {/* Featured Products Section */}
        <section className="py-20 bg-white" aria-labelledby="featured-products">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1
                id="featured-products"
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
              >
                ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                ขายเสื้อยืดจำนวนมาก ราคาส่ง คุณภาพสูง เหมาะสำหรับร้านค้า
                โรงเรียน บริษัท องค์กร รับสกรีนลายตามต้องการ ขั้นต่ำ 10 ตัว
                ส่งฟรีทั่วประเทศ
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collection"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-200"
                aria-label="ดูขายส่งเสื้อยืดและเสื้อสกรีนทั้งหมด"
              >
                ดูขายส่งเสื้อยืดทั้งหมด
              </Link>
            </div>
          </div>
        </section>        {/* Wholesale Section */}
        <section
          className="py-20"
          aria-labelledby="wholesale-section"
          style={{backgroundColor: '#F2F2F2'}}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">              <h2
                id="wholesale-section"
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{color: '#000000'}}
              >
                ขายส่งเสื้อยืด ขายส่งเสื้อสกรีนจำนวนมาก
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{color: '#000000', opacity: 0.8}}>
                เราเป็นผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                ราคาส่งพิเศษ เหมาะสำหรับร้านค้า โรงเรียน บริษัท องค์กร
                รับสั่งทำตั้งแต่ 10 ตัวขึ้นไป
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">              <div className="rounded-xl p-6 shadow-md text-center" style={{backgroundColor: '#EAE4D5'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  ขั้นต่ำ 10 ตัว
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  รับสั่งทำขายส่งเสื้อยืดและเสื้อสกรีนขั้นต่ำเพียง 10 ตัว
                  ราคาส่งพิเศษ
                </p>
              </div>              <div className="rounded-xl p-6 shadow-md text-center" style={{backgroundColor: '#EAE4D5'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  ราคาส่งพิเศษ
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  ขายเสื้อยืดจำนวนมาก ยิ่งสั่งเยอะ ยิ่งถูก เริ่มต้น 99 บาท/ตัว
                </p>
              </div>

              <div className="rounded-xl p-6 shadow-md text-center" style={{backgroundColor: '#EAE4D5'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  สกรีนตามสั่ง
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  รับสกรีนลายตามต้องการ โลโก้บริษัท ชื่อโรงเรียน
                  หรือดีไซน์ส่วนตัว
                </p>
              </div>

              <div className="rounded-xl p-6 shadow-md text-center" style={{backgroundColor: '#EAE4D5'}}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  ผลิตรวดเร็ว
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  ขายส่งเสื้อสกรีนจำนวนมาก ผลิตเสร็จภายใน 5-7 วัน
                  ส่งฟรีทั่วประเทศ
                </p>
              </div>
            </div>            <div className="text-center mt-12">
              <div className="rounded-xl p-8 shadow-lg max-w-4xl mx-auto" style={{backgroundColor: '#EAE4D5'}}>
                <h3 className="text-2xl font-bold mb-6" style={{color: '#000000'}}>
                  ตารางราคาขายส่งเสื้อยืด
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="rounded-lg p-4" style={{backgroundColor: '#F2F2F2'}}>
                    <div className="text-sm mb-1" style={{color: '#000000', opacity: 0.8}}>10-29 ตัว</div>
                    <div className="text-2xl font-bold" style={{color: '#B6B09F'}}>
                      149 บาท
                    </div>
                    <div className="text-xs" style={{color: '#000000', opacity: 0.6}}>ต่อตัว</div>
                  </div>
                  <div className="rounded-lg p-4" style={{backgroundColor: '#F2F2F2'}}>
                    <div className="text-sm mb-1" style={{color: '#000000', opacity: 0.8}}>30-49 ตัว</div>
                    <div className="text-2xl font-bold" style={{color: '#B6B09F'}}>
                      129 บาท
                    </div>
                    <div className="text-xs" style={{color: '#000000', opacity: 0.6}}>ต่อตัว</div>
                  </div>
                  <div className="rounded-lg p-4" style={{backgroundColor: '#F2F2F2'}}>
                    <div className="text-sm mb-1" style={{color: '#000000', opacity: 0.8}}>50-99 ตัว</div>
                    <div className="text-2xl font-bold" style={{color: '#B6B09F'}}>
                      109 บาท
                    </div>
                    <div className="text-xs" style={{color: '#000000', opacity: 0.6}}>ต่อตัว</div>
                  </div>
                  <div className="rounded-lg p-4" style={{backgroundColor: '#F2F2F2'}}>
                    <div className="text-sm mb-1" style={{color: '#000000', opacity: 0.8}}>100+ ตัว</div>
                    <div className="text-2xl font-bold" style={{color: '#000000'}}>
                      99 บาท
                    </div>
                    <div className="text-xs" style={{color: '#000000', opacity: 0.6}}>ต่อตัว</div>
                  </div>
                </div>                <p className="text-sm mt-4" style={{color: '#000000', opacity: 0.8}}>                  *ราคาไม่รวมค่าสกรีน | สอบถามรายละเอียดเพิ่มเติม{" "}
                  <a
                    href="tel:+66624977952"
                    style={{color: '#B6B09F'}}
                    className="hover:underline"
                  >
                    062-497-7952
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>        {/* Categories Section */}
        <section
          className="py-20"
          aria-labelledby="product-categories"
          style={{backgroundColor: '#EAE4D5'}}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="product-categories"
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{color: '#000000'}}
              >
                หมวดหมู่ขายส่งเสื้อยืดและเสื้อสกรีน
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: '#000000', opacity: 0.8}}>
                เลือกประเภทเสื้อที่ต้องการสำหรับขายส่งเสื้อยืดจำนวนมาก
                ทั้งเสื้อยืด เสื้อโปโล เสื้อฮู้ด ราคาส่งพิเศษ คุณภาพพรีเมียม
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/collection?category=เสื้อยืด"
                className="group cursor-pointer"
              >
                <article className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="ขายส่งเสื้อยืดสกรีน คุณภาพสูง ดีไซน์สวย ราคาส่งพิเศษ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">
                        ขายส่งเสื้อยืด
                      </h3>
                      <p className="text-white text-sm mt-2">
                        เริ่มต้น 99 บาท/ตัว
                      </p>
                    </div>
                  </div>
                </article>
              </Link>

              <Link
                href="/collection?category=เสื้อโปโล"
                className="group cursor-pointer"
              >
                <article className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="ขายส่งเสื้อโปโลสกรีน ใส่สบาย ดูดี ราคาส่งพิเศษ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">
                        ขายส่งเสื้อโปโล
                      </h3>
                      <p className="text-white text-sm mt-2">
                        เริ่มต้น 149 บาท/ตัว
                      </p>
                    </div>
                  </div>
                </article>
              </Link>

              <Link
                href="/collection?category=เสื้อฮู้ด"
                className="group cursor-pointer"
              >
                <article className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="ขายส่งเสื้อฮู้ดสกรีน แฟชั่น ใส่อุ่น ราคาส่งพิเศษ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">
                        ขายส่งเสื้อฮู้ด
                      </h3>
                      <p className="text-white text-sm mt-2">
                        เริ่มต้น 199 บาท/ตัว
                      </p>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>        {/* Benefits Section */}
        <section className="py-20" aria-labelledby="our-benefits" style={{backgroundColor: '#F2F2F2'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                id="our-benefits"
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{color: '#000000'}}
              >
                ทำไมต้องเลือก TeeCrafted สำหรับขายส่งเสื้อยืด
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{color: '#000000', opacity: 0.8}}>
                เราเป็นผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                ให้ความสำคัญกับคุณภาพและการบริการที่ดีที่สุด
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  คุณภาพสูง
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  วัสดุพรีเมียม สกรีนคมชัด ทนทาน
                  เหมาะสำหรับขายส่งเสื้อยืดจำนวนมาก
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  ส่งฟรีทั่วประเทศ
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  ขายส่งเสื้อสกรีนจำนวนมาก ส่งฟรี รวดเร็ว ปลอดภัย ได้ของตรงเวลา
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  รับประกันคุณภาพ
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  รับประกันคุณภาพทุกชิ้น เปลี่ยน-คืนได้
                  มั่นใจในการสั่งซื้อขายส่ง
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#B6B09F'}}>
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{color: '#000000'}}>
                  ผลิตรวดเร็ว
                </h3>
                <p style={{color: '#000000', opacity: 0.8}}>
                  ผลิตรวดเร็ว ส่งไว ได้ของตรงเวลา
                  เหมาะสำหรับธุรกิจขายส่งเสื้อยืด
                </p>
              </div>
            </div>
          </div>
        </section>        {/* CTA Section */}
        <section className="py-20 text-white" style={{backgroundColor: '#000000'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              พร้อมสั่งขายส่งเสื้อยืดจำนวนมากแล้วหรือยัง?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              ติดต่อเราวันนี้เพื่อขอใบเสนอราคาขายส่งเสื้อสกรีนพิเศษ
              รับส่วนลดสำหรับลูกค้าใหม่
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">              <Link
                href="tel:+66624977952"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-colors duration-200" style={{backgroundColor: '#EAE4D5', color: '#000000'}}
              >
                📞 โทรเลย 062-497-7952
              </Link>
              <Link
                href="https://line.me/ti/p/@teecrafted"
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-colors duration-200" style={{backgroundColor: '#B6B09F'}}
              >
                💬 แชท LINE @teecrafted
              </Link>
            </div>
          </div>
        </section>        {/* Footer */}
        <footer className="text-white py-16" role="contentinfo" style={{backgroundColor: '#000000'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">TeeCrafted</h3>
                <p className="mb-4" style={{color: '#EAE4D5', opacity: 0.8}}>
                  ผู้เชี่ยวชาญด้านขายส่งเสื้อยืดและขายส่งเสื้อสกรีนจำนวนมาก
                  คุณภาพสูง ราคาส่งพิเศษ ส่งฟรีทั่วประเทศ
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/TeeCraftedThailand"
                    className="hover:text-white"
                    style={{color: '#B6B09F'}}
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://line.me/ti/p/@teecrafted"
                    className="hover:text-white"
                    style={{color: '#B6B09F'}}
                    aria-label="LINE"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">เมนู</h4>
                <nav aria-label="Footer Navigation">
                  <ul className="space-y-2" style={{color: '#EAE4D5'}}>
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
                <ul className="space-y-2" style={{color: '#EAE4D5'}}>
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
                <address className="space-y-2 not-italic" style={{color: '#EAE4D5'}}>
                  <div>
                    โทร:{" "}
                    <a href="tel:+66624977952" className="hover:text-white">
                      062-497-7952
                    </a>
                  </div>
                  <div>
                    อีเมล:{" "}
                    <a
                      href="mailto:wholesale@teecrafted.com"
                      className="hover:text-white"
                    >
                      wholesale@teecrafted.com
                    </a>
                  </div>
                  <div>
                    Line:{" "}
                    <a
                      href="https://line.me/ti/p/@teecrafted"
                      className="hover:text-white"
                    >
                      @teecrafted
                    </a>
                  </div>
                  <div>
                    Facebook:{" "}
                    <a
                      href="https://www.facebook.com/TeeCraftedThailand"
                      className="hover:text-white"
                    >
                      TeeCrafted Thailand
                    </a>
                  </div>
                </address>
              </div>
            </div>
            <div className="pt-8 mt-8 text-center" style={{borderTop: '1px solid #B6B09F', color: '#EAE4D5'}}>
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
