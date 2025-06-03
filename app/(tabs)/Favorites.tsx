import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import BackNavigation from '@/components/BackNavigation';
import { useFavorites } from '@/store/useFavorites';
import iphone16 from '../../assets/images/iphone16.png';
import {HeartIconToggle} from '../../components/icons/HeartIconToggle';
import Button from '@/components/Button';
import React, { useState } from 'react';
import AddToCartNotification from '@/components/AddToCartNotification';
import macbook from '../../assets/images/macbook.png';
import googlepixel from '../../assets/images/googlepixel.png';
import airpods from '../../assets/images/airpods.png';
import { useCart } from '@/store/useCart';

export default function Favorites() {
  const { addToCart } = useCart();

  const imageMap: Record<string, any> = {
    'iphone16.png': iphone16,
    'macbook.png': macbook,
    'googlepixel.png': googlepixel,
    'airpods.png': airpods,
  };

  const [showNotification, setShowNotification] = useState(false);
    

  const handleAddToCart = () => {
    if (favorite) {
      addToCart({
        name: favorite.name,
        price: favorite.price,
        image: favorite.image,
        quantity: 1,
      });
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };


  const favorite = useFavorites((state) => state.favorite);

  const bulletPoints = [
  'This pre-owned product is not Apple certified, but has been professionally inspected, tested and cleaned by Amazon-qualified suppliers.',
   'There will be no visible cosmetic imperfections when held at an arm’s length. There will be no visible cosmetic imperfections when held at an arm’s length.',
   'This product will have a battery which exceeds 80% capacity relative to new.',
    'Accessories will not be original, but will be compatible and fully functional. Product may come in generic Box.',
     'This product is eligible for a replacement or refund within 90 days of receipt if you are not satisfied.',
  ];

  return (
    <>
      <Header showSearch={false} />
      <BackNavigation text="Go Back" goToHome={true} />
      <ScrollView style={productDetailsStyles.productDetailsContainer}>
        <View style={productDetailsStyles.cartContent}>
        <View style={productDetailsStyles.productDetails}>
          {favorite ? (
            <>
              <Image 
                source={imageMap[favorite.image] || iphone16} 
                style={productDetailsStyles.productDetailsImg}
              />

              
              <View style={productDetailsStyles.productDetailsFavoriteBox}>
                <HeartIconToggle/>
              </View>
              
              <Text style={productDetailsStyles.productName}>{favorite.name}</Text>

              <Text style={productDetailsStyles.productPrice}>${favorite.price.toFixed(2)}</Text>
            </>
          ) : (
            <Text style={{ color: 'white' }}>No product selected.</Text>
          )}
        </View>
        </View>

        <View style={productDetailsStyles.productDetailsTxtBox}>
            <Text style={productDetailsStyles.productDetailsTxt}>About this item</Text>
            {bulletPoints.map((item, index) => (
                <Text key={index} style={productDetailsStyles.productDetailsTxt}>
                    {'\u2022'} {item}
                </Text>
            ))}
        </View>
      </ScrollView>

      {showNotification && (
        <View style={productDetailsStyles.notificationWrapper}>
          <AddToCartNotification onClose={() => setShowNotification(false)} />
        </View>
      )}
      <Button btnName='Add to Cart' onPress={handleAddToCart}></Button>
    </>
  );
}


const productDetailsStyles = StyleSheet.create({
  cartContent: {
    flex: 1,
    alignItems: 'center',        // Or 'flex-start', 'flex-end'
    justifyContent: 'flex-start' // Or 'center', 'space-between', etc.
  },

  notificationWrapper: {
    position: 'absolute',
    // bottom: 110,
    top: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  productDetailsContainer: {
    width: "100%",
    height: 846.76,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  productDetails: {
    width: 334,
    height: 417.76,
    display: "flex",
    flexDirection: "column",
    gap: 10.58,
    // backgroundColor: "black"
  },
  productDetailsImg:{
    width: 334,
    height: 331.6,
    borderRadius: 15
  },
  productName:{
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: 400,
    fontSize: 17
  },
  productPrice: {
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: 700,
    fontSize: 32.75
  },
  productDetailsTxtBox:{
    height: 394,
    width: 334,
    // backgroundColor: "coral",
    display: "flex",
    flexDirection: "column",
    justifyContent :"center"
  },
  productDetailsTxt:{
    color: "rgba(153, 153, 153, 1)",
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: 400,
    fontSize: 14,
    // lineHeight:
  },
  productDetailsFavoriteBox:{
    height: 44,
    width: 44,
    borderRadius: 30,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    position: "absolute",
    top: 10,
    right: 10
  },
  buttonContainer:{
    width: 375,
    height: 94,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  button: {
    backgroundColor: "rgba(96, 181, 255, 1)",
    width: 343,
    height: 40,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTxt: {
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: 14, 
    lineHeight: 20
  }
})