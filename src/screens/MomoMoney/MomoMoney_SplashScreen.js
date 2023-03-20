/** @format */

import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../../assets/theme/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const MomoMoneySplashScreen = () => {
  let [fontsLoaded] = useFonts({
    "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/MomoMoney.png")}
        style={{ flex: 1 }}
      >
        <View style={styles.iconView}>
          <Ionicons
            name="chevron-back"
            size={30}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Image
            source={require("../../../assets/MTNLogo.png")}
            style={styles.imageStyle}
          />
        </View>

        <View style={styles.HeaderTextView}>
          <Text style={styles.headerTextStyle}>
            Welcome To MTM Mobile Money
          </Text>
        </View>
        <View style={styles.buttonMainView}>
          <View style={styles.buttonsView}>
            <TouchableOpacity
              onPress={() => navigation.navigate("MomoMoneyRegistration")}
            >
              <View style={styles.textView}>
                <Text style={styles.textStyle}>Register</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("MomoMoneyHomeScreen")}
            >
              <View style={styles.textView}>
                <Text style={styles.textStyle}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MomoMoneySplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconView: {
    // backgroundColor: "red",
    position: "relative",
    flexDirection: "row",
    marginTop: "5%",
  },
  imageStyle: {
    width: 60,
    height: 50,
    borderRadius: 5,
  },
  HeaderTextView: {
    width: "90%",
    height: "20%",
    // backgroundColor: "red",
    alignSelf: "center",
  },
  headerTextStyle: {
    fontSize: 42,
    textAlign: "center",
    fontFamily: "Gentium-Basic-Bold",
  },
  buttonsView: {
    flexDirection: "row",
    width: wp("60%"),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  textView: {
    borderBottomWidth: 2,
    borderColor: Colors.MomoMoneySecondry,
    top: 2,
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "Gentium-Basic-Bold",
    color: Colors.white,
    fontWeight: "600",
    color: Colors.MomoMoneySecondry,
  },
  buttonMainView: {
    height: hp("70%"),
    justifyContent: "center",
  },
});
