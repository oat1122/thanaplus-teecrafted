import React from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  featured?: boolean;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
              แนะนำ
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 font-medium text-lg">
            ฿{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
