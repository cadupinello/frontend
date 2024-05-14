"use client";
import React, { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product } from '@/types/product';

interface CartContextType {
  cart: Product[];
  addToCart: (item: Product) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const { value: cartData, updateLocalStorage } = useLocalStorage<Product[]>('cartItems', []);
  const cart = Array.isArray(cartData) ? cartData : [];
  const addToCart = (item: Product) => {
    const updatedItemCart = [...cart];
    const itemExists = updatedItemCart.find((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      itemExists.quantity += 1;
      updateLocalStorage(updatedItemCart);
    } else {
      const newCart = [...cart, { ...item, quantity: 1 }];
      updateLocalStorage(newCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
