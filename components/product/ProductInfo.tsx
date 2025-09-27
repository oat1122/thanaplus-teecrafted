import React from 'react';

interface ProductInfoProps {
  product: {
    category: string;
    name: string;
    description?: string;
    price: number;
  };
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div>
      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-2">
        {product.category}
      </span>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
      <p className="text-lg text-gray-600 leading-relaxed">
        {product.description || 'รายละเอียดสินค้า'}
      </p>
    </div>
  );
};
