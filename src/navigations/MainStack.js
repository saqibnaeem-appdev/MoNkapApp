/** @format */
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStack from "./AuthStack";

const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthStack"
        options={{
          headerShown: false,
        }}
        component={AuthStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
