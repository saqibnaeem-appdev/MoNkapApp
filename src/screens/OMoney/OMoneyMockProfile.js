import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Svg, Circle } from "react-native-svg";
import RoundCheckbox from "react-native-round-checkbox";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import React, { useState } from "react";
import Colors from "../../../assets/theme/Colors";
import ButtonCom from "../../components/ButtonCom";

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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-1455e29d72",
    title: "forth Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <>
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor }]}
    >
      <View>
        <Text style={{ marginLeft: 5, color: textColor }}>Price</Text>
        <Text style={[styles.title, { color: textColor }]}>100 XAF </Text>
        <Text style={{ marginLeft: 5, color: textColor }}>Price</Text>
        <Text style={[styles.title, { color: textColor }]}>100 XAF </Text>
      </View>
    </TouchableOpacity>
  </>
);

const OMoneyMockProfile = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "(+237) 688 54 23 68 ", value: "(+237) 688 54 23 68 " },
    { label: "(+237) 650 45 45 20 ", value: "(+237) 650 45 45 20 " },
  ]);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);

  const [selectedTab, SetSelectedTab] = useState("Voice");

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#EA9311" : "#0000";
    const color = item.id === selectedId ? "white" : "black";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  let [fontsLoaded] = useFonts({
    "Gentium-Basic-italic": require("../../../assets/fonts/Gentium_Book_Basic_bold_italic.ttf"),
    "Gentium-Basic": require("../../../assets/fonts/Gentium_Book_Basic.ttf"),
    "Gentium-Basic-Bold": require("../../../assets/fonts/Gentium_Book_Basic_bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={{ flex: 1 }}>
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
              textStyle={{
                color: Colors.white,
                fontSize: 18,
                fontFamily: "Gentium-Basic-italic",
              }}
              placeholderStyle={{
                fontSize: 18,
                fontFamily: "Gentium-Basic-italic",
                color: Colors.black,
              }}
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
                    <Text style={{ color: "rgba(236, 46, 114, 1)" }}>
                      Active
                    </Text>
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
          {selectedTab == "SMS" ? (
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
                   Unlimited SMS:
                    <Text style={{ color: "rgba(236, 46, 114, 1)" }}>
                      Active
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 15,
                    }}
                  >
                   Bundle:
                    <Text style={{ fontWeight: "700" }}>30days - 500 XAF</Text>
                  </Text>
                  {/* <Text
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
                  </Text> */}
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
                        SMS used: 
                        <Text
                          style={{
                            fontWeight: "700",
                          }}
                        >
                         15 days
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
                        SMS left: 
                        <Text
                          style={{
                            fontWeight: "700",
                          }}
                        >
                          15 days
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={{ width: wp("35%"), height: hp("18%") }}>
                  <PerformanceCircle color text stroke percentage={40} />
                </View>
              </View>
            </View>
          ) : null}
        </View>

        <View>
          {selectedTab == "Data" ? (
            <View style={styles.CardView}>
              <View>
                <Text style={styles.textStyle}>Other Bundles</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: wp("90%"),
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textStyle}>
                  Flexi:
                  <Text
                    style={[
                      styles.textStyle,
                      { color: "rgba(236, 46, 114, 1)" },
                    ]}
                  >
                    Inactive
                  </Text>
                </Text>
                <Text style={styles.textStyle}>
                  Giga Data:
                  <Text
                    style={[
                      styles.textStyle,
                      { color: "rgba(236, 46, 114, 1)" },
                    ]}
                  >
                    Inactive
                  </Text>
                </Text>
              </View>
            </View>
          ) : null}
          {selectedTab == "SMS" ? (
            <View style={styles.CardView}>
              <View>
                <Text style={styles.textStyle}>Other Bundles</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: wp("90%"),
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.textStyle}>
                  Flexi:
                  <Text
                    style={[
                      styles.textStyle,
                      { color: "rgba(236, 46, 114, 1)" },
                    ]}
                  >
                    Inactive
                  </Text>
                </Text>
                <Text style={styles.textStyle}>
                  Giga Data:
                  <Text
                    style={[
                      styles.textStyle,
                      { color: "rgba(236, 46, 114, 1)" },
                    ]}
                  >
                    Inactive
                  </Text>
                </Text>
              </View>
            </View>
          ) : null}

          <View style={{ marginTop: hp("2%") }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "400",
                lineHeight: 23,
                fontFamily: "Gentium-Basic-Bold",
              }}
            >
              Activate Another Bundle
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 18,
                fontStyle: "italic",
                fontFamily: "Gentium-Basic",
                marginVertical: hp("1%"),
              }}
            >
              Choose Your Bundle Type
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked1}
                  onValueChange={(checked) => setIsChecked1(checked)}
                />
                <Text style={{ marginLeft: 10 }}>Flexi</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked2}
                  onValueChange={(checked) => setIsChecked2(checked)}
                />
                <Text style={{ marginLeft: 10 }}>Orange Bonus</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked3}
                  onValueChange={(checked) => setIsChecked3(checked)}
                />
                <Text style={{ marginLeft: 10 }}>GiGa Data</Text>
              </View>
            </View>
          </View>
          <View style={{ marginTop: hp("2%") }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                lineHeight: 18,
                fontStyle: "italic",
                fontFamily: "Gentium-Basic",
                marginVertical: hp("1%"),
              }}
            >
              Choose Your Bundle Type
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked4}
                  onValueChange={(checked) => setIsChecked4(checked)}
                />
                <Text style={{ marginLeft: 10 }}>Daily</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked5}
                  onValueChange={(checked) => setIsChecked5(checked)}
                />
                <Text style={{ marginLeft: 10 }}>Weekly</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <RoundCheckbox
                  size={16}
                  borderColor={"black"}
                  backgroundColor={"#EA9311"}
                  iconColor={"#EA9311"}
                  checked={isChecked6}
                  onValueChange={(checked) => setIsChecked6(checked)}
                />
                <Text style={{ marginLeft: 10 }}>Monthly</Text>
              </View>
            </View>
            {isChecked4 || isChecked5 || isChecked6 ? (
              <View
                style={{
                  width: wp("90%"),
                  alignSelf: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    lineHeight: 18,
                    fontStyle: "italic",
                    fontFamily: "Gentium-Basic",
                    marginVertical: 10,
                  }}
                >
                  Choose Your Bundle
                </Text>

                <FlatList
                  horizontal
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  extraData={selectedId}
                />
              </View>
            ) : (
              <View></View>
            )}

            <TouchableOpacity
              style={{
                backgroundColor: "#EA9311",
                width: wp("70%"),
                alignSelf: "center",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                marginVertical: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  lineHeight: 24,
                  fontWeight: "400",
                  fontFamily: "Gentium-Basic",
                }}
              >
                RECHARGE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default OMoneyMockProfile;

const styles = StyleSheet.create({
  item: {
    width: wp("30%"),
    // padding: 5,
    // marginVertical: 8,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: "#EA9311",
    borderRadius: 5,
  },
  title: {
    marginLeft: 5,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Gentium-Basic",
  },
  container: {
    // flex: 1,
    // backgroundColor: "#E9EBEC",
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
  CardView: {
    width: wp("90%"),
    height: hp("10%"),
    backgroundColor: Colors.white,
    marginTop: hp("2%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderRadius: 5,
    elevation: 6,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: "Gentium-Basic-italic",
    padding: 6,
  },
});
