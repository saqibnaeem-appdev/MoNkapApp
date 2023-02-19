import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const DividerCompo = () => {
  return (
    <View
    style={{
      width: wp("90%"),
      height: hp("0.1%"),
      backgroundColor: "#959595",
      marginTop: 5,
    }}
  ></View>
  )
}

export default DividerCompo

const styles = StyleSheet.create({})