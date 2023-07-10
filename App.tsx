import React from "react-native";
import { useFonts } from "expo-font";

import PoppinsMedium from "./src/assets/fonts/PoppinsMedium.ttf";
import PoppinsRegular from "./src/assets/fonts/PoppinsRegular.ttf";
import PoppinsSemiBold from "./src/assets/fonts/PoppinsSemiBold.ttf";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular,
    PoppinsMedium,
    PoppinsSemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
