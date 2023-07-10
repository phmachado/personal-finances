import React, { useContext, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Logo from "../../assets/svgs/logo.svg";
import Button from "../../common/components/Button";
import CustomModal from "../../common/components/CustomModal";
import Loading from "../../common/components/Loading";
import OverviewCard from "../../common/components/OverviewCard";
import TextField from "../../common/components/TextField";
import TransactionCard from "../../common/components/TransactionCard";
import { GlobalContext } from "../../common/context/GlobalContext";
import theme from "../../common/theme";

import AddTransaction from "./components/AddTransaction";

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
        <View style={styles.header}>
          <View style={styles.headerItemsContainer}>
            <Logo height={32} width={32} />
            <Button label="Nova transação" onPress={() => setShow(true)} />
          </View>
        </View>
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
              value={totalIncome && totalIncome()}
              date={getLatestIncomeDate && getLatestIncomeDate()}
            />
            <OverviewCard
              label={"Saídas"}
              operation={"out"}
              value={totalOutcome && totalOutcome()}
              date={getLatestOutcomeDate && getLatestOutcomeDate()}
            />
            <OverviewCard
              label={"Total"}
              operation={"total"}
              value={totalBalance && totalBalance()}
              dateRange={getTransactionPeriod && getTransactionPeriod()}
            />
          </ScrollView>
        </View>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.items}>
            <View></View>
            <TextField text={String(transactions?.length) + " itens"} />
          </View>
          <FlatList
            data={transactions?.sort(
              (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
            )}
            renderItem={item => <TransactionCard item={item.item} />}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>

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
  header: {
    backgroundColor: theme.colors.green,
    height: 234,
    width: "100%",
    paddingHorizontal: 25,
    paddingTop: "10%",
  },
  headerItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerItem: {
    backgroundColor: "grey",
    width: 50,
    height: 50,
  },
  cardContainer: {
    width: "100%",
    position: "absolute",
    marginTop: "40%",
  },
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
