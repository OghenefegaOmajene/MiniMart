import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import {Ionicons} from "@expo/vector-icons"
import { HomeIcon } from "@/components/icons/HomeIcon";
import { HomeIconActive } from "@/components/icons/HomeIconActive";
// import {COLORS} from "@/constants/theme"

export default function TabLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle:{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderTopWidth: 0,
                position: "absolute",
                elevation: 0,
                height: 90,
                paddingBottom: 8,
            }
            // tabBarActiveTintColor: Colors.primary
        }}
    >

        <Tabs.Screen 
            name="HomePage"
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
            }}
        />

        <Tabs.Screen 
            name="Cart"
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="add-outline" size={size} color={color}/>
            }}
        />
        <Tabs.Screen 
            name="Favorites"
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="chatbox-ellipses-outline" size={size} color={color}/>
            }}
        />
        <Tabs.Screen 
            name="Profile"
            options={{
                tabBarIcon: ({size, color}) => <Ionicons name="person-circle-outline" size={size} color={color}/>
            }}
        />
    </Tabs>
  )
}