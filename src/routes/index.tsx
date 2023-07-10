import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { GlobalContextProvider } from "../common/context/GlobalContext";
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <GlobalContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvider>
  );
}
