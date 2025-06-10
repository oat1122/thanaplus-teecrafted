"use client";

import { useState } from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const CollectionClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [sortBy, setSortBy] = useState("ล่าสุด");

  const categories = ["ทั้งหมด", "เสื้อยืด", "เสื้อโปโล", "เสื้อฮู้ด"];
  const filteredProducts =
    selectedCategory === "ทั้งหมด"
      ? products
      : products.filter((product) => product.category === selectedCategory);  const sortedProducts = [...filteredProducts].sort((a, b) => {
    // เรียงลำดับตามตัวเลือกที่ผู้ใช้เลือกก่อน
    if (sortBy === "ราคาต่ำ-สูง") {
      const priceDiff = a.price - b.price;
      // ถ้าราคาเท่ากัน ให้ featured อยู่ก่อน
      if (priceDiff === 0) {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      return priceDiff;
    }
    
    if (sortBy === "ราคาสูง-ต่ำ") {
      const priceDiff = b.price - a.price;
      // ถ้าราคาเท่ากัน ให้ featured อยู่ก่อน
      if (priceDiff === 0) {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
      }
      return priceDiff;
    }
    
    // ล่าสุด - แสดง featured ก่อน และถ้า featured เหมือนกันให้เรียงตาม id
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    
    // เรียงตาม id (สมมติว่า id สูงคือสินค้าใหม่)
    return b.id - a.id;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              สินค้าทั้งหมด
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              เสื้อสกรีนคุณภาพสูง ดีไซน์หลากหลาย เลือกได้ตามใจ
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* Categories */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-3">
                <span className="text-gray-700 font-medium">เรียงตาม:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                >
                  <option value="ล่าสุด">ล่าสุด</option>
                  <option value="ราคาต่ำ-สูง">ราคา: ต่ำ - สูง</option>
                  <option value="ราคาสูง-ต่ำ">ราคา: สูง - ต่ำ</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Products Message */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ไม่พบสินค้าในหมวดหมู่นี้
              </h3>
              <p className="text-gray-600">ลองเลือกหมวดหมู่อื่นดูสิ</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CollectionClient;
