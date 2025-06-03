import Header from '@/components/Header'
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import BackNavigation from '@/components/BackNavigation'
import iphone16 from '../../assets/images/iphone16.png';
import { useCart } from '@/store/useCart';
import macbook from '../../assets/images/macbook.png';
import googlepixel from '../../assets/images/googlepixel.png';
import airpods from '../../assets/images/airpods.png';
import Button from '@/components/Button';
import AddToCartNotification from '@/components/AddToCartNotification';
import TrashCanIcon from '@/components/icons/TrashCanIcon';
import { IncreaseQtyIcon } from '@/components/icons/IncreaseQtyIcon';
import { DecreaseQtyIcon } from '@/components/icons/DecreaseQtyIcon';

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const SHIPPING_FEE = 10;

  const subtotal = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const total = subtotal + SHIPPING_FEE;
  
  const imageMap: Record<string, any> = {
    'iphone16.png': iphone16,
    'macbook.png': macbook,
    'googlepixel.png': googlepixel,
    'airpods.png': airpods,
  };

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
              {cart.map((item, index) => (
                <View key={index} style={cartStyles.cartItem}>
                  <Image source={imageMap[item.image] || iphone16} style={cartStyles.cartItemImg} />
                  <View style={cartStyles.cartInfo}>
                    <Text style={cartStyles.cartItemName}>{item.name}</Text>
                    <Text style={cartStyles.cartItemPrice}>${item.price}</Text>
                    <Text style={cartStyles.cartItemStatus}>In stock</Text>
                    <View style={cartStyles.cartItemControls}>
                      <TouchableOpacity style={cartStyles.decreaseQty} onPress={() => decreaseQty(item.name)}>
                        <DecreaseQtyIcon />
                      </TouchableOpacity>
                      <Text>{item.quantity}</Text>
                      <TouchableOpacity style={cartStyles.increaseQty} onPress={() => increaseQty(item.name)}>
                        <IncreaseQtyIcon />
                      </TouchableOpacity>
                      <TouchableOpacity style={cartStyles.deleteProduct} onPress={() => removeFromCart(item.name)}>
                        <TrashCanIcon />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
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
  cartItem: {
    width: 334,
    height: 132,
    backgroundColor: "rgba(246, 245, 248, 1)",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    alignSelf: "center",
    gap: 10,
    paddingBottom: 10,
    borderRadius: 15
  },
  cartItemImg: {
    width: 102.87,
    height: 106.15,
    borderRadius: 5.65
  },
  cartInfo:{
    width: 201.13,
    height: 112,
    display: "flex",
    flexDirection: "column",
    gap: 5
  },
  cartItemName: {
    color: "rgba(51, 65, 85, 1)",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 20
  },
  cartItemStatus: {
    color: "rgba(16, 185, 129, 1)",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16
  },
  cartItemPrice: {
    color: "rgba(51, 65, 85, 1)",
    fontWeight: 600,
    fontSize: 17,
    lineHeight: 32
  },
  cartItemControls:{
    width: 201.13,
    height: 36,
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "blue ",
    gap: 16,
  },
  decreaseQty: {
    backgroundColor: "rgba(226, 232, 240, 1)",
    padding: 8,
    borderRadius: 32,
    width: 36,
    height: 36,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  increaseQty: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(226, 232, 240, 1)",
    padding: 8,
    borderRadius: 32,
    width: 36,
    height: 36,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  deleteProduct: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "rgba(226, 232, 240, 1)",
    padding: 8,
    borderRadius: 24,
    width: 36,
    height: 36,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
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