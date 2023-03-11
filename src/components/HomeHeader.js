import { StyleSheet, Text, View, Image, } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
const window = Dimensions.get("window");
const { width, height } = window;
import { Entypo, FontAwesome, AntDesign, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import IconCompo from "./IconCompo";

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";



const HeaderHome = () => {
  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const navigation = useNavigation();
  return (
    <>
     <TouchableOpacity
          style={{ marginLeft: width / 20 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
      {/* <AntDesign size={25} name={"arrowleft"} style={{marginHorizontal:wp('2%'), padding:5}} /> */}
      <View style={styles.header}>
        <View>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30, fontFamily:'Gentium-Basic-Bold' }}>
              eWallet
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerIcon}>
          <TouchableOpacity style={styles.icon}>
            <Image
              style={{ width: wp('8%'), height: hp('4') }}
              source={require("../../assets/profile.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    // marginVertical: 30,
    alignItems: "center",
    // backgroundColor:'white'
  },
  headerIcon: {
    width: width / 3.5,
    // backgroundColor:'green',
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 2,
  },
  icon: {
    // alignSelf:'center',
    padding: 7,
    borderRadius: 50,
    // borderWidth:1,
    marginLeft: width / 4,
  },
  //   header: {
  //     backgroundColor: '#00BFFF',
  //   },
});
