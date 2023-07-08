import React, { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
            <View style={styles.headerItem}></View>
            <View style={styles.headerItem}></View>
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
            <View style={styles.card}></View>
            <View style={styles.card}></View>
            <View style={styles.card}></View>
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
  card: {
    width: 300,
    height: 200,
    backgroundColor: "grey",
    marginRight: 16,
  },
});
