import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import CustomModal from "../../common/components/CustomModal";
import Loading from "../../common/components/Loading";
import { GlobalContext } from "../../common/context/GlobalContext";
import theme from "../../common/theme";

import AddTransaction from "./components/AddTransaction";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

export default function Home() {
  const insets = useSafeAreaInsets();
  const {
    transactions,
    totalIncome,
    totalOutcome,
    totalBalance,
    loading,
    getLatestIncomeDate,
    getLatestOutcomeDate,
    getTransactionPeriod,
  } = useContext(GlobalContext);

  const [show, setShow] = useState<boolean>(false);

  const checkOverview =
    totalIncome &&
    totalOutcome &&
    totalBalance &&
    getLatestIncomeDate &&
    getLatestOutcomeDate &&
    getTransactionPeriod;

  if (loading) {
    return (
      <Loading
        customViewStyles={{ flex: 1 }}
        color={theme.colors.darkGreen}
        size="large"
      />
    );
  }

  return (
    <SafeAreaProvider>
      <View
        style={{
          ...styles.container,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <StatusBar style="auto" backgroundColor={theme.colors.green} />
        <Header setShow={setShow} />
        {checkOverview && (
          <Overview
            totalIncome={totalIncome}
            totalOutcome={totalOutcome}
            totalBalance={totalBalance}
            getLatestIncomeDate={getLatestIncomeDate}
            getLatestOutcomeDate={getLatestOutcomeDate}
            getTransactionPeriod={getTransactionPeriod}
          />
        )}
        {transactions && <Transactions transactions={transactions} />}
        <CustomModal show={show} setShow={setShow}>
          <AddTransaction setShow={setShow} />
        </CustomModal>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
