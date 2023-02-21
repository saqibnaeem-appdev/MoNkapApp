/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DividerCompo = () => {
  return (
    <View
      style={{
        width: wp("90%"),
        height: hp("0.2%"),
        backgroundColor: "#959595",
        marginTop: 5,
        alignSelf: "center",
      }}
    ></View>
  );
};

export default DividerCompo;

const styles = StyleSheet.create({});
