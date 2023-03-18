/** @format */

import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ProfileTextInputComponent from "../../components/ProfileTextInputComponent";
import Colors from "../../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
const CoverPhoto = () => {
  let [fontsLoaded] = useFonts({
    "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/imageBackGround.png")}
        style={styles.secondContainer}
      >
        <View
          style={{
            position: "absolute",
            bottom: -35,
            left: wp("6%"),
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../../assets/user.png")}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
          <View
            style={{ flexDirection: "column", left: 5, marginTop: hp("2%") }}
          >
            <Text style={styles.textStyle}>Kalson TAWA</Text>
            <Text
              style={[styles.textStyle, { fontSize: 14, color: Colors.black }]}
            >
              Last visit 23/08/2022
            </Text>
          </View>
          <View
            style={{
              height: hp("3%"),
              marginLeft: wp("10%"),
              top: hp("5%"),
              borderBottomWidth: 1,
            }}
          >
            <Text
              style={[styles.textStyle, { fontSize: 16, color: Colors.black }]}
            >
              Edit Profile
            </Text>
          </View>
        </View>

        {/* <View style={styles.TriangleShapeView} />
        <View style={styles.TriangleShapeView} /> */}
      </ImageBackground>
      <View
        style={{
          height: hp("55%"),
          marginTop: hp("8%"),
        }}
      >
        <ProfileTextInputComponent
          placeholder={"Kalson TAWA"}
          text={"Your name"}
        />
        <ProfileTextInputComponent
          placeholder={"+237 94 37 94 85"}
          text={"Your  phone number"}
        />
        <ProfileTextInputComponent
          placeholder={"*********"}
          text={"Password/ pincode"}
          secureTextEntry={true}
        />
        <ProfileTextInputComponent
          placeholder={"Buea,  SouthWest"}
          text={"City, Region"}
        />
        <ProfileTextInputComponent placeholder={"Cameroon"} text={"Country"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0073b1",
  },
  secondContainer: {
    height: hp("16%"),
    width: wp("100%"),
  },
  TriangleShapeView: {
    //To make Triangle Shape
    overflow: "hidden",
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 150,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: Colors.OMoneySecondary,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: "Gentium-Basic-italic",
  },
});

export default CoverPhoto;
