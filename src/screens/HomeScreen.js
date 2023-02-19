import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
const window = Dimensions.get("window");
const { width, height } = window;
import HeaderCom from "../components/HeaderCom";
import HeaderHome from "../components/HomeHeader";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MyImage from "../components/ImageCompo";
import Colors from "../../assets/theme/Colors";
import HomeList from "../components/HomeList";

const HomeScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("Muhammad Zia");

  return (
    <>
      <HeaderHome />

      <View>
        <View>
          <TextInput
            onChangeText={(val) => setValue(val)}
            value={value}
            secureTextEntry={!showPassword}
            style={{
              height: height / 10,
              width: width / 1.2,
              alignSelf: "flex-end",
              fontSize: showPassword ? 35 : 60,
            }}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: 40,
              top: 50,
            }}
          >
            <Text>{showPassword ? "Show" : "Show"}</Text>
            <Entypo name="eye" size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#959595",
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 16,
            }}
          >
            Your balance
          </Text>
        </View>
      </View>
      <View style={styles.MoneyTransferArea}>
        <MyImage
          text={"Transfer"}
          url={require("../../assets/transferm.png")}
        />
        <MyImage text={"Deposit"} url={require("../../assets/deposit.png")} />
        <MyImage text={"Pay"} url={require("../../assets/pay.png")} />
      </View>
      <View
        style={{
          height:hp('100%'),
          backgroundColor: Colors.secondary,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          marginTop: 10,
        }}
      >
       <HomeList text={'MTN MoMo'} url={require("../../assets/mtMomo.png")} />
       <HomeList text={'Orange Money'} url={require("../../assets/mtMomo.png")} />
       <HomeList text={'Target Savings'} url={require("../../assets/targetbox.png")} />
       <HomeList text={'Njangi [Tontin]'} url={require("../../assets/njanja.png")} />
       {/* <HomeList text={'MTN MoMo'} url={require("../../assets/mtMomo.png")} /> */}
       <View style={styles.HomeListParent}>
      <View style={styles.HomeListChild}>
        <View style={styles.ImageParent}>
          <Image
            style={styles.ImageStyle}
            source={require("../../assets/plus.png")}
          />
          <Text style={styles.HomeListText}>Link bank</Text>
        </View>
        <TouchableOpacity>
          <AntDesign name="right" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
      {/* <DividerCompo /> */}
    </View>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  MoneyTransferArea: {
    marginTop: hp("2%"),
    width: wp("80%"),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HomeListParent: {
    width: wp("90%"),
    padding:5,
    // height: hp("12%"),
    // backgroundColor: "red",
    alignSelf: "center",
    // borderBottomWidth:1,
  },
  HomeListChild: {
    // height:hp('10%'),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10,
  },
  ImageParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  ImageStyle: { width: wp("13%"), height: hp("5%") },
  HomeListText: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.white,
    fontWeight: "bold",
    marginHorizontal:10
  },
});
