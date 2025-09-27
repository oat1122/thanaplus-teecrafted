import React from 'react';

interface ProductPriceProps {
  price: number;
}

export const ProductPrice = ({ price }: ProductPriceProps) => {
  return (
    <div className="flex items-center space-x-4">
      <span className="text-3xl font-bold text-gray-900">฿{price.toLocaleString()}</span>
    </div>
  );
};
