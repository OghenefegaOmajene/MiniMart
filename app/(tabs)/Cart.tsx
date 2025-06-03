import Header from '@/components/Header'
import { View, Text, StyleSheet, Image } from 'react-native'
import BackNavigation from '@/components/BackNavigation'
import iphone16 from '../../assets/images/iphone16Select.png';

export default function Cart() {
  return (
    <>
        <Header showSearch={false} />
        <BackNavigation 
            text="Your Cart"  // Required string prop
            goToHome={true}  // Optional press handler
        />

        <View style={cartStyles.cart}>
          <View style={cartStyles.cartItem}>
              <Image source={iphone16} style={cartStyles.cartItemImg}/>

              <View>
                <Text style={cartStyles.cartItemName}>Apple iPhone 16 128GB|Teal</Text>
                <Text style={cartStyles.cartItemPrice}>$700</Text>
                <Text style={cartStyles.cartItemStatus}>In stock</Text>
                <View></View>
              </View>
          </View>
        </View>
    </>
  )
}

const cartStyles = StyleSheet.create({
  cart:{
    width: 374,
    height: 590,
    backgroundColor: "coral",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15
  },
  cartItem: {
    width: 334,
    height: 132,
    backgroundColor: "rgba(246, 245, 248, 1)",
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    gap: 10,
    borderRadius: 15
  },
  cartItemImg: {
    width: 102.87,
    height: 106.15,
    borderRadius: 5.65
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
  }
})