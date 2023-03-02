import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  Modal,
  Pressable,
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
import MyTextInput from "../components/MyTextInput";
import ButtonCom from "../components/ButtonCom";

const NoCard = () => {
  const [value, setValue] = useState();
const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <HeaderCom onPress={() =>navigation.goBack()} text={"Link Bank"} />

      <Image
        source={require("../../assets/group-59.png")}
        style={{
          width: wp("10%"),
          height: hp("5%"),
          marginHorizontal: wp("9%"),
          marginVertical: hp("2%"),
        }}
      />
      <View style={{ width: wp("80%"), alignSelf: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          Link your bank account
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "400", color: "#AFAFAF" }}>
          eWallet App uses plaid to link your bank account.By linking your
          bank,Plaid will have access to your login details and data collected
          from your accounts, and will share your data with eWallet App for
          reasons including:
        </Text>
      </View>

      <View
        style={{
          marginTop: hp("5%"),
          width: wp("75%"),
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/vector124.png")}
          style={{
            width: wp("5%"),
            height: hp("2%"),
            //   marginHorizontal: wp("9%"),
            marginVertical: hp("1%"),
          }}
        />
        <Text style={{ fontSize: 14, fontWeight: "400", color: "#AFAFAF" }}>
          Transfering money between your bank account and eWallet App
        </Text>
      </View>
      <View
        style={{
          marginTop: hp("2%"),
          width: wp("75%"),
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../../assets/vector124.png")}
          style={{
            width: wp("5%"),
            height: hp("2%"),
            //   marginHorizontal: wp("9%"),
            marginVertical: hp("1%"),
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            fontWeight: "400",
            color: "#AFAFAF",
          }}
        >
          Making sure you have enough money to complete transactions
        </Text>
      </View>
      <View
        style={{
          marginTop: hp("2%"),
          width: wp("75%"),
          alignSelf: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Image
          source={require("../../assets/vector124.png")}
          style={{
            width: wp("5%"),
            height: hp("2%"),
            //   marginHorizontal: wp("9%"),
            marginVertical: hp("1%"),
          }}
        />
        <Text
          style={{
            marginLeft: 10,
            fontSize: 14,
            fontWeight: "400",
            color: "#AFAFAF",
          }}
        >
          Helping prevent fraud
        </Text>
      </View>

      <View style={styles.TotalBalance}>
        <View
          // onPress={() => navigation.navigate("MyTargetSaving")}
          style={styles.deposit2}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#AFAFAF",
              fontSize: 10,
              fontWeight: "400",
              //   fontWeight: "bold",
            }}
          >
            By clicking ‘Continue’,you agree that Plaid’s Privacy Policy.
            applies to your use of their services.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NoCard1")}
          style={styles.deposit}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NoCard;

const styles = StyleSheet.create({
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp("20%"),
    // backgroundColor: "white",
  },

  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "blue",
    padding: 10,
  },
  deposit2: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "white",
    // borderWidth: 2,
    // borderColor: "blue",
    padding: 10,
    marginTop: 10,
  },
});
