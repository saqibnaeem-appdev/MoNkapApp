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
import HeaderHome from "../components/HomeHeader";
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
import MyImage from "../components/ImageCompo";
import Colors from "../../assets/theme/Colors";
import HomeList from "../components/HomeList";
import HeaderCom from "../components/HeaderCom";
import TotalBalanceInput from "../components/TotalBalanceInput";
import RecentImage from "../components/RecentImage";
import TextInputCom from "../components/TextInputCom";
import MyTextInput from "../components/MyTextInput";
import { useNavigation } from "@react-navigation/native";
import EnEOList from "../components/EnEOList";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const PayMoney = () => {
  const [value, setValue] = useState();
  const [showRecent, setShowRecent] = useState(true);
  const [recipient, setRecipient] = useState("monKap");
  const [list, setList] = useState("ENEO");

  const navigation = useNavigation();

  useEffect(() => {
    setRecipient("Momo");
  }, []);

  return (
    <>
      <HeaderCom text={"Pay Money"} onPress={() => navigation.goBack()} />
      {/* <ScrollView> */}
      <View style={styles.TotalBalanceInput}>
        <TotalBalanceInput text={"Total Balance"} />
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
              backgroundColor: recipient == "Momo" ? "blue" : "white",
              borderBottomColor: "blue",
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
                color: recipient == "Momo" ? "white" : "black",
              }}
            >
              Utilities
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setRecipient("Others")}
            style={{
              backgroundColor: recipient == "Others" ? "blue" : "white",
              borderBottomColor: "blue",
              padding: 5,
              marginHorizontal: 2,
              width: wp("45%"),
              // borderRadius: 5,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
                marginTop: 2,
                textAlign: "center",
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
                <Text>ENEO</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setList("CAMWATER")}>
                <Text>CAMWATER</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.utilitiesButton}>
              <TouchableOpacity onPress={() => setList("Phone")}>
                <Text>Phone & Internet</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setList("Cable")}>
                <Text>Cable & TV</Text>
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
            <MyTextInput placeholder={"Search Angency"} />
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

export default PayMoney;

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
    height: hp("5%"),
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
});
