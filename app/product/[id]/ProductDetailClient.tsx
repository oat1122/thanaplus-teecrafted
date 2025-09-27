'use client';

import { Product } from '@/data/products';
import CopyFallbackModal from '@/components/CopyFallbackModal';
import { useProductDetail } from '@/hooks/useProductDetail';
import {
  ProductInfo,
  ProductPrice,
  SizeSelector,
  ColorSelector,
  QuantitySelector,
  OrderCodeDisplay,
  ActionButtons,
  ValidationMessage,
  ProductFeatures,
} from '@/components/product';

interface ProductDetailClientProps {
  product: Product;
}

const ProductDetailClient = ({ product }: ProductDetailClientProps) => {
  const {
    // State
    selectedSize,
    selectedColor,
    quantity,
    showOrderCode,
    copied,
    addedToCart,
    showFallbackModal,

    // Actions
    setSelectedSize,
    setSelectedColor,
    setShowFallbackModal,
    increaseQuantity,
    decreaseQuantity,
    handleAddToCart,
    handleGenerateOrderCode,
    copyOrderCode,
    openLineWithOrder,
    generateOrderCode,

    // Computed values
    isValidSelection,
    showValidationError,
  } = useProductDetail(product);
  return (
    <div className="space-y-6">
      {/* Fallback Copy Modal */}
      <CopyFallbackModal
        isOpen={showFallbackModal}
        onClose={() => setShowFallbackModal(false)}
        text={generateOrderCode()}
        title="คัดลอกโค้ดสั่งซื้อ"
      />

      {/* Product Information */}
      <ProductInfo product={product} />

      {/* Price */}
      <ProductPrice price={product.price} />

      {/* Size Selection */}
      <SizeSelector
        sizes={product.sizes}
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
      />

      {/* Color Selection */}
      <ColorSelector
        colors={product.colors}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />

      {/* Quantity */}
      <QuantitySelector
        quantity={quantity}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
      />

      {/* Action Buttons */}
      <div className="space-y-4">
        {/* Validation Message */}
        <ValidationMessage show={showValidationError} />

        {/* Main Action Button */}
        <ActionButtons
          onGenerateOrderCode={handleGenerateOrderCode}
          onAddToCart={handleAddToCart}
          onOpenLine={openLineWithOrder}
          addedToCart={addedToCart}
          showOrderCode={showOrderCode}
          isValidSelection={isValidSelection}
        />

        {/* Order Code Display */}
        {showOrderCode && isValidSelection && (
          <OrderCodeDisplay
            orderCode={generateOrderCode()}
            copied={copied}
            onCopyCode={copyOrderCode}
          />
        )}
      </div>

      {/* Product Features */}
      <ProductFeatures />
    </div>
  );
};
export default ProductDetailClient;
