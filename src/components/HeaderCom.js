/** @format */

import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import useCustomFonts from "../../assets/fonts/useCustomFonts";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../assets/theme/Colors";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
const HeaderCom = ({ text, onPressRight, onPressLeft ,onPress,icon}) => {
  // const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.iconView}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={40}
            color={Colors.white}
            onPress={onPress}
          />
          <Text style={styles.textStyle}>{text}</Text>
          {icon ?  <AntDesign
            name="questioncircle"
            size={30}
            color={Colors.white}
            style={{ top: "1%" }}
            onPress={onPressRight}
          /> : <View></View> }
         
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.secondary,
    height: 100,
  },
  iconView: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
    fontFamily: "Gentium_Book_Basic",
    top: "2%",
  },
});

export default HeaderCom;
