// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
// import Header from '@/components/Header'
// import BackNavigation from '@/components/BackNavigation'
// import products from '../../json/products.json'

// // Import your images at the top of the file
// import iphone16 from '../../assets/images/iphone16.png';
// import macbook from '../../assets/images/macbook.png';
// import googlepixel from '../../assets/images/googlepixel.png';
// import airpods from '../../assets/images/airpods.png';

// // Create an image mapping object
// const imageMap = {
//   'iphone16.png': iphone16,
//   'macbook.png': macbook,
//   'googlepixel.png': googlepixel,
//   'airpods.png': airpods
// };

// export default function Home() {

//   return (
//     <>
//       <Header showSearch={true} />
//       <BackNavigation 
//         text="Technology"  // Required string prop
//         goToHome={true}  // Optional press handler
//       />

//       <View style={homeStyles.smartphoneTxtBox}>
//         <Text style={homeStyles.smartphoneTxt}>Smartphones, Laptops & Assecories</Text>
//       </View>
      

//       <View style={homeStyles.productContainer}>
//         {products.map((product, key) => (
//           <View key={key} style={homeStyles.product}>
//             <TouchableOpacity 
//               // style={backStyles.backComponent} 
//               // onPress={handlePress}
//               activeOpacity={0.7}
//             >
//               <ImageBackground 
//                 source={imageMap[product.image]} 
//                 resizeMode="cover" 
//                 style={homeStyles.productImage}
//               />
//             </TouchableOpacity>
//             <Text style={homeStyles.productName}>{product.name}</Text>
//             <Text style={homeStyles.productPrice}>${product.price}</Text>
//           </View>
//         ))}
        
//       </View>
//     </>
//   )
// }

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from '@/components/Header';
import BackNavigation from '@/components/BackNavigation';
import products from '../../json/products.json';
import { useRouter } from 'expo-router';
import { useFavorites } from '@/store/useFavorites'; // 👈

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

export default function Home() {
  const router = useRouter();
  const setFavorite = useFavorites((state: { setFavorite: any; }) => state.setFavorite);

  const handleProductClick = (product: { id: number; image: string; name: string; price: number; }) => {
    setFavorite(product);
    router.push('/(tabs)/Favorites'); // 👈 Navigate to Favorites tab
  };

  return (
    <>
      <Header showSearch={true} />
      <BackNavigation text="Technology" goToHome={true} />
      <View style={homeStyles.smartphoneTxtBox}>
        <Text style={homeStyles.smartphoneTxt}>Smartphones, Laptops & Accessories</Text>
      </View>

      <View style={homeStyles.productContainer}>
        {products.map((product, key) => (
          <View key={key} style={homeStyles.product}>
            <TouchableOpacity onPress={() => handleProductClick(product)} activeOpacity={0.7}>
              <ImageBackground 
                source={imageMap[product.image]} 
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
  );
}


const homeStyles = StyleSheet.create({
  smartphoneTxtBox:{
    width: "100%",
    backgroundColor: "white"
  },
  smartphoneTxt:{
    width: 254,
    height: 46,
    left: 16,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(0, 0, 0, 1)",
    backgroundColor: "white"
  },
  productContainer:{
    width: 374,
    height: 738.02,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
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
