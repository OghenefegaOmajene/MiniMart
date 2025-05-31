import { View, Text } from 'react-native'
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
            position: "absolute",
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

        <Tabs.Screen 
            name="Home"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <HomeIconActive /> : <HomeIcon />,
            }}
        />

        <Tabs.Screen 
            name="Cart"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <CartIconActive /> : <CartIcon />,
            }}
        />
        <Tabs.Screen 
            name="Favorites"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <FavoriteIconActive /> : <FavoriteIcon />,
            }}
        />
        <Tabs.Screen 
            name="Profile"
            options={{
              tabBarIcon: ({ focused }) =>
              focused ? <ProfileIconActive /> : <ProfileIcon />,
            }}
        />
    </Tabs>
  )
}