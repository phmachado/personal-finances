import React from "react";
import { StyleSheet, TextInput } from "react-native";

import theme from "../../theme";

interface InputProps {
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  isNumber?: boolean;
  custonTextInputStyle?: object;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  isNumber = false,
  custonTextInputStyle = {},
}: InputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles(custonTextInputStyle).input}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
      keyboardType={isNumber ? "numeric" : "default"}
    />
  );
}

const styles = (custonTextInputStyle: object) =>
  StyleSheet.create({
    input: {
      paddingLeft: 20,
      width: "100%",
      height: 56,
      backgroundColor: theme.colors.lightGrey,
      borderWidth: 1,
      borderColor: theme.colors.grey,
      borderRadius: 5,
      fontFamily: theme.fonts.regular,
      ...custonTextInputStyle,
    },
  });
