/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/theme/Colors";

const MyTextInput = ({ text, placeholder, width, borderColor }) => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text style={{fontSize:14,fontWeight:'400',lineHeight:20, fontFamily:'Gentium-Basic',color:Colors.black ,letterSpacing:2.5}}>{text}</Text>
      <TextInput
        style={[
          {
            width: width ? wp("80%") : wp("90%"),
            borderWidth: 1,

            height: hp("5%"),
            borderRadius: 5,
            paddingHorizontal: 10,
          },
          {},
          {
            borderColor: borderColor
              ? Colors.OMoneySecondary
              : Colors.blue1,
          },
        ]}
        placeholder={placeholder}
        keyboardType={"default"}
        //   placeholderTextColor={}
        //   secureTextEntry={secureTextEntry}
        //   editable={editable}
        //   selectTextOnFocus={selectTextOnFocus}
        //   style={[
        //     styles.textInput,
        //     { height: height ? height : hp("7%") },
        //     {
        //       backgroundColor: backgroundColor ? backgroundColor : Colors.white,
        //     },
        //     { borderWidth: borderWidth ? borderWidth : null },
        //     { borderRadius: borderRadius ? borderRadius : 5 },
        //   ]}
        value={value}
        onChangeText={() => setValue(value)}
        //   textAlignVertical={textAlignVertical}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
