/** @format */
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import MomoMoneySplashScreen from "../screens/MomoMoney/MomoMoney_SplashScreen";
import MomoMoneyRegistration from "../screens/MomoMoney/MomoMoney_registration";
import MomoMoney_validation from "../screens/MomoMoney/MomoMoney_validation";
import MomoMoney_validation_successful from "../screens/MomoMoney/MomoMoney_validation _successful";
import MomoMoney_on_monkap_profile from "../screens/MomoMoney/MomoMoney_on_monkap_profile";
import MomoMoneyHomeScreen from "../screens/MomoMoney/MomoMoneyHomeScreen";
import Momo_pay from "../screens/MomoMoney/MoMo_pay";
import Colors from "../../assets/theme/Colors";
import MomoMoneyRequestMoneyFrequent from "../screens/MomoMoney/MomoMoneyRequestMoneyFrequent";
import SendMoney from "./../screens/MomoMoney/SendMoney";
import DepositMoney from "./../screens/MomoMoney/DepositeMoney";
import CashOutMoneyScreen from "./../screens/MomoMoney/CashOutMoneyScreen";
import MomoMoneyMockProfile from "./../screens/MomoMoney/MomoMoneyMockProfile";
import SearchContact from "../screens/MomoMoney/SearchContact";
import ScannerScreen from "./../screens/MomoMoney/ScannerScreen";
const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="MomoMoneySplashScreen">
      <Stack.Screen
        name="MomoMoneySplashScreen"
        options={{
          headerShown: false,
        }}
        component={MomoMoneySplashScreen}
      />
      <Stack.Screen
        name="MomoMoneyRegistration"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Let’s Register Your MomoMoney On MoNkap",
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
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoneyRegistration}
      />
      <Stack.Screen
        name="MomoMoneyvalidation"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
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
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoney_validation}
      />
      <Stack.Screen
        name="MomoMoneyvalidationsuccessful"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
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
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoney_validation_successful}
      />
      <Stack.Screen
        name="MomoMoneyonmonkapprofile"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
          title: "User Profile",
          headerTitleStyle: {
            fontSize: 18,
            color: Colors.black,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
        }}
        component={MomoMoney_on_monkap_profile}
      />
      <Stack.Screen
        name="MomoMoneyHomeScreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
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
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoneyHomeScreen}
      />
      <Stack.Screen
        name="MomoMoney"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "MoMo Pay",
          headerTitleStyle: {
            fontSize: 20,
            color: Colors.textColor,
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={Momo_pay}
      />
      <Stack.Screen
        name="MomoMoneyRequestMoneyFrequent"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "REQUEST MONEY",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoneyRequestMoneyFrequent}
      />
      <Stack.Screen
        name="SendMoney"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Send MONEY",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={SendMoney}
      />
      <Stack.Screen
        name="DepositMoney"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Deposit Money",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={DepositMoney}
      />
      <Stack.Screen
        name="CashOutMoneyScreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Cash Out Money",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={CashOutMoneyScreen}
      />
      <Stack.Screen
        name="OMoneyMockProfile"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "OM RECHARGE",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={MomoMoneyMockProfile}
      />
      <Stack.Screen
        name="SearchContact"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Search Contact",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={SearchContact}
      />
      <Stack.Screen
        name="ScannerScreen"
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.MomoMoneySecondry,
          },
          title: "Deposit Money",
          headerTitleStyle: {
            fontSize: 22,
            color: Colors.textColor,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <View style={{ marginLeft: hp("1%") }}>
                <MaterialIcons
                  name={"keyboard-backspace"}
                  color={Colors.textColor}
                  size={28}
                  onPress={() => navigation.goBack()}
                />
              </View>
            );
          },
        }}
        component={ScannerScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
