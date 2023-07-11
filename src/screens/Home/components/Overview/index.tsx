import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import OverviewCard from "../../../../common/components/OverviewCard";

interface OverviewProps {
  totalIncome: () => string;
  totalOutcome: () => string;
  totalBalance: () => string;
  getLatestIncomeDate: () => 0 | Date;
  getLatestOutcomeDate: () => 0 | Date;
  getTransactionPeriod: () => { latestDate: 0 | Date; firstDate: 0 | Date };
}

export default function Overview({
  totalIncome,
  totalOutcome,
  totalBalance,
  getLatestIncomeDate,
  getLatestOutcomeDate,
  getTransactionPeriod,
}: OverviewProps) {
  return (
    <View style={styles.cardContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 25,
        }}
      >
        <OverviewCard
          label={"Entradas"}
          operation={"in"}
          value={totalIncome()}
          date={getLatestIncomeDate()}
        />
        <OverviewCard
          label={"Saídas"}
          operation={"out"}
          value={totalOutcome()}
          date={getLatestOutcomeDate()}
        />
        <OverviewCard
          label={"Total"}
          operation={"total"}
          value={totalBalance()}
          dateRange={getTransactionPeriod()}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    position: "absolute",
    marginTop: "40%",
  },
});
