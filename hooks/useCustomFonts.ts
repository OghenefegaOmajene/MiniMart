import { useFonts } from 'expo-font';

export const useCustomFonts = () =>
  useFonts({
    'IBMPlexSans-Regular': require('../assets/fonts/IBMPlexSans-Regular.ttf'),
    'IBMPlexSans-Medium': require('../assets/fonts/IBMPlexSans-Medium.ttf'),
    'IBMPlexMono-Regular': require('../assets/fonts/IBMPlexMono-Regular.ttf'),
});
