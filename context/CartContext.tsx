'use client';

import { Product } from '@/data/products';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem extends Product {
  quantity: number;
  size?: string;
  color?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  addToCart: (
    product: Product,
    quantity: number,
    size?: string,
    color?: string,
    replaceQuantity?: boolean
  ) => void;
  removeFromCart: (id: number, size?: string, color?: string) => void;
  updateQuantity: (id: number, quantity: number, size?: string, color?: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
  generateOrderCode: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize cart from localStorage when the component mounts (client-side only)
  useEffect(() => {
    // This ensures we only run this on client side
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        try {
          setCartItems(JSON.parse(storedCart));
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error);
          localStorage.removeItem('cart');
        }
      }
      setIsInitialized(true);
    }
  }, []);
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    // Only save to localStorage after initialization and on client-side
    if (isInitialized && typeof window !== 'undefined') {
      if (cartItems.length > 0) {
        localStorage.setItem('cart', JSON.stringify(cartItems));
      } else {
        localStorage.removeItem('cart');
      }
    }
  }, [cartItems, isInitialized]); // Add an item to cart with options to replace or increment quantity
  const addToCart = (
    product: Product,
    quantity: number,
    size?: string,
    color?: string,
    replaceQuantity: boolean = true
  ) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart with the same size and color
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === size && item.color === color
      );

      if (existingItemIndex > -1) {
        // Update the quantity of the existing item
        const updatedItems = [...prevItems];
        if (replaceQuantity) {
          // Replace quantity with the new value
          updatedItems[existingItemIndex].quantity = quantity;
        } else {
          // Add the new quantity to the existing one
          updatedItems[existingItemIndex].quantity += quantity;
        }
        return updatedItems;
      } else {
        // Add new item to cart
        return [...prevItems, { ...product, quantity, size, color }];
      }
    });
  };
  // Remove an item from cart, considering size and color
  const removeFromCart = (id: number, size?: string, color?: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => {
        // If size and color are provided, filter by all criteria
        if (size !== undefined && color !== undefined) {
          return !(item.id === id && item.size === size && item.color === color);
        }
        // Otherwise, just filter by ID (backwards compatibility)
        return item.id !== id;
      })
    );
  };

  // Update quantity of an item, considering size and color
  const updateQuantity = (id: number, quantity: number, size?: string, color?: string) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) => {
        // If size and color are provided, update only the specific item
        if (size !== undefined && color !== undefined) {
          if (item.id === id && item.size === size && item.color === color) {
            return { ...item, quantity };
          }
          return item;
        }
        // Otherwise, update by ID (backwards compatibility)
        return item.id === id ? { ...item, quantity } : item;
      })
    );
  };

  // Clear all items from cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate total price of all items in cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get total number of items in cart
  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Generate order code for all items in cart
  const generateOrderCode = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

    let orderCode = `รายการสั่งซื้อ TeeCrafted:\n\n`;

    cartItems.forEach((item, index) => {
      orderCode += `${index + 1}. ${item.name}\n`;
      orderCode += `   ขนาด: ${item.size || '-'}\n`;
      orderCode += `   สี: ${item.color || '-'}\n`;
      orderCode += `   จำนวน: ${item.quantity} ชิ้น\n`;
      orderCode += `   ราคา: ฿${item.price.toLocaleString()} x ${
        item.quantity
      } = ฿${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    orderCode += `รวมทั้งสิ้น: ฿${getCartTotal().toLocaleString()}\n\n`;
    orderCode += `#สั่งซื้อ #TeeCrafted\n`;
    orderCode += `Link: ${baseUrl}`;

    return orderCode;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
        generateOrderCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
