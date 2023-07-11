import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import TextField from "../../../../common/components/TextField";
import TransactionCard from "../../../../common/components/TransactionCard";
import { Transctions } from "../../../../common/context/GlobalContext";

interface TransactionsProps {
  transactions: Transctions[];
}

export default function Transactions({ transactions }: TransactionsProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.items}>
        <View></View>
        <TextField text={String(transactions.length) + " itens"} />
      </View>
      <FlatList
        data={transactions.sort(
          (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        )}
        renderItem={item => <TransactionCard item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  safeArea: {
    flex: 1,
    marginTop: "40%",
    paddingHorizontal: 25,
  },
});
