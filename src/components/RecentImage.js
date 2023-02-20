import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const RecentImage = ({text,url}) => {
  return (
    <TouchableOpacity
    style={{ padding: 5, marginHorizontal: 2, width: wp("22%") }}
  >
    <Image
      style={{
        width: wp("12%"),
        height: hp("6.5%"),
        marginHorizontal: 10,
        borderRadius:50
      }}
      source={url}
    />
    <Text style={{fontSize:12,textAlign:'center'}}>{text}</Text>
  </TouchableOpacity>
  )
}

export default RecentImage

const styles = StyleSheet.create({})