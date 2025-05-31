import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Header from '@/components/Header'
import BackNavigation from '@/components/BackNavigation'
import products from '../../json/products.json'

export default function Home() {
  // const images = import.meta.glob('../../assets/*', { eager: true });

  // const getImage = (filename) => {
  //   const entry = Object.entries(images).find(([key]) => key.includes(filename));
  //   return entry ? entry[1].default : '';
  // };

  return (
    <>
      <Header></Header>
      <BackNavigation 
        text="Technology"  // Required string prop
        goToHome={true}  // Optional press handler
      />

      <Text style={homeStyles.smartphoneTxt}>Smartphones, Laptops & Assecories</Text>

      <View style={homeStyles.productContainer}>
        {products.map((product, key) => (
          <View key={key} style={homeStyles.product}>
            <TouchableOpacity 
              // style={backStyles.backComponent} 
              // onPress={handlePress}
              activeOpacity={0.7}
            >
              <ImageBackground 
                source={product.image} 
                resizeMode="cover" 
                style={homeStyles.productImage}
              />
            </TouchableOpacity>
            <Text style={homeStyles.productName}>{product.name}</Text>
            <Text style={homeStyles.productPrice}>${product.price}</Text>
          </View>
        ))}
        
      </View>
    </>
  )
}

const homeStyles = StyleSheet.create({
  smartphoneTxt:{
    width: 254,
    height: 46,
    left: 16,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(0, 0, 0, 1)"
  },
  productContainer:{
    width: 374,
    height: 738.02,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "red",
    display: "flex",
    gap: 10,
    flexWrap: "wrap"
  }, 
  product:{
    width: 162,
    height: 229.34,
    display: "flex",
    gap: 5.17,
    flexDirection: "column",
    backgroundColor: "white"
  }, 
  productImage :{
    width: 162,
    height: 162,
    borderRadius: 8.62
  },
  productName:{
    width: 162,
    height: 36,
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: 400,
    fontSize: 14,
    color: "rgba(0, 0, 0, 1)"
  },
  productPrice: {
    width: 162,
    height: 21,
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: 700,
    fontSize: 16,
    color: "rgba(0, 0, 0, 1)"
  }
})