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
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import HeaderCom from "../components/HeaderCom";
import Colors from "../../assets/theme/Colors";
import DividerCompo from "../components/DividerCompo";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import MyDropdown from "../components/MyDropdown";
import PerformanceCirclePartTwo from "../components/PerformanceCirclePartTwo";

const DATA = [
  {
    title: "A",
    data: ["pending", "played"],
  },
  {
    title: "B",
    data: ["pending", "played", "pending",'played'],
  },
  {
    title: "C",
    data: ["played", "pending"],
  },
  {
    title: "D",
    data: ["played", "pending",'pending'],
  },
];

const ViewMoreContacts = () => {
  const [text, setText] = useState("");
  const [selectButton, setSelectButton] = useState("playing");

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderItem = ({ item }) => (
    <>
      <View style={styles.sectionListArea}>
        <View style={styles.ImgParent}>
          <Image
            style={{
              width: wp("10%"),
              height: hp("5%"),

              marginTop: 8,
              marginRight: 5,
            }}
            source={require("../../assets/ellipse-191.png")}
          />
          <View
            style={{ alignItems: "flex-start", marginTop: 10, marginLeft: 10 }}
          >
            <Text
              style={{ textAlign: "center", fontWeight: "700", fontSize: 17 }}
            >
              Daniel
            </Text>
            {/* <Text style={{ textAlign: "center" }}>675 84 75 29</Text> */}
          </View>
        </View>
        <View style={[styles.blueButtonParent,]}>
          <PerformanceCirclePartTwo percentage={'40'}  />

          {/* <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.MonKapText}>MONKAP</Text>
          </TouchableOpacity> */}
          <View
            style={{
              width: wp("15%"),
              height: hp("4%"),
              marginLeft: 10,
            //   backgroundColor: "#0000EE",
            }}
          >
            <Text style={{fontSize:14,lineHeight:16,fontFamily:'Gentium-Basic',color:'#0000EEB2'}}>{item}</Text>
          </View>
        </View>
      </View>

      <View style={{ width: wp("90%"), height: hp("0.3%") }}></View>
    </>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
    </View>
  );

  return (
    <>
      <HeaderCom
        onPress={() => navigation.goBack()}
        text={"Mabingo Njangi Details"}
        secText={'Kupexan - Class of 83 Njangi Details'}
      />
      <ScrollView>
        <View
          style={{
            width: wp("100%"),
            backgroundColor: Colors.white,
            height: selectButton == "schedule" ? hp("100%") : null,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: wp("95%"),
              borderRadius: 50,
              alignSelf: "center",
              backgroundColor: "#D9D9D9",
              marginTop: hp("2%"),
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectButton == "schedule" ? Colors.white : "#D9D9D9",
                width: wp("40%"),
                margin: 5,
                borderRadius: 50,
              }}
              onPress={() => setSelectButton("schedule")}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Gentium-basic",
                  lineHeight: 21,
                  textAlign: "center",
                }}
              >
                schedule
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor:
                  selectButton == "playing" ? Colors.white : "#D9D9D9",
                width: wp("40%"),
                margin: 5,
                borderRadius: 50,
              }}
              onPress={() => setSelectButton("playing")}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "Gentium-basic",
                  lineHeight: 21,
                  textAlign: "center",
                }}
              >
                playing
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: wp("90%"),
              borderRadius: 50,
              alignSelf: "center",
              marginTop: hp("1%"),
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Gentium-basic",
                lineHeight: 21,
                textAlign: "center",
              }}
            >
              Next Play Date
            </Text>

            <Text
              style={{
                fontSize: 15,
                fontFamily: "Gentium-basic",
                lineHeight: 21,
                textAlign: "center",
                color: Colors.blue,
              }}
            >
              17 - 05 - 2022{" "}
            </Text>
          </View>
          <View
            style={{
              //   flexDirection: "row",
              width: wp("100%"),
              //   borderRadius: 50,
              alignSelf: "center",
              marginTop: hp("1%"),
              justifyContent: "space-between",
            }}
          >
            {selectButton == "schedule" ? (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    width: wp("90%"),
                    // borderRadius: 40,
                    alignSelf: "center",
                    marginTop: hp("1%"),
                    justifyContent: "space-between",
                    paddingBottom: 30,
                    borderBottomWidth: 1,
                    borderBottomColor: "#0000EE",
                    // backgroundColor: "green",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Gentium-basic",
                      lineHeight: 14,
                      textAlign: "center",
                      fontStyle: "italic",
                      //   marginLeft: 20,
                    }}
                  >
                    Sessions
                  </Text>

                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Gentium-basic",
                      lineHeight: 21,
                      textAlign: "center",
                      color: Colors.blue,
                      //   marginRight: 20,
                    }}
                  >
                    10 sessions
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    width: wp("90%"),
                    // borderRadius: 40,
                    alignSelf: "center",
                    marginTop: hp("1%"),
                    justifyContent: "space-between",
                    paddingBottom: 30,
                    borderBottomWidth: 1,
                    borderBottomColor: "#0000EE",
                    // backgroundColor: "red",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Gentium-basic",
                      lineHeight: 14,
                      textAlign: "center",
                      fontStyle: "italic",
                      //   marginLeft: 20,
                    }}
                  >
                    Rules
                  </Text>

                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Gentium-basic",
                      lineHeight: 21,
                      textAlign: "center",
                      color: Colors.blue,
                      //   marginRight: 20,
                    }}
                  ></Text>
                </View>

                <View
                  style={{
                    width: wp("90%"),
                    borderWidth: 1,
                    alignSelf: "center",
                    marginTop: hp("5%"),
                    borderColor: "#0000EE",
                    borderRadius: 5,
                  }}
                >
                  <TextInput placeholder="Comments" style={{ padding: 15 }} />
                </View>
              </>
            ) : (
              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MyContact")}
                >
                  <AntDesign
                    name="pluscircle"
                    size={hp("2.7")}
                    color={Colors.blue}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: "Gentium-basic",
                    lineHeight: 21,
                    textAlign: "center",
                  }}
                >
                  Add New Member
                </Text>
              </View>
            )}
          </View>

          {selectButton == "schedule" ? null : (
            <View
              style={{
                flexDirection: "row",
                width: wp("90%"),
                borderRadius: 50,
                alignSelf: "center",
                marginTop: hp("1%"),
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: wp("90%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 14,
                    fontFamily: "Gentium-basic",
                    lineHeight: 21,
                    textAlign: "center",
                    fontStyle: "italic",
                  }}
                >
                  Members
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#05EE00",
                        width: wp("8%"),
                        height: hp("2%"),
                        borderRadius: 2,
                        //   marginTop:2,
                        marginRight: 5,
                      }}
                    ></View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        fontFamily: "Gentium-basic",
                        lineHeight: 13,
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      Paid
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "#FAA526",
                        width: wp("8%"),
                        height: hp("2%"),
                        borderRadius: 2,
                        //   marginTop:2,
                        marginRight: 5,
                        marginLeft: 5,
                      }}
                    ></View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 12,
                        fontFamily: "Gentium-basic",
                        lineHeight: 13,
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      To be Paid
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: wp("8%"),
                        height: hp("2%"),
                        borderRadius: 2,
                        //   marginTop:2,
                        marginRight: 5,
                      }}
                    ></View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 14,
                        fontFamily: "Gentium-basic",
                        lineHeight: 16,
                        textAlign: "center",
                        fontStyle: "italic",
                      }}
                    >
                      Status
                    </Text>
                  </View>
                </View>
                {/* <TouchableOpacity style={{position:'absolute', backgroundColor:'yellow',width:wp('15%'),marginLeft:0,zIndex:1}}>
                <MyDropdown placeholder={'Filter'}/>
                <Text> Filters </Text>
              </TouchableOpacity> */}
              </View>
            </View>
          )}
        </View>
        {selectButton == "schedule" ? null : (
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            // renderSectionHeader={renderSectionHeader}
          />
        )}
      </ScrollView>
    </>
  );
};

export default ViewMoreContacts;

const styles = StyleSheet.create({
  searchIcon: {
    width: wp("10%"),
    height: hp("5%"),
    position: "absolute",
    zIndex: 500,
    alignSelf: "flex-end",
    marginTop: 8,
    marginRight: 5,
  },
  MonKapText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 12,
    // lineHeight: 9,
    color: Colors.white,
  },
  blueButtonParent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  blueButton: {
    width: wp("15%"),
    height: hp("4%"),
    padding: 5,
    borderTopStartRadius: 10,
    backgroundColor: "#0000EE",
    marginTop: 10,
  },
  ImgParent: {
    flexDirection: "row",
    width: wp("28%"),
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  sectionListArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
    height: hp("8%"),
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginTop: 10,
    // backgroundColor: "green",
  },
  header: {
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  item: {
    padding: 10,
  },
  container: {
    marginTop: -20,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    elevation: 2,
  },
  icon: {
    // marginRight: hp("1"),
    marginBottom: hp("1"),
  },
});
