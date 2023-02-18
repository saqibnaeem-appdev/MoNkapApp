/** @format */

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import HeaderCom from "../../components/HeaderCom";
import TextInputCom from "../../components/TextInputCom";
import ButtonCom from "../../components/ButtonCom";
import Colors from "../../../assets/theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CountryPhonePicker from "../../components/CountryPhonePicker";
const RegisterScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderCom
        text={"Registration"}
        onPressLeft={() => navigation.goBack()}
      />

      <ScrollView
        style={{ flex: 1, padding: 20, alignSelf: "center", width: wp("100%") }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
        >
          <View>
            <CountryPhonePicker />
            <Text style={{ alignSelf: "center" }}>
              A verification code will be sent to this number
            </Text>
          </View>

          <TextInputCom
            text={"Enter Your e-mail"}
            placeholder={"Enter email"}
          />
          <TextInputCom
            text={"Enter Your e-mail"}
            placeholder={"Enter email"}
          />
          <TextInputCom
            text={"Enter Your e-mail"}
            placeholder={"Enter email"}
          />
          <TextInputCom
            text={"Enter Your e-mail"}
            placeholder={"Enter email"}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputViewStyle: {
    alignSelf: "center",
    // justifyContent: "flex-start",
    // marginTop: hp("20%"),
    // flex: 1,
    // padding: 10,
    // height: hp("100%"),
  },
});
