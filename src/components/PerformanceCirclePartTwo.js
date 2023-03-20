import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Svg, Circle } from "react-native-svg";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PerformanceCirclePartTwo = ({ percentage, stroke, text, color }) => {
  const radius = stroke ? 30 : 20; // adjust as needed
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <View style={[styles.container, { marginTop: stroke ? 30 : 0 }]}>
      <Svg
        width="100%"
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={stroke ? radius - 6 : radius - 4} // adjust stroke width
          stroke={color ? "#FAA526" : "#FAA526"}
          strokeWidth={stroke ? "13" : "5"}
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={stroke ? radius - 6 : radius - 4} // adjust stroke width
          stroke={color ? "#05EE00" : "#05EE00"}
          strokeWidth={stroke ? "13" : "5"}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      {/* {text ? (
        <Text
          style={[
            styles.percentage,
            { marginTop: -28, position: "relative", color: "red" },
          ]}
        >
          {Math.max(percentage, 1)}%
        </Text>
      ) : (
        <Text style={[styles.percentage]}>{Math.max(percentage, 1)}%</Text>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default PerformanceCirclePartTwo;
