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
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const TotalBalanceInput = ({ text }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("Muhammad Zia");

  let [fontsLoaded] = useFonts({
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <View style={{ width: wp("80%"), alignSelf: "center" }}>
        <TextInput
          onChangeText={(val) => setValue(val)}
          value={value}
          secureTextEntry={!showPassword}
          style={{
            paddingStart: showPassword ? 20 : 40,
            height: height / 11,
            width: width / 1.4,
            alignSelf: "flex-end",
            fontSize: showPassword ? 30 : 40,
          }}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: 10,
            top: 40,
          }}
        >
          <Text style={styles.eyeText}>{showPassword ? "Show" : "Show"}</Text>
          <Entypo name="eye" size={25} />
        </TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default TotalBalanceInput;

const styles = StyleSheet.create({
  text: {
    color: "#959595",
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Gentium-Basic",
  },
  eyeText: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Gentium-Basic",
  },
});
