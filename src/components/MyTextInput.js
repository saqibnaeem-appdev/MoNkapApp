import { StyleSheet, Text, View, TextInput } from "react-native";
import React,{useState} from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const MyTextInput = ({text,placeholder,width}) => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "400" }}>{text}</Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp('90%'),
          borderWidth: 1,
          borderColor: "blue",
          height: hp("5%"),
          borderRadius: 5,
          paddingHorizontal:10,
        }}
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
