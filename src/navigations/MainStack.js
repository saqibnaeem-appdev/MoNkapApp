/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import BottomTabScreen from "./BottomTab";
import TransferMoney from "../screens/TransferMoney";

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
    </Stack.Navigator>
  );
};

export default MainStack;
