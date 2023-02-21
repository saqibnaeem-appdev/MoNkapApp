/** @format */

import React from "react";
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CoverPhoto = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/3580382.png")}
        style={styles.background}
      >
        <Text style={styles.heading}>Maximize your</Text>
        <Text style={styles.subheading}>LinkedIn Profile</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0073b1",
  },
});

export default CoverPhoto;
