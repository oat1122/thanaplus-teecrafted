"use client";

import Link from "next/link";
import TShirtViewer from "./TShirtViewer";

const Hero = () => {
  return (
    <section className="relative cafe-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold cafe-heading-primary leading-tight mb-6 text-balance">
              เสื้อสกรีน
              <span className="block cafe-text-secondary">คุณภาพสูง</span>
            </h1>
            <p className="text-xl cafe-text-muted mb-8 leading-relaxed text-balance">
              ดีไซน์ล่าสุด วัสดุพรีเมียม สกรีนคมชัด ส่งฟรีทั่วประเทศ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/collection" className="cafe-button-primary text-lg shadow-sm">
                ช้อปเลย
              </Link>
              <Link href="/collection" className="cafe-button-secondary text-lg">
                ดูสินค้าทั้งหมด
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <TShirtViewer className="mx-auto w-full max-w-[880px] sm:max-w-[760px] md:max-w-[820px] lg:max-w-[880px] cafe-animate-float" />
            {/* พื้นหลังประกอบ (ไม่ใช่เงา 3D) */}
            <div className="pointer-events-none absolute -inset-6 sm:-inset-8 rotate-6 opacity-30 -z-10">
              <div className="h-full w-full rounded-3xl shadow-inner" style={{ background: 'var(--cafe-beige)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
