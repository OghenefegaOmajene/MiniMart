import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import { HomeIcon } from "../../components/icons/HomeIcon";
import { HomeIconActive } from "../../components/icons/HomeIconActive";
import { CartIcon } from "../../components/icons/CartIcon";
import { CartIconActive } from "../../components/icons/CartIconActive";
import { FavoriteIconActive } from '@/components/icons/FavoriteIconActive';
import { FavoriteIcon } from '@/components/icons/FavoriteIcon';
import { ProfileIconActive } from '@/components/icons/ProfileIconActive';
import { ProfileIcon } from '@/components/icons/ProfileIcon';
// import {COLORS} from "@/constants/theme"

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderTopWidth: 0,
            position: "fixed",
            elevation: 0,
            height: 90,
            // display: "flex",
            // gap: 4,
            // paddingBottom: 8,
          },
          tabBarLabelStyle: {
            fontFamily: "IBMPlexSans-Medium",
            fontSize: 12,
            fontWeight: 500,
          },
          tabBarActiveTintColor: "#60b5ff",
          tabBarInactiveTintColor: "#49454F",
            // tabBarActiveTintColor: Colors.primary
        }}
    >
        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => alert('Added to Cart')}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View> */}

        <Tabs.Screen 
            name="Home"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <HomeIconActive /> : <HomeIcon />,
            }}
        />

        {/* <Tabs.Screen 
            name="Cart"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <CartIconActive /> : <CartIcon />,
            }}
        /> */}

        <Tabs.Screen 
          name="Cart"
          options={{
            tabBarStyle: { display: 'none' }, // hides tab bar on this screen
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            focused ? <CartIconActive /> : <CartIcon />,
          }}
        />

        <Tabs.Screen 
          name="Favorites"
          options={{
            tabBarStyle: { display: 'none' }, // hides tab bar on this screen
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? <FavoriteIconActive /> : <FavoriteIcon />,
          }}
        />
        {/* <Tabs.Screen 
            name="Favorites"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <FavoriteIconActive /> : <FavoriteIcon />,
            }}
        /> */}
        <Tabs.Screen 
            name="Profile"
            options={{
              tabBarStyle: { display: 'none' },
              tabBarIcon: ({ focused }) =>
              focused ? <ProfileIconActive /> : <ProfileIcon />,
            }}
        />
    </Tabs>
  )
}


const styles = StyleSheet.create({
  buttonContainer: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  padding: 20,
  borderTopWidth: 1,
  borderColor: '#e0e0e0',
},
addToCartButton: {
  backgroundColor: '#60b5ff',
  paddingVertical: 15,
  borderRadius: 10,
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

})