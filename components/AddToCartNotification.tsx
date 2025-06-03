// import { View, Text, StyleSheet, Image } from 'react-native'
// import React from 'react'
// import checkCircle from '../assets/images/check-circle.png'
// import close from '../assets/images/close.png'

// export default function AddToCartNotification() {
//   return (
//     <View style={styles.addToCartNoti}>
//         <Image source={checkCircle} style={styles.addToCartNotiImg}/>
//         <Text style={styles.addToCartNotiTxt}>Item has been added to cart</Text>
//         <Image source={close} style={styles.addToCartNotiImg}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     addToCartNoti:{
//         width: 335,
//         height: 56,
//         padding: 16,
//         display: "flex",
//         flexDirection: "row",
//         gap: 16,
//         borderRadius: 8,
//         borderLeftWidth: 4,
//         backgroundColor: "white",
//         borderLeftColor: "rgba(16, 185, 129, 1)",
//         shadowColor: 'rgba(0, 0, 0, 0.15)',
//         shadowOffset: { width: 0, height: 16 },
//         shadowOpacity: 1,
//         shadowRadius: 24,
//         elevation: 10, // Android equivalent

//     },
//     addToCartNotiTxt:{
//       fontFamily: "IBMPlexSans-Medium",
//       color: "rgba(51, 65, 85, 1)",
//       fontWeight: 600,
//       fontSize: 14, 
//       lineHeight: 20
//     }, 
//     addToCartNotiImg:{
//       height: 24,
//       width: 24
//     }
// })

// import React, { useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';

// import checkCircle from '../assets/images/check-circle.png';
// import close from '../assets/images/close.png';

// export default function AddToCartNotification({ onClose }: { onClose: () => void }) {
//   const slideAnim = useRef(new Animated.Value(-100)).current; // Start above the screen

//   useEffect(() => {
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();

//     const timeout = setTimeout(() => handleClose(), 900);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleClose = () => {
//     Animated.timing(slideAnim, {
//       toValue: -100,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => onClose());
//   };

//   return (
//     <Animated.View style={[styles.addToCartNoti, { transform: [{ translateY: slideAnim }] }]}>
//       <Image source={checkCircle} style={styles.addToCartNotiImg} />
//       <Text style={styles.addToCartNotiTxt}>Item has been added to cart</Text>
//       <TouchableOpacity onPress={handleClose}>
//         <Image source={close} style={styles.addToCartNotiImg} />
//       </TouchableOpacity>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   addToCartNoti: {
//     width: 335,
//     height: 56,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 16,
//     borderRadius: 8,
//     borderLeftWidth: 4,
//     backgroundColor: 'white',
//     borderLeftColor: 'rgba(16, 185, 129, 1)',
//     shadowColor: 'rgba(0, 0, 0, 0.15)',
//     shadowOffset: { width: 0, height: 16 },
//     shadowOpacity: 1,
//     shadowRadius: 24,
//     elevation: 10,
//   },
//   addToCartNotiTxt: {
//     fontFamily: 'IBMPlexSans-Medium',
//     color: 'rgba(51, 65, 85, 1)',
//     fontWeight: '600',
//     fontSize: 14,
//     lineHeight: 20,
//     flex: 1,
//   },
//   addToCartNotiImg: {
//     height: 24,
//     width: 24,
//   },
// });

// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';

// import checkCircle from '../assets/images/check-circle.png';
// import close from '../assets/images/close.png';

// export default function AddToCartNotification({ onClose }: { onClose: () => void }) {
//   const slideAnim = useRef(new Animated.Value(-100)).current;
//   const [hideRequested, setHideRequested] = useState(false);

//   useEffect(() => {
//     // Animate in on mount
//     Animated.timing(slideAnim, {
//       toValue: 0,
//       duration: 300,
//       useNativeDriver: true,
//     }).start();

//     const timeout = setTimeout(() => handleClose(), 900);
//     return () => clearTimeout(timeout);
//   }, []);

//   useEffect(() => {
//     if (hideRequested) {
//       onClose(); // safely trigger close after animation
//     }
//   }, [hideRequested]);

//   const handleClose = () => {
//     Animated.timing(slideAnim, {
//       toValue: -100,
//       duration: 300,
//       useNativeDriver: true,
//     }).start(() => {
//       // delay calling onClose directly here
//       setHideRequested(true);
//     });
//   };

//   return (
//     <Animated.View style={[styles.addToCartNoti, { transform: [{ translateY: slideAnim }] }]}>
//       <Image source={checkCircle} style={styles.addToCartNotiImg} />
//       <Text style={styles.addToCartNotiTxt}>Item has been added to cart</Text>
//       <TouchableOpacity onPress={handleClose}>
//         <Image source={close} style={styles.addToCartNotiImg} />
//       </TouchableOpacity>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   addToCartNoti: {
//     width: 335,
//     height: 56,
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 16,
//     borderRadius: 8,
//     borderLeftWidth: 4,
//     backgroundColor: 'white',
//     borderLeftColor: 'rgba(16, 185, 129, 1)',
//     shadowColor: 'rgba(0, 0, 0, 0.15)',
//     shadowOffset: { width: 0, height: 16 },
//     shadowOpacity: 1,
//     shadowRadius: 24,
//     elevation: 10,
//   },
//   addToCartNotiTxt: {
//     fontFamily: 'IBMPlexSans-Medium',
//     color: 'rgba(51, 65, 85, 1)',
//     fontWeight: '600',
//     fontSize: 14,
//     lineHeight: 20,
//     flex: 1,
//   },
//   addToCartNotiImg: {
//     height: 24,
//     width: 24,
//   },
// });



import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

import checkCircle from '../assets/images/check-circle.png';
import close from '../assets/images/close.png';

export default function AddToCartNotification({ onClose }: { onClose: () => void }) {
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const [isVisible, setIsVisible] = useState(true); // show/hide internally
  const [shouldClose, setShouldClose] = useState(false); // trigger onClose safely

  useEffect(() => {
    // Slide in on mount
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Auto-close after 3s
    const timeout = setTimeout(() => {
      triggerClose();
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const triggerClose = () => {
    if (!isVisible) return;

    setIsVisible(false); // hide visually first

    Animated.timing(slideAnim, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // avoid calling props.onClose directly here
      setShouldClose(true);
    });
  };

  useEffect(() => {
    if (shouldClose) {
      onClose(); // safe to run outside render/animation phases
    }
  }, [shouldClose]);

  return (
    <Animated.View style={[styles.addToCartNoti, { transform: [{ translateY: slideAnim }] }]}>
      <Image source={checkCircle} style={styles.addToCartNotiImg} />
      <Text style={styles.addToCartNotiTxt}>Item has been added to cart</Text>
      <TouchableOpacity onPress={triggerClose}>
        <Image source={close} style={styles.addToCartNotiImg} />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  addToCartNoti: {
    width: 335,
    height: 56,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    backgroundColor: 'white',
    borderLeftColor: 'rgba(16, 185, 129, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 10,
  },
  addToCartNotiTxt: {
    fontFamily: 'IBMPlexSans-Medium',
    color: 'rgba(51, 65, 85, 1)',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  addToCartNotiImg: {
    height: 24,
    width: 24,
  },
});
