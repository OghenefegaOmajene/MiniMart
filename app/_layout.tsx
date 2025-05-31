// import { Stack } from 'expo-router';
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// // import 'react-native-reanimated';

// export default function RootLayout() {
//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
//         <Stack screenOptions={{headerShown: false}}/>
//           {/* <Stack.Screen name="index" options={{headerShown: false}}/>
//           <Stack.Screen name="notifications" options={{headerShown: true, title: "Notifications"}}/> */}

//       </SafeAreaView>
//     </SafeAreaProvider>

//   );
// }

import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'IBMPlexSans-Regular': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBMPlexSans-Medium': require('../assets/fonts/IBMPlexSans-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
