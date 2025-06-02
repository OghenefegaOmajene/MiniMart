// import BackNavigation from '@/components/BackNavigation'
// import Header from '@/components/Header'
// import { View, Text, StyleSheet } from 'react-native'

// export default function Favorites() {
//   return (
//     <>
//         <Header showSearch={false} />
//         <BackNavigation 
//             text="Go Back"  // Required string prop
//             goToHome={true}  // Optional press handler
//         />

//         <View style={productDetailsStyles.productDetailsContainer}>
//             <View style={productDetailsStyles.productDetails}>
                
//             </View>
//         </View>
//     </>
//   )
// }

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '@/components/Header';
import BackNavigation from '@/components/BackNavigation';
import { useFavorites } from '@/store/useFavorites';
import iphone16Select from '../../assets/images/iphone16Select.png';

export default function Favorites() {
  const favorite = useFavorites((state) => state.favorite);

  return (
    <>
      <Header showSearch={false} />
      <BackNavigation text="Go Back" goToHome={true} />
      <ScrollView style={productDetailsStyles.productDetailsContainer}>
        <View style={productDetailsStyles.productDetails}>
          {favorite ? (
            <>
              <Image source={iphone16Select} style={productDetailsStyles.productDetailsImg} />
              <Text style={productDetailsStyles.productName}>{favorite.name}</Text>
              <Text style={productDetailsStyles.productPrice}>${favorite.price}</Text>
            </>
          ) : (
            <Text style={{ color: 'white' }}>No product selected.</Text>
          )}
        </View>

        <View style={productDetailsStyles.productDetailsTxtBox}>
          <Text style={productDetailsStyles.productDetailsTxt}>About this item</Text>
        </View>
      </ScrollView>
    </>
  );
}


const productDetailsStyles = StyleSheet.create({
  productDetailsContainer: {
    width: 374,
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
    backgroundColor: "coral"
  },
  productDetailsTxt:{
    color: "rgba(153, 153, 153, 1)",
    fontFamily: "IBMPlexSans-Medium",
    fontWeight: 400,
    fontSize: 14
  }
})