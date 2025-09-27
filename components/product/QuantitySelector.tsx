import React from 'react';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">จำนวน</h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={onDecrease}
          className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="ลดจำนวน"
        >
          -
        </button>
        <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
        <button
          onClick={onIncrease}
          className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="เพิ่มจำนวน"
        >
          +
        </button>
      </div>
    </div>
  );
};
