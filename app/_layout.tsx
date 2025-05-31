import { Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
        <Stack screenOptions={{headerShown: false}}/>
          {/* <Stack.Screen name="index" options={{headerShown: false}}/>
          <Stack.Screen name="notifications" options={{headerShown: true, title: "Notifications"}}/> */}

      </SafeAreaView>
    </SafeAreaProvider>

  );
}
