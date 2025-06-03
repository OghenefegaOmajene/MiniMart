import React from 'react';
import { View } from 'react-native';
import { useCart } from '@/store/useCart';
import CartItem from './CartItem'; // Single item UI

export default function CartItemList() {
  const { cart } = useCart();

  return (
    <>
        {/* Handles the looping of CartItems */}
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </>
  );
}
