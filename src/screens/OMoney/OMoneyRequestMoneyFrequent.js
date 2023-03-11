/** @format */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const window = Dimensions.get("window");
const { width, height } = window;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Colors from "../../../assets/theme/Colors";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import ModalComponent from "../../components/ModalCom";
import ButtonCom from "../../components/ButtonCom";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import RecentImage from "../../components/ImageCompo";
import MyTextInput from "../../components/MyTextInput";
const OMoneyRequestMoneyFrequent = () => {
  const [showRecent, setShowRecent] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalComponent
        visible={modalVisible}
        onClose={() => handleCloseModal()}
      />
      <View style={styles.ImageTextMainView}>
        <Image
          source={require("../../../assets/OMoneyHomeLogo.png")}
          style={{ width: 100, height: 50, alignSelf: "center" }}
        />
        <View style={styles.TextView}>
          <Text
            style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}
          >
            Hello
          </Text>
          <Text
            style={[
              styles.textStyle,
              { fontSize: 16, color: Colors.textColor },
            ]}
          >
            TAWA
          </Text>
        </View>
        <Text style={styles.textStyle}>Welcome to Awesome!!!!</Text>
      </View>
      <View style={styles.dividerView} />
      <LinearGradient
        colors={[Colors.OMoneySecondary, Colors.OMoneySecondary, Colors.gray]}
        start={{ y: -4, x: -0.2 }}
        style={[styles.balanceView, { height: hp("6%"), marginTop: hp("1%") }]}
      >
        <View
          style={{
            width: wp("80%"),
            justifyContent: "space-between",
            alignSelf: "center",
            flexDirection: "row",
          }}
        >
          <Image source={require("../../../assets/Watch.png")} />
          <Text
            style={[
              styles.textStyle,
              { color: Colors.textColor, fontSize: 22 },
            ]}
          >
            Recent Transactions
          </Text>
          <Ionicons
            name="chevron-forward"
            size={30}
            color="black"
            onPress={() => handleOpenModal()}
            // onPress={handleIconPress}
          />
        </View>
      </LinearGradient>
      <View style={[styles.dividerView, { marginTop: hp("2%") }]} />
      <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[styles.textStyle, { fontSize: 20, color: Colors.black }]}
          >
            Frequent Cash Out Points
          </Text>
          <TouchableOpacity onPress={() => setShowRecent(!showRecent)}>
            <Text
              style={[
                styles.textStyle,
                { fontSize: 20, textDecorationLine: "underline" },
              ]}
            >
              Show Recent
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "center" }}>
          {showRecent ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: wp("88%"),
                marginTop: hp("2%"),
              }}
            >
              <RecentImage
                text={"jane"}
                url={require("../../../assets/inactive.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"Kate wate"}
                url={require("../../../assets/profile.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"jane"}
                url={require("../../../assets/profile1.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"Austin"}
                url={require("../../../assets/profile6.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: wp("88%"),
                marginTop: hp("2%"),
              }}
            >
              <RecentImage
                text={"jane"}
                url={require("../../../assets/profile1.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"jane"}
                url={require("../../../assets/inactive.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"Austin"}
                url={require("../../../assets/profile6.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
              <RecentImage
                text={"Kate wate"}
                url={require("../../../assets/profile.png")}
                style={{ width: 50, height: 50 }}
                ViewStyle
              />
            </View>
          )}
        </View>
      </View>
      <View style={styles.dividerView} />
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <View style={styles.sendToParent}>
          <MyTextInput
            text={"Send To"}
            placeholder={"Enter Name or MoMo Number"}
          />
          <TouchableOpacity
            style={styles.sendTOBtn}
            onPress={() => navigation.navigate("SearchContact")}
          >
            <Image
              style={styles.sendToImage}
              source={require("../../../assets/constact.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
          <MyTextInput
            text={"Amount"}
            placeholder={"Enter amount to Request"}
          />
          <TouchableOpacity style={styles.AmountBtn}>
            <View style={styles.SXFView}>
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 16,
                  fontFamily: "Gentium-Basic-italic",
                  textAlign: "center",
                }}
              >
                XSF
              </Text>
              <Image
                style={styles.SXFImage}
                source={require("../../../assets/Request.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.belowButtonStyle}>
        <ButtonCom
          text={"Send Request"}
          button={"yellow"}
          // onPress={() => navigation.navigate("OMoneyvalidationsuccessful")}
        />
      </View>
    </SafeAreaView>
  );
};

export default OMoneyRequestMoneyFrequent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  belowButtonStyle: {
    alignContent: "center",
    alignItems: "center",
    top: hp("5%"),
  },
  ImageTextMainView: {
    width: wp("80%"),
    height: hp("18%"),
    alignSelf: "center",
    marginTop: hp("2%"),
    justifyContent: "center",
  },
  TextView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("28%"),
    alignSelf: "center",
    marginTop: "2%",
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 24,
    fontFamily: "Gentium-Basic-italic",
    color: Colors.secondary,
  },
  dividerView: {
    width: wp("95%"),
    borderWidth: 1,
    borderColor: Colors.gray,
    alignSelf: "center",
    justifyContent: "center",
  },
  balanceView: {
    width: wp("90%"),
    height: hp("15%"),
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  TotalBalanceInput: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginTop: hp("5%"),
  },
  sendToParent: {
    flexDirection: "row",
    alignContent: "center",

    marginTop: hp("2%"),
  },
  sendTOBtn: {
    marginTop: 17,
    marginLeft: wp("80%"),
    position: "absolute",
  },

  sendToImage: {
    width: wp("8%"),
    height: hp("5%"),
    marginTop: hp("0.5%"),
    marginLeft: hp("0.5%"),
    tintColor: Colors.OMoneySecondary,
  },
  AmountBtn: {
    marginTop: hp("10%"),
    marginLeft: wp("67%"),
    position: "absolute",
  },
  SXFView: {
    width: wp("23%"),
    height: hp("5%"),
    backgroundColor: Colors.OMoneySecondary,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("3%"),
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  SXFImage: {
    width: wp("7%"),
    height: hp("4%"),
    marginTop: 3,
    marginLeft: wp("4%"),
    tintColor: Colors.green,
  },
});
