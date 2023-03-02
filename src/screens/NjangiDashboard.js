import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../assets/theme/Colors";
import Spacer from "../componentsMaryam/Spacer";
import Sorry from "../componentsMaryam/Sorry";
import HeaderCom from "../components/HeaderCom";
// import PerformanceCircle from "../componentsMaryam/";
const Dashboard = ({ navigation }) => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderCom text={'Njangi'}/>
      <View style={styles.innerContainer}>
        {/********* FIRST BOX **************/}
        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "pink",
            // alignItems:'center'
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Create")}>
            <AntDesign
              name="pluscircle"
              size={hp("2.7")}
              color={Colors.blue}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: wp("85%"),
              //   alignSelf:'center'
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                fontSize: hp("1.6"),
                fontWeight: "400",
                lineHeight: 16,
                color: Colors.lightblack,
              }}
            >
              Create New Njanigi
            </Text>
            {one ?  (
              <TouchableOpacity
              onPress={()=>navigation.navigate('Manage')}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: Colors.blue,
                  }}
                >
                  Manage Njangies
                </Text>
              </TouchableOpacity>
            ) : null}
            {two ?  (
              <TouchableOpacity
              onPress={()=>navigation.navigate('Manage')}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: Colors.blue,
                  }}
                >
                  Manage Njangies
                </Text>
              </TouchableOpacity>
            ) : null}
            {three ?  (
              <TouchableOpacity
              onPress={()=>navigation.navigate('Manage')}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: Colors.blue,
                  }}
                >
                  Manage Njangies
                </Text>
              </TouchableOpacity>
            ) : null}
            {four ?  (
              <TouchableOpacity
              onPress={()=>navigation.navigate('Manage')}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    lineHeight: 16,
                    color: Colors.blue,
                  }}
                >
                  Manage Njangies
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View style={styles.view}>
          <Text style={styles.heading}>My Njangies [Total: 5]</Text>
          <Spacer />
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => [
                setOne(true),
                setTwo(false),
                setThree(false),
                setFour(false),
              ]}
              style={[
                styles.box,
                { backgroundColor: one ? Colors.blue : Colors.background },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  styles.italicText,
                  { color: one ? Colors.white : Colors.black },
                ]}
              >
                Daily[2]
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: one ? Colors.white : Colors.black },
                ]}
              >
                XAF 000 000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [
                setOne(false),
                setTwo(true),
                setThree(false),
                setFour(false),
              ]}
              style={[
                styles.box,
                { backgroundColor: two ? Colors.blue : Colors.background },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  styles.italicText,
                  { color: two ? Colors.white : Colors.black },
                ]}
              >
                Weekly[1]
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: two ? Colors.white : Colors.black },
                ]}
              >
                XAF 000 000
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer />

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => [
                setOne(false),
                setTwo(false),
                setThree(true),
                setFour(false),
              ]}
              style={[
                styles.box,
                { backgroundColor: three ? Colors.blue : Colors.background },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  styles.italicText,
                  { color: three ? Colors.white : Colors.black },
                ]}
              >
                Bi-Weekly[0]
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: three ? Colors.white : Colors.black },
                ]}
              >
                XAF 000 000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [
                setOne(false),
                setTwo(false),
                setThree(false),
                setFour(true),
              ]}
              style={[
                styles.box,
                { backgroundColor: four ? Colors.blue : Colors.background },
              ]}
            >
              <Text
                style={[
                  styles.text,
                  styles.italicText,
                  { color: four ? Colors.white : Colors.black },
                ]}
              >
                Monthly[2]
              </Text>
              <Text
                style={[
                  styles.text,
                  { color: four ? Colors.white : Colors.black },
                ]}
              >
                XAF 000 000
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer />
        </View>
        <Spacer />
        {/*********** FIRST BUTTON VIEW *****************/}
        {/********************** SECOND VIEW *******************************/}
        {one ? (
          <View style={styles.view}>
            <Text style={styles.italicHeading}>Daily Njangies[1]</Text>
            <Spacer />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={[styles.blue, { color: Colors.blue }]}>
                Veterans
              </Text>
              <Text style={styles.members}>20 Members</Text>
            </View>
            <Spacer />
            <View style={styles.spaceBetween}>
              <Text style={styles.text}>Kupexan - Class of 83 </Text>
              <Text style={styles.text}>35 Members</Text>
            </View>
          </View>
        ) : null}
        <Spacer />
        {/******************* THIRD VIEW *****************************/}
        {one ? (
          <View style={styles.view}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={[styles.veterans]}>Veterans </Text>
              <Text
                style={[
                  styles.italicHeading,
                  { fontSize: hp("1.8"), color: Colors.lightblack },
                ]}
              >
                {" "}
                Njangi Dashboard
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={[styles.text, { fontStyle: "italic" }]}>
                My Turn
              </Text>
              <Text style={[styles.text, { color: Colors.blue }]}>
                {" "}
                Jan 25th 2023
              </Text>
            </View>
            <Spacer />
            <View style={styles.spaceBetween}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <AntDesign
                    name="pluscircle"
                    size={hp("2.5")}
                    color={Colors.blue}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <Text>Add New Member</Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.blue,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: hp("1"),
                }}
              >
                <Text
                  style={[
                    styles.text,
                    styles.italicText,
                    { color: Colors.white },
                  ]}
                >
                  Play Now{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacer />

            <View style={styles.spaceBetween}>
              <View>
                <Text style={styles.heading}>Played</Text>
                <Text style={[styles.text, { color: Colors.blue }]}>Daily</Text>
              </View>
              <View>
                <Text style={styles.heading}>Amount</Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  XAF 2500
                </Text>
              </View>
              <View>
                <Text style={styles.heading}>Beneficiary Collects</Text>
                <Text
                  style={[
                    styles.text,
                    { color: Colors.blue, alignSelf: "flex-end" },
                  ]}
                >
                  XAF 50 000
                </Text>
              </View>
            </View>
            <Spacer />
            <Spacer />
            <View style={styles.spaceBetween}>
              <View
                style={{
                  flexDirection: "row",
                  // alignItems:'center'
                }}
              >
                <Image
                  source={require("../../assets/green.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={[styles.text, { color: Colors.lightblack }]}>
                  Collected[20]
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/orange.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={[styles.text, { color: Colors.lightblack }]}>
                  Pending[15]
                </Text>
              </View>
            </View>
            <Spacer />
            <Spacer />
            <View style={styles.spaceBetween}>
              <View>
                <Text
                  style={[
                    styles.text,
                    { fontStyle: "italic", color: Colors.lightblack },
                  ]}
                >
                  Next Play Date
                </Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  17-05-2022
                </Text>
              </View>
              <Text style={styles.underline}>View More</Text>
              <View>
                <Text
                  style={[
                    styles.text,
                    { fontStyle: "italic", color: Colors.lightblack },
                  ]}
                >
                  Beneficiary
                </Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  Hillary Okeng
                </Text>
              </View>
            </View>
          </View>
        ) : null}

        {/*************** SECOND BUTTON VIEW *******************/}
        {/*********** FIRST ***************/}
        {two ? (
          <View style={styles.view}>
            <Text style={styles.italicHeading}>Weekly Njangies[1]</Text>
            <Spacer />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.blue}>Mabingo</Text>
              <Text style={styles.members}>20 Members</Text>
            </View>
            <Spacer />
          </View>
        ) : null}
        <Spacer />
        {/******************* SECOND *****************************/}
        {two ? (
          <View style={styles.view}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={[styles.veterans]}>Mabingo </Text>
              <Text
                style={[
                  styles.italicHeading,
                  { fontSize: hp("1.8"), color: Colors.lightblack },
                ]}
              >
                {" "}
                Njangi Dashboard
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text style={[styles.text, { fontStyle: "italic" }]}>
                My Turn
              </Text>
              <Text style={[styles.text, { color: Colors.blue }]}>
                {" "}
                Jan 25th 2023
              </Text>
            </View>
            <Spacer />
            <Spacer />
            <View
              style={{
                // backgroundColor:'pink',
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.blue,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: hp("1"),
                  width: wp("25"),
                  height: hp("3"),
                }}
              >
                <Text
                  style={[
                    styles.text,
                    styles.italicText,
                    { color: Colors.white, alignSelf: "center" },
                  ]}
                >
                  Play Now{" "}
                </Text>
              </TouchableOpacity>
            </View>
            <Spacer />
            <Spacer />

            <View style={styles.spaceBetween}>
              <View>
                <Text style={styles.heading}>Played</Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  Weekly
                </Text>
              </View>
              <View>
                <Text style={styles.heading}>Amount</Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  XAF 2500
                </Text>
              </View>
              <View>
                <Text style={styles.heading}>Beneficiary Collects</Text>
                <Text
                  style={[
                    styles.text,
                    { color: Colors.blue, alignSelf: "flex-end" },
                  ]}
                >
                  XAF 50 000
                </Text>
              </View>
            </View>
            <Spacer />
            <Spacer />
            <View style={styles.spaceBetween}>
              <View
                style={{
                  flexDirection: "row",
                  // alignItems:'center'
                }}
              >
                <Image
                  source={require("../../assets/green.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={[styles.text, { color: Colors.lightblack }]}>
                  Collected[20]
                </Text>
              </View>
              {/* <PerformanceCircle
        radius={100}
        strokeWidth={20}
        percentage={50}
        color="red"
        backgroundColor="pink"
      /> */}
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../../assets/orange.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text style={[styles.text, { color: Colors.lightblack }]}>
                  Pending[15]
                </Text>
              </View>
            </View>
            <Spacer />
            <Spacer />
            <View style={styles.spaceBetween}>
              <View>
                <Text
                  style={[
                    styles.text,
                    { fontStyle: "italic", color: Colors.lightblack },
                  ]}
                >
                  Next Play Date
                </Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  17-05-2022
                </Text>
              </View>
              <Text style={styles.underline}>View More</Text>
              <View>
                <Text
                  style={[
                    styles.text,
                    { fontStyle: "italic", color: Colors.lightblack },
                  ]}
                >
                  Next Beneficiary
                </Text>
                <Text style={[styles.text, { color: Colors.blue }]}>
                  Aldaniels Mabingo
                </Text>
              </View>
            </View>
            <Spacer />
          </View>
        ) : null}
        {/******* THIRD BUTTON VIEW *******/}
        {three ? <Sorry text="weekly" /> : null}

        {/******* FOURTH BUTTON VIEW *******/}
        {four ? <Sorry text="monthly" /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: wp("93%"),
    alignSelf: "center",
    // backgroundColor:'pink',
    height: hp("100"),
  },
  view: {
    backgroundColor: Colors.white,
    padding: hp("1.5"),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp("0.5"),
  },
  box: {
    // backgroundColor: Colors.background,
    width: wp("30%"),
    height: hp("4.2"),
    // width:115,
    // height:35,
    alignItems: "center",
    // paddingHorizontal:hp('0.4'),
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    // padding:hp('0.3'),
    // color:Colors.lightblack,
    // backgroundColor:'red',
  },
  italicText: {
    fontStyle: "italic",
    color: Colors.lightblack,
  },
  heading: {
    alignSelf: "center",
    fontSize: hp("1.5"),
    fontWeight: "700",
    fontStyle: "italic",
    // color:Colors.lightblack
  },
  blue: {
    fontSize: hp("2"),
    fontWeight: "400",
    lineHeight: 19,
    // color: Colors.blue,
    textDecorationLine: "underline",
  },
  members: {
    fontSize: hp("1.6"),
    fontWeight: "400",
    lineHeight: 16,
    // color: Colors.blue,
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  veterans: {
    fontSize: hp("2"),
    fontWeight: "700",
    lineHeight: 19,
    color: Colors.blue,
  },
  italicHeading: {
    fontSize: hp("1.6"),
    fontWeight: "400",
    fontStyle: "italic",
    lineHeight: 16,
    alignSelf: "center",
    // color:Colors.lightblack
  },
  icon: {
    marginRight: hp("1"),
    marginBottom: hp("1"),
  },
  underline: {
    fontStyle: "italic",
    fontSize: hp("1.8"),
    fontWeight: "400",
    lineHeight: 17,
    textDecorationLine: "underline",
    color: Colors.blue,
  },
});

export default Dashboard;
