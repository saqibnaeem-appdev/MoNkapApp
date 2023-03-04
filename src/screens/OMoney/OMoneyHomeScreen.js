/** @format */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const window = Dimensions.get("window");
const { width, height } = window;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import DividerCompo from "../../components/DividerCompo";
import ModalCom from "./../../components/ModalCom";
const OMoneyHomeScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("25 548 000");
  const [modalVisible, setModalVisible] = useState(false);
  const handleIconPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
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
      <ModalCom visible={modalVisible} closeModal={closeModal} />
      <ScrollView>
        <View style={styles.ImageTextMainView}>
          <Image
            source={require("../../../assets/OMoneyHomeLogo.png")}
            style={{ width: 100, height: 50, alignSelf: "center" }}
          />
          <View style={styles.TextView}>
            <Text
              style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}
            >
              Hello
            </Text>
            <Text
              style={[
                styles.textStyle,
                { fontSize: 16, color: Colors.textColor },
              ]}
            >
              TAWA
            </Text>
          </View>
          <Text style={styles.textStyle}>Welcome to Awesome!!!!</Text>
        </View>

        <LinearGradient
          colors={[Colors.OMoneySecondary, Colors.OMoneySecondary, Colors.gray]}
          start={{ y: -1, x: -0.3 }}
          style={styles.balanceView}
        >
          <View style={styles.balanceSecondView}>
            <Text style={[styles.textStyle, { color: Colors.textColor }]}>
              Account Balance
            </Text>
            <View style={styles.showBalanceView}>
              <TextInput
                onChangeText={(val) => setValue(val)}
                value={value}
                secureTextEntry={!showPassword}
                style={{
                  height: height / 20,
                  width: wp("40%"),
                  alignSelf: "center",
                  fontSize: showPassword ? 30 : 40,
                  left: wp("15%"),
                }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={{ left: wp("5%") }}>
                  {showPassword ? "Show" : "Show"}
                </Text>
                <Entypo name="eye" size={30} style={{ left: wp("5%") }} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          colors={[Colors.OMoneySecondary, Colors.OMoneySecondary, Colors.gray]}
          start={{ y: -4, x: -0.2 }}
          style={[
            styles.balanceView,
            { height: hp("7%"), marginTop: hp("3%") },
          ]}
        >
          <View
            style={{
              width: wp("80%"),
              justifyContent: "space-between",
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <Image source={require("../../../assets/Watch.png")} />
            <Text
              style={[
                styles.textStyle,
                { color: Colors.textColor, fontSize: 22 },
              ]}
            >
              Recent Transactions
            </Text>
            <Ionicons
              name="chevron-forward"
              size={30}
              color="black"
              onPress={handleIconPress}
            />
          </View>
        </LinearGradient>
        <View style={{ marginTop: "2%" }}>
          <DividerCompo />
        </View>
        <View style={styles.groupBtnView}>
          <LinearGradient
            colors={[
              Colors.OMoneySecondary,
              Colors.OMoneySecondary,
              Colors.gray,
            ]}
            start={{ y: -4, x: -0.2 }}
            style={[
              styles.balanceView,
              {
                width: wp("42%"),
                height: hp("7%"),
                marginTop: hp("3%"),
                alignSelf: "center",
              },
            ]}
          >
            <View
              style={{
                width: wp("40%"),
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: Colors.textColor, fontSize: 25, left: 5 },
                ]}
              >
                Request
              </Text>
              <Image
                source={require("../../../assets/Request.png")}
                style={styles.imageStyle}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={[
              Colors.OMoneySecondary,
              Colors.OMoneySecondary,
              Colors.gray,
            ]}
            start={{ y: -4, x: -0.2 }}
            style={[
              styles.balanceView,
              {
                width: wp("42%"),
                height: hp("7%"),
                marginTop: hp("3%"),
                alignSelf: "center",
              },
            ]}
          >
            <View
              style={{
                width: wp("40%"),
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: Colors.textColor, fontSize: 25, left: 5 },
                ]}
              >
                Transfer
              </Text>
              <Image
                source={require("../../../assets/Transfer.png")}
                style={[
                  styles.imageStyle,
                  { width: wp("9%"), height: hp("5%") },
                ]}
              />
            </View>
          </LinearGradient>
        </View>
        <View style={{ marginTop: "2%" }}>
          <DividerCompo />
        </View>
        <View style={styles.groupBtnView}>
          <LinearGradient
            colors={[
              Colors.OMoneySecondary,
              Colors.OMoneySecondary,
              Colors.gray,
            ]}
            start={{ y: -4, x: -0.2 }}
            style={[
              styles.balanceView,
              {
                width: wp("42%"),
                height: hp("7%"),
                marginTop: hp("3%"),
                alignSelf: "center",
              },
            ]}
          >
            <View
              style={{
                width: wp("40%"),
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: Colors.textColor, fontSize: 25, left: 5 },
                ]}
              >
                Deposit
              </Text>
              <Image
                source={require("../../../assets/Request.png")}
                style={styles.imageStyle}
              />
            </View>
          </LinearGradient>
          <LinearGradient
            colors={[
              Colors.OMoneySecondary,
              Colors.OMoneySecondary,
              Colors.gray,
            ]}
            start={{ y: -4, x: -0.2 }}
            style={[
              styles.balanceView,
              {
                width: wp("42%"),
                height: hp("7%"),
                marginTop: hp("3%"),
                alignSelf: "center",
              },
            ]}
          >
            <View
              style={{
                width: wp("40%"),
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <Text
                style={[
                  styles.textStyle,
                  { color: Colors.textColor, fontSize: 25, left: 5 },
                ]}
              >
                Cash Out
              </Text>
              <Image
                source={require("../../../assets/Transfer.png")}
                style={[
                  styles.imageStyle,
                  { width: wp("9%"), height: hp("5%") },
                ]}
              />
            </View>
          </LinearGradient>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("OMPay")}>
          <LinearGradient
            colors={[
              Colors.OMoneySecondary,
              Colors.OMoneySecondary,
              Colors.gray,
            ]}
            start={{ y: -4, x: -0.2 }}
            style={[
              styles.balanceView,
              { height: hp("7%"), marginTop: hp("3%") },
            ]}
          >
            <View
              style={{
                width: wp("80%"),
                justifyContent: "space-between",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <View style={styles.PayView}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: Colors.textColor,
                      fontSize: 25,
                      fontWeight: "bold",
                    },
                  ]}
                >
                  PAY
                </Text>
              </View>
              <Text
                style={[
                  styles.textStyle,
                  { color: Colors.textColor, fontSize: 22 },
                ]}
              >
                OMoney pAY
              </Text>
              <Image
                source={require("../../../assets/Phone.png")}
                style={[
                  styles.imageStyle,
                  { marginTop: "8%", width: wp("11%") },
                ]}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <LinearGradient
          colors={[Colors.OMoneySecondary, Colors.OMoneySecondary, Colors.gray]}
          start={{ y: -4, x: -0.2 }}
          style={[
            styles.balanceView,
            { height: hp("7%"), marginTop: hp("3%") },
          ]}
        >
          <View
            style={{
              width: wp("80%"),
              justifyContent: "space-between",
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={[
                styles.textStyle,
                { color: Colors.textColor, fontSize: 22 },
              ]}
            >
              OMONEY RECHARGE
            </Text>
            <Image source={require("../../../assets/AirTime.png")} />
            <Image source={require("../../../assets/SMS.png")} />
            <Image source={require("../../../assets/Data.png")} />
          </View>
        </LinearGradient>
        <View style={{ height: hp("5%") }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OMoneyHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  PayView: {
    width: 80,
    height: 80,

    backgroundColor: Colors.OMoneySecondary,
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  ImageTextMainView: {
    width: wp("80%"),
    height: hp("18%"),
    alignSelf: "center",
    marginTop: hp("2%"),
    justifyContent: "center",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "Gentium-Basic-italic",
    color: Colors.secondary,
  },
  imageStyle: { height: hp("5%"), width: wp("10%"), right: wp("3%") },
  TextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("28%"),
    alignSelf: "center",
    marginTop: "2%",
  },
  groupBtnView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: wp("90%"),
  },
  balanceView: {
    width: wp("90%"),
    height: hp("22%"),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  balanceSecondView: {
    width: wp("70%"),
    height: hp("25%"),
    justifyContent: "center",
    alignSelf: "center",
  },
  showBalanceView: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    width: wp("60%"),
  },
});
