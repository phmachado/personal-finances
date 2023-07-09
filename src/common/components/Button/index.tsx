import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import theme from "../../theme";
import Loading from "../Loading";

interface ButtonProps {
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
  fontFamily?: string;
  fontSize?: number;
  fontColor?: string;
  width?: number;
  height?: number;
  Icon?: ReactNode | null;
  loading?: boolean;
  customPressableStyle?: object;
}

export default function Button({
  label,
  onPress,
  backgroundColor = theme.colors.lightGreen,
  fontFamily = theme.fonts.semiBold,
  fontSize = 12,
  fontColor = theme.colors.light,
  width = 130,
  height = 40,
  Icon = null,
  loading = false,
  customPressableStyle = {},
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={
        styles(
          backgroundColor,
          fontFamily,
          fontSize,
          fontColor,
          width,
          height,
          customPressableStyle
        ).button
      }
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {Icon ? (
            <View
              style={
                styles(
                  backgroundColor,
                  fontFamily,
                  fontSize,
                  fontColor,
                  width,
                  height,
                  customPressableStyle
                ).buttonIcon
              }
            >
              {Icon}
              <Text
                style={
                  styles(
                    backgroundColor,
                    fontFamily,
                    fontSize,
                    fontColor,
                    width,
                    height,
                    customPressableStyle
                  ).buttonText
                }
              >
                {label}
              </Text>
            </View>
          ) : (
            <Text
              style={
                styles(
                  backgroundColor,
                  fontFamily,
                  fontSize,
                  fontColor,
                  width,
                  height,
                  customPressableStyle
                ).buttonText
              }
            >
              {label}
            </Text>
          )}
        </>
      )}
    </Pressable>
  );
}

const styles = (
  backgroundColor: string,
  fontFamily: string,
  fontSize: number,
  fontColor: string,
  width: number,
  height: number,
  customPressableStyle: object
) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      backgroundColor,
      width,
      height,
      ...customPressableStyle,
    },
    buttonIcon: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontFamily,
      fontSize,
      color: fontColor,
    },
  });
