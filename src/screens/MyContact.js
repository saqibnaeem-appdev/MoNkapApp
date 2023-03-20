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

const DATA = [
  {
    title: "A",
    data: ["Alice", "Adam"],
  },
  {
    title: "B",
    data: ["Bob", "Bill", "Ben"],
  },
  {
    title: "C",
    data: ["Charlie", "Cathy"],
  },
  {
    title: "D",
    data: ["Charlie", "Cathy"],
  },
];

const MyContact = () => {
  const [text, setText] = useState("");

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <>
      <View style={styles.sectionListArea}>
        <View style={styles.ImgParent}>
          <Image
            style={{
              width: wp("12%"),
              height: hp("6%"),

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
            <Text style={{ textAlign: "center" }}>675 84 75 29</Text>
          </View>
        </View>
        <View style={styles.blueButtonParent}>
          <TouchableOpacity style={styles.blueButton}>
            <Text style={styles.MonKapText}>MONKAP</Text>
          </TouchableOpacity>
          <View
            style={{
              width: wp("15%"),
              height: hp("4%"),
              marginLeft: 10,
              // backgroundColor: "#0000EE",
            }}
          >
            <Image
              style={{
                width: wp("13%"),
                height: hp("5%"),

                // marginTop: 8,
                marginRight: 5,
              }}
              source={require("../../assets/momo.png")}
            />
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
      <HeaderCom onPress={() => navigation.goBack()} text={"Contacts"} />

      <View style={styles.container}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/blacksearch.png")}
        />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Enter text here"
        />
      </View>

      <ScrollView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </ScrollView>
    </>
  );
};

export default MyContact;

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
    width: wp("100%"),
    height: hp("8%"),
    alignSelf: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
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
});
