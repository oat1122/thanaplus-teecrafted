import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-2 left-2 bg-slate-900 text-white px-2 py-1 text-xs font-semibold rounded">
              แนะนำ
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-slate-700 transition-colors">
            {product.name}
          </h3>
          <p className="text-slate-600 font-medium text-lg">
            ฿{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
