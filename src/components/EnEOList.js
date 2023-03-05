import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Image
} from "react-native";
import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

const EnEOList = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedDate, setSelectedDate] = useState("");

  const toggleModalVisibility = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    toggleModalVisibility();
  };

  return (
    <>
      <View
        style={{
          width: wp("90%"),
          alignSelf: "center",
          backgroundColor: "white",
          paddingHorizontal: 5,
          marginVertical: 5,
        }}
      >
        <View style={styles.list}>
          <View>
            <Text style={styles.listText}>Meter ID </Text>
            <Text style={styles.listText}>276589414 </Text>
          </View>
          <View>
            <Text style={styles.listText}>Meter ID </Text>
            <Text style={styles.listText}>276589414 </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={toggleModalVisibility}
              style={{ backgroundColor: "#F2FEF1", padding: 10 }}
            >
              <Text style={styles.listText}> view </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.list}>
          <View>
            <Text style={styles.listText}> </Text>
          </View>
          <View>
            <Text style={[styles.listText, { color: "#46FF6B" }]}>Paid </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#46FF6B",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={styles.listText}> play </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.list}>
          <View>
            <Text style={styles.listText}>Amount </Text>
            <Text style={[styles.listText, { fontWeight: "500" }]}>
              5 000 XAF
            </Text>
          </View>
          <View>
            <Text style={styles.listText}>Month</Text>
            <Text style={styles.listText}>August </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F2FEF1",
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={styles.listText}>
                {" "}
                print <AntDesign name="download" size={15} />{" "}
              </Text>
            </TouchableOpacity>
          </View>
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
              <Image style={{width:wp('100%')}} source={require("../../assets/eneo-bill-1.png")} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default EnEOList;

const styles = StyleSheet.create({
  listText: { fontSize: 12, lineHeight: 16 },
  listParent: {
    width: wp("90%"),
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 2,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,1)",
    // paddingHorizontal: wp("5"),
  },
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
    // padding: wp("4"),
  },
});
