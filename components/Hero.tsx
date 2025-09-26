import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              เสื้อสกรีน
              <span className="block text-slate-600">คุณภาพสูง</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed text-balance">
              ดีไซน์ล่าสุด วัสดุพรีเมียม สกรีนคมชัด ส่งฟรีทั่วประเทศ
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/collection"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors duration-200 text-lg shadow-sm"
              >
                ช้อปเลย
              </Link>
              <Link
                href="/collection"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 text-lg"
              >
                ดูสินค้าทั้งหมด
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Featured T-shirt"
                width={800}
                height={600}
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-6 scale-95 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
