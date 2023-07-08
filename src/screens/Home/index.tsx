import React, { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import theme from "../../common/theme";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
