import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../assets/theme/Colors";
import Label from "../componentsMaryam/label";
import Sessions from "../componentsMaryam/Sessions";
import Spacer from "../componentsMaryam/Spacer";
import StartingDate from "../componentsMaryam/StartingDate";
import Input from "../componentsMaryam/TextInput";
import Xaf from "../componentsMaryam/XAF";
import Continue from "../componentsMaryam/ContinueButton";
const Manage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Label label="Name" />
        <Input placeholder="Enter the name" />
        <Spacer />
        <Spacer />
        <Xaf width={wp("77.3%")} />
        <Spacer />
        <Spacer />
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Label label="Played" />
          <Text>Every 1 </Text>
          <AntDesign name="caretdown" color={Colors.lightblack} />
        </View>
        <Spacer />
        <Spacer />
        <StartingDate width={wp("77.5")} />
        <Spacer />
        <Spacer />
        <Sessions />
        <Spacer />
        <Spacer />
        <Continue />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    // backgroundColor: "pink",
    height: hp("100"),
    width: wp("93%"),
    alignSelf: "center",
  },
});

export default Manage;
