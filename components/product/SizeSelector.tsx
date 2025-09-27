import React from 'react';

interface SizeSelectorProps {
  sizes?: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export const SizeSelector = ({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) => {
  if (!sizes) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">ขนาด</h3>
      <div className="flex flex-wrap gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
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
  );
};
