/** @format */

import React, { useState, useRef } from "react";
import { View, Text, Alert, StyleSheet, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Colors from "../../assets/theme/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const CountryPhonePicker = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>Enter Your Phone Number</Text>
      </View>
      <PhoneInput
        ref={phoneInput}
        placeholder={"Enter phone number"}
        defaultValue={phoneNumber}
        defaultCode="CM"
        layout="second"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        // onChangeFormattedText={(text) => {
        //   setphoneNumber(text);
        // }}
      />
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
});
