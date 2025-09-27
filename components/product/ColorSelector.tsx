import React from 'react';

interface ColorSelectorProps {
  colors?: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export const ColorSelector = ({ colors, selectedColor, onColorSelect }: ColorSelectorProps) => {
  if (!colors) return null;

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">สี</h3>
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onColorSelect(color)}
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
  );
};
