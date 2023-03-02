/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";
import BottomTabScreen from "./BottomTab";
import TransferMoney from "../screens/TransferMoney";
import DepositMoney from "../screens/DepositMoney";
import PayMoney from "../screens/PayMoney";
import TargetSaving from '../screens/TargetSaving';
import MonKapHasYourBack from '../screens/MonKapHasYourBack';
import MonKapHasYourBack2 from '../screens/MonKapHasYourBack2';
import MonKapHasYourBack3 from '../screens/MonKapHasYourBack3';
import MyTargetSaving from '../screens/MyTargetSaving';
import NoCard from "../screens/NoCard";
import NoCard1 from "../screens/NoCard1";
import NoCard2 from "../screens/NoCard2";
import NoCard3 from "../screens/NoCard3";
import NoCard4 from "../screens/NoCard4";
import NoCard5 from "../screens/NoCard5";
import NoCard6 from "../screens/NoCard6";
import NoCard7 from "../screens/NoCard7";
import Dashboard from "../screens/NjangiDashboard";
import Manage from "../screens/ManageNjangiesScreen";
import Create from "../screens/CreateNjanigiScreen";
import ScanScreen from '../screens/ScanScreen';
import NoCardForm from '../screens/NoCardForm';
import NoCardWarning from "../screens/NoCardWarning";
import LinkBank from '../screens/LinkBank';

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
      <Stack.Screen
        name="MonKapHasYourBack"
        options={{
          headerShown: false,
        }}
        component={MonKapHasYourBack}
      />
      <Stack.Screen
        name="MonKapHasYourBack2"
        options={{
          headerShown: false,
        }}
        component={MonKapHasYourBack2}
      />
      <Stack.Screen
        name="MonKapHasYourBack3"
        options={{
          headerShown: false,
        }}
        component={MonKapHasYourBack3}
      />
      <Stack.Screen
        name="MyTargetSaving"
        options={{
          headerShown: false,
        }}
        component={MyTargetSaving}
      />
      <Stack.Screen
        name="NoCard"
        options={{
          headerShown: false,
        }}
        component={NoCard}
      />
      <Stack.Screen
        name="NoCard1"
        options={{
          headerShown: false,
        }}
        component={NoCard1}
      />
      <Stack.Screen
        name="NoCard2"
        options={{
          headerShown: false,
        }}
        component={NoCard2}
      />
      <Stack.Screen
        name="NoCard3"
        options={{
          headerShown: false,
        }}
        component={NoCard3}
      />
      <Stack.Screen
        name="NoCard4"
        options={{
          headerShown: false,
        }}
        component={NoCard4}
      />
      <Stack.Screen
        name="NoCard5"
        options={{
          headerShown: false,
        }}
        component={NoCard5}
      />
      <Stack.Screen
        name="NoCard6"
        options={{
          headerShown: false,
        }}
        component={NoCard6}
      />
      <Stack.Screen
        name="NoCard7"
        options={{
          headerShown: false,
        }}
        component={NoCard7}
      />
      <Stack.Screen
        name="Dashboard"
        options={{
          headerShown: false,
        }}
        component={Dashboard}
      />
      <Stack.Screen
        name="Manage"
        options={{
          headerShown: false,
        }}
        component={Manage}
      />
      <Stack.Screen
        name="Create"
        options={{
          headerShown: false,
        }}
        component={Create}
      />
      <Stack.Screen
        name="ScanScreen"
        options={{
          headerShown: false,
        }}
        component={ScanScreen}
      />
      <Stack.Screen
        name="NoCardForm"
        options={{
          headerShown: false,
        }}
        component={NoCardForm}
      />
      <Stack.Screen
        name="NoCardWarning"
        options={{
          headerShown: false,
        }}
        component={NoCardWarning}
      />
      <Stack.Screen
        name="LinkBank"
        options={{
          headerShown: false,
        }}
        component={LinkBank}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
