"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Copy,
  MessageCircle,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  sizes?: string[];
  colors?: string[];
}

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [showOrderCode, setShowOrderCode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate LINE order code
  const generateOrderCode = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const orderCode = `สั่งซื้อ: ${product.name}
ขนาด: ${selectedSize || "ยังไม่เลือก"}
สี: ${selectedColor || "ยังไม่เลือก"}
จำนวน: ${quantity} ตัว
ราคา: ฿${product.price.toLocaleString()} x ${quantity} = ฿${(
      product.price * quantity
    ).toLocaleString()}
รวม: ฿${(product.price * quantity).toLocaleString()}

#สั่งซื้อ #TeeCrafted
Link: ${baseUrl}/product/${product.id}`;
    return orderCode;
  };

  // Copy to clipboard
  const copyOrderCode = async () => {
    try {
      await navigator.clipboard.writeText(generateOrderCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  // Open LINE with order code
  const openLineWithOrder = () => {
    const orderCode = generateOrderCode();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(
      orderCode
    )}`;
    window.open(lineUrl, "_blank");
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-2">
          {product.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">
          ฿{product.price.toLocaleString()}
        </span>
      </div>

      {/* Size Selection */}
      {product.sizes && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">ขนาด</h3>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-3 border-2 rounded-lg font-medium transition-colors ${
                  selectedSize === size
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
                aria-pressed={selectedSize === size}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Selection */}
      {product.colors && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">สี</h3>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-6 py-3 border-2 rounded-lg font-medium transition-colors ${
                  selectedColor === color
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
                aria-pressed={selectedColor === color}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">จำนวน</h3>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="ลดจำนวน"
          >
            -
          </button>
          <span className="text-xl font-semibold w-12 text-center">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="เพิ่มจำนวน"
          >
            +
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        {/* Validation Message */}
        {(!selectedSize || !selectedColor) && showOrderCode && (
          <div
            className="bg-yellow-50 border border-yellow-200 rounded-lg p-4"
            role="alert"
          >
            <p className="text-yellow-800 text-sm">
              กรุณาเลือกขนาดและสีก่อนสร้างโค้ดสั่งซื้อ
            </p>
          </div>
        )}

        <button
          onClick={() => {
            if (selectedSize && selectedColor) {
              setShowOrderCode(!showOrderCode);
            } else {
              setShowOrderCode(true);
            }
          }}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>สร้างโค้ดสั่งซื้อ</span>
        </button>

        {showOrderCode && selectedSize && selectedColor && (
          <div className="bg-gray-50 rounded-xl p-4 space-y-4">
            <h4 className="font-semibold text-gray-900">โค้ดสั่งซื้อ LINE:</h4>
            <div className="bg-white rounded-lg p-4 border text-sm">
              <pre className="whitespace-pre-wrap text-gray-700">
                {generateOrderCode()}
              </pre>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={copyOrderCode}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Copy className="h-4 w-4" />
                <span>{copied ? "คัดลอกแล้ว!" : "คัดลอกโค้ด"}</span>
              </button>
              <button
                onClick={openLineWithOrder}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>เปิด LINE</span>
              </button>
            </div>
          </div>
        )}

        <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
          <Heart className="h-5 w-5" />
          <span>เพิ่มลงรายการโปรด</span>
        </button>
      </div>

      {/* Product Features */}
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Truck className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">ส่งฟรีทั่วประเทศ</span>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">รับประกันคุณภาพ</span>
          </div>
          <div className="flex items-center space-x-3">
            <RotateCcw className="h-5 w-5 text-gray-600" />
            <span className="text-sm text-gray-600">เปลี่ยน-คืนได้ 7 วัน</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
