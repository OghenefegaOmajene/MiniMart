import Header from '@/components/Header'
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
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

        {/* <View style={cartStyles.cart}>
          <View style={cartStyles.cartItem}>
              <Image source={iphone16} style={cartStyles.cartItemImg}/>

              <View style={cartStyles.cartInfo}>
                <Text style={cartStyles.cartItemName}>Apple iPhone 16 128GB|Teal</Text>
                <Text style={cartStyles.cartItemPrice}>$700</Text>
                <Text style={cartStyles.cartItemStatus}>In stock</Text>

                <View style={cartStyles.cartItemControls}>
                    <TouchableOpacity style={cartStyles.decreaseQty}>
                      <DecreaseQtyIcon/>
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity style={cartStyles.increaseQty}>
                      <IncreaseQtyIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity style={cartStyles.deleteProduct}>
                      <TrashCanIcon></TrashCanIcon>
                    </TouchableOpacity>
                </View>
              </View>
          </View>
        </View> */}

        {showNotification && (
          <View style={cartStyles.notificationWrapper}>
            <AddToCartNotification onClose={() => setShowNotification(false)} />
          </View>
        )}
        <Button btnName='Checkout' onPress={handleAddToCart}></Button>
        
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
    width: 374,
    height: 540,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  }
})