import React from "react";
import { StyleSheet, Text } from "react-native";

import theme from "../../theme";

interface TextFieldProps {
  text: string;
  color?: string;
  fontSize?: number;
  customTextStyles?: object;
}

export default function TextField({
  text,
  color = theme.colors.text,
  fontSize = 14,
  customTextStyles = {},
}: TextFieldProps) {
  return (
    <Text style={styles(color, fontSize, customTextStyles).text}>{text}</Text>
  );
}

const styles = (color: string, fontSize: number, customTextStyles: object) =>
  StyleSheet.create({
    text: {
      fontSize,
      color,
      ...customTextStyles,
    },
  });
