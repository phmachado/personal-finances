import React from "react";
import { StyleSheet, View } from "react-native";

import theme from "../../theme";
import TextField from "../TextField";

export default function TransactionCard() {
  return (
    <View style={styles.card}>
      <TextField text="Desenvolvimento de site" color={theme.colors.title} />
      <TextField
        text="R$ 12.000,00"
        color={theme.colors.darkGreen}
        fontSize={20}
      />
      <View style={styles.cardInfo}>
        <TextField text="Vendas" color={theme.colors.text} />
        <TextField text="13/04/21" color={theme.colors.text} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
    width: "100%",
    backgroundColor: theme.colors.light,
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
