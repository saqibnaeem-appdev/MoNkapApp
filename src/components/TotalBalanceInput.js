import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Image,
  } from "react-native";
  import React, { useState } from "react";
  const window = Dimensions.get("window");
  const { width, height } = window;
  import HeaderCom from "../components/HeaderCom";
  import HeaderHome from "../components/HomeHeader";
  import {
    MaterialCommunityIcons,
    FontAwesome,
    MaterialIcons,
    AntDesign,
    Entypo,
  } from "@expo/vector-icons";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import MyImage from "../components/ImageCompo";
  import Colors from "../../assets/theme/Colors";
  import HomeList from "../components/HomeList";

const TotalBalanceInput = ({text}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState("Muhammad Zia");
  return (
    <View>
        <View>
          <TextInput
            onChangeText={(val) => setValue(val)}
            value={value}
            secureTextEntry={!showPassword}
            style={{
              height: height / 10,
              width: width / 1.2,
              alignSelf: "flex-end",
              fontSize: showPassword ? 35 : 60,
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 40,
              top: 50,
            }}
          >
            <Text>{showPassword ? "Show" : "Show"}</Text>
            <Entypo name="eye" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#959595",
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            {text}
          </Text>
        </View>
      </View>
  )
}

export default TotalBalanceInput

const styles = StyleSheet.create({})