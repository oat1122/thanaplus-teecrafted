import React from "react";
import Link from "next/link";
import { FaShoppingBag, FaBars, FaTshirt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
              <FaTshirt className="w-4 h-4 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">TeeCrafted</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link
              href="/"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              หน้าแรก
            </Link>
            <Link
              href="/collection"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              สินค้าทั้งหมด
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium"
            >
              ติดต่อเรา
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <button className="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <FaShoppingBag className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
