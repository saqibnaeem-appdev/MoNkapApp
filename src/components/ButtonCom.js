/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ButtonCom = ({ button, text, onPress }) => {
  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {button == "yellow" ? (
        <TouchableOpacity style={styles.yellowContainer} onPress={onPress}>
          <Text style={styles.YellowBtnTextStyle}>{text}</Text>
        </TouchableOpacity>
      ) : button == "momo" ? (
        <TouchableOpacity style={styles.MomoContainer} onPress={onPress}>
          <Text style={styles.YellowBtnTextStyle}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.container}>
          <Text style={styles.textStyle}>Next</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ButtonCom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: wp("88%"),
    height: hp("8%"),
    borderRadius: 5,
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    color: Colors.white,
    fontSize: 25,
    fontFamily: "GentiumBookBasicbold",
  },
  YellowBtnTextStyle: {
    fontFamily: "Gentium-Basic-Bold",
    fontSize: 20,
    alignSelf: "center",
    color: Colors.textColor,
  },
  yellowContainer: {
    backgroundColor: Colors.OMoneySecondary,
    width: wp("80%"),
    height: hp("6%"),
    borderRadius: 10,
    justifyContent: "center",
  },
  MomoContainer: {
    backgroundColor: Colors.MomoMoneySecondry,
    width: wp("80%"),
    height: hp("6%"),
    borderRadius: 10,
    justifyContent: "center",
  },
});
