import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductCardProps {
  product: {
    id: number;
    image: string;
    name: string;
    price: number;
  };
  imageSource: any;
  onPress: (product: any) => void;
}

export default function ProductCard({ product, imageSource, onPress }: ProductCardProps) {
  return (
    <View style={styles.product}>
      <TouchableOpacity onPress={() => onPress(product)} activeOpacity={0.7}>
        <ImageBackground 
          source={imageSource} 
          resizeMode="cover" 
          style={styles.productImage}
        />
      </TouchableOpacity>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    width: 162,
    height: 229.34,
    display: "flex",
    gap: 5.17,
    flexDirection: "column",
    backgroundColor: "white"
  }, 
  productImage: {
    width: 162,
    height: 162,
    borderRadius: 8.62
  },
  productName: {
    width: 140,
    height: 36,
    // backgroundColor: "red",
    fontFamily: 'IBMPlexSans-Medium',
    fontWeight: "400",
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)"
  },
  productPrice: {
    width: 162,
    height: 21,
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: "700",
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)"
  }
});
