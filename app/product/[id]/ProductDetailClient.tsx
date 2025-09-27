'use client';

import { useState } from 'react';
import {
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
  Copy,
  MessageCircle,
  Check,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';
import CopyFallbackModal from '@/components/CopyFallbackModal';

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showOrderCode, setShowOrderCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);
  const { addToCart } = useCart();

  // Generate LINE order code
  const generateOrderCode = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const orderCode = `สั่งซื้อ: ${product.name}
ขนาด: ${selectedSize || 'ยังไม่เลือก'}
สี: ${selectedColor || 'ยังไม่เลือก'}
จำนวน: ${quantity} ตัว
ราคา: ฿${product.price.toLocaleString()} x ${quantity} = ฿${(
      product.price * quantity
    ).toLocaleString()}
รวม: ฿${(product.price * quantity).toLocaleString()}

#สั่งซื้อ #TeeCrafted
Link: ${baseUrl}/product/${product.id}`;
    return orderCode;
  }; // Copy to clipboard
  const copyOrderCode = async () => {
    try {
      const { copyToClipboard } = await import('@/utils/clipboard');
      await copyToClipboard(generateOrderCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setShowFallbackModal(true);
    }
  };

  // Open LINE with order code
  const openLineWithOrder = () => {
    const orderCode = generateOrderCode();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(orderCode)}`;
    window.open(lineUrl, '_blank');
  };
  return (
    <div className="space-y-6">
      {/* Fallback Copy Modal */}
      <CopyFallbackModal
        isOpen={showFallbackModal}
        onClose={() => setShowFallbackModal(false)}
        text={generateOrderCode()}
        title="คัดลอกโค้ดสั่งซื้อ"
      />

      <div>
        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-2">
          {product.category}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>{' '}
        <p className="text-lg text-gray-600 leading-relaxed">
          {product.description || 'รายละเอียดสินค้า'}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        <span className="text-3xl font-bold text-gray-900">฿{product.price.toLocaleString()}</span>
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
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
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
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 text-gray-700 hover:border-gray-400'
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
          <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
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
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4" role="alert">
            <p className="text-yellow-800 text-sm">กรุณาเลือกขนาดและสีก่อนสร้างโค้ดสั่งซื้อ</p>
          </div>
        )}{' '}
        <button
          onClick={() => {
            if (selectedSize && selectedColor) {
              // Only show order code, don't add to cart
              setShowOrderCode(!showOrderCode);
            } else {
              setShowOrderCode(true);
            }
          }}
          className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>สร้างโค้ดสั่งซื้อ</span>
        </button>
        {showOrderCode && selectedSize && selectedColor && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-3 sm:p-4 space-y-3 sm:space-y-4 shadow-sm">
            {' '}
            <h4 className="font-semibold text-gray-900 flex items-center">
              <Copy className="h-4 w-4 mr-2 opacity-70" />
              โค้ดสั่งซื้อ LINE:
            </h4>
            <p className="text-xs text-blue-600 mb-2">
              คัดลอกโค้ดนี้แล้วแอดไลน์ <strong>@teecrafted</strong> เพื่อส่งคำสั่งซื้อ
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-100 shadow-inner text-sm">
              <pre className="whitespace-pre-wrap text-gray-700 max-h-48 overflow-y-auto text-xs sm:text-sm">
                {generateOrderCode()}
              </pre>
            </div>
            <div className="flex justify-end mt-2">
              <button
                onClick={copyOrderCode}
                className="bg-gray-200 text-gray-800 py-2 px-3 rounded-lg text-xs sm:text-sm hover:bg-gray-300 transition-colors flex items-center space-x-1"
              >
                <Copy className="h-3 w-3" />
                <span>{copied ? 'คัดลอกแล้ว!' : 'คัดลอกโค้ด'}</span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
              <button
                onClick={() => {
                  if (selectedSize && selectedColor) {
                    // Add to cart with replaceQuantity=true to replace existing item quantity
                    addToCart(product, quantity, selectedSize, selectedColor, true);
                    setAddedToCart(true);
                    setTimeout(() => setAddedToCart(false), 2000);
                  }
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>เพิ่มลงตะกร้าแล้ว!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    <span>เพิ่มลงตะกร้า</span>
                  </>
                )}
              </button>{' '}
              <button
                onClick={openLineWithOrder}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>เปิด LINE พร้อมข้อความสั่งซื้อ</span>
              </button>
            </div>
          </div>
        )}
        <button className="w-full border-2 border-gray-300 text-gray-700 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
          <Heart className="h-5 w-5" />
          <span>เพิ่มลงรายการโปรด</span>
        </button>
      </div>

      {/* Product Features */}
      <div className="border-t pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
            <Truck className="h-5 w-5 text-gray-600 flex-shrink-0" />
            <span className="text-sm text-gray-600">ส่งฟรีทั่วประเทศ</span>
          </div>
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
            <Shield className="h-5 w-5 text-gray-600 flex-shrink-0" />
            <span className="text-sm text-gray-600">รับประกันคุณภาพ</span>
          </div>
          <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
            <RotateCcw className="h-5 w-5 text-gray-600 flex-shrink-0" />
            <span className="text-sm text-gray-600">เปลี่ยน-คืนได้ 7 วัน</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailClient;
