import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/theme/Colors";
import Label from "../componentsMaryam/label";
import Input from "../componentsMaryam/TextInput";
import Spacer from "../componentsMaryam/Spacer";
import Continue from "../componentsMaryam/ContinueButton";
import Xaf from "../componentsMaryam/XAF";
import StartingDate from "../componentsMaryam/StartingDate";
import Sessions from "../componentsMaryam/Sessions";
import HeaderCom from "../components/HeaderCom";
import { useNavigation } from "@react-navigation/native";

const Create = () => {
  const navigation = useNavigation()
  return (
    <>
    
      <HeaderCom onPress={() =>navigation.goBack()} text={'Create Njangui'} />
    <View style={styles.container}>
      <ScrollView
        // keyboardShouldPersistTaps="handled"
        // contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
        style={
          {
            // backgroundColor:'red'
          }
        }
      >
        <KeyboardAvoidingView
        // behavior={Platform.OS =  1   == 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.heading}>Create a Njangui</Text>
          <Spacer />
          <Label label="Name" />
          <Input placeholder="Enter the Njangi’s name" />
          <Spacer />
          <Spacer />
          <Xaf width={wp("71%")} />
          <Spacer />
          <Label label="Played" />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text>Every 1</Text>
            <AntDesign
              name="caretdown"
              size={hp("2")}
              color={Colors.lightblack}
              style={styles.icon}
            />

            <Text
              style={{
                marginLeft: hp("10"),
              }}
            >
              Week
            </Text>
            <AntDesign
              name="caretdown"
              size={hp("2")}
              color={Colors.lightblack}
              style={styles.icon}
            />
          </View>
          <Spacer />
          <Spacer />
          <StartingDate width={wp("72")} />

          <Spacer />
          <Spacer />

          <Sessions />
          <Spacer />
          <Spacer />
          <TextInput
            placeholder="Description"
            //   multiline={true}
            style={[styles.input, { height: hp("10"), width: wp("87.1%") }]}
          />
          <Spacer />
          <Spacer />
          <Input placeholder="Rules and Regulations" />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Continue />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#606060'
    backgroundColor: Colors.white,
    padding: hp("3"),
  },
  heading: {
    fontSize: hp("2"),
    fontWeight: "700",
    lineHeight: 19,
    textAlign: "center",
  },
  touchable: {
    backgroundColor: Colors.blue,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 0.3,
    borderColor: Colors.blue,
    borderRadius: 3,
    padding: hp("1.3"),
    color: Colors.placeholder,
    fontSize: hp(1.2),
    fontWeight: "400",
    lineHeight: 12,
    width: wp("74.6"),
    height: hp("5.2"),
  },
  icon: {
    marginHorizontal: hp("2"),
    // position:'absolute'
  },
});

export default Create;
