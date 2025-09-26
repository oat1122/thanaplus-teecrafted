"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingBag, FaBars, FaTshirt, FaHome, FaTshirt as FaTshirtAlt, FaInfoCircle, FaPhoneAlt, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

import useWindowSize from "@/hooks/useWindowSize";

const Header = () => {
  const { getCartItemCount, setIsCartOpen } = useCart();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useWindowSize();

  // Only render cart counter after first mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Close mobile menu when route changes, when clicked outside, or when screen size changes
  useEffect(() => {
    // Close menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    // Close menu when resizing to desktop
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    window.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen, isMobile]);

  return (
    <header className="border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1.5 sm:space-x-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-slate-600 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
              <FaTshirt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">TeeCrafted</span>
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
          </nav>          {/* Right side actions */}
          <div className="flex items-center space-x-2">            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 sm:p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors relative"
            >
              <FaShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              {mounted && getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-[10px] sm:text-xs font-bold">
                  {getCartItemCount()}
                </span>
              )}
            </button>            {/* Mobile menu button */}            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="md:hidden p-2 sm:p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              aria-label="เมนูมือถือ"
              aria-expanded={isMobileMenuOpen}
              data-mobile-menu
            >
              <FaBars className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
          {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-50 animate-slideDown"
            data-mobile-menu
          >
            <nav className="flex flex-col p-2">              <Link
                href="/"
                className="px-4 py-3 my-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <FaHome className="text-gray-700 w-4 h-4" />
                </span>
                หน้าแรก
              </Link>
              <Link
                href="/collection"
                className="px-4 py-3 my-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <FaTshirtAlt className="text-gray-700 w-4 h-4" />
                </span>
                สินค้าทั้งหมด
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 my-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <FaInfoCircle className="text-gray-700 w-4 h-4" />
                </span>
                เกี่ยวกับเรา
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 my-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <FaPhoneAlt className="text-gray-700 w-3.5 h-3.5" />
                </span>
                ติดต่อเรา
              </Link>
              <button
                onClick={() => {
                  setIsCartOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-3 my-1 text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all font-medium flex items-center"
              >
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3 shadow-sm">
                  <FaShoppingCart className="text-gray-700 w-4 h-4" />
                </span>
                ตะกร้าสินค้า
                {mounted && getCartItemCount() > 0 && (
                  <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                    {getCartItemCount()}
                  </span>
                )}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
