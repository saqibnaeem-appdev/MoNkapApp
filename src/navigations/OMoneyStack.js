/** @format */
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import OMoneySplashScreen from "../screens/OMoney/OMoney_SplashScreen";
import OMoneyRegistration from "../screens/OMoney/OMoney_registration";
import OMoney_validation from "../screens/OMoney/OMoney_validation";
import OMoney_validation_successful from "../screens/OMoney/OMoney_validation _successful";
import OMoney_on_monkap_profile from "../screens/OMoney/OMoney_on_monkap_profile";
import OMoneyHomeScreen from "../screens/OMoney/OMoneyHomeScreen";
import Colors from "../../assets/theme/Colors";

const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="OMoneySplashScreen">
      <Stack.Screen
        name="OMoneySplashScreen"
        options={{
          headerShown: false,
        }}
        component={OMoneySplashScreen}
      />
      <Stack.Screen
        name="OMoneyRegistration"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.OMoneySecondary,
          },
          title: "Let’s Register Your OMoney On MoNkap",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={25}
                  onPress={() => navigation.navigate("OMoneySplashScreen")}
                />
              </View>
            );
          },
        }}
        component={OMoneyRegistration}
      />
      <Stack.Screen
        name="OMoneyvalidation"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.OMoneySecondary,
          },
          title: "Now Let’s Verify this Account",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={25}
                  onPress={() => navigation.navigate("OMoneyRegistration")}
                />
              </View>
            );
          },
        }}
        component={OMoney_validation}
      />
      <Stack.Screen
        name="OMoneyvalidationsuccessful"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.OMoneySecondary,
          },
          title: "Account Verified",
          headerTitleStyle: {
            fontSize: 16,
            color: Colors.green,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={25}
                  onPress={() => navigation.navigate("OMoneyvalidation")}
                />
              </View>
            );
          },
        }}
        component={OMoney_validation_successful}
      />
      <Stack.Screen
        name="OMoneyonmonkapprofile"
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: Colors.OMoneySecondary,
          },

          title: "Account Verified",
          headerTitleStyle: {
            fontSize: 16,
            color: Colors.green,
          },
          headerTitleAlign: "center",
        }}
        component={OMoney_on_monkap_profile}
      />
      <Stack.Screen
        name="OMoneyHomeScreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.OMoneySecondary,
          },
          title: "Welcome to Your OMoney @ MoNkap",
          headerTitleStyle: {
            fontSize: 16,
            color: Colors.textColor,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={25}
                  onPress={() => navigation.navigate("OMoneyvalidation")}
                />
              </View>
            );
          },
        }}
        component={OMoneyHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
