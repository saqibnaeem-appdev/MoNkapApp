

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Calendar } from "react-native-calendars";

import Colors from "../../assets/theme/Colors";
import Label from "../componentsMaryam/label";

const StartingDate = ({ width }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const toggleModalVisibility = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    toggleModalVisibility();
  };

  return (
    <View>
      <Label label="Starting Date" />
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TextInput
          placeholder="Please enter an amount"
          placeholderTextColor={Colors.placeholder}
          style={[styles.input, { width }]}
        />
        <TouchableOpacity
          style={styles.touchable}
          onPress={toggleModalVisibility}
        >
          <AntDesign name="calendar" size={hp("3")} color={Colors.white} />
        </TouchableOpacity>
      </View>
      {/*************** M O D A L ****************/}
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
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    padding: hp("1.1"),
    paddingHorizontal: hp("2"),
    borderRadius: 3,
    alignSelf: "center",
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 0.3,
    borderColor: Colors.blue,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    padding: hp("1.3"),
    color: Colors.placeholder,
    fontSize: hp(1.2),
    fontWeight: "400",
    lineHeight: 12,
    width: wp("72"),
    height: hp("5.2"),
  },
  selectedDate: {
    marginTop: hp("1"),
    fontSize: hp("2"),
    fontWeight: "bold",
    color: Colors.blue,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: wp("5"),
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: wp("4"),
  },
});

export default StartingDate;
