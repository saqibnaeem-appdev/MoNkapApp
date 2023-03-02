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
import HeaderCom from "../components/HeaderCom";
import { useNavigation } from "@react-navigation/native";

const TargetSaving = () => {
  const navigation = useNavigation()
  return (
    <>
      <HeaderCom onPress={() => navigation.goBack()} text={"Target Saving"} />
      <View style={styles.topPara}>
        <Text style={styles.topText}>
          Saving for your target projects have never been this easy
        </Text>
      </View>

      <View
        style={[
          styles.topPara,
          {
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          },
        ]}
      >
        <View>
          <Image source={require("../../assets/icons8moneybox64-1.png")} />
          <Text style={styles.bluetext}>Small Projects</Text>
        </View>
        <View>
          <Text style={styles.bluetext}>We dey with you</Text>
          <Image source={require("../../assets/arrow-9.png")} />
        </View>
        <View>
          <Image source={require("../../assets/icons8moneybox55-1.png")} />
          <Text style={styles.bluetext}>Big Projects</Text>
        </View>
      </View>

      <View style={styles.topPara2}>
        <Text style={styles.topText}>
          Enjoy the best and reliable saving by securing your money for the
          future
        </Text>
      </View>

      <View style={styles.topPara3}>
        <Text style={styles.topText}>
          Wether you are planning to buy a phone, a plot, build a house ,
          prepare for your kids back to school, plan for a trip........ MoNkap
          is a patner you can rely on.
        </Text>
      </View>



      <View style={styles.TotalBalance}>
            <TouchableOpacity onPress={() => navigation.navigate('MonKapHasYourBack')} style={styles.deposit}>
              <Text style={{ textAlign: "center", color: "white" ,fontWeight:'bold'}}>Start a Target Savings</Text>
            </TouchableOpacity>
          </View>

    </>
  );
};

export default TargetSaving;

const styles = StyleSheet.create({
  topPara: { width: wp("90%"), alignSelf: "center", justifyContent: "center" },
  topPara2: {
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: hp("5%"),
  },
  topPara3: {
    width: wp("80%"),
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: hp("7%"),
  },
  topText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginVertical: hp("2%"),
  },
  bluetext: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
    color: "#0000EE",
  },
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("2%"),
    // backgroundColor: "white",
  },
  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "blue",
    padding: 10,
  },
});
