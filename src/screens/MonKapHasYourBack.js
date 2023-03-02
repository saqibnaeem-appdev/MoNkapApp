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
// import MyTextInput from "../components/MyTextInput";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ],
  dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
  today: "Aujourd'hui",
};
LocaleConfig.defaultLocale = "fr";

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

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 5 }}>
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: "blue",
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
      <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 5 }}>
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: "blue",
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
      <Text style={{ fontSize: 16, fontWeight: "400", marginBottom: 5 }}>
        {text}
      </Text>
      <TextInput
        style={{
          width: width ? wp("80%") : wp("90%"),
          borderWidth: 1,
          borderColor: "blue",
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
  const [openCalendarModal, setOpenCalendarModal] = useState(false);

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
        style={{ width: 30, height: 30, marginRight: 10 }}
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
        <Text style={[styles.topText, { fontSize: 20, fontWeight: "700" }]}>
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
                XSF
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
            onPress={() => setOpenCalendarModal(true)}
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
      {openCalendarModal == true ? (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openCalendarModal}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!openCalendarModal);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Calendar
                style={{width:wp('90%'),color:'black'}}
                  // Initially visible month. Default = now
                  initialDate={"2012-03-01"}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  minDate={"2012-05-10"}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  maxDate={"2012-05-30"}
                  // Handler which gets executed on day press. Default = undefined
                  onDayPress={(day) => {
                    console.log("selected day", day);
                  }}
                  // Handler which gets executed on day long press. Default = undefined
                  onDayLongPress={(day) => {
                    console.log("selected day", day);
                  }}
                  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                  monthFormat={"yyyy MM"}
                  // Handler which gets executed when visible month changes in calendar. Default = undefined
                  onMonthChange={(month) => {
                    console.log("month changed", month);
                  }}
                  // Hide month navigation arrows. Default = false
                  hideArrows={true}
                  // Replace default arrows with custom ones (direction can be 'left' or 'right')
                  renderArrow={(direction) => <Arrow />}
                  // Do not show days of other months in month page. Default = false
                  hideExtraDays={true}
                  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                  // day from another month that is visible in calendar page. Default = false
                  disableMonthChange={true}
                  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                  firstDay={1}
                  // Hide day names. Default = false
                  hideDayNames={true}
                  // Show week numbers to the left. Default = false
                  showWeekNumbers={true}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                  onPressArrowLeft={(subtractMonth) => subtractMonth()}
                  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                  onPressArrowRight={(addMonth) => addMonth()}
                  // Disable left arrow. Default = false
                  disableArrowLeft={true}
                  // Disable right arrow. Default = false
                  disableArrowRight={true}
                  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                  disableAllTouchEventsForDisabledDays={true}
                  // Replace default month and year title with custom one. the function receive a date as parameter
                  renderHeader={(date) => {
                    /*Return JSX*/
                  }}
                  // Enable the option to swipe between months. Default = false
                  enableSwipeMonths={true}

                  markedDates={{
                    '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
                    '2012-05-17': {marked: true},
                    '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
                    '2012-05-19': {disabled: true, disableTouchEvent: true}
                  }}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setOpenCalendarModal(!openCalendarModal)}
                >
                  <Text style={styles.textStyle}>Hide Calendar</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setOpenCalendarModal(true)}
          >
            <Text style={styles.textStyle}>Show Modal</Text>
          </Pressable>
        </View>
      ) : null}

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
        <TouchableOpacity
          onPress={() => navigation.navigate("MonKapHasYourBack2")}
          style={styles.deposit}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
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
  centeredView: {
    // width:wp('100%'),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width:wp('90%'),
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
