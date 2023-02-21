/** @format */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import HeaderCom from "../../components/HeaderCom";
import TextInputCom from "../../components/TextInputCom";
import ButtonCom from "../../components/ButtonCom";
import Colors from "../../../assets/theme/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CountryPhonePicker from "../../components/CountryPhonePicker";
const LoginScreen = ({ navigation }) => {
  const [Phone, setPhone] = useState(true);
  const [email, setEmail] = useState(true);
  const [isActive, setIsActive] = useState("Little");
  const handlePhone = () => {
    setPhone(true);
    setEmail(false);
  };
  const handleEmail = () => {
    setPhone(false);
    setEmail(true);
  };
  return (
    <SafeAreaView>
      <HeaderCom text={"Login"} onPressLeft={() => navigation.goBack()} />
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          top: hp("7%"),
          marginBottom: hp("1.7%"),
          // width: wp("100%"),
          alignSelf: "center",
          width: wp("50%"),
          backgroundColor: "red",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            alignSelf: "center",
            width: wp("25%"),
          }}
        >
          <TouchableOpacity onPress={handlePhone}>
            <Text
              style={
                isActive && Phone ? styles.activeButton : styles.inactiveButton
              }
            >
              Phone
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "yellow",
            alignSelf: "center",
            width: wp("25%"),
          }}
        >
          <TouchableOpacity onPress={handleEmail}>
            <Text
              style={
                isActive && email ? styles.activeButton : styles.inactiveButton
              }
            >
              Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {Phone == true ? (
        <>
          <View style={styles.textInputViewStyle}>
            <CountryPhonePicker />
            <TextInputCom
              text={"Enter Your Pincode"}
              placeholder={"Enter pincode"}
            />
          </View>
          <View style={styles.ButtonViewStyle}>
            <ButtonCom />
          </View>
        </>
      ) : (
        <>
          <View style={styles.textInputViewStyle}>
            <TextInputCom
              text={"Enter Your e-mail"}
              placeholder={"Enter email"}
            />
            <TextInputCom
              text={"Enter Your Password"}
              placeholder={"Enter password"}
            />
          </View>
          <View style={styles.ButtonViewStyle}>{/* <ButtonCom /> */}</View>
        </>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "red",
  },
  textInputViewStyle: {
    alignSelf: "center",
    padding: 10,
    height: hp("40%"),
  },
  ButtonViewStyle: {
    alignSelf: "center",
    marginTop: "10%",
  },
  inactiveButton: {
    // color: Colors.lightText,
    fontFamily: "Poppins-Regular",
    paddingBottom: hp("1%"),
    fontSize: 14,
    fontWeight: "700",
    marginTop: hp("2%"),
    width: wp("50%"),
    textAlign: "center",
  },
  activeButton: {
    color: Colors.textColor,
    // fontFamily: "Poppins-Regular",
    borderBottomWidth: 2,
    borderBottomColor: Colors.textColor,
    paddingBottom: hp("1%"),
    fontSize: 14,
    textAlign: "center",
    fontWeight: "700",
    width: wp("12%"),
    marginTop: hp("2%"),
  },
  CountryPhonePickerView: {
    width: "100%",
    height: "30%",
    marginTop: "5%",
  },
});
