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
import { MdDesignServices, MdLocalShipping } from "react-icons/md";

const EnhancedSEOContentSection = () => {
  const services = [
    {
      title: "เสื้อยืดโรงเรียน",
      desc: "รับสกรีนโลโก้โรงเรียน ตราสัญลักษณ์ ขั้นต่ำ 20 ตัว",
      icon: FaSchool,
      color: "text-slate-600",
    },
    {
      title: "เสื้อยืดบริษัท",
      desc: "เครื่องแบบพนักงาน โลโก้บริษัท สีและขนาดครบ",
      icon: FaBuilding,
      color: "text-slate-600",
    },
    {
      title: "เสื้อยืดองค์กร",
      desc: "สำหรับกิจกรรมองค์กร อีเวนต์ ประชุม เซมินาร์",
      icon: FaUniversity,
      color: "text-slate-600",
    },
    {
      title: "เสื้อยืดกิจกรรม",
      desc: "งานวิ่ง คอนเสิร์ต เทศกาล งานแต่งงาน",
      icon: FaCalendarAlt,
      color: "text-slate-600",
    },
  ];

  const stats = [
    {
      number: "10+",
      label: "ปีประสบการณ์",
      sublabel: "ขายส่งเสื้อยืด",
      icon: BiStats,
    },
    {
      number: "5000+",
      label: "ลูกค้าพึงพอใจ",
      sublabel: "ขายเสื้อยืดจำนวนมาก",
      icon: FaUsers,
    },
    {
      number: "99฿",
      label: "ราคาเริ่มต้น",
      sublabel: "เสื้อยืดขายส่ง",
      icon: FaDollarSign,
    },
    {
      number: "24ชม",
      label: "ตอบกลับเร็ว",
      sublabel: "ใบเสนอราคา",
      icon: BiSupport,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "สอบถามและปรึกษา",
      desc: "แจ้งความต้องการ รับใบเสนอราคาฟรี",
      icon: FaCommentDots,
      bgColor: "bg-slate-100",
    },
    {
      step: "02",
      title: "เลือกแบบและสี",
      desc: "เลือกจากแบบที่มี หรือให้เราออกแบบให้",
      icon: FaPalette,
      bgColor: "bg-gray-800",
    },
    {
      step: "03",
      title: "ยืนยันคำสั่งซื้อ",
      desc: "ตรวจสอบรายละเอียด วันส่งของ",
      icon: FaBox,
      bgColor: "bg-slate-100",
    },
    {
      step: "04",
      title: "ผลิตและจัดส่ง",
      desc: "ผลิตตามคุณภาพมาตรฐาน จัดส่งตรงเวลา",
      icon: FaShippingFast,
      bgColor: "bg-slate-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Minimal Background Pattern */}
      <div className="absolute inset-0 bg-minimal-pattern opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-md mb-6">
              <FaTshirt className="w-8 h-8 text-slate-600" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              ขายส่งเสื้อยืด ผู้เชี่ยวชาญด้านเสื้อสกรีนจำนวนมาก
            </h2>
            <div className="w-24 h-1 bg-slate-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              บริการครบวงจรสำหรับการ
              <strong className="text-slate-700">ขายเสื้อยืดจำนวนมาก</strong>
              และ<strong className="text-slate-700">ขายส่งเสื้อสกรีน</strong>
              คุณภาพสูง ราคาส่งพิเศษ
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main SEO Content */}
            <div className="space-y-8 animate-slide-in">
              <div className="card-minimal p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center mr-4">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    ทำไมต้องเลือก TeeCrafted สำหรับ
                    <span className="text-slate-600">ขายส่งเสื้อยืด</span>?
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>TeeCrafted</strong> เป็นผู้นำด้าน
                    <strong className="text-slate-700">ขายส่งเสื้อยืด</strong>
                    และ
                    <strong className="text-slate-700">ขายส่งเสื้อสกรีน</strong>
                    ที่มีประสบการณ์กว่า 10 ปี ในอุตสาหกรรมเสื้อผ้า
                    เราเชี่ยวชาญในการให้บริการ
                    <strong className="text-slate-700">
                      ขายเสื้อยืดจำนวนมาก
                    </strong>
                    สำหรับลูกค้าองค์กร บริษัท โรงเรียน และหน่วยงานต่างๆ
                  </p>
                  <p>
                    การ
                    <strong className="text-slate-700">ขายส่งเสื้อยืด</strong>
                    ของเราครอบคลุมทุกความต้องการ ตั้งแต่เสื้อยืดเปล่า
                    เสื้อยืดสกรีน ไปจนถึงเสื้อยืดปักโลโก้
                    ด้วยคุณภาพผ้าที่ได้มาตรฐานสากล
                    และเทคโนโลยีการพิมพ์ที่ทันสมัย
                  </p>
                  <p>
                    เรามี
                    <strong className="text-slate-700">
                      ขายเสื้อยืดจำนวนมาก
                    </strong>
                    พร้อมส่ง กว่า 50 สี และรับออกแบบตามความต้องการของลูกค้า
                    พร้อมทีมงานมืออาชีพที่คอยให้คำปรึกษา ตั้งแต่การเลือกผ้า
                    การออกแบบ ไปจนถึงการจัดส่ง
                  </p>
                </div>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="card-minimal p-6 text-center hover-lift"
                  >
                    <div className="flex justify-center mb-3">
                      <stat.icon className="w-8 h-8 text-slate-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Highlights */}
              <div className="card-minimal p-8">
                <div className="flex items-center mb-6">
                  <MdDesignServices className="w-8 h-8 text-slate-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    บริการเด่นสำหรับ
                    <span className="text-slate-600">ขายส่งเสื้อยืด</span>
                  </h3>
                </div>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Guarantee */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10">
                  <FaTrophy className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <FaCertificate className="w-8 h-8 text-white mr-3" />
                    <h4 className="text-2xl font-bold">รับประกันคุณภาพ 100%</h4>
                  </div>
                  <p className="text-gray-300 mb-6">
                    สินค้าไม่ตรงตามข้อตกลง เราคืนเงิน 100%
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <FaCheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                      <div className="text-sm">คุณภาพผ้าดี</div>
                    </div>
                    <div>
                      <FaCheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                      <div className="text-sm">สีไม่ตก ไม่ซีด</div>
                    </div>
                    <div>
                      <FaCheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                      <div className="text-sm">ทนการซัก</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Process & Additional Info */}
            <div className="space-y-8 animate-fade-in-up">
              {/* Process Section */}
              <div className="card-minimal p-8">
                <div className="flex items-center mb-8">
                  <FaClock className="w-8 h-8 text-slate-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    ขั้นตอนการ
                    <span className="text-slate-600">ขายส่งเสื้อยืด</span>
                  </h3>
                </div>
                <div className="space-y-6">
                  {processSteps.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center text-white font-bold`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gray-900 text-white rounded-2xl p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaTshirt className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    พร้อมเริ่มต้น
                    <span className="text-slate-300">ขายส่งเสื้อยืด</span>
                    แล้วหรือยัง?
                  </h4>
                  <p className="text-gray-300 mb-6">
                    รับใบเสนอราคาฟรี ไม่มีขั้นต่ำ ปรึกษาได้ 24 ชั่วโมง
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="tel:+66624977952"
                      className="btn-minimal bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center justify-center"
                    >
                      <FaPhoneAlt className="w-4 h-4 mr-2" />
                      สอบถามทาง Line
                    </Link>
                    <Link
                      href="https://line.me/ti/p/@teecrafted"
                      className="btn-minimal bg-slate-600 text-white hover:bg-slate-700 border-2 border-slate-600 inline-flex items-center justify-center"
                    >
                      <FaCommentDots className="w-4 h-4 mr-2" />
                      โทรสอบถาม
                    </Link>
                  </div>
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
