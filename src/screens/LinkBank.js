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
import MyTextInput from "../components/MyTextInput";
import ButtonCom from "../components/ButtonCom";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";


const LinkBank = () => {
  const [value, setValue] = useState();

  const navigation = useNavigation()

  let [fontsLoaded] = useFonts({
    // "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <HeaderCom onPress={() =>navigation.goBack()}  text={'Link Bank'} />

      <View style={{ width: wp("80%"), alignSelf: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" ,marginTop:15}}>
          Add a bank using your debit card
        </Text>
      </View>

      <View style={{ width: wp("80%"), alignSelf: "center" }}>
        <TextInput
          style={{
            width: wp("80%"),
            // borderWidth: 1,
            // borderColor: "blue",
            height: hp("5%"),
            borderRadius: 5,
            paddingHorizontal: 10,
            marginVertical: 30,
            backgroundColor: "#F1F1F1",
          }}
          placeholder={"Debit Card Number"}
          keyboardType={"default"}
          //   placeholderTextColor={}
          //   secureTextEntry={secureTextEntry}
          //   editable={editable}
          //   selectTextOnFocus={selectTextOnFocus}
          //   style={[
          //     styles.textInput,
          //     { height: height ? height : hp("7%") },
          //     {
          //       backgroundColor: backgroundColor ? backgroundColor : Colors.white,
          //     },
          //     { borderWidth: borderWidth ? borderWidth : null },
          //     { borderRadius: borderRadius ? borderRadius : 5 },
          //   ]}
          value={value}
          onChangeText={(value) => setValue(value)}
          //   textAlignVertical={textAlignVertical}
        />
      </View>
      <View style={styles.TotalBalance}>
        <TouchableOpacity
          onPress={() => navigation.navigate("NoCard")}
          style={styles.deposit}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("NoCard")}
          style={styles.deposit2}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#0000EE",
              fontWeight: "bold",
            }}
          >
            No Card?
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          width: wp("90%"),
          justifyContent: "center",
          alignSelf: "center",
          marginTop: hp("20%"),
        }}
      >
        <TouchableOpacity
          // onPress={() => navigation.navigate("MyTargetSaving")}
          style={{
            borderRadius: 5,
            alignSelf: "center",
            width: wp("80%"),
            // backgroundColor: "white",
            borderWidth: 1,
            // borderColor: "blue",
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
            }}
          >
            NEXT
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default LinkBank;

const styles = StyleSheet.create({
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp("40%"),
    // backgroundColor: "white",
  },

  deposit: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "blue",
    padding: 10,
  },
  deposit2: {
    borderRadius: 5,
    alignSelf: "center",
    width: wp("80%"),
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    marginTop:10
  },
});
