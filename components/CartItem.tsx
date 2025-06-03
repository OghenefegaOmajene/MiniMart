// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
// import React, {useState} from 'react'
// import { useCart } from '@/store/useCart';
// import iphone16 from '../assets/images/iphone16.png';
// import macbook from '../assets/images/macbook.png';
// import googlepixel from '../assets/images/googlepixel.png';
// import airpods from '../assets/images/airpods.jpeg';

// import TrashCanIcon from '@/components/icons/TrashCanIcon';
// import { IncreaseQtyIcon } from '@/components/icons/IncreaseQtyIcon';
// import { DecreaseQtyIcon } from '@/components/icons/DecreaseQtyIcon';

// export default function CartItem() {
//     const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
//     const [pressedItem, setPressedItem] = useState(null);

//     const imageMap: Record<string, any> = {
//         'iphone16.png': iphone16,
//         'macbook.png': macbook,
//         'googlepixel.png': googlepixel,
//         'airpods.png': airpods,
//     };
//   return (
//     {cart.map((item, index) => (
//         <View key={index} style={cartItemStyles.cartItem}>
//             <Image source={imageMap[item.image] || iphone16} style={cartItemStyles.cartItemImg} />
//             <View style={cartItemStyles.cartInfo}>
//                 <Text style={cartItemStyles.cartItemName}>{item.name}</Text>
//                 <Text style={cartItemStyles.cartItemPrice}>${item.price}</Text>
//                 <Text style={cartItemStyles.cartItemStatus}>In stock</Text>
//                 <View style={cartItemStyles.cartItemControls}>
//                     <TouchableOpacity style={cartItemStyles.decreaseQty} onPress={() => decreaseQty(item.name)}>
//                         <DecreaseQtyIcon />
//                     </TouchableOpacity>
//                     <Text>{item.quantity}</Text>
//                     <TouchableOpacity style={cartItemStyles.increaseQty} onPress={() => increaseQty(item.name)}>
//                         <IncreaseQtyIcon />
//                     </TouchableOpacity>
//                     <TouchableOpacity 
//                         style={cartItemStyles.deleteProduct}
//                         onPress={() => removeFromCart(item.name)}
//                         onPressIn={() => setPressedItem(item.name)}
//                         onPressOut={() => setPressedItem(null)}
//                     >
//                         <TrashCanIcon isPressed={pressedItem === item.name}/>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     ))}
//   )
// }


import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useCart } from '@/store/useCart';
import TrashCanIcon from '@/components/icons/TrashCanIcon';
import { IncreaseQtyIcon } from '@/components/icons/IncreaseQtyIcon';
import { DecreaseQtyIcon } from '@/components/icons/DecreaseQtyIcon';

import iphone16 from '../assets/images/iphone16.png';
import macbook from '../assets/images/macbook.png';
import googlepixel from '../assets/images/googlepixel.png';
import airpods from '../assets/images/airpods.jpeg';

const imageMap: Record<string, any> = {
  'iphone16.png': iphone16,
  'macbook.png': macbook,
  'googlepixel.png': googlepixel,
  'airpods.png': airpods,
};

export default function CartItem({ item }: { item: any }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCart();
  const [pressedItem, setPressedItem] = useState<string | null>(null);

  return (
    <View style={cartItemStyles.cartItem}>
      <Image source={imageMap[item.image] || iphone16} style={cartItemStyles.cartItemImg} />
      <View style={cartItemStyles.cartInfo}>
        <Text style={cartItemStyles.cartItemName}>{item.name}</Text>
        <Text style={cartItemStyles.cartItemPrice}>${item.price}</Text>
        <Text style={cartItemStyles.cartItemStatus}>In stock</Text>
        <View style={cartItemStyles.cartItemControls}>
          <TouchableOpacity style={cartItemStyles.decreaseQty} onPress={() => decreaseQty(item.name)}>
            <DecreaseQtyIcon />
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity style={cartItemStyles.increaseQty} onPress={() => increaseQty(item.name)}>
            <IncreaseQtyIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={cartItemStyles.deleteProduct}
            onPress={() => removeFromCart(item.name)}
            onPressIn={() => setPressedItem(item.name)}
            onPressOut={() => setPressedItem(null)}
          >
            <TrashCanIcon isPressed={pressedItem === item.name} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const cartItemStyles = StyleSheet.create({
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
  }
})