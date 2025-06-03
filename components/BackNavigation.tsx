import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import backIcon from '../assets/images/chevron-left.png';
import { useNavigation } from '@react-navigation/native';

type BackNavigationProps = {
  text: string;
  onPress?: () => void; // Optional custom press handler
  goToHome?: boolean;   // New prop to determine if we should go to Home
};

export default function BackNavigation({ text, onPress, goToHome = false }: BackNavigationProps) {
  const navigation = useNavigation(); // Get navigation object

  const handlePress = () => {
    if (onPress) {
      onPress(); // Use custom handler if provided
    } else if (goToHome) {
      navigation.navigate('Home'); // Navigate to Home tab
    } else {
      navigation.goBack(); // Default back behavior
    }
  };

  return (
    <TouchableOpacity 
      style={backStyles.backComponent} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <ImageBackground 
        source={backIcon} 
        resizeMode="cover" 
        style={backStyles.backIcon}
      />
      <Text style={backStyles.backTxt}>{text}</Text>
    </TouchableOpacity>
  );
}

const backStyles = StyleSheet.create({
    backComponent: {
    width: 374,
    height: 44,
    padding: 10,
    gap: 10,
    display: "flex",
    flexDirection: "row",
    borderBottomWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(245, 245, 245, 1)"
  },
  backIcon: {
    width: 24,
    height: 24
  },
  backTxt: {
    width: 96,
    height: 23,
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 18, 
    fontWeight: 700,
    color: "rgba(0, 0, 0, 1)"
    }
})