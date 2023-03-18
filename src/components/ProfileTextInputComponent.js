/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Colors from "../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ProfileTextInputComponent = ({
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
  borderColor,
  belowText,
}) => {
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
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder={placeholder}
          keyboardType={phonepad && "phone-pad"}
          placeholderTextColor={Colors.lightText}
          secureTextEntry={secureTextEntry}
          editable={editable}
          selectTextOnFocus={selectTextOnFocus}
          style={[styles.textInput, { height: height ? height : hp("5%") }]}
          value={value}
          onChangeText={onChangeText}
          textAlignVertical={textAlignVertical}
        />
      </View>
    </View>
  );
};

export default ProfileTextInputComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
  secondView: {
    bottom: hp("1%"),
  },
  textInput: {
    paddingLeft: wp("3%"),
    width: wp("88%"),
    borderBottomWidth: 1,
  },
  textStyle: {
    fontSize: 15,
    // color: Colors.titleColor,
    fontWeight: "500",
    fontFamily: "Gentium-Basic-italic",
  },
});
