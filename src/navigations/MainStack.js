/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import BottomTabScreen from "./BottomTab";
import TransferMoney from "../screens/TransferMoney";
import DepositMoney from "../screens/DepositMoney";
import PayMoney from "../screens/PayMoney";
import TargetSaving from '../screens/TargetSaving';


const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName='BottomTabScreen'>
      <Stack.Screen
        name="AuthStack"
        options={{
          headerShown: false,
        }}
        component={AuthStack}
      />
      <Stack.Screen
        name="BottomTabScreen"
        options={{
          headerShown: false,
        }}
        component={BottomTabScreen}
      />
      <Stack.Screen
        name="TransferMoney"
        options={{
          headerShown: false,
        }}
        component={TransferMoney}
      />
      <Stack.Screen
        name="DepositMoney"
        options={{
          headerShown: false,
        }}
        component={DepositMoney}
      />
      <Stack.Screen
        name="PayMoney"
        options={{
          headerShown: false,
        }}
        component={PayMoney}
      />
      <Stack.Screen
        name="TargetSaving"
        options={{
          headerShown: false,
        }}
        component={TargetSaving}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
