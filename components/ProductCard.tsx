import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    <div className="group cafe-product-card">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-t-lg aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && <div className="cafe-badge absolute top-2 left-2">แนะนำ</div>}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold cafe-heading-secondary mb-2 group-hover:text-slate-700 transition-colors">
            {product.name}
          </h3>
          <p className="cafe-price-tag inline-block">฿{product.price.toLocaleString()}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
