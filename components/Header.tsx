import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React from 'react';
import notificationIcon from '../assets/images/notificationIcon.png';
import Search from './Search';

export default function Header({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <View style={styles.Header}>

      <View style={styles.headerDetails}>

        <View style={styles.headerNav}>

            <View style={styles.logo}>
                <Text style={styles.logoTxt}>Full Logo</Text>
            </View>

            <Text style={styles.deliveryAddress}>DELIVERY ADDRESS</Text>

            <ImageBackground source={notificationIcon} resizeMode="cover" style={styles.notificationIcon}/>

        </View>

        <View style={styles.headerAddress}>
            <Text style={styles.umezikeTxt}>Umezike Road, Oyo State</Text>
        </View>

      </View>
      
      {showSearch && <Search />}
    </View>
  )
}

const styles = StyleSheet.create({
  Header: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: "center",
    width: 375,
    height: "auto",
    // height: 128,
    borderBottomWidth: 1,
    borderColor: "rgba(226, 232, 240, 1)",
  },
  headerDetails:{
    // gap: 16,
    display: "flex",
    flexDirection: "column",
    width: 327,
    height: 52,
    // backgroundColor: "red"
  },
  headerNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "coral",
    height: 28,
  },
  headerAddress:{
    width: 327,
    height: 28,
    // backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  deliveryAddress:{
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 10,
    fontWeight: 600,
    color: "rgba(51, 65, 85, 1)"
  },

  logo:{
    width: 56,
    height: 28,
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    borderWidth: 0.88,
    borderStyle: "dashed",
    borderColor: "rgba(37, 99, 235, 1)",
    backgroundColor: "rgba(147, 197, 253, 1)"
  },
  logoTxt:{
    width: 47,
    height: 14,
    fontSize: 10.5,
    fontWeight: 600,
    color: "rgba(37, 99, 235, 1)"
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
  umezikeTxt: {
    color: "rgba(51, 65, 85, 1)"
  },
  
});