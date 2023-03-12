import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const RecentImage = ({text,url}) => {

  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    <Text style={{fontSize:11,textAlign:'center',fontWeight:'400',lineHeight:15,fontFamily:'"Gentium-Basic"'}}>{text}</Text>
  </TouchableOpacity>
  )
}

export default RecentImage

const styles = StyleSheet.create({})