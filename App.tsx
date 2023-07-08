import React from "react-native";
import { useFonts } from "expo-font";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./src/assets/fonts/PoppinsRegular.ttf"),
    PoppinsMedium: require("./src/assets/fonts/PoppinsMedium.ttf"),
    PoppinsSemiBold: require("./src/assets/fonts/PoppinsSemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
