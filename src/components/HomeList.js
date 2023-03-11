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
import Colors from "../../assets/theme/Colors";
import DividerCompo from "./DividerCompo";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const HomeList = ({url,text,onPress}) => {

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
    <View style={styles.HomeListParent}>
      <View style={styles.HomeListChild}>
        <View style={styles.ImageParent}>
          <Image
            style={styles.ImageStyle}
            source={url}
          />
          <Text style={styles.HomeListText}>{text}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="right" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      {/* <DividerCompo /> */}
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  HomeListParent: {
    width: wp("90%"),
    padding:3,
    // height: hp("12%"),
    // backgroundColor: "red",
    alignSelf: "center",
    borderBottomWidth:1,
    borderBottomColor:'#959595',
  },
  HomeListChild: {
    // height:hp('10%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:7,
  },
  ImageParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,

  },
  ImageStyle: { width: wp("12%"), height: hp("6%") ,borderRadius:10},
  HomeListText: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.white,
    fontWeight: "500",
    marginHorizontal:10,
    fontFamily:'Poppins',
  },
});
