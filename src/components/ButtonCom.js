/** @format */

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../../assets/theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ButtonCom = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.textStyle}>Next</Text>
    </TouchableOpacity>
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
});
