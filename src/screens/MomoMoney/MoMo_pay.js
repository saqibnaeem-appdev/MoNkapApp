/** @format */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
const window = Dimensions.get("window");
const { width, height } = window;
import Colors from "../../../assets/theme/Colors";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  EvilIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DividerCompo from "../../components/DividerCompo";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MyTextInput from "../../components/MyTextInput";
import { useNavigation } from "@react-navigation/native";
import EnEOList from "../../components/EnEOList";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const OM_pay = () => {
  const [value, setValue] = useState();
  const [showRecent, setShowRecent] = useState(true);
  const [recipient, setRecipient] = useState("monKap");
  const [list, setList] = useState("ENEO");

  //   let [fontsLoaded] = useFonts({
  //     "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
  //     "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
  //     "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  //   });
  //   if (!fontsLoaded) {
  //     return <AppLoading />;
  //   }

  const navigation = useNavigation();

  useEffect(() => {
    setRecipient("Momo");
  }, []);

  return (
    <>
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
            Y‘ello
          </Text>
        </View>
        <Text style={styles.textStyle}>Welcome to Awesome!!!!</Text>
      </View>
      <View style={{ marginTop: "1%" }}>
        <DividerCompo />
      </View>
      <View
        style={[
          styles.TotalBalanceInput,
          { marginTop: 10, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <View
          style={{
            width: wp("90%"),
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => setRecipient("Momo")}
            style={{
              backgroundColor:
                recipient == "Momo" ? Colors.MomoMoneySecondry : "white",
              borderBottomColor: Colors.MomoMoneySecondry,
              padding: 5,
              marginHorizontal: 2,
              width: wp("45%"),
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginTop: 2,
                textAlign: "center",
                fontFamily: "Gentium-Basic-italic",
                fontSize: 18,
                color: recipient == "Momo" ? "white" : "black",
              }}
            >
              Utilities
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setRecipient("Others")}
            style={{
              backgroundColor:
                recipient == "Others" ? Colors.MomoMoneySecondry : "white",
              borderBottomColor: Colors.MomoMoneySecondry,
              padding: 5,
              marginHorizontal: 2,
              width: wp("45%"),
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginTop: 2,
                textAlign: "center",
                fontFamily: "Gentium-Basic-italic",
                fontSize: 18,
                color: recipient == "Others" ? "white" : "black",
              }}
            >
              School fee
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {recipient == "Momo" && (
        <>
          <View style={styles.utilitiesButtonParent}>
            <View style={styles.utilitiesButton}>
              <TouchableOpacity onPress={() => setList("ENEO")}>
                <Text style={styles.subText}>ENEO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setList("CAMWATER")}>
                <Text style={styles.subText}>CAMWATER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.utilitiesButton}>
              <TouchableOpacity onPress={() => setList("Phone")}>
                <Text style={styles.subText}>Phone & Internet</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setList("Cable")}>
                <Text style={styles.subText}>Cable & TV</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.TotalBalanceInput]}>
            <TouchableOpacity
              style={{ position: "absolute", marginLeft: wp("58%") }}
            >
              <EvilIcons
                style={{ marginTop: hp("3%") }}
                name="search"
                size={30}
              />
            </TouchableOpacity>
            <MyTextInput placeholder={"Search Angency"} borderColor />
            <TouchableOpacity style={[styles.AmountBtn]}>
              <View style={styles.SXFView}>
                <Text>Get All</Text>
              </View>
            </TouchableOpacity>
          </View>

          {list == "ENEO" && (
            <ScrollView>
              <View style={styles.ENEOBill}>
                <Text>ENEO BILL PAYOUT</Text>
              </View>

              <View style={{ marginTop: 5 }}>
                <FlatList
                  data={data}
                  style={{ marginHorizontal: 10 }}
                  renderItem={() => <EnEOList />}
                />
              </View>
            </ScrollView>
          )}
        </>
      )}

      {recipient == "Others" && <></>}

      {/* <View style={styles.TotalBalance}>
            <TouchableOpacity style={styles.deposit}>
              <Text style={{ textAlign: "center", color: "white" }}>Deposit</Text>
            </TouchableOpacity>
          </View> */}
      {/* </ScrollView> */}
    </>
  );
};

export default OM_pay;

const styles = StyleSheet.create({
  ENEOBill: {
    width: wp("90%"),
    alignSelf: "center",
    marginTop: hp("1%"),
  },
  utilitiesButtonParent: {
    backgroundColor: "white",
    width: wp("90%"),
    alignSelf: "center",
    marginTop: hp("1%"),
  },
  utilitiesButton: {
    paddingHorizontal: 10,
    width: wp("90%"),
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 5,
  },
  TotalBalanceInput: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("22%"),
    // backgroundColor: "white",
  },
  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("70%"),
    backgroundColor: "blue",
    padding: 10,
  },
  AmountBtn: {
    marginTop: hp("10%"),
    marginLeft: wp("67%"),
    position: "absolute",
  },
  SXFView: {
    width: wp("23%"),
    height: hp("5.5%"),
    backgroundColor: "#D9D9D9",

    // backgroundColor: "blue",
    borderLeftWidth: 1,
    borderLeftColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("3%"),
  },
  SXFImage: {
    width: wp("15%"),
    height: hp("4%"),
    marginTop: 3,
    marginLeft: wp("4%"),
  },
  sendToParent: {
    backgroundColor: "white",
    width: wp("90%"),
    flexDirection: "row",
  },
  sendTOBtn: {
    marginTop: 17,
    marginLeft: wp("80%"),
    position: "absolute",
  },

  sendToImage: { width: wp("10%"), height: hp("6%") },
  ImageTextMainView: {
    width: wp("80%"),
    height: hp("18%"),
    alignSelf: "center",
    marginTop: hp("2%"),
    justifyContent: "center",
  },
  TextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("28%"),
    alignSelf: "center",
    marginTop: "2%",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "Gentium-Basic-italic",
    color: Colors.secondary,
  },
  subText: {
    fontFamily: "Gentium-Basic-italic",
    fontSize: 18,
  },
});
