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
  import NoCard from "./NoCard";
  
  const NoCard2 = () => {
    const [value, setValue] = useState();
  
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1 }}>
        <HeaderCom onPress={() =>navigation.goBack()} text={"Link Bank"} />
  
        <View style={{ width: wp("80%"), alignSelf: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginTop: 15,
              textAlign: "center",
            }}
          >
           Scan the QR Code your debit card link to this bank
          </Text>
        </View>
  
        <View
          style={{
            width: wp("80%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: hp("10%"),
          }}
        >
          <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/download-4-11.png")} />
            <Text style={{ fontSize: 10, fontWeight: "300" ,textAlign:'center',marginTop:10}}>
              Afrikland  bank
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/download-3-1.png")} />
            <Text style={{ fontSize: 10, fontWeight: "300",textAlign:'center', }}>
            CCA Bank
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/download-1.png")} />
            <Text style={{ fontSize: 10, fontWeight: "300",textAlign:'center',marginTop:5 }}>
            CBC Bank
            </Text>
          </TouchableOpacity> */}
        </View>
        {/* <View
          style={{
            width: wp("80%"),
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: hp("-3%"),
          }}
        >
          <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/yup.png")} style={{width:60,height:60,marginLeft:5}} />
            <Text style={{ fontSize: 10, fontWeight: "300" ,textAlign:'center',marginTop:10}}>
            YUP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/ubcplc-1.png")} style={{marginLeft:10}} />
            <Text style={{ fontSize: 10, fontWeight: "300",textAlign:'center',marginTop:10 }}>
            UBC 
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
              // onPress={}
            style={styles.button}
          >
            <Image source={require("../../assets/plus-sign1.png")} style={{marginLeft:13}}/>
            <Text style={{ fontSize: 10, fontWeight: "300",textAlign:'center',marginTop:17 }}>
            MORE
            </Text>
          </TouchableOpacity>
        </View> */}
  
  <View style={{ width: wp("80%"), alignSelf: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              marginTop: 15,
              textAlign: "center",
            }}
          >
         Or go to Next to manually link to this bank
          </Text>
        </View>

        <View style={styles.TotalBalance}>
          <TouchableOpacity
           onPress={() => navigation.navigate("ScanScreen")}
            // onPress={() => navigation.navigate("MyTargetSaving")}
            style={styles.deposit}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Scan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate("NoCardWarning")}
            style={[styles.deposit,{marginTop:10}]}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                // fontWeight: "bold",
              }}
            >
             Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default NoCard2;
  
  const styles = StyleSheet.create({
    TotalBalance: {
      width: wp("90%"),
      justifyContent: "center",
      alignSelf: "center",
      marginTop: hp("20%"),
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
      marginTop: 10,
    },
    button: {
      width:wp('27%'),
      height:hp('13%'),
      margin:20,
      backgroundColor: "#FFFFFF",
      borderRadius: 2,
      paddingVertical: 10,
      paddingHorizontal: 12,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    text: {
      fontSize: 16,
      color: "#000000",
      textAlign: "center",
    },
  });
  