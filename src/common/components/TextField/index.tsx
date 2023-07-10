import React from "react";
import { StyleSheet, Text } from "react-native";

import theme from "../../theme";

interface TextFieldProps {
  text: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  customTextStyles?: object;
}

export default function TextField({
  text,
  color = theme.colors.text,
  fontSize = 14,
  fontFamily = theme.fonts.regular,
  customTextStyles = {},
}: TextFieldProps) {
  return (
    <Text style={styles(color, fontSize, fontFamily, customTextStyles).text}>
      {text}
    </Text>
  );
}

const styles = (
  color: string,
  fontSize: number,
  fontFamily: string,
  customTextStyles: object
) =>
  StyleSheet.create({
    text: {
      fontSize,
      fontFamily,
      color,
      ...customTextStyles,
    },
  });
