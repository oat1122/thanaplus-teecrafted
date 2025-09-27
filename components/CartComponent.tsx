'use client';

import React, { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, X, Plus, Minus, Copy, MessageCircle, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CopyFallbackModal from './CopyFallbackModal';

const CartComponent = () => {
  const [copied, setCopied] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
    generateOrderCode,
  } = useCart();
  // Only render after first mount to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);
  // Create a style tag for custom scrollbar on mobile and laptop
  useEffect(() => {
    if (!mounted) return; // Only run this after component is mounted

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      /* Mobile scrollbar styles */
      @media (max-width: 768px) {
        .cart-scroll-container {
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        .cart-scroll-container::-webkit-scrollbar {
          width: 4px;
        }
        .cart-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
      }
      
      /* Laptop scrollbar styles */
      @media (min-width: 769px) {
        .cart-scroll-container {
          max-height: calc(100vh - 64px - 250px); /* Adjust height to show more products */
          scrollbar-width: thin;
          overscroll-behavior: contain;
        }
        .cart-scroll-container::-webkit-scrollbar {
          width: 5px;
        }
        .cart-scroll-container::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.03);
        }
        .cart-scroll-container::-webkit-scrollbar-thumb {
          background-color: rgba(0,0,0,0.15);
          border-radius: 8px;
          transition: background-color 0.3s ease;
        }
        .cart-scroll-container::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0,0,0,0.3);
        }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, [mounted]);

  // Handle copy order code to clipboard
  const copyOrderCode = async () => {
    try {
      const { copyToClipboard } = await import('@/utils/clipboard');
      await copyToClipboard(generateOrderCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Show fallback modal instead of alert
      setShowFallbackModal(true);
    }
  };

  // Open LINE with order code
  const openLineWithOrder = () => {
    const orderCode = generateOrderCode();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(orderCode)}`;
    window.open(lineUrl, '_blank');
  };

  // If not yet mounted, don't render anything to avoid hydration errors
  if (!mounted) return null;

  return (
    <>
      {/* Fallback Copy Modal */}
      <CopyFallbackModal
        isOpen={showFallbackModal}
        onClose={() => setShowFallbackModal(false)}
        text={generateOrderCode()}
        title="คัดลอกโค้ดสั่งซื้อ"
      />
      {/* Floating Cart Button */}{' '}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
        aria-label="ตะกร้าสินค้า"
      >
        <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
        {getCartItemCount() > 0 && (
          <span className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-md animate-pulse">
            {getCartItemCount()}
          </span>
        )}
      </button>
      {/* Cart Sidebar */}{' '}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-700/70 via-gray-900/70 to-black/70 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          ></div>{' '}
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white shadow-2xl transform transition-all duration-300 ease-in-out border-l border-gray-100 flex flex-col">
            <div className="flex flex-col h-full overflow-hidden">
              {/* Header */}
              <div className="py-3 px-4 sm:py-4 sm:px-5 border-b border-gray-100 flex justify-between items-center bg-white backdrop-blur-sm sticky top-0 z-10">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2.5 text-gray-700 flex-shrink-0" />
                  <div>
                    <h2 className="font-semibold text-lg text-gray-800">ตะกร้าสินค้า</h2>
                    {getCartItemCount() > 0 && (
                      <p className="text-xs text-gray-500 mt-0.5">{getCartItemCount()} รายการ</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                  aria-label="ปิด"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-3 sm:p-4 -webkit-overflow-scrolling-touch cart-scroll-container">
                {cartItems.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    {' '}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                      ตะกร้าของคุณว่างเปล่า
                    </h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">
                      ลองเลือกซื้อสินค้าที่คุณชื่นชอบ
                    </p>
                    <Link
                      href="/collection"
                      className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      เลือกซื้อสินค้า
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3 py-2">
                    {' '}
                    {cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.size || 'default'}-${item.color || 'default'}`}
                        className="flex border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        {' '}
                        {/* Image */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                            className="bg-gray-50"
                          />
                        </div>{' '}
                        {/* Details */}
                        <div className="flex-1 p-2 sm:p-3 md:p-4 flex flex-col">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-900 line-clamp-2 text-sm sm:text-base">
                              {item.name}
                            </h3>{' '}
                            <button
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="text-gray-400 hover:text-red-500 transition-colors ml-1"
                              aria-label="ลบรายการ"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>{' '}
                          <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2 mt-0.5 sm:mt-1 flex flex-wrap gap-1 sm:gap-2">
                            {item.size && (
                              <span className="inline-flex items-center bg-gray-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium">
                                ขนาด: {item.size}
                              </span>
                            )}
                            {item.color && (
                              <span className="inline-flex items-center bg-gray-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md text-xs font-medium">
                                สี: {item.color}
                              </span>
                            )}
                          </div>{' '}
                          <div className="mt-auto flex flex-row justify-between items-center">
                            <div className="flex items-center border rounded-lg shadow-sm overflow-hidden w-fit">
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(1, item.quantity - 1),
                                    item.size,
                                    item.color
                                  )
                                }
                                className="p-1 sm:p-1.5 bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="ลดจำนวน"
                              >
                                <Minus className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              </button>
                              <span className="px-1.5 sm:px-2 md:px-3 font-medium text-gray-800 bg-white text-xs sm:text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1, item.size, item.color)
                                }
                                className="p-1 sm:p-1.5 bg-white hover:bg-gray-50 text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="เพิ่มจำนวน"
                              >
                                <Plus className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              </button>
                            </div>
                            <div className="font-semibold bg-gray-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-gray-800 text-xs sm:text-sm md:text-base">
                              ฿{(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>{' '}
              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t border-gray-100 p-3 sm:p-4 md:p-5 space-y-3 bg-white flex-shrink-0">
                  {/* Total */}
                  <div className="flex justify-between items-center bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-gray-50">
                    <div>
                      <span className="font-semibold text-sm sm:text-base text-gray-800">
                        รวมทั้งสิ้น
                      </span>
                      <p className="text-xs text-gray-500 mt-0.5">
                        สินค้า {getCartItemCount()} รายการ
                      </p>
                    </div>
                    <span className="font-bold text-base sm:text-lg md:text-xl text-gray-900">
                      ฿{getCartTotal().toLocaleString()}
                    </span>
                  </div>{' '}
                  {/* Order Code Section */}{' '}
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm sm:text-base">
                      <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-blue-500" />
                      โค้ดสั่งซื้อ:
                    </h4>
                    <p className="text-xs text-blue-600 mb-2">
                      คัดลอกโค้ดนี้แล้วแอดไลน์ <strong>@teecrafted</strong> เพื่อส่งคำสั่งซื้อ
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-inner">
                      <pre className="whitespace-pre-wrap text-gray-700 max-h-24 sm:max-h-32 overflow-y-auto text-xs leading-relaxed">
                        {generateOrderCode()}
                      </pre>
                    </div>
                  </div>{' '}
                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <button
                      onClick={copyOrderCode}
                      className="bg-blue-500 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-blue-600 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-1.5 sm:space-x-2"
                    >
                      <Copy className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกโค้ด'}</span>
                    </button>
                    <button
                      onClick={openLineWithOrder}
                      className="bg-green-500 text-white py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-green-600 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-1.5 sm:space-x-2"
                    >
                      {' '}
                      <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>เปิด LINE พร้อมข้อความสั่งซื้อ</span>
                    </button>
                  </div>
                  {/* Clear Cart */}
                  <button
                    onClick={clearCart}
                    className="w-full border border-gray-200 text-gray-600 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1.5 sm:space-x-2"
                  >
                    <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>ล้างตะกร้า</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartComponent;
