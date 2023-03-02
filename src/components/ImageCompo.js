import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/theme/Colors";
import { AntDesign } from "@expo/vector-icons";

const MyImage = ({ text, url, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <View
          style={{
            backgroundColor: Colors.secondary,
            width: wp("15%"),
            height: hp("7.5%"),
            padding: 10,
            borderRadius: 10,
          }}
        >
          {icon =='icon' ? (
            <AntDesign name="download" color={"white"} size={35} />
          ) : (
            <Image style={{ alignSelf: "center" }} source={url} />
          )}
        </View>

        <Text style={{ textAlign: "center", color: Colors.textColor }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyImage;
