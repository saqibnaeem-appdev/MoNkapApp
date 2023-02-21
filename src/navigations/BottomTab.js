/** @format */

import * as React from "react";
import { Text, View } from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";

//screens

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MomoScreen from "../screens/MomoScreen";
import LinkBankScreen from "../screens/LinkBank";
import OMoneyStack from "../navigations/OMoneyStack";
import Colors from "../../assets/theme/Colors";
const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#0000EE",
          tabBarShowLabel: true,
        }}
        initialRouteName="Home"
        activeColor="#0000EE"
        inactiveColor="black"
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarStyle: {
              height: 42,
            },
            tabBarLabelStyle: { fontWeight: "bold" },
            headerShown: false,
            tabBarLabel: "Home",
            labelStyle: {
              fontSize: 20,
              margin: 0,
              padding: 0,
            },

            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={30} />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="OMoneyStack"
          options={{
            // tabBarVisible: false,
            tabBarStyle: {
              height: 42,
            },
            tabBarLabelStyle: { fontWeight: "bold" },
            // tabBarStyle: {
            //   display: "none",
            // },
            tabBarActiveTintColor: Colors.white,
            tabBarInactiveTintColor: Colors.textColor,
            tabBarStyle: {
              backgroundColor: Colors.OMoneySecondary,
            },
            headerShown: false,
            tabBarLabel: "OMoney",
            labelStyle: {
              fontSize: 20,
              margin: 0,
              padding: 0,
            },

            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="monetization-on" color={color} size={30} />
            ),
          }}
          component={OMoneyStack}
        />
        <Tab.Screen
          name="LinkBankScreen"
          options={{
            tabBarStyle: {
              height: 42,
            },
            tabBarLabelStyle: { fontWeight: "bold" },

            headerShown: false,
            tabBarLabel: "Link Bank",
            labelStyle: {
              fontSize: 20,
              margin: 0,
              padding: 0,
            },
            title: "Link Bank",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bank" color={color} size={30} />
            ),
          }}
          component={LinkBankScreen}
        />
        <Tab.Screen
          name="MomoScreen"
          options={{
            tabBarStyle: {
              height: 42,
            },
            tabBarLabelStyle: { fontWeight: "bold" },

            headerShown: false,
            tabBarLabel: "Momo",
            labelStyle: {
              fontSize: 20,
              margin: 0,
              padding: 0,
            },
            title: "Momo",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={30} />
            ),
          }}
          component={MomoScreen}
        />
        <Tab.Screen
          name="ProfileScreen"
          options={{
            tabBarStyle: {
              height: 42,
            },
            tabBarLabelStyle: { fontWeight: "bold" },

            headerShown: false,
            tabBarLabel: "Profile",
            labelStyle: {
              fontSize: 20,
              margin: 0,
              padding: 0,
            },
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={30}
              />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabScreen;
