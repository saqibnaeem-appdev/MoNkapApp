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
import * as Progress from "react-native-progress";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// import Pie from "react-native-pie";
// import { GLView } from "expo-gl";
// import { Surface } from "expo-graphics";
// import PerformanceCircle from "../components/Chart";
// import MyTextInput from "../components/MyTextInput";

const images = [
  { id: 1, name: "house", source: require("../../assets/group45.png") },
];

//

const MyTargetSaving = () => {
  const [choosePlan, setChoosePlan] = useState("");

  const navigation = useNavigation();

  const progress = 75; // Change this to the desired progress value
  const strokeWidth = 10; // Change this to the desired stroke width
  const radius = 50; // Change this to the desired radius

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
        text={"My Target Savings"}
      />

      <View style={styles.topPara}>
        <View style={{ width: wp("40%"), flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "400",
              lineHeight: 18,
              fontStyle: "italic",
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
            }}
          >
            welcome,
          </Text>
          <Text
            style={{
              fontWeight: "700",
              color: "white",
              fontSize: 16,
              // fontWeight: "400",
              lineHeight: 18,
              fontStyle: "italic",
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
            }}
          >
            Kalson
          </Text>
        </View>
        <Text
          style={{
            width: wp("40%"),
            color: "white",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: 13,
            fontStyle: "italic",
            // marginTop: 2,
            // textAlign: "center",
            fontFamily: "Gentium-Basic",
          }}
        >
          "Don't judge each day by the harvest you reap but by seeds that you
          plant "
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          width: wp("90%"),
          alignSelf: "center",
        }}
      >
        <View style={{ width: wp("90%"), paddingHorizontal: 10 }}>
          <Text
            style={{
              color: "gray",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 16,
              fontStyle: "italic",
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
            }}
          >
            Total saved toward target
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              lineHeight: 27,
              // fontStyle:'italic',
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
              color: "white",
            }}
          >
            XAF 23 500
          </Text>
        </View>
        {/* <Text style={{ width: wp("40%") ,color:'white',fontStyle:'italic'}}>
         "Don't judge each day by the harvest you reap but by seeds that you plant  " 
        </Text> */}
      </View>

      <View
        style={{
          width: wp("90%"),
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: hp("5%"),
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: wp("44%"),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignSelf: "center",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/shoeladies-1.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 10,
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              Buy a shoe
            </Text>
            <View></View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
              marginTop: hp("5%"),
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              Saved
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              Due Date
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
            }}
          >
            <Text
              style={{
                color: "blue",
                fontSize: 13,
                fontWeight: "400",
                lineHeight: 15.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              XAF 19 500
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              28th oct 23
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: wp("44%"),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              width: wp("44%"),
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../../assets/shoeladies-1.png")}
                style={{ width: 15, height: 15 }}
              />
              <Text
                style={{
                  alignSelf: "center",
                  marginLeft: 10,
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 13.8,
                  // fontStyle:'italic',
                  // marginTop: 2,
                  // textAlign: "center",
                  fontFamily: "Gentium-Basic",
                }}
              >
                Buy a shoe
              </Text>
              <View></View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
                marginTop: hp("5%"),
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 13.8,
                  // fontStyle:'italic',
                  // marginTop: 2,
                  // textAlign: "center",
                  fontFamily: "Gentium-Basic",
                }}
              >
                Saved
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 13.8,
                  // fontStyle:'italic',
                  // marginTop: 2,
                  // textAlign: "center",
                  fontFamily: "Gentium-Basic",
                }}
              >
                Due Date
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <Text
                style={{
                  color: "blue",
                  fontSize: 13,
                  fontWeight: "400",
                  lineHeight: 15.8,
                  // fontStyle:'italic',
                  // marginTop: 2,
                  // textAlign: "center",
                  fontFamily: "Gentium-Basic",
                }}
              >
                XAF 23 000 00
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  lineHeight: 13.8,
                  // fontStyle:'italic',
                  // marginTop: 2,
                  // textAlign: "center",
                  fontFamily: "Gentium-Basic",
                }}
              >
                28th oct 23
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MonKapHasYourBack")}
        style={{
          width: wp("90%"),
          alignSelf: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: hp("1%"),
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: wp("44%"),
            justifyContent: "center",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/addbutton-11.png")}
              style={{ width: 15, height: 16, marginLeft: 10 }}
            />
            <Text
              style={{
                alignSelf: "center",
                marginLeft: 10,
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              Add new
            </Text>
            <View></View>
          </View>

          <View
            style={{
              // flexDirection: "row",
              justifyContent: "center",
              paddingHorizontal: 5,
              marginTop: hp("5%"),
              marginBottom: hp("5%"),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "blue",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              Start a New{" "}
            </Text>
            <Text
              style={{
                color: "blue",
                fontSize: 12,
                fontWeight: "400",
                lineHeight: 13.8,
                // fontStyle:'italic',
                // marginTop: 2,
                // textAlign: "center",
                fontFamily: "Gentium-Basic",
              }}
            >
              TargetSaving
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* <View style={styles.TotalBalance}> */}
      <View
        style={[styles.deposit, { width: wp("90%"), marginTop: hp("13%") }]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("89%"),
            marginVertical: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 16.8,
              // fontStyle:'italic',
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
              marginLeft: 10,
            }}
          >
            Internet on Target Savings
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 18.8,
              // fontStyle:'italic',
              // marginTop: 2,
              // textAlign: "center",
              fontFamily: "Gentium-Basic",
              marginRight: 10,
            }}
          >
            XAF 1500
          </Text>
        </View>
        <Text
          style={{
            marginVertical: 10,
            textAlign: "center",
            color: "white",
            fontSize: 13,
            // fontWeight: "700",
            lineHeight: 15.8,
            fontStyle: "italic",
            // marginTop: 2,
            // textAlign: "center",
            fontFamily: "Gentium-Basic",
          }}
        >
          Your Savings are now earning an Interest of 3%
        </Text>
      </View>
      {/* <View style={[styles.deposit, {flexDirection:'row',justifyContent:'space-between',width:wp('90%')}]}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
           Your Savings are now earning  an Interest of 3%
          </Text>
        
        </View> */}
      {/* </View> */}
    </>
  );
};

export default MyTargetSaving;

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", height: 1050 },
  gauge: {
    position: "absolute",
    width: 100,
    height: 160,
    alignItems: "center",
    justifyContent: "center",
  },
  gaugeText: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
  },
  topPara: {
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
    marginTop: hp("3%"),
    flexDirection: "row",
    padding: 10,
  },
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
    width: wp("90%"),
    backgroundColor: "blue",
    // padding: 10,
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
    marginVertical: hp("12%"),
    // backgroundColor: "white",
  },
  // deposit: {
  //   borderRadius: 5,
  //   alignSelf: "center",
  //   width: wp("70%"),
  //   backgroundColor: "blue",
  //   padding: 10,
  // },
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
