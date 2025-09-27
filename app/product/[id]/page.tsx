import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductDetailClient from './ProductDetailClient';
import { products } from '@/data/products';
import { generateProductMetadata, SITE_CONFIG } from './metadata';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return {
      title: `ไม่พบสินค้า | ${SITE_CONFIG.displayName}`,
      description: 'ไม่พบสินค้าที่คุณค้นหา',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || SITE_CONFIG.url;

  return generateProductMetadata(
    product.name,
    product.description || `สินค้าคุณภาพจาก ${SITE_CONFIG.name}`,
    product.price,
    `${baseUrl}${product.image}`,
    product.category
  );
}

// Generate static params for static generation
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetail = async ({ params }: PageProps) => {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ไม่พบสินค้า</h1>
          <Link href="/collection" className="text-blue-600 hover:text-blue-800">
            กลับไปดูสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // JSON-LD structured data for product
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `${process.env.NEXT_PUBLIC_BASE_URL || SITE_CONFIG.url}${product.image}`,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: SITE_CONFIG.pricing.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
    category: product.category,
    additionalProperty: [
      ...(product.sizes
        ? product.sizes.map((size) => ({
            '@type': 'PropertyValue',
            name: 'Size',
            value: size,
          }))
        : []),
      ...(product.colors
        ? product.colors.map((color) => ({
            '@type': 'PropertyValue',
            name: 'Color',
            value: color,
          }))
        : []),
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      {/* Breadcrumb */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              หน้าแรก
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/collection" className="text-gray-500 hover:text-gray-700">
              สินค้าทั้งหมด
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Product Info - Client Component */}
            <ProductDetailClient product={product} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              สินค้าที่เกี่ยวข้อง
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
