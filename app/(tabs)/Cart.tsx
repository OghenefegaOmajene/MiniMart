import Header from '@/components/Header'
import { View, Text } from 'react-native'
import BackNavigation from '@/components/BackNavigation'

export default function Cart() {
  return (
    <>
        <Header></Header>
        <BackNavigation 
            text="Your Cart"  // Required string prop
            goToHome={true}  // Optional press handler
        />
    </>
  )
}