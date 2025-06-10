import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            TeeCrafted
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              หน้าแรก
            </Link>
            <Link
              href="/collection"
              className="text-gray-700 hover:text-gray-900"
            >
              สินค้าทั้งหมด
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              เกี่ยวกับเรา
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              ติดต่อเรา
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>

            <button className="md:hidden p-2 text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
