import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Svg, Circle } from "react-native-svg";

const PerformanceCircle = ({ percentage }) => {
  const radius = 30; // adjust as needed
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg
        width="100%"
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={radius - 4} // adjust stroke width
          stroke="#ECECEC"
          strokeWidth="3"
          fill="none"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - 4} // adjust stroke width
          stroke="#4A90E2"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          fill="none"
        />
      </Svg>
      <Text style={styles.percentage}>{Math.max(percentage, 1)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "70%",
    height: "20%",
  },
  percentage: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
    color: "#4A90E2",
  },
});

export default PerformanceCircle;