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
  TouchableWithoutFeedback,
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
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

import Colors from "../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const images = [
  { id: 1, name: "house", source: require("../../assets/group45.png") },
  { id: 2, name: "shoes", source: require("../../assets/shoesvgrepocom.png") },
  { id: 3, name: "wedding", source: require("../../assets/xmlid-241.png") },
  { id: 4, name: "bible", source: require("../../assets/vector27.png") },
  { id: 5, name: "car", source: require("../../assets/vector26.png") },
  { id: 6, name: "shirt", source: require("../../assets/vector28.png") },
  { id: 7, name: "land", source: require("../../assets/plotsvgrepocom.png") },
];

const MyTextInput = ({ text, placeholder, width }) => {
  const [value, setValue] = useState();

  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "400",
          lineHeight: 23,
          fontFamily: "Gentium-Basic",
          color: Colors.black,
          letterSpacing: 2.5,
        }}
      >
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: Colors.blue1,
          height: hp("5%"),
          borderRadius: 5,
          paddingHorizontal: 50,
        }}
        placeholder={placeholder}
        keyboardType={"default"}
        value={value}
        onChangeText={() => setValue(value)}
        //   textAlignVertical={textAlignVertical}
      />
    </View>
  );
};
const MyTextInput2 = ({ text, placeholder, width }) => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "400",
          lineHeight: 23,
          fontFamily: "Gentium-Basic",
          color: Colors.black,
          letterSpacing: 2.5,
          marginBottom: 5,
        }}
      >
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: Colors.blue1,
          height: hp("5%"),
          borderRadius: 5,
          paddingHorizontal: 90,
        }}
        placeholder={placeholder}
        keyboardType={"default"}
        value={value}
        onChangeText={() => setValue(value)}
        //   textAlignVertical={textAlignVertical}
      />
    </View>
  );
};
const MyTextInput3 = ({ text, placeholder, width }) => {
  const [value, setValue] = useState();
  return (
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "400",
          lineHeight: 23,
          fontFamily: "Gentium-Basic",
          color: Colors.black,
          letterSpacing: 2.5,
          marginBottom: 5,
        }}
      >
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: Colors.blue1,
          height: hp("5%"),
          borderRadius: 5,
          paddingHorizontal: 10,
        }}
        placeholder={placeholder}
        keyboardType={"default"}
        value={value}
        onChangeText={() => setValue(value)}
        //   textAlignVertical={textAlignVertical}
      />
    </View>
  );
};

const MonKapHasYourBack = () => {
  const navigation = useNavigation();
  // const [openCalendarModal, setOpenCalendarModal] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const toggleModalVisibility = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    toggleModalVisibility();
  };

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
        style={{ width: 30, height: 30, marginRight: 20 }}
      />
      <Text
        style={{
          fontSize: 8,
          fontWeight: "400",
          lineHeight: 12,
          marginRight: 15,
          // textAlign: "center",
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
              fontSize: 20,
              fontWeight: "700",
              lineHeight: 23,
              // marginTop: 2,
              textAlign: "center",
              fontFamily: "Gentium-Basic",
              letterSpacing: 1.5,
            },
          ]}
        >
          What are you saving for ?
        </Text>
      </View>

      <View
        style={{ width: wp("90%"), alignSelf: "center", marginVertical: 5 }}
      >
        <FlatList
          data={images}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>

      <View style={[styles.TotalBalanceInput, { marginTop: 20 }]}>
        <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
          <MyTextInput
            text={"Purpose"}
            placeholder={"Enter Purpose for saving"}
          />
        </View>
        <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
          <MyTextInput2
            text={"Target Amount"}
            placeholder={"Enter Amount to Send"}
          />
          <TouchableOpacity style={styles.AmountBtn}>
            <View style={styles.SXFView}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                XAF
              </Text>
              {/* <Image
                style={styles.SXFImage}
                source={require("../../assets/XFS.png")}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
          <MyTextInput3
            text={"Target Amount"}
            placeholder={"Enter Amount to Send"}
          />
          <TouchableOpacity
            onPress={toggleModalVisibility}
            style={styles.AmountBtnCalendar}
          >
            <View style={styles.SXFViewCalendar}>
              {/* <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                XSF
              </Text> */}
              <Image
                style={styles.SXFImageCalendar}
                source={require("../../assets/group-1142.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        // animationType="slide"
        transparent
      >
        <TouchableWithoutFeedback onPress={toggleModalVisibility}>
          <View style={styles.modalView}>
            <View style={styles.calendarContainer}>
              <Calendar onDayPress={handleDateSelect} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      {selectedDate !== "" && (
        <Text style={styles.selectedDate}>{selectedDate}</Text>
      )}

      <View style={styles.TotalBalance}>
        <TouchableOpacity
          onPress={() => navigation.navigate("MonKapHasYourBack2")}
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
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MonKapHasYourBack;

const styles = StyleSheet.create({
  selectedDate: {
    marginTop: hp("1"),
    fontSize: hp("2"),
    fontWeight: "bold",
    color: "blue",
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: wp("4"),
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: wp("5"),
  },
  centeredView: {
    // width:wp('100%'),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
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
    height: hp("4.9%"),
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
