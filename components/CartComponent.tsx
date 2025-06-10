"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Copy,
  MessageCircle,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CopyFallbackModal from "./CopyFallbackModal";

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
  }, []);// Handle copy order code to clipboard
  const copyOrderCode = async () => {
    try {
      const { copyToClipboard } = await import('@/utils/clipboard');
      await copyToClipboard(generateOrderCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Show fallback modal instead of alert
      setShowFallbackModal(true);
    }
  };

  // Open LINE with order code
  const openLineWithOrder = () => {
    const orderCode = generateOrderCode();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(
      orderCode
    )}`;
    window.open(lineUrl, "_blank");
  };  // If not yet mounted, don't render anything to avoid hydration errors
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
      
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-all"
        aria-label="ตะกร้าสินค้า"
      >
        <ShoppingCart className="h-6 w-6" />
        {getCartItemCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {getCartItemCount()}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsCartOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-all duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  ตะกร้าสินค้า
                  {getCartItemCount() > 0 && (
                    <span className="ml-2 bg-gray-100 text-gray-800 py-1 px-2 rounded-full text-sm">
                      {getCartItemCount()} รายการ
                    </span>
                  )}
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="ปิด"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-12 w-12 mx-auto text-gray-300" />
                    <p className="mt-4 text-gray-500">ไม่มีสินค้าในตะกร้า</p>
                    <Link
                      href="/collection"
                      className="mt-4 inline-block bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      เลือกซื้อสินค้า
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">                    {cartItems.map((item) => (
                      <div
                        key={`${item.id}-${item.size || 'default'}-${item.color || 'default'}`}
                        className="flex border rounded-lg overflow-hidden"
                      >
                        {/* Image */}
                        <div className="w-24 h-24 relative">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 96px, 96px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 p-3 flex flex-col">
                          <div className="flex justify-between">
                            <h3 className="font-medium text-gray-900">
                              {item.name}
                            </h3>                            <button
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="ลบรายการ"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>

                          <div className="text-sm text-gray-500 mb-2">
                            {item.size && (
                              <span className="mr-3">ขนาด: {item.size}</span>
                            )}
                            {item.color && <span>สี: {item.color}</span>}
                          </div>

                          <div className="mt-auto flex justify-between items-center">
                            <div className="flex items-center border rounded-lg">                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    Math.max(1, item.quantity - 1),
                                    item.size,
                                    item.color
                                  )
                                }
                                className="p-1 hover:bg-gray-100"
                                aria-label="ลดจำนวน"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-2">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  updateQuantity(
                                    item.id, 
                                    item.quantity + 1,
                                    item.size,
                                    item.color
                                  )
                                }
                                className="p-1 hover:bg-gray-100"
                                aria-label="เพิ่มจำนวน"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <div className="font-semibold">
                              ฿{(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {cartItems.length > 0 && (
                <div className="border-t p-4 space-y-4">
                  {/* Total */}
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">รวมทั้งสิ้น</span>
                    <span className="font-bold text-xl">
                      ฿{getCartTotal().toLocaleString()}
                    </span>
                  </div>

                  {/* Order Code Section */}
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      โค้ดสั่งซื้อ:
                    </h4>
                    <div className="bg-white rounded-lg p-3 border text-sm">
                      <pre className="whitespace-pre-wrap text-gray-700 max-h-48 overflow-y-auto">
                        {generateOrderCode()}
                      </pre>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={copyOrderCode}
                      className="bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied ? "คัดลอกแล้ว!" : "คัดลอกโค้ด"}</span>
                    </button>
                    <button
                      onClick={openLineWithOrder}
                      className="bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>เปิด LINE</span>
                    </button>
                  </div>

                  {/* Clear Cart */}
                  <button
                    onClick={clearCart}
                    className="w-full border border-red-300 text-red-600 py-2 rounded-lg font-medium hover:bg-red-50 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Trash2 className="h-4 w-4" />
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
