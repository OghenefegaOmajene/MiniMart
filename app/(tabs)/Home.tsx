import { View, Text, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import BackNavigation from '@/components/BackNavigation'

export default function Home() {
  return (
    <>
      <Header></Header>
      <BackNavigation 
        text="Technology"  // Required string prop
        goToHome={true}  // Optional press handler
      />

      <Text style={homeStyles.smartphoneTxt}>Smartphones, Laptops & Assecories</Text>
    </>
  )
}

const homeStyles = StyleSheet.create({
  smartphoneTxt:{
    width: 254,
    height: 46,
    left: 16,
    fontSize: 18,
    fontWeight: 500,
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(0, 0, 0, 1)"
  }
})