/** @format */

import React, { useState, useRef } from "react";
import { View, Text, Alert, StyleSheet, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Colors from "../../assets/theme/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const CountryPhonePicker = ({
  text,
  belowText,
  borderWidth,
  borderRadius,
  borderColor,
}) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);
  let [fontsLoaded] = useFonts({
    "Gentium-Basic-italic": require("../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <PhoneInput
        ref={phoneInput}
        placeholder={"Enter phone number"}
        defaultValue={phoneNumber}
        defaultCode="CM"
        layout="second"
        withShadow
        autoFocus
        containerStyle={[
          styles.phoneContainer,
          { borderWidth: borderWidth ? borderWidth : null },
          { borderRadius: borderRadius ? borderRadius : 5 },
          { borderColor: borderColor ? borderColor : null },
        ]}
        textContainerStyle={styles.textInput}
        // onChangeFormattedText={(text) => {
        //   setphoneNumber(text);
        // }}
      />
      <Text style={styles.belowTextStyle}>{belowText}</Text>
    </View>
  );
};

export default CountryPhonePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  phoneContainer: {
    width: wp("88%"),
    height: hp("7%"),
  },

  textInput: {
    paddingVertical: 0,
  },
  secondView: {
    bottom: hp("1%"),
  },
  textStyle: {
    fontSize: 15,
    // color: Colors.titleColor,
    fontWeight: "500",
    // fontFamily: 'FontsFree-Net-Montserrat-Medium',
  },
  belowTextStyle: {
    alignSelf: "center",
    fontSize: 13,
    marginTop: 2,
    color: Colors.textColor,
    fontFamily: "Gentium-Basic-italic",
  },
});
