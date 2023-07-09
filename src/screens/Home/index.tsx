import React, { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

import Logo from "../../assets/svgs/logo.svg";
import Button from "../../common/components/Button";
import OverviewCard from "../../common/components/OverviewCard";
import theme from "../../common/theme";

export default function Home() {
  const insets = useSafeAreaInsets();

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
            <Button label="Nova transação" />
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
              value={17400}
              date={"Última entrada dia 13 de abril"}
            />
            <OverviewCard
              label={"Saídas"}
              operation={"out"}
              value={1259}
              date={"Última saída dia 03 de abril"}
            />
            <OverviewCard
              label={"Total"}
              operation={"total"}
              value={16141}
              date={"01 à 16 de abril"}
            />
          </ScrollView>
        </View>
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
});
