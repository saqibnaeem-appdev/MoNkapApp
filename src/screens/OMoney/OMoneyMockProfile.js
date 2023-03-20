import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
// import PerformanceCircle from '../../components/Chart';

import React, { useState } from "react";
import { ProgressChart } from "react-native-chart-kit";
import { Svg, Circle } from "react-native-svg";

const PerformanceCircle = ({ percentage, stroke, text, color }) => {
  const radius = stroke ? 27 : 20; // adjust as needed
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <View
      style={[
        styles.containerPercentage,
        { marginTop: stroke ? 40 : 10, marginLeft: -10 },
      ]}
    >
      <Svg
        width="100%"
        height={radius * 4}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={stroke ? radius - 6 : radius - 6} // adjust stroke width
          stroke={color ? "#FFF2BE" : "#FFFFFF"}
          strokeWidth={stroke ? "12" : "2"}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={stroke ? radius - 6 : radius - 6} // adjust stroke width
          stroke={color ? "#FAA526" : "#0000EE"}
          strokeWidth={stroke ? "12" : "2"}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      {text ? (
        <Text
          style={[
            styles.percentage,
            { marginTop: -25, position: "relative", color: "black" },
          ]}
        >
          {Math.max(percentage, 1)}%
        </Text>
      ) : (
        <Text style={[styles.percentage]}>{Math.max(percentage, 1)}%</Text>
      )}
    </View>
  );
};

const OMoneyMockProfile = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "(+237) 688 54 23 68 ", value: "(+237) 688 54 23 68 " },
    { label: "(+237) 650 45 45 20 ", value: "(+237) 650 45 45 20 " },
  ]);

  const [selectedTab, SetSelectedTab] = useState("Voice");

  
  return (
    <View style={styles.container}>
      {/* Main Box */}
      <View style={styles.MainBox}>
        <Text style={styles.BoxHeading}>My Line - Details</Text>
        <View
          style={{
            width: wp("80%"),
            alignSelf: "center",
          }}
        >
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            //   iconContainerStyle={}
            placeholder="(+237) 676 54 23 98 "
            //   textStyle={}
            dropDownContainerStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            }}
            style={{
              borderColor: "#EA9311",
              borderRadius: 3,
            }}
          />
        </View>
        <View style={styles.ItemSelecterContainer}>
          <TouchableOpacity onPress={() => SetSelectedTab("Voice")}>
            <Text
              style={
                selectedTab == "Voice"
                  ? styles.ActiveButton
                  : styles.InActiveButton
              }
            >
              Voice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetSelectedTab("SMS")}>
            <Text
              style={
                selectedTab == "SMS"
                  ? styles.ActiveButton
                  : styles.InActiveButton
              }
            >
              SMS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => SetSelectedTab("Data")}>
            <Text
              style={
                selectedTab == "Data"
                  ? styles.ActiveButton
                  : styles.InActiveButton
              }
            >
              Data
            </Text>
          </TouchableOpacity>
        </View>
        {selectedTab == "Data" ? (
          <View style={{ marginTop: hp("1%") }}>
            <View
              style={{
                marginHorizontal: wp("5%"),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 16,
                  }}
                >
                  GiGa Data:
                  <Text style={{ color: "rgba(236, 46, 114, 1)" }}>Active</Text>
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 15,
                  }}
                >
                  Bundle :
                  <Text style={{ fontWeight: "700" }}>2199 XAF - 3.21GB</Text>
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    fontSize: 15,
                  }}
                >
                  Duration:
                  <Text
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    1 day
                  </Text>
                </Text>
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(255, 242, 190, 1)",
                      width: wp("10%"),
                      height: hp("2%"),
                      borderRadius: 50,
                    }}
                  ></View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 15,
                      }}
                    >
                      Data used:
                      <Text
                        style={{
                          fontWeight: "700",
                        }}
                      >
                        2.56GB
                      </Text>
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "rgba(234, 147, 17, 1)",
                      width: wp("10%"),
                      height: hp("2%"),
                      borderRadius: 50,
                    }}
                  ></View>
                  <View>
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 15,
                        marginRight: 12,
                      }}
                    >
                      Data left:
                      <Text
                        style={{
                          fontWeight: "700",
                        }}
                      >
                        642MB
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ width: wp("35%"), height: hp("18%") }}>
                <PerformanceCircle color text stroke percentage={60} />
              </View>
            </View>
          </View>
        ) : null}
      </View>

      <View style={styles.MainBox}>
        {selectedTab == "Data" ? (
          <View>
            <Text
              style={{
                marginLeft: wp("5%"),
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 18,
                color: "#000",
              }}
            >
              Other Bundles
            </Text>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Text
              style={{
                marginLeft: wp("5%"),
                fontWeight: "700",
                fontSize: 15,
                lineHeight: 18,
                fontFamily:'Gentium-Basic',
                color: "#000",
              }}
            >
             MTN Yamo: Inactive
            </Text>
            <Text
              style={{
                marginLeft: wp("5%"),
                fontWeight: "400",
                fontSize: 16,
                lineHeight: 18,
                color: "#000",
              }}
            >
             MTN Yamo: Inactive
            </Text>
            </View> 
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default OMoneyMockProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9EBEC",
    alignItems: "center",
  },
  MainBox: {
    backgroundColor: "#fff",
    width: wp("90%"),
    // height: hp("30%"),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    marginTop: hp("2%"),
    borderRadius: 5,
  },
  BoxHeading: {
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    fontWeight: "400",
    fontSize: 17,
    color: "#000",
  },
  DropDownIcon: {
    backgroundColor: "red",
  },
  ItemSelecterContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 1,
    marginTop: hp("2%"),
    borderColor: "rgba(0, 0, 0, 0.25)",
  },
  InActiveButton: {
    fontWeight: "700",
    fontSize: 17,
    paddingBottom: 5,
    // borderBottomWidth: 2,
    color: " rgba(0, 0, 0, 1)",
  },
  ActiveButton: {
    color: "rgba(234, 147, 17, 1)",
    fontWeight: "700",
    fontSize: 17,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(234, 147, 17, 1)",
  },
  containerPercentage: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "yellow",
    width: wp("40%"),

    height: hp("7%"),
    // position:'absolute',
  },
  percentage: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
    color: "#0000EE",
  },
});
