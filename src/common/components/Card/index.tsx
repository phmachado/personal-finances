import React from "react";
import { StyleSheet, View } from "react-native";

import theme from "../../theme";
import TextField from "../TextField";

interface CardProps {
  label: string;
  operation: string;
  value: number;
  date: string;
}

export default function Card({ label, operation, value, date }: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <TextField text={label} color={theme.colors.title} />
        {(() => {
          switch (operation) {
            case "in":
              return <TextField text={"X"} fontSize={30} />;
            case "out":
              return <TextField text={"X"} />;
            case "total":
              return <TextField text={"X"} />;
            default:
              return null;
          }
        })()}
      </View>
      <View style={styles.content}>
        <TextField
          text={String(value)}
          fontSize={30}
          color={theme.colors.title}
        />
        <TextField text={date} fontSize={12} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 200,
    backgroundColor: theme.colors.light,
    marginRight: 16,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  content: {
    marginTop: 35,
  },
});
