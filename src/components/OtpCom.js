/** @format */

import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Colors from "../../assets/theme/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 40,
    elevation: 1,
    borderRadius: 4,
    margin: 6,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: Colors.white,
  },
});

const OtpInput = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleKeyPress = (event, index) => {
    if (event.nativeEvent.key === "Backspace" && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
    }
  };

  return (
    <View style={styles.container}>
      {code.map((value, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={value}
          onChangeText={(text) => handleCodeChange(index, text)}
          onKeyPress={(event) => handleKeyPress(event, index)}
          keyboardType="numeric"
          maxLength={1}
        />
      ))}
    </View>
  );
};

export default OtpInput;
