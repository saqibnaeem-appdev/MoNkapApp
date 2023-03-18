/** @format */

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ButtonCom from "../../components/ButtonCom";
const ScannerScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/QRScanner.png")}
        style={styles.imageStyle}
      />
      <View style={styles.ScanButtonView}>
        <ButtonCom
          text={"SCAN NOW"}
          button={"momo"}
          // onPress={() => navigation.navigate("OMoneyvalidationsuccessful")}
        />
      </View>
    </View>
  );
};

export default ScannerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: wp("80%"),
    height: hp("42%"),
  },
  ScanButtonView: {
    marginTop: hp("5%"),
  },
});
