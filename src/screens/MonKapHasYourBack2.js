import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  FlatList,
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
// import MyTextInput from "../components/MyTextInput";

const images = [
  { id: 1, name: "house", source: require("../../assets/group45.png") },
  // { id: 2, name: "shoes", source: require("../../assets/shoesvgrepocom.png") },
  // { id: 3, name: "wedding", source: require("../../assets/xmlid-241.png") },
  // { id: 4, name: "bible", source: require("../../assets/vector27.png") },
  // { id: 5, name: "car", source: require("../../assets/vector26.png") },
  // { id: 6, name: "shirt", source: require("../../assets/vector28.png") },
  // { id: 7, name: "land", source: require("../../assets/plotsvgrepocom.png") },
];

//

const MonKapHasYourBack2 = () => {
  const [choosePlan, setChoosePlan] = useState("");

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5,
      }}
    >
      <Image
        source={item.source}
        style={{ width: 30, height: 30, marginRight: 3 }}
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <>
      <HeaderCom
        onPress={() => navigation.goBack()}
        text={"MoNKap Has Your Back"}
      />
      <View style={styles.topPara}>
        <Text style={[styles.topText, { fontSize: 17, fontWeight: "600" }]}>
          How Often will you be saving towards the buying a house ?
        </Text>
      </View>

      <View
        style={{
          width: wp("90%"),
          alignSelf: "center",
          marginVertical: 5,
          alignItems: "center",
        }}
      >
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          // horizontal={true}
        />
      </View>

      <View
        style={{
          width: wp("65%"),
          alignSelf: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => setChoosePlan("Daily")}
            style={{
              width: wp("30%"),
              height: hp("15%"),
              justifyContent: "center",
              backgroundColor: choosePlan == "Daily" ? "blue" : "white",
              alignItems: "center",
            }}
          >
            <Text style={{ color: choosePlan == "Daily" ? "white" : "black" }}>
              {" "}
              Daily
            </Text>
            <Text style={{ color: choosePlan == "Daily" ? "white" : "black" }}>
              Distributions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChoosePlan("Weekly")}
            style={{
              width: wp("30%"),
              height: hp("15%"),
              justifyContent: "center",
              backgroundColor: choosePlan == "Weekly" ? "blue" : "white",
              alignItems: "center",
              marginTop: hp("1%"),
            }}
          >
            <Text style={{ color: choosePlan == "Weekly" ? "white" : "black" }}>
              Weekly
            </Text>
            <Text style={{ color: choosePlan == "Weekly" ? "white" : "black" }}>
              Savings
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setChoosePlan("Monthly")}
            style={{
              width: wp("30%"),
              height: hp("15%"),
              justifyContent: "center",
              backgroundColor: choosePlan == "Monthly" ? "blue" : "white",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: choosePlan == "Monthly" ? "white" : "black" }}
            >
              Monthly
            </Text>
            <Text
              style={{ color: choosePlan == "Monthly" ? "white" : "black" }}
            >
              Savings
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setChoosePlan("Irregular")}
            style={{
              width: wp("30%"),
              height: hp("15%"),
              justifyContent: "center",
              backgroundColor: choosePlan == "Irregular" ? "blue" : "white",
              alignItems: "center",
              marginTop: hp("1%"),
            }}
          >
            <Text
              style={{ color: choosePlan == "Irregular" ? "white" : "black" }}
            >
              Irregular
            </Text>
            <Text
              style={{ color: choosePlan == "Irregular" ? "white" : "black" }}
            >
              Savings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View
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
          </View> */}

      {/* <View style={styles.topPara2}>
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
     */}

      <View style={styles.TotalBalance}>
        {choosePlan == "" ? (
          <TouchableOpacity style={[styles.deposit,{opacity:0.3}]}>
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
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate('MonKapHasYourBack3')} style={styles.deposit}>
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
        )}
      </View>
    </>
  );
};

export default MonKapHasYourBack2;

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
  TotalBalanceInput: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    // backgroundColor: "white",
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
    // marginTop: hp("10%"),
    // marginLeft: wp("67%"),
    position: "absolute",
  },
  AmountBtnCalendar: {
    marginTop: hp("10%"),
    marginLeft: wp("75%"),
    position: "absolute",
  },
  SXFView: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: wp("23%"),
    height: hp("5%"),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("4%"),
  },
  SXFViewCalendar: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: wp("15%"),
    height: hp("5%"),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("4%"),
  },
  SXFImage: {
    width: wp("7%"),
    height: hp("4%"),
    marginTop: 3,
    marginLeft: wp("4%"),
  },
  SXFImageCalendar: {
    width: wp("6%"),
    height: hp("4%"),
    marginBottom: 5,
    // marginLeft: wp("4%"),
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
