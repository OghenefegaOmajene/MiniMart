import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'IBMPlexSans-Regular': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBMPlexSans-Medium': require('../assets/fonts/IBMPlexSans-Medium.ttf'),
    'IBMPlexSans-Bold': require('../assets/fonts/IBMPlexSans-Bold.ttf'),
    'IBMPlexMono-Medium': require('../assets/fonts/IBMPlexMono-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
