/** @format */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import OtpInput from "../../components/OtpCom";
import ButtonCom from "../../components/ButtonCom";
import { useNavigation } from "@react-navigation/native";
const OMoney_validation_successful = () => {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageTextView}>
        <View style={styles.imageTextSecondView}>
          <Image source={require("../../../assets/RegisterScreenImage.png")} />
          <View
            style={{
              width: wp("25%"),
              justifyContent: "center",
            }}
          >
            <Text
              style={[
                styles.textStyle,
                { color: Colors.secondary, fontSize: 15 },
              ]}
            >
              With MoNkap you can manage all your Money Accounts from a signle
              app
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.textInputView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <Text style={styles.textStyle}>Congratulations!!</Text>
          <Text style={[styles.textStyle, { fontSize: 24 }]}>
            Your MoMo Account was Successfully Added to MoNkap
          </Text>
          <View style={styles.belowButtonStyle}>
            <Text
              style={[
                styles.textStyle,
                {
                  fontSize: 24,
                  color: Colors.secondary,
                  marginBottom: hp("3%"),
                },
              ]}
            >
              Add Another MoMo Account
            </Text>
            <ButtonCom
              text={"Continue"}
              button={"yellow"}
              onPress={() => navigation.navigate("OMoneyonmonkapprofile")}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default OMoney_validation_successful;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageTextView: {
    width: wp("95"),
    height: hp("30%"),
    alignSelf: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 40,
    color: Colors.green,
    textAlign: "center",
    fontFamily: "Gentium-Basic-italic",
    alignSelf: "center",
  },
  imageTextSecondView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("80%"),
    alignSelf: "center",
  },
  textInputView: {
    width: wp("90%"),
    height: hp("45%"),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonUperTextStyle: {
    fontSize: 16,
    fontFamily: "Gentium-Basic-italic",
    alignContent: "center",
  },
  belowButtonStyle: {
    alignContent: "center",
    alignItems: "center",
    top: hp("10%"),
  },
});
