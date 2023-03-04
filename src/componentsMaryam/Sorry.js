import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../assets/theme/Colors";
import Spacer from "../componentsMaryam/Spacer";

const Sorry = ({ text }) => {
  return (
    <View>
      {/***** FIRST VIEW *****/}
      <View style={styles.view}>
        <Text style={styles.njangies}>Njangies</Text>
        <Spacer />
        <Text style={styles.text}>
          Sorry!! But you are not part of any {text} Njangui
        </Text>
        <Spacer />
      </View>
      <Spacer />
      <Spacer />
      <View style={[styles.view, { height: hp("30") }]}>
        <Text style={styles.dashboard}>Njangi Dashboard</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: Colors.white,
    padding: hp("1.5"),
  },
  text: {
    color: Colors.red,
    textAlign: "center",
    fontSize: hp("1.5"),
    lineHeight: 16,
    fontWeight: "400",
  },
  njangies: {
    fontSize: hp("1.7"),
    fontWeight: "400",
    fontStyle: "italic",
    lineHeight: 16,
    textAlign: "center",
  },
  dashboard: {
    fontSize: hp("1.8"),
    fontStyle: "italic",
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
    color: Colors.lightblack,
  },
});

export default Sorry;
