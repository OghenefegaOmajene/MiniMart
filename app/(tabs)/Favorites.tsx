import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '@/components/Header';
import BackNavigation from '@/components/BackNavigation';
import { useFavorites } from '@/store/useFavorites';
import iphone16Select from '../../assets/images/iphone16Select.png';
import {HeartIconToggle} from '../../components/icons/HeartIconToggle';

export default function Favorites() {
    

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
        <View style={productDetailsStyles.productDetails}>
          {favorite ? (
            <>
              <Image source={iphone16Select} style={productDetailsStyles.productDetailsImg} />

              <View style={productDetailsStyles.productDetailsFavoriteBox}>
                <HeartIconToggle/>
              </View>
              
              <Text style={productDetailsStyles.productName}>{favorite.name}</Text>

              <Text style={productDetailsStyles.productPrice}>${favorite.price}</Text>
            </>
          ) : (
            <Text style={{ color: 'white' }}>No product selected.</Text>
          )}
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

      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Added to Cart')}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View> */}
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
  }
})