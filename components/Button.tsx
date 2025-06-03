import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button(props: { btnName: string; onPress: () => void }) {
  return (
    <View style={buttonStyles.buttonContainer}>
        <TouchableOpacity style={buttonStyles.button} onPress={props.onPress}>
          <Text style={buttonStyles.buttonTxt}>{props.btnName}</Text>
        </TouchableOpacity>
    </View>
  )
}

const buttonStyles = StyleSheet.create({
  buttonContainer:{
    width: 375,
    height: 94,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "white",
    position: "fixed",
    bottom: 0,
    paddingTop: 10
  },
  button: {
    backgroundColor: "rgba(96, 181, 255, 1)",
    width: 343,
    height: 40,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTxt: {
    fontFamily: "IBMPlexSans-Medium",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: 14, 
    lineHeight: 20
  }
})