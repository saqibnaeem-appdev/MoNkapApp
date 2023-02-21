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
import TextInputCom from "../../components/TextInputCom";
import CountryPhonePicker from "../../components/CountryPhonePicker";
import ButtonCom from "../../components/ButtonCom";
import { useNavigation } from "@react-navigation/native";
const OMoney_registration = () => {
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
            <Text style={styles.textStyle}>
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
          <CountryPhonePicker
            text={"Enter an MTN MoMo Number"}
            belowText={"A four (6) digit code will be sent to this number"}
            borderWidth={1}
            borderColor={Colors.OMoneySecondary}
            borderRadius={5}
          />
          <TextInputCom
            placeholder={"Enter Your MoMo PIN Code"}
            text={"Enter Your Pin Code"}
            borderColor={Colors.OMoneySecondary}
            borderWidth={1}
            belowText={
              "Your Security is our priority. All new customers must enter their PIN so we can verify their MoMo accounts."
            }
          />
          <View style={styles.belowButtonStyle}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.buttonUperTextStyle}>
                I have already registered.
              </Text>
              <Text
                style={[
                  styles.buttonUperTextStyle,
                  {
                    color: Colors.green,
                    textDecorationLine: "underline",
                  },
                ]}
              >
                Remember me
              </Text>
            </View>
            <ButtonCom
              text={"Continue"}
              button={"yellow"}
              onPress={() => navigation.navigate("OMoneyvalidation")}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default OMoney_registration;

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
    color: Colors.secondary,
    textAlign: "center",
    fontFamily: "Gentium-Basic-italic",
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
  },
  belowButtonStyle: {
    alignContent: "center",
    alignItems: "center",
    top: hp("5%"),
  },
});
