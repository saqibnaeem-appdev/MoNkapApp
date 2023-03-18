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
const MomoMoneyvalidation = () => {
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
            <Text style={[styles.textStyle, { color: Colors.secondary }]}>
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
          <View>
            <Text style={styles.textStyle}>
              Enter the four(4) digit code we sent to
            </Text>
            <Text style={styles.textStyle}>694379485</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <OtpInput />
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonUperTextStyle}>
                Didn’t receive the code.
              </Text>
              <Text
                style={[
                  styles.buttonUperTextStyle,
                  {
                    color: Colors.secondary,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                RESEND CODE
              </Text>
            </View>
          </View>

          <View style={{ marginTop: hp("5%") }}>
            <Text style={styles.textStyle}>
              Almost done!! Pls enter the security code we have sent to your
              phone to complete your registration.
            </Text>
          </View>
          <View style={styles.belowButtonStyle}>
            <ButtonCom
              text={"Continue"}
              button={"momo"}
              onPress={() =>
                navigation.navigate("MomoMoneyvalidationsuccessful")
              }
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default MomoMoneyvalidation;

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
    fontSize: 15,
    color: Colors.textColor,
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
