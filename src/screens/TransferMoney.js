import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
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
import MyImage from "../components/ImageCompo";
import Colors from "../../assets/theme/Colors";
import HomeList from "../components/HomeList";
import HeaderCom from "../components/HeaderCom";
import TotalBalanceInput from "../components/TotalBalanceInput";
import RecentImage from "../components/RecentImage";
import TextInputCom from "../components/TextInputCom";
import MyTextInput from "../components/MyTextInput";
import { useNavigation } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const TransferMoney = () => {
  const [value, setValue] = useState();
  const [showRecent, setShowRecent] = useState(true);
  const [recipient, setRecipient] = useState("monKap");

  const navigation = useNavigation();

  useEffect(() => {
    setRecipient("Momo");
  }, []);

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
      <HeaderCom text={"Transfer Money"} onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={styles.TotalBalanceInput}>
          <TotalBalanceInput text={"Total Balance"} />
        </View>

        <View
          style={[
            styles.TotalBalanceInput,
            { marginTop: 10, justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text style={{fontSize:14,fontWeight:'400',lineHeight:21, fontFamily:'Gentium-Basic'}}>Recipient</Text>
          <View style={{ width: wp("90%"), flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => setRecipient("MonKap")}
              style={{
                padding: 5,
                borderBottomWidth: recipient == "MonKap" ? 1 : 0,
                borderBottomColor: "blue",
                marginHorizontal: 2,
                width: wp("23%"),
              }}
            >
              <Image
                style={{ width: wp("17%"), height: hp("5%") }}
                source={require("../../assets/fontistogooglewal.png")}
              />
              <Text style={{ color: recipient == "MonKap" ? '#0000EE' : '#00000080', fontSize:recipient == "MonKap" ? 16:  12, fontWeight:'400',lineHeight:18, marginTop: 2 ,fontFamily:'Gentium-Basic',textAlign:'center'}}>MoNkap</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRecipient("Momo")}
              style={{
                borderBottomWidth: recipient == "Momo" ? 1 : 0,
                borderBottomColor: "blue",
                padding: 5,
                marginHorizontal: 2,
                width: wp("22%"),
              }}
            >
              <Image
                style={{
                  width: wp("17%"),
                  height: hp("5%"),
                  marginHorizontal: wp("1%"),
                }}
                source={require("../../assets/momo.png")}
              />
              <Text style={{  textAlign: "center",color: recipient == "Momo" ? '#0000EE' : '#00000080', fontSize:recipient == "Momo" ? 16 :  12, fontWeight:'400',lineHeight:18, marginTop: 2 ,fontFamily:'Gentium-Basic' }}>
                MoMo
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRecipient("OMoney")}
              style={{
                borderBottomWidth: recipient == "OMoney" ? 1 : 0,
                borderBottomColor: "blue",
                padding: 5,
                marginHorizontal: 2,
                width: wp("22%"),
              }}
            >
              <Image
                style={{
                  width: wp("17%"),
                  height: hp("5%"),
                  marginHorizontal: wp("1.5%"),
                }}
                source={require("../../assets/image-1.png")}
              />
              <Text style={{ textAlign: "center",color: recipient == "OMoney" ? '#0000EE' : '#00000080', fontSize:recipient == "OMoney" ? 16:  12, fontWeight:'400',lineHeight:18, marginTop: 2 ,fontFamily:'Gentium-Basic' ,  textAlign: "center" }}>
                OMoney
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setRecipient("Others")}
              style={{
                borderBottomWidth: recipient == "Others" ? 1 : 0,
                borderBottomColor: "blue",
                padding: 5,
                marginHorizontal: 2,
                width: wp("19%"),
              }}
            >
              <Image
                style={{
                  width: wp("12%"),
                  height: hp("5%"),
                  marginHorizontal: 10,
                }}
                source={require("../../assets/group-239.png")}
              />
              <Text style={{ textAlign: "center",color: recipient == "Others" ? '#0000EE' : '#00000080', fontSize: recipient == "Others" ? 16: 12, fontWeight:'400',lineHeight:18, marginTop: 2 ,fontFamily:'Gentium-Basic' , textAlign: "center" }}>
                Others
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {recipient == "MonKap" && (
          <>
            <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Frequent Cash Out Points</Text>
                <TouchableOpacity onPress={() => setShowRecent(!showRecent)}>
                  <Text style={{fontSize:14,borderBottomWidth:1, fontFamily:'Gentium-Basic-Bold' ,fontStyle:'italic' }}>Show Recent</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ justifyContent: "center", backgroundColor: "white" }}
              >
                {showRecent ? (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                  </View>
                ) : (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                  </View>
                )}

                <View style={styles.sendToParent}>
                  <MyTextInput
                    text={"Send To"}
                    placeholder={"Enter Money to Send"}
                  />
                  <TouchableOpacity onPress={() =>navigation.navigate('MyContact')} style={styles.sendTOBtn}>
                    <Image
                      style={styles.sendToImage}
                      source={require("../../assets/constact.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.TotalBalanceInput, { marginTop: 20 }]}>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Amount"}
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
                    <Image
                      style={styles.SXFImage}
                      source={require("../../assets/XFS.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Reason"}
                  placeholder={"Enter motive for Transfer"}
                />
              </View>
            </View>
          </>
        )}
        {recipient == "Momo" && (
          <>
            <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Frequent Cash Out Points</Text>
                <TouchableOpacity onPress={() => setShowRecent(!showRecent)}>
                  <Text>Show Recent</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ justifyContent: "center", backgroundColor: "white" }}
              >
                {showRecent ? (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                  </View>
                ) : (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                  </View>
                )}

                <View style={styles.sendToParent}>
                  <MyTextInput
                    text={"Send To"}
                    placeholder={"Enter Money to Send"}
                  />
                  <TouchableOpacity  onPress={() =>navigation.navigate('MyContact')}  style={styles.sendTOBtn}>
                    <Image
                      style={styles.sendToImage}
                      source={require("../../assets/constact.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.TotalBalanceInput, { marginTop: 20 }]}>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Amount"}
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
                    <Image
                      style={styles.SXFImage}
                      source={require("../../assets/XFS.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Reason"}
                  placeholder={"Enter motive for Transfer"}
                />
              </View>
            </View>
          </>
        )}
        {recipient == "OMoney" && (
          <>
            <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Frequent Cash Out Points</Text>
                <TouchableOpacity onPress={() => setShowRecent(!showRecent)}>
                  <Text>Show Recent</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ justifyContent: "center", backgroundColor: "white" }}
              >
                {showRecent ? (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                  </View>
                ) : (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                  </View>
                )}

                <View style={styles.sendToParent}>
                  <MyTextInput
                    text={"Send To"}
                    placeholder={"Enter Money to Send"}
                  />
                  <TouchableOpacity  onPress={() =>navigation.navigate('MyContact')}  style={styles.sendTOBtn}>
                    <Image
                      style={styles.sendToImage}
                      source={require("../../assets/constact.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.TotalBalanceInput, { marginTop: 20 }]}>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Amount"}
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
                    <Image
                      style={styles.SXFImage}
                      source={require("../../assets/XFS.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Reason"}
                  placeholder={"Enter motive for Transfer"}
                />
              </View>
            </View>
          </>
        )}
        {recipient == "Others" && (
          <>
            <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Frequent Cash Out Points</Text>
                <TouchableOpacity onPress={() => setShowRecent(!showRecent)}>
                  <Text>Show Recent</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{ justifyContent: "center", backgroundColor: "white" }}
              >
                {showRecent ? (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                  </View>
                ) : (
                  <View
                    style={{ flexDirection: "row", justifyContent: "center" }}
                  >
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/profile1.png")}
                    />
                    <RecentImage
                      text={"jane"}
                      url={require("../../assets/inactive.png")}
                    />
                    <RecentImage
                      text={"Austin"}
                      url={require("../../assets/profile6.png")}
                    />
                    <RecentImage
                      text={"Kate wate"}
                      url={require("../../assets/profile.png")}
                    />
                  </View>
                )}

                <View style={styles.sendToParent}>
                  <MyTextInput
                    text={"Send To"}
                    placeholder={"Enter Money to Send"}
                  />
                  <TouchableOpacity  onPress={() =>navigation.navigate('MyContact')}  style={styles.sendTOBtn}>
                    <Image
                      style={styles.sendToImage}
                      source={require("../../assets/constact.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.TotalBalanceInput, { marginTop: 20 }]}>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Swift Code"}
                  placeholder={"Enter motive for Transfer"}
                />
              </View>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Reason"}
                  placeholder={"Enter motive for Transfer"}
                />
              </View>
              <View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
                <MyTextInput
                  text={"Amount"}
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
                    <Image
                      style={styles.SXFImage}
                      source={require("../../assets/XFS.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}

        <View style={styles.TotalBalance}>
          <TouchableOpacity style={styles.deposit}>
            <Text style={{ textAlign: "center", color: "white" }}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default TransferMoney;

const styles = StyleSheet.create({
  TotalBalanceInput: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
  },
  TotalBalance: {
    width: wp("90%"),
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: hp("4%"),
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
    marginTop: hp("10%"),
    marginLeft: wp("67%"),
    position: "absolute",
  },
  SXFView: {
    width: wp("23%"),
    height: hp("5%"),
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: hp("3%"),
  },
  SXFImage: {
    width: wp("7%"),
    height: hp("4%"),
    marginTop: 3,
    marginLeft: wp("4%"),
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
