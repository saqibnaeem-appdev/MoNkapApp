/** @format */

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreenMoNkap from "../screens/Auth/SplashScreenMoNkap";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SplashScreenMoNkap"
    >
      <Stack.Screen
        name="SplashScreenMoNkap"
        options={{
          headerShown: false,
        }}
        component={SplashScreenMoNkap}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="RegisterScreen"
        options={{
          headerShown: false,
        }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default Auth;
