"use client";

import React from "react";
import Link from "next/link";
import {
  FaCheckCircle,
  FaTshirt,
  FaSchool,
  FaBuilding,
  FaUniversity,
  FaCalendarAlt,
  FaDollarSign,
  FaUsers,
  FaClock,
  FaTrophy,
  FaPhoneAlt,
  FaCommentDots,
  FaBox,
  FaPalette,
  FaShippingFast,
  FaCertificate,
} from "react-icons/fa";
import { BiStats, BiSupport } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

const EnhancedSEOContentSection = () => {
  const services = [
    {
      title: "เสื้อผ้าแฟชั่นผู้หญิง",
      desc: "คอลเลคชั่นสไตล์คาเฟ่ มินิมอล ใส่สบาย ถ่ายรูปสวยทุกองศา สำหรับสาวยุคใหม่",
      icon: FaSchool,
      color: "text-cafe-coffee",
      gradientFrom: "cafe-sage",
      gradientTo: "cafe-gold",
    },
    {
      title: "เสื้อครอปทรงสวย",
      desc: "ดีไซน์เข้ารูป เน้นสัดส่วน มิกซ์แมทช์ได้ง่าย เหมาะกับทุกรูปร่างและไลฟ์สไตล์",
      icon: FaBuilding,
      color: "text-cafe-coffee",
      gradientFrom: "cafe-copper",
      gradientTo: "cafe-terracotta",
    },
    {
      title: "เสื้อผ้าวินเทจ",
      desc: "สไตล์คลาสสิคย้อนยุค เสน่ห์แบบเก่าแก่ ใส่แล้วมีเอกลักษณ์เฉพาตัว",
      icon: FaUniversity,
      color: "text-cafe-coffee",
      gradientFrom: "cafe-dark-brown",
      gradientTo: "cafe-mocha",
    },
    {
      title: "เสื้อโอเวอร์ไซส์",
      desc: "ลุคชิลๆ สบายๆ ใส่ได้ทั้งผู้หญิงและผู้ชาย แมทช์กับอะไรก็เท่ ใส่ไปไหนก็เก๋",
      icon: FaCalendarAlt,
      color: "text-cafe-coffee",
      gradientFrom: "cafe-espresso",
      gradientTo: "cafe-coffee",
    },
  ];

  const stats = [
    {
      number: "5,000+",
      label: "ลูกค้าไว้ใจ",
      sublabel: "เสื้อผ้าคุณภาพพรีเมียม",
      icon: FaUsers,
      gradientFrom: "cafe-gold",
      gradientTo: "cafe-copper",
    },
    {
      number: "100+",
      label: "ดีไซน์ใหม่ทุกเดือน", 
      sublabel: "อัพเดทเทรนด์ไม่หยุด",
      icon: BiStats,
      gradientFrom: "cafe-sage",
      gradientTo: "cafe-terracotta",
    },
    {
      number: "199฿",
      label: "ราคาเริ่มต้น",
      sublabel: "คุณภาพเกินราคา",
      icon: FaDollarSign,
      gradientFrom: "cafe-coffee",
      gradientTo: "cafe-espresso",
    },
    {
      number: "24 ชม.",
      label: "จัดส่งรวดเร็ว",
      sublabel: "ส่งฟรีทั่วประเทศ",
      icon: BiSupport,
      gradientFrom: "cafe-dark-brown",
      gradientTo: "cafe-mocha",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "เลือกสไตล์ที่ใช่",
      desc: "เลือกจาก เสื้อผ้าแฟชั่นผู้หญิง เสื้อครอป หรือเสื้อผ้าไปคาเฟ่ ที่เข้ากับบุคลิกของคุณ",
      icon: FaCommentDots,
      bgColor: "cafe-sage",
      textColor: "text-white",
    },
    {
      step: "02", 
      title: "สั่งซื้อง่าย ๆ",
      desc: "แชทไลน์หรือโทรสอบถาม ทีมงานมืออาชีพดูแลและให้คำแนะนำตัวต่อตัว",
      icon: FaPalette,
      bgColor: "cafe-coffee",
      textColor: "text-white",
    },
    {
      step: "03",
      title: "จัดส่งรวดเร็ว",
      desc: "บรรจุอย่างประณีต จัดส่งฟรีทั่วไทย ได้ของภายใน 24-48 ชั่วโมง",
      icon: FaBox,
      bgColor: "cafe-copper",
      textColor: "text-white",
    },
    {
      step: "04",
      title: "ใส่แล้วปัง!",
      desc: "มั่นใจในทุกการแต่งตัว ถ่ายรูปสวย รับคำชม และสร้างความประทับใจได้ทุกที่",
      icon: FaShippingFast,
      bgColor: "cafe-gold",
      textColor: "text-cafe-espresso",
    },
  ];

  return (
    <section className="py-20 cafe-section-bg relative overflow-hidden">
      {/* Cafe Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ background: 'var(--cafe-gold)' }}></div>
        <div className="absolute top-32 right-20 w-16 h-16 rounded-full" style={{ background: 'var(--cafe-copper)' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ background: 'var(--cafe-sage)' }}></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full" style={{ background: 'var(--cafe-terracotta)' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="cafe-icon-box w-20 h-20 mx-auto mb-8 cafe-animate-glow">
              <FaTshirt className="w-10 h-10" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold cafe-heading-primary mb-6 leading-tight text-balance">
              CafeWearTH - เสื้อผ้าแฟชั่นผู้หญิง 
              <span className="block cafe-text-secondary text-3xl sm:text-4xl lg:text-5xl mt-2">
                สไตล์คาเฟ่ • ทรงสวย • ถ่ายรูปปัง
              </span>
            </h2>
            <div className="w-32 h-1.5 mx-auto rounded-full mb-8" style={{ background: 'linear-gradient(90deg, var(--cafe-gold), var(--cafe-copper))' }}></div>
            <p className="text-xl cafe-text-muted max-w-4xl mx-auto leading-relaxed">
              ร้าน <strong className="cafe-text-secondary">เสื้อผ้าแฟชั่นผู้หญิง</strong> สไตล์คาเฟ่มินิมอล 
              ที่รวม <strong className="cafe-text-secondary">เสื้อผ้าไปคาเฟ่</strong> และ <strong className="cafe-text-secondary">เสื้อครอป</strong> 
              ทรงสวย ใส่สบาย ถ่ายรูปปังทุกองศา!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main SEO Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="cafe-card p-8 hover-lift cafe-animate-float">
                <div className="flex items-center mb-6">
                  <div className="cafe-icon-box w-14 h-14 mr-4 cafe-animate-glow">
                    <FaCheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold cafe-heading-primary">
                    ทำไมต้อง CafeWearTH? 
                    <span className="cafe-text-secondary block text-lg mt-1">เสื้อผ้าแฟชั่นสไตล์คาเฟ่ที่ใช่ที่สุด</span>
                  </h3>
                </div>
                <div className="space-y-4 cafe-text-body leading-relaxed">
                  <p className="text-lg">
                    <strong>CafeWearTH</strong> เป็นร้าน
                    <strong className="cafe-text-secondary"> เสื้อผ้าแฟชั่นผู้หญิง</strong> ที่เชี่ยวชาญเรื่องลุคไปคาเฟ่! 
                    เรา<strong className="cafe-text-secondary"> คัดสรรเสื้อผ้าไปคาเฟ่</strong> ที่ทำให้คุณดูดีและถ่ายรูปสวยทุกมุม
                  </p>
                  <p>
                    พิเศษที่ <strong className="cafe-text-secondary">เสื้อครอปผู้หญิง</strong> ทรงสวย เข้ารูป 
                    และ <strong className="cafe-text-secondary">เสื้อครอปผู้ชาย</strong> unisex style 
                    ที่คู่รักใส่คู่กันได้อย่างเก๋! ผลิตจากผ้าคุณภาพพรีเมียม ใส่สบาย ไม่ระคายผิว
                  </p>
                  <p>
                    คอลเลคชั่น<strong className="cafe-text-secondary"> เสื้อผ้าแฟชั่น</strong>หลากสไตล์ 
                    จาก Vintage แนวคลาสสิค, Streetwear สุดเท่, Oversized ใส่สบาย 
                    จนถึงสไตล์เกาหลีแท้ ด้วยราคาที่คุ้มค่าและจับต้องได้!
                  </p>
                  <div className="mt-6 p-5 rounded-xl cafe-animate-glow" style={{ background: 'linear-gradient(135deg, var(--cafe-beige), var(--cafe-light-brown))' }}>
                    <p className="cafe-text-secondary font-bold text-center">
                      โปรโมชั่นพิเศษ! ลูกค้าใหม่ลด 15% เมื่อซื้อครบ 799 บาท 
                      <br/>
                      <span className="text-sm">+ ส่งฟรีทั่วไทย + รับประกันคุณภาพ 30 วัน</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="cafe-card p-6 text-center hover-lift cafe-animate-float relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute inset-0 opacity-10" style={{ background: `linear-gradient(135deg, var(--${stat.gradientFrom}), var(--${stat.gradientTo}))` }}></div>
                    <div className="relative z-10">
                      <div className="flex justify-center mb-3">
                        <div className="p-2 rounded-lg" style={{ background: `linear-gradient(135deg, var(--${stat.gradientFrom}), var(--${stat.gradientTo}))` }}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-3xl font-bold cafe-heading-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm cafe-text-secondary font-semibold mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs cafe-text-muted">
                        {stat.sublabel}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Highlights */}
              <div className="cafe-card p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="cafe-icon-box w-12 h-12 mr-3">
                    <MdDesignServices className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold cafe-heading-primary">
                    คอลเลคชั่นสุดพิเศษ
                    <span className="cafe-text-secondary block text-base mt-1">เสื้อผ้าแฟชั่นทุกสไตล์ที่คุณต้องการ</span>
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="group relative p-5 rounded-xl transition-all duration-300 hover:scale-105"
                      style={{ background: `linear-gradient(135deg, var(--${service.gradientFrom}), var(--${service.gradientTo}))` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2 text-lg">
                            {service.title}
                          </h4>
                          <p className="text-white/90 text-sm leading-relaxed">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Guarantee */}
              <div className="relative overflow-hidden rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, var(--cafe-espresso) 0%, var(--cafe-mocha) 100%)' }}>
                <div className="absolute top-0 right-0 opacity-10">
                  <FaTrophy className="w-32 h-32 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full" style={{ background: 'var(--cafe-gold)', opacity: 0.1 }}></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl" style={{ background: 'var(--cafe-gold)' }}>
                      <FaCertificate className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-2xl font-bold text-white">รับประกันความพึงพอใจ</h4>
                      <p className="text-white/80">100% หรือคืนเงิน!</p>
                    </div>
                  </div>
                  <p className="text-white/90 mb-6 text-lg">
                    เราใส่ใจทุกรายละเอียด ตั้งแต่คุณภาพผ้า การออกแบบ จนถึงการบริการ 
                    เพราะความสุขของคุณคือความสำเร็จของเรา!
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <FaCheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--cafe-gold)' }} />
                      <div className="text-white font-semibold">ผ้าคุณภาพพรีเมียม</div>
                      <div className="text-white/70 text-xs mt-1">นิ่ม ใส่สบาย</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <FaCheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--cafe-gold)' }} />
                      <div className="text-white font-semibold">สีสันสวยงาม</div>
                      <div className="text-white/70 text-xs mt-1">ไม่ตก ไม่ซีด</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                      <FaCheckCircle className="w-8 h-8 mx-auto mb-2" style={{ color: 'var(--cafe-gold)' }} />
                      <div className="text-white font-semibold">ทนทานยาวนาน</div>
                      <div className="text-white/70 text-xs mt-1">ซักได้เรื่อย ๆ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Process & Additional Info */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Process Section */}
              <div className="cafe-card p-8 hover-lift">
                <div className="flex items-center mb-8">
                  <div className="cafe-icon-box w-12 h-12 mr-3">
                    <FaClock className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold cafe-heading-primary">
                    ช้อปง่าย ได้ของเร็ว
                    <span className="cafe-text-secondary block text-base mt-1">เพียง 4 ขั้นตอนสู่ลุคใหม่ที่สวยกว่าเดิม</span>
                  </h3>
                </div>
                <div className="space-y-6">
                  {processSteps.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-5 rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                      style={{ background: 'var(--cafe-warm-white)' }}
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: `var(--${item.bgColor})` }}></div>
                      <div
                        className={`relative z-10 w-14 h-14 rounded-xl flex items-center justify-center font-bold transition-all duration-300 group-hover:scale-110`}
                        style={{ background: `var(--${item.bgColor})` }}
                      >
                        <item.icon className={`w-6 h-6 ${item.textColor}`} />
                      </div>
                      <div className="relative z-10 flex-1">
                        <div className="flex items-center mb-2">
                          <div 
                            className="text-sm font-bold px-2 py-1 rounded-full mr-2"
                            style={{ background: `var(--${item.bgColor})`, color: item.textColor === 'text-white' ? 'white' : 'var(--cafe-espresso)' }}
                          >
                            {item.step}
                          </div>
                          <h4 className="font-bold cafe-heading-secondary text-lg">
                            {item.title}
                          </h4>
                        </div>
                        <p className="cafe-text-muted leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="relative overflow-hidden rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, var(--cafe-coffee) 0%, var(--cafe-espresso) 100%)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="w-16 h-16 rounded-full" style={{ background: 'var(--cafe-gold)' }}></div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <div className="w-12 h-12 rounded-full" style={{ background: 'var(--cafe-copper)' }}></div>
                </div>
                <div className="relative z-10">
                  <div className="cafe-icon-box w-20 h-20 mx-auto mb-6 cafe-animate-glow">
                    <FaTshirt className="w-10 h-10" />
                  </div>
                  <h4 className="text-3xl font-bold mb-4 text-white">
                    พร้อมเป็น
                    <span className="block text-2xl mt-2" style={{ color: 'var(--cafe-gold)' }}>
                      "สาวมั่นสไตล์คาเฟ่" แล้วหรือยัง?
                    </span>
                  </h4>
                  <p className="text-white/90 mb-8 text-lg max-w-md mx-auto leading-relaxed">
                    เริ่มต้นลุคใหม่ที่สวยกว่าเดิม แชทเลยเพื่อรับคำแนะนำสไตล์ฟรี! 
                    พร้อมส่วนลดพิเศษสำหรับสมาชิกใหม่
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Link
                      href="tel:+66624977952"
                      className="cafe-button-secondary flex items-center justify-center text-lg font-semibold hover:scale-105 transition-transform"
                    >
                      <FaPhoneAlt className="w-5 h-5 mr-2" />
                      โทรเลย!
                    </Link>
                    <Link
                      href="https://line.me/ti/p/@cafewearth"
                      className="flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                      style={{ background: 'var(--cafe-sage)', color: 'white' }}
                    >
                      <FaCommentDots className="w-5 h-5 mr-2" />
                      แชท LINE
                    </Link>
                  </div>
                  <p className="text-white/70 text-sm mt-4">
                    ตอบกลับเร็ว ภายใน 5 นาที | ส่งฟรีทั่วไทย
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedSEOContentSection;
