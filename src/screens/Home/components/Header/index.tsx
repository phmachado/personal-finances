import React from "react";
import { StyleSheet, View } from "react-native";

import Logo from "../../../../assets/svgs/logo.svg";
import Button from "../../../../common/components/Button";
import theme from "../../../../common/theme";

interface HeaderProps {
  setShow: (show: boolean) => void;
}

export default function Header({ setShow }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerItemsContainer}>
        <Logo height={32} width={32} />
        <Button label="Nova transação" onPress={() => setShow(true)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
