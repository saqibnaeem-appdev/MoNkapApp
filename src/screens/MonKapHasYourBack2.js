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
import Colors from "../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

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
      <Text
        style={{
          fontSize: 8,
          fontWeight: "400",
          lineHeight: 12,
          // marginRight: 15,
          textAlign: "center",
          fontFamily: "Gentium-Basic",
        }}
      >
        {item.name}
      </Text>
    </View>
  );

  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <HeaderCom
        onPress={() => navigation.goBack()}
        text={"MoNKap Has Your Back"}
      />
      <View style={styles.topPara}>
        <Text
          style={[
            styles.topText,
            {
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 23,
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
            },
          ]}
        >
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
            <Text
              style={{
                color: choosePlan == "Daily" ? "white" : "black",
                fontSize: 16,
                // fontWeight: "400",
                lineHeight: 20,
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              {" "}
              Daily
            </Text>
            <Text
              style={{
                color: choosePlan == "Daily" ? "white" : "black",
                fontSize: 16,
                // fontWeight: "400",
                lineHeight: 20,
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
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
            <Text style={{ color: choosePlan == "Weekly" ? "white" : "black",  fontSize: 16,
                // fontWeight: "400",
                lineHeight: 20,
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic", }}>
              Weekly
            </Text>
            <Text style={{ color: choosePlan == "Weekly" ? "white" : "black",  fontSize: 16,
                // fontWeight: "400",
                lineHeight: 20,
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic", }}>
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
              style={{ color: choosePlan == "Monthly" ? "white" : "black",  fontSize: 16,
              // fontWeight: "400",
              lineHeight: 20,
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic", }}
            >
              Monthly
            </Text>
            <Text
              style={{ color: choosePlan == "Monthly" ? "white" : "black",  fontSize: 16,
              // fontWeight: "400",
              lineHeight: 20,
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic", }}
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
              style={{ color: choosePlan == "Irregular" ? "white" : "black" ,  fontSize: 16,
              // fontWeight: "400",
              lineHeight: 20,
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",}}
            >
              Irregular
            </Text>
            <Text
              style={{ color: choosePlan == "Irregular" ? "white" : "black" ,  fontSize: 16,
              // fontWeight: "400",
              lineHeight: 20,
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",}}
            >
              Savings
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    

      <View style={styles.TotalBalance}>
        {choosePlan == "" ? (
          <TouchableOpacity style={[styles.deposit, { opacity: 0.3 }]}>
            <Text
              style={{
                textAlign: "center",
      
            
                color: "white",
                fontSize: 20,
                // fontWeight: "700",
                lineHeight: 23,
                marginTop: 2,
                textAlign: "center",
                fontFamily: "Gentium-Basic",
                letterSpacing: 1.5,
              }}
            >
              NEXT
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.navigate("MonKapHasYourBack3")}
            style={styles.deposit}
          >
            <Text
              style={{
                textAlign: "center",
      
            
              color: "white",
              fontSize: 20,
              // fontWeight: "700",
              lineHeight: 23,
              marginTop: 2,
              textAlign: "center",
              fontFamily: "Gentium-Basic",
              letterSpacing: 1.5,
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
