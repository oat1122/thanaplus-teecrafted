import React from 'react';
import { ShoppingCart, Heart, Check, MessageCircle } from 'lucide-react';

interface ActionButtonsProps {
  onGenerateOrderCode: () => void;
  onAddToCart: () => void;
  onOpenLine: () => void;
  addedToCart: boolean;
  showOrderCode: boolean;
  isValidSelection: boolean;
}

export const ActionButtons = ({
  onGenerateOrderCode,
  onAddToCart,
  onOpenLine,
  addedToCart,
  showOrderCode,
  isValidSelection,
}: ActionButtonsProps) => {
  return (
    <div className="space-y-4">
      {/* Main Order Code Button */}
      <button
        onClick={onGenerateOrderCode}
        className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
      >
        <ShoppingCart className="h-5 w-5" />
        <span>สร้างโค้ดสั่งซื้อ</span>
      </button>

      {/* Action buttons when order code is shown and selection is valid */}
      {showOrderCode && isValidSelection && (
        <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2">
          <button
            onClick={onAddToCart}
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
          </button>

          <button
            onClick={onOpenLine}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all shadow-sm hover:shadow flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>เปิด LINE พร้อมข้อความสั่งซื้อ</span>
          </button>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="w-full border-2 border-gray-300 text-gray-700 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 transition-colors flex items-center justify-center space-x-2">
        <Heart className="h-5 w-5" />
        <span>เพิ่มลงรายการโปรด</span>
      </button>
    </div>
  );
};
