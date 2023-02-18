/** @format */

import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../../assets/theme/Colors";
import HeaderCom from "../../components/HeaderCom";
import useCustomFonts from "../../../assets/fonts/useCustomFonts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SplashScreenMoNkap = () => {
  const navigation = useNavigation();
  const fontsLoaded = useCustomFonts();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subView}>
        <Text style={styles.textStyle}>Welcome to MoNkap</Text>
        <Text style={[styles.textStyle, { fontSize: 30, fontWeight: "bold" }]}>
          XAF[CFA]
        </Text>
      </View>

      <View style={styles.buttonsView}>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Register</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <View style={styles.textView}>
            <Text style={styles.textStyle}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.lastTextView}>
        <Text style={[styles.textStyle, { fontSize: 15 }]}>
          Cameroon’s Premier Mobile Money App
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.secondary,
    flex: 1,
    justifyContent: "center",
  },
  subView: {
    width: "60%",
    height: hp("20%"),
    // backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
    bottom: hp("20%"),
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "GentiumBookBasic",
    color: Colors.white,
  },
  buttonsView: {
    flexDirection: "row",
    width: wp("60%"),
    justifyContent: "space-between",
    alignSelf: "center",
  },
  lastTextView: {
    top: hp("25%"),
  },
  textView: { borderBottomWidth: 2, borderColor: Colors.white, top: 2 },
});

export default SplashScreenMoNkap;
