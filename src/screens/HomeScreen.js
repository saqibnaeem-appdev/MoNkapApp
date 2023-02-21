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
import TotalBalanceInput from "../components/TotalBalanceInput";
import TargetSaving from "./TargetSaving";

const HomeScreen = ({ navigation }) => {


  return (
    <>
      <HeaderHome />

     
     <TotalBalanceInput text={"Your balance"}/>
      <View style={styles.MoneyTransferArea}>
        <MyImage
        onPress={()=>navigation.navigate('TransferMoney')}
          text={"Transfer"}
          url={require("../../assets/transferm.png")}
        />
        <MyImage onPress={() =>navigation.navigate('DepositMoney')} text={"Deposit"} url={require("../../assets/deposit.png")} />
        <MyImage  onPress={()=>navigation.navigate('PayMoney')} text={"Pay"} url={require("../../assets/pay.png")} />
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
       <HomeList onPress={() =>navigation.navigate('TransferMoney')} text={'MTN MoMo'} url={require("../../assets/mtMomo.png")} />
       <HomeList text={'Orange Money'} url={require("../../assets/orangeMoney.png")} />
       <HomeList text={'Target Savings'} onPress={() =>navigation.navigate('TargetSaving')} url={require("../../assets/targetbox.png")} />
       <HomeList text={'Njangi [Tontin]'} url={require("../../assets/group-117.png")} />
       {/* <HomeList text={'MTN MoMo'} url={require("../../assets/mtMomo.png")} /> */}
       <View style={styles.HomeListParent}>
      <View style={styles.HomeListChild}>
        <View style={[styles.ImageParent,]}>
          <Image
            style={[styles.ImageStyle,{backgroundColor:'white',borderRadius:5}]}
            source={require("../../assets/vector151.png")}
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
  ImageStyle: { width: wp("12%"), height: hp("5%") },
  HomeListText: {
    textAlign: "center",
    fontSize: 17,
    color: Colors.white,
    fontWeight: "bold",
    marginHorizontal:10
  },
});
