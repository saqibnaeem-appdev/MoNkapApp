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
  
  const NoCardForm = () => {
    const [value, setValue] = useState();
  
    const navigation = useNavigation();
  
    return (
      <View style={{ flex: 1, }}>
        <HeaderCom onPress={() => navigation.goBack()} />
  
        <View
          style={{
            width: wp("90%"),
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >

            <View style={{width:wp('90%'),marginTop:hp('10%')}}>
            <Text >Please fill in the infomation below</Text>
            </View>

<View style={[styles.TotalBalanceInput, { marginTop: 10 }]}>
       
      
        <View style={{ width: wp("80%"), marginTop: 10, marginBottom: 10 }}>
          <MyTextInput
            text={"Card / Account number"}
            placeholder={""}
          />
        </View>
        <View style={{ width: wp("80%"), marginTop: 10, marginBottom: 10 }}>
          <MyTextInput
            text={"Card / Account name"}
            placeholder={""}
          />
        </View>
      </View>
      <View style={styles.TotalBalance}>
        
          <TouchableOpacity
            onPress={() => navigation.navigate("BottomTabScreen")}
            style={[styles.deposit,{marginTop:100}]}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                // fontWeight: "bold",
              }}
            >
             Link Bank
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  };
  
  export default NoCardForm;
  
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
      width: wp("27%"),
      height: hp("14%"),
      margin: 20,
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
  