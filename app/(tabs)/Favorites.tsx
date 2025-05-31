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

import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '@/components/Header';
import BackNavigation from '@/components/BackNavigation';
import { useFavorites } from '@/store/useFavorites';
import iphone16 from '../../assets/images/iphone16.png';
import macbook from '../../assets/images/macbook.png';
import googlepixel from '../../assets/images/googlepixel.png';
import airpods from '../../assets/images/airpods.png';

const imageMap = {
  'iphone16.png': iphone16,
  'macbook.png': macbook,
  'googlepixel.png': googlepixel,
  'airpods.png': airpods
};

export default function Favorites() {
  const favorite = useFavorites((state) => state.favorite);

  return (
    <>
      <Header showSearch={false} />
      <BackNavigation text="Go Back" goToHome={true} />
      <View style={productDetailsStyles.productDetailsContainer}>
        <View style={productDetailsStyles.productDetails}>
          {favorite ? (
            <>
              <Image source={imageMap[favorite.image]} style={{ width: 200, height: 200, borderRadius: 10 }} />
              <Text style={{ fontSize: 18, fontFamily: 'IBMPlexSans-Medium', color: 'white' }}>{favorite.name}</Text>
              <Text style={{ fontSize: 16, fontFamily: 'IBMPlexSans-Medium', color: 'white' }}>${favorite.price}</Text>
            </>
          ) : (
            <Text style={{ color: 'white' }}>No product selected.</Text>
          )}
        </View>
      </View>
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
    backgroundColor: "black"
  }
})