"use client";

import Link from "next/link";
import TShirtViewer from "./TShirtViewer";

const Hero = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              เสื้อสกรีน
              <span className="block text-slate-600">คุณภาพสูง</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-balance">
              ดีไซน์ล่าสุด วัสดุพรีเมียม สกรีนคมชัด ส่งฟรีทั่วประเทศ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/collection" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 text-lg shadow-sm">
                ช้อปเลย
              </Link>
              <Link href="/collection" className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 text-lg">
                ดูสินค้าทั้งหมด
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl shadow-xl ring-1 ring-black/5 bg-white/60 backdrop-blur-sm p-4 sm:p-5">
              {/* ขยาย max-width เพื่อให้ 3D ใหญ่ขึ้นในกรอบ */}
              <TShirtViewer className="mx-auto w-full max-w-[880px] sm:max-w-[760px] md:max-w-[820px] lg:max-w-[880px] rounded-2xl" />
            </div>
            {/* พื้นหลังประกอบ (ไม่ใช่เงา 3D) */}
            <div className="pointer-events-none absolute -inset-6 sm:-inset-8 rotate-6 opacity-30 -z-10">
              <div className="h-full w-full bg-slate-100 rounded-3xl shadow-inner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
