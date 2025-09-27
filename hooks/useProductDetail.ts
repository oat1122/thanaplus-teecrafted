import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

export const useProductDetail = (product: Product) => {
  // State management
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showOrderCode, setShowOrderCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showFallbackModal, setShowFallbackModal] = useState(false);

  const { addToCart } = useCart();

  // Generate LINE order code
  const generateOrderCode = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const orderCode = `สั่งซื้อ: ${product.name}
ขนาด: ${selectedSize || 'ยังไม่เลือก'}
สี: ${selectedColor || 'ยังไม่เลือก'}
จำนวน: ${quantity} ตัว
ราคา: ฿${product.price.toLocaleString()} x ${quantity} = ฿${(
      product.price * quantity
    ).toLocaleString()}
รวม: ฿${(product.price * quantity).toLocaleString()}

#สั่งซื้อ #TeeCrafted
Link: ${baseUrl}/product/${product.id}`;
    return orderCode;
  };

  // Copy to clipboard
  const copyOrderCode = async () => {
    try {
      const { copyToClipboard } = await import('@/utils/clipboard');
      await copyToClipboard(generateOrderCode());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setShowFallbackModal(true);
    }
  };

  // Open LINE with order code
  const openLineWithOrder = () => {
    const orderCode = generateOrderCode();
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(orderCode)}`;
    window.open(lineUrl, '_blank');
  };

  // Handle quantity change
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Handle add to cart
  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      addToCart(product, quantity, selectedSize, selectedColor, true);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  // Handle order code generation
  const handleGenerateOrderCode = () => {
    if (selectedSize && selectedColor) {
      setShowOrderCode(!showOrderCode);
    } else {
      setShowOrderCode(true);
    }
  };

  // Validation
  const isValidSelection = selectedSize && selectedColor;
  const showValidationError = (!selectedSize || !selectedColor) && showOrderCode;

  return {
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
    totalPrice: product.price * quantity,
  };
};
