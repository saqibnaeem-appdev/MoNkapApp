/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Colors from "../../assets/theme/Colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const textInput = ({
  placeholder,
  text,
  value,
  onChangeText,
  height,
  textAlignVertical,
  backgroundColor,
  borderWidth,
  borderRadius,
  phonepad,
  secureTextEntry,
  editable,
  selectTextOnFocus,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder={placeholder}
          keyboardType={phonepad && "phone-pad"}
          placeholderTextColor={Colors.lightText}
          secureTextEntry={secureTextEntry}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          style={[
            styles.textInput,
            { height: height ? height : hp("7%") },
            {
              backgroundColor: backgroundColor ? backgroundColor : Colors.white,
            },
            { borderWidth: borderWidth ? borderWidth : null },
            { borderRadius: borderRadius ? borderRadius : 5 },
          ]}
          value={value}
          onChangeText={onChangeText}
          textAlignVertical={textAlignVertical}
        />
      </View>
    </View>
  );
};

export default textInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  secondView: {
    bottom: hp("1%"),
  },
  textInput: {
    paddingLeft: wp("5%"),
    width: wp("88%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  textStyle: {
    fontSize: 15,
    // color: Colors.titleColor,
    fontWeight: "500",
    // fontFamily: 'FontsFree-Net-Montserrat-Medium',
  },
});
