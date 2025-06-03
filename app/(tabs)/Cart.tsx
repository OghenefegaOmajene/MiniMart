import Header from '@/components/Header'
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BackNavigation from '@/components/BackNavigation'
import { useCart } from '@/store/useCart';
import Button from '@/components/Button';
import AddToCartNotification from '@/components/AddToCartNotification';
import CartItemList from '@/components/CartItemList';

export default function Cart() {
  const { cart } = useCart();

  const SHIPPING_FEE = 10;

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const total = subtotal + SHIPPING_FEE;
  
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
  };

  return (
    <>
        <Header showSearch={false} />
        <BackNavigation 
            text="Your Cart"  // Required string prop
            goToHome={true}  // Optional press handler
        />

        {cart.length === 0 ? (
          <View style={cartStyles.emptyCartContainer}>
            <Text style={cartStyles.emptyCartText}>Your cart is empty</Text>
          </View>
        ) : (
          <ScrollView>
            <View style={cartStyles.cart}>
              <CartItemList/>
            </View>
          </ScrollView>
        )}



        <View style={cartStyles.orderInfo}>
          <View style={cartStyles.orderInfoBox}>
            <Text style={cartStyles.orderInfoTxt}>Order Info</Text>
          </View>
          
          <View style={cartStyles.orderInfoBox}>
            <Text style={cartStyles.orderInfoTxt2}>Subtotal</Text>
            <Text style={cartStyles.orderInfoTxt2}>${subtotal}</Text>
          </View>
          <View style={cartStyles.orderInfoBox}>
            <Text style={cartStyles.orderInfoTxt2}>Shipping</Text>
            <Text style={cartStyles.orderInfoTxt2}>${SHIPPING_FEE}</Text>
          </View>
          <View style={cartStyles.orderInfoBox}>
            <Text style={cartStyles.orderInfoTxt2}>Total</Text>
            <Text style={cartStyles.total}>${total}</Text>
          </View>
        </View>

        {showNotification && (
          <View style={cartStyles.notificationWrapper}>
            <AddToCartNotification onClose={() => setShowNotification(false)} />
          </View>
        )}
        <Button btnName={`Checkout ($${total})`} onPress={handleAddToCart}/>
        
    </>
  )
}

const cartStyles = StyleSheet.create({
  notificationWrapper: {
    position: 'absolute',
    // bottom: 110,
    top: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  cart:{
    width: "100%",
    height: 640,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    gap: 15,
    paddingTop: 10,
    // paddingBottom: 10,
    // paddingRight: 20,
    // paddingLeft: 20
  },
  orderInfoTxt: {
    width: 69,
    height: 20,
    fontFamily: 'IBMPlexSans-Medium',
    // backgroundColor: "coral",
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
  },
  orderInfoBox: {
    width: 334,
    height: 20,
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "coral",
  },
  orderInfo: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderInfoTxt2: {
    fontFamily: 'IBMPlexSans-Medium',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 20,
  },
  total: {
    fontFamily: 'IBMPlexSans-Medium',
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: "white",
  },
  emptyCartText: {
    fontSize: 18,
    color: '#94a3b8', // slate-400
    fontFamily: 'IBMPlexSans-Medium',
  },

})