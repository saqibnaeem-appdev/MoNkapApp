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

const HomeList = ({url,text}) => {
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
        <TouchableOpacity>
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
    marginBottom:10,
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
    fontWeight: "bold",
    marginHorizontal:10
  },
});
