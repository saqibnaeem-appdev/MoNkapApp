/** @format */

import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/theme/Colors";
import { AntDesign } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const MyImage = ({ text, url, onPress, icon, style, ViewStyle }) => {
  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
    "PopLight300": require("../../assets/fonts/Poppins_regular.ttf"),
    "Poppins": require("../../assets/fonts/Poppins.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View
          style={
            ViewStyle
              ? null
              : {
                  backgroundColor: Colors.secondary,
                  width: wp("15%"),
                  height: hp("7.5%"),
                  padding: 10,
                  borderRadius: 10,
                }
          }
        >
          {icon == "icon" ? (
            <AntDesign name="download" color={"white"} size={35} />
          ) : (
            <Image
              style={[{ alignSelf: "center" }, { ...style }]}
              source={url}
            />
          )}
        </View>

        <Text style={{ textAlign: "center", fontFamily:'Poppins', fontSize:13,lineHeight:19.5,fontWeight:'400', color: Colors.textColor }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyImage;
