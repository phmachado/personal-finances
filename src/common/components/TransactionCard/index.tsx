import React from "react";
import { StyleSheet, View } from "react-native";
import currencyFormatter from "currency-formatter";
import { format } from "date-fns";

import theme from "../../theme";
import TextField from "../TextField";

interface TransactionCardProps {
  item: {
    name: string;
    value: string;
    operation: string;
    category: string;
    date: Date;
    id?: string;
  };
}

export default function TransactionCard({ item }: TransactionCardProps) {
  return (
    <View style={styles.card}>
      <TextField text={item.name} color={theme.colors.title} />
      <TextField
        text={
          item.operation === "in"
            ? currencyFormatter.format(Number(item.value), { locale: "pt-BR" })
            : "- " +
              currencyFormatter.format(Number(item.value), { locale: "pt-BR" })
        }
        color={
          item.operation === "in" ? theme.colors.darkGreen : theme.colors.red
        }
        fontSize={20}
      />
      <View style={styles.cardInfo}>
        <TextField text={item.category} color={theme.colors.text} />
        <TextField
          text={format(new Date(item.date), "dd/MM/yyyy")}
          color={theme.colors.text}
        />
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
