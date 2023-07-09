import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import theme from "../../theme";

interface LoadingProps {
  size?: "small" | "large" | number;
  color?: string;
  customViewStyles?: object;
}

export default function Loading({
  size = "small",
  color = theme.colors.light,
  customViewStyles = {},
}: LoadingProps) {
  return (
    <View style={styles(customViewStyles).loading}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = (customPressableStyle: object) =>
  StyleSheet.create({
    loading: {
      alignItems: "center",
      justifyContent: "center",
      ...customPressableStyle,
    },
  });
