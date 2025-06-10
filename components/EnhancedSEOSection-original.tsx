"use client";

import React from "react";
import Link from "next/link";

const EnhancedSEOContentSection = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-100 via-amber-50 to-stone-100 relative overflow-hidden"
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full animate-pulse"
          style={{ backgroundColor: "#EAE4D5" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full animate-bounce"
          style={{ backgroundColor: "#B6B09F" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full animate-pulse"
          style={{ backgroundColor: "#EAE4D5" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-20 h-20 rounded-full animate-bounce"
          style={{ backgroundColor: "#B6B09F" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block animate-bounce">
              <span className="text-6xl">👕</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#000000" }}
            >
              ขายส่งเสื้อยืด ผู้เชี่ยวชาญด้านเสื้อสกรีนจำนวนมาก
            </h2>
            <div
              className="w-32 h-2 mx-auto rounded-full animate-pulse"
              style={{ backgroundColor: "#B6B09F" }}
            ></div>
            <p
              className="text-xl mt-6 max-w-3xl mx-auto leading-relaxed"
              style={{ color: "#000000" }}
            >
              บริการครบวงจรสำหรับการ
              <strong style={{ color: "#B6B09F" }}>ขายเสื้อยืดจำนวนมาก</strong>
              และ<strong style={{ color: "#B6B09F" }}>ขายส่งเสื้อสกรีน</strong>
              คุณภาพสูง ราคาส่งพิเศษ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main SEO Content */}
            <div className="space-y-8">
              <div
                className="group rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: "#EAE4D5", borderColor: "#B6B09F" }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300"
                    style={{ backgroundColor: "#B6B09F" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#000000" }}
                  >
                    ทำไมต้องเลือก TeeCrafted สำหรับ
                    <span style={{ color: "#B6B09F" }}>ขายส่งเสื้อยืด</span>?
                  </h3>
                </div>
                <div
                  className="space-y-4 leading-relaxed"
                  style={{ color: "#000000" }}
                >
                  <p>
                    <strong>TeeCrafted</strong> เป็นผู้นำด้าน
                    <strong style={{ color: "#B6B09F" }}>ขายส่งเสื้อยืด</strong>
                    และ
                    <strong style={{ color: "#B6B09F" }}>
                      ขายส่งเสื้อสกรีน
                    </strong>
                    ที่มีประสบการณ์กว่า 10 ปี เราเชี่ยวชาญใน
                    <strong style={{ color: "#B6B09F" }}>
                      ขายเสื้อยืดจำนวนมาก
                    </strong>
                    สำหรับทุกกลุ่มลูกค้า ทั้ง
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อยืดโรงเรียน
                    </strong>
                    ,
                    <strong style={{ color: "#B6B09F" }}>เสื้อยืดบริษัท</strong>
                    , และ
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อยืดองค์กร
                    </strong>{" "}
                    ด้วยคุณภาพที่เป็นเลิศ
                  </p>
                  <p>
                    การ
                    <strong style={{ color: "#B6B09F" }}>
                      ขายส่งเสื้อสกรีนจำนวนมาก
                    </strong>
                    ของเรามาพร้อมกับบริการ
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อสกรีนลายตามสั่ง
                    </strong>
                    ที่ตอบโจทย์ทุกความต้องการ ไม่ว่าจะเป็น
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อยืดกิจกรรม
                    </strong>
                    หรือ
                    <strong style={{ color: "#B6B09F" }}>
                      ผลิตเสื้อยืดจำนวนมาก
                    </strong>
                    สำหรับอีเวนต์พิเศษ
                  </p>
                  <p>
                    เรามี
                    <strong style={{ color: "#B6B09F" }}>เสื้อยืดขายส่ง</strong>
                    และ
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อสกรีนขายส่ง
                    </strong>
                    หลากหลายแบบ พร้อมให้บริการ
                    <strong style={{ color: "#B6B09F" }}>
                      สั่งเสื้อยืดจำนวนมาก
                    </strong>
                    และ
                    <strong style={{ color: "#B6B09F" }}>
                      สั่งเสื้อสกรีนจำนวนมาก
                    </strong>
                    ด้วยระบบการผลิตที่ทันสมัยและมีคุณภาพมาตรฐานสากล
                  </p>
                </div>
              </div>

              <div
                className="group rounded-3xl p-8 shadow-xl border transition-all duration-500 hover:scale-105"
                style={{ backgroundColor: "#EAE4D5", borderColor: "#B6B09F" }}
              >
                <div className="flex items-center mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300"
                    style={{ backgroundColor: "#B6B09F" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#000000" }}
                  >
                    <span style={{ color: "#B6B09F" }}>เสื้อยืดราคาส่ง</span>{" "}
                    และ{" "}
                    <span style={{ color: "#B6B09F" }}>เสื้อสกรีนราคาส่ง</span>
                  </h3>
                </div>
                <div
                  className="space-y-4 leading-relaxed"
                  style={{ color: "#000000" }}
                >
                  <p>
                    <strong style={{ color: "#B6B09F" }}>เสื้อยืดขายส่ง</strong>
                    ของเรามีราคาเริ่มต้นเพียง{" "}
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#000000" }}
                    >
                      99 บาท/ตัว
                    </span>
                    สำหรับ
                    <strong style={{ color: "#B6B09F" }}>
                      สั่งเสื้อยืดจำนวนมาก
                    </strong>{" "}
                    100 ตัวขึ้นไป ขณะที่
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อสกรีนขายส่ง
                    </strong>
                    เริ่มต้นที่{" "}
                    <span
                      className="text-2xl font-bold"
                      style={{ color: "#000000" }}
                    >
                      119 บาท/ตัว
                    </span>{" "}
                    รวมค่าสกรีน 1 สี แล้ว
                  </p>
                  <p>
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อยืดราคาส่ง
                    </strong>
                    และ
                    <strong style={{ color: "#B6B09F" }}>
                      เสื้อสกรีนราคาส่ง
                    </strong>
                    ของเรายิ่งสั่งมาก ยิ่งถูก พร้อมบริการ
                    <strong style={{ color: "#B6B09F" }}>
                      สั่งเสื้อสกรีนจำนวนมาก
                    </strong>
                    ที่มีคุณภาพเหมือนกันทุกตัว ไม่ว่าจะสั่ง 10 ตัว หรือ 10,000
                    ตัว เราดูแลด้วยมาตรฐานเดียวกัน
                  </p>
                  <div
                    className="rounded-2xl p-6 mt-6"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <h4 className="font-bold mb-3" style={{ color: "#000000" }}>
                      💰 ราคาพิเศษสำหรับ
                      <span style={{ color: "#B6B09F" }}>ขายส่งเสื้อยืด</span>:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        • 10-49 ตัว:{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#B6B09F" }}
                        >
                          149 บาท/ตัว
                        </span>
                      </li>
                      <li>
                        • 50-99 ตัว:{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#B6B09F" }}
                        >
                          129 บาท/ตัว
                        </span>
                      </li>
                      <li>
                        • 100-499 ตัว:{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#B6B09F" }}
                        >
                          109 บาท/ตัว
                        </span>
                      </li>
                      <li>
                        • 500+ ตัว:{" "}
                        <span
                          className="font-bold"
                          style={{ color: "#000000" }}
                        >
                          99 บาท/ตัว
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Stats & Features */}
            <div className="space-y-8">
              {/* Animated Statistics */}
              <div className="grid grid-cols-2 gap-6">
                <div
                  className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: "#B6B09F" }}
                >
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">
                    10+
                  </div>
                  <div className="text-sm opacity-90">ปีประสบการณ์</div>
                  <div className="text-xs opacity-75 mt-1">ขายส่งเสื้อยืด</div>
                </div>
                <div
                  className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: "#000000" }}
                >
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">
                    5000+
                  </div>
                  <div className="text-sm opacity-90">ลูกค้าพึงพอใจ</div>
                  <div className="text-xs opacity-75 mt-1">
                    ขายเสื้อยืดจำนวนมาก
                  </div>
                </div>
                <div
                  className="group rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: "#EAE4D5", color: "#000000" }}
                >
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">
                    99฿
                  </div>
                  <div className="text-sm opacity-90">ราคาเริ่มต้น</div>
                  <div className="text-xs opacity-75 mt-1">เสื้อยืดขายส่ง</div>
                </div>
                <div
                  className="group rounded-2xl p-6 text-white text-center hover:scale-110 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl"
                  style={{ backgroundColor: "#B6B09F" }}
                >
                  <div className="text-4xl font-bold mb-2 group-hover:animate-bounce">
                    24ชม
                  </div>
                  <div className="text-sm opacity-90">ตอบกลับเร็ว</div>
                  <div className="text-xs opacity-75 mt-1">ใบเสนอราคา</div>
                </div>
              </div>

              {/* Service Highlights with Animations */}
              <div
                className="rounded-3xl p-8 shadow-xl border"
                style={{ backgroundColor: "#EAE4D5", borderColor: "#B6B09F" }}
              >
                <h3
                  className="text-2xl font-bold mb-6 text-center"
                  style={{ color: "#000000" }}
                >
                  🎯 บริการเด่นสำหรับ
                  <span style={{ color: "#B6B09F" }}>ขายส่งเสื้อยืด</span>
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "เสื้อยืดโรงเรียน",
                      desc: "รับสกรีนโลโก้โรงเรียน ตราสัญลักษณ์ ขั้นต่ำ 20 ตัว",
                      icon: "🏫",
                    },
                    {
                      title: "เสื้อยืดบริษัท",
                      desc: "เครื่องแบบพนักงาน โลโก้บริษัท สีและขนาดครบ",
                      icon: "🏢",
                    },
                    {
                      title: "เสื้อยืดองค์กร",
                      desc: "สำหรับกิจกรรมองค์กร อีเวนต์ ประชุม เซมินาร์",
                      icon: "🏛️",
                    },
                    {
                      title: "เสื้อยืดกิจกรรม",
                      desc: "งานวิ่ง คอนเสิร์ต เทศกาล งานแต่งงาน",
                      icon: "🎉",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="group flex items-start space-x-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-opacity-50"
                      style={{ backgroundColor: "transparent" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#F2F2F2")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div className="text-2xl group-hover:scale-125 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <div>
                        <h4
                          className="font-semibold group-hover:text-opacity-80 transition-colors"
                          style={{ color: "#000000" }}
                        >
                          {service.title}
                        </h4>
                        <p
                          className="text-sm"
                          style={{ color: "#000000", opacity: 0.8 }}
                        >
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Guarantee */}
              <div
                className="rounded-3xl p-8 text-white relative overflow-hidden"
                style={{ backgroundColor: "#000000" }}
              >
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
                  <div
                    className="rounded-2xl p-4 mt-6 text-center"
                    style={{ backgroundColor: "#B6B09F" }}
                  >
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">ลูกค้าพึงพอใจ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section with Animations */}
          <div
            className="mt-20 rounded-3xl p-8 lg:p-12 shadow-2xl border"
            style={{ backgroundColor: "#EAE4D5", borderColor: "#B6B09F" }}
          >
            <div className="text-center mb-12">
              <h3
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ color: "#000000" }}
              >
                🚀 ขั้นตอนการสั่ง
                <span style={{ color: "#B6B09F" }}>
                  ขายส่งเสื้อสกรีนจำนวนมาก
                </span>
              </h3>
              <p className="text-lg" style={{ color: "#000000", opacity: 0.8 }}>
                กระบวนการสั่งซื้อที่ง่ายและรวดเร็ว เพียง 4 ขั้นตอน
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "ส่งรายละเอียด",
                  desc: "แจ้งจำนวน ขนาด สี และลายที่ต้องการสกรีน",
                  icon: "📝",
                },
                {
                  step: "2",
                  title: "รับใบเสนอราคา",
                  desc: "ราคาขายส่งพิเศษ ตามจำนวนที่สั่งซื้อ",
                  icon: "💰",
                },
                {
                  step: "3",
                  title: "ชำระเงิน",
                  desc: "โอนเงินมัดจำ 50% เริ่มผลิตทันที",
                  icon: "💳",
                },
                {
                  step: "4",
                  title: "ส่งของ",
                  desc: "ผลิตเสร็จภายใน 5-7 วัน ส่งฟรีทั่วไทย",
                  icon: "🚚",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="group text-center hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl group-hover:animate-bounce shadow-lg"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#B6B09F" : "#000000",
                    }}
                  >
                    {process.step}
                  </div>
                  <div className="text-3xl mb-2 group-hover:animate-pulse">
                    {process.icon}
                  </div>
                  <h4
                    className="font-semibold mb-2 transition-colors"
                    style={{ color: "#000000" }}
                  >
                    {process.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#000000", opacity: 0.8 }}
                  >
                    {process.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA with Animation */}
          <div
            className="mt-16 rounded-3xl p-8 lg:p-12 text-white text-center relative overflow-hidden"
            style={{ backgroundColor: "#000000" }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="text-5xl mb-4 animate-bounce">🎉</div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                พร้อมเริ่มต้น
                <span style={{ color: "#B6B09F" }}>ขายส่งเสื้อยืด</span>
                แล้วหรือยัง?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                ติดต่อเราวันนี้เพื่อขอใบเสนอราคาพิเศษ รับส่วนลด{" "}
                <span
                  className="text-3xl font-bold"
                  style={{ color: "#B6B09F" }}
                >
                  10%
                </span>{" "}
                สำหรับลูกค้าใหม่
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+66624977952"
                  className="group inline-flex items-center justify-center px-8 py-4 font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                  style={{ backgroundColor: "#EAE4D5", color: "#000000" }}
                >
                  <span className="text-2xl mr-2 group-hover:animate-ring">
                    📞
                  </span>
                  โทร 062-497-7952
                </Link>
                <Link
                  href="https://line.me/ti/p/@teecrafted"
                  className="group inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
                  style={{ backgroundColor: "#B6B09F" }}
                >
                  <span className="text-2xl mr-2 group-hover:animate-pulse">
                    💬
                  </span>
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

export default EnhancedSEOContentSection;
