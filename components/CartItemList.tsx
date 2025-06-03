import React from 'react';
import { View } from 'react-native';
import { useCart } from '@/store/useCart';
import CartItem from './CartItem'; // Single item

export default function CartItemList() {
  const { cart } = useCart();

  return (
    <>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
    </>
  );
}
