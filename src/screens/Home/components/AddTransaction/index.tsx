import React from "react";
import { StyleSheet, View } from "react-native";

import In from "../../../../assets/svgs/in.svg";
import Out from "../../../../assets/svgs/out.svg";
import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";
import theme from "../../../../common/theme";

export default function AddTransaction() {
  return (
    <View style={styles.container}>
      <Input placeholder="Name" custonTextInputStyle={{ marginBottom: 8 }} />
      <Input placeholder="Preço" custonTextInputStyle={{ marginBottom: 8 }} />
      <View style={styles.buttonsContainer}>
        <Button
          label="Income"
          width={"48%"}
          height={56}
          backgroundColor={theme.colors.light}
          fontColor={theme.colors.title}
          fontFamily={theme.fonts.regular}
          fontSize={14}
          customPressableStyle={{
            borderWidth: 1,
            borderColor: theme.colors.grey,
          }}
          Icon={<In width={24} height={24} />}
        />
        <Button
          label="Outcome"
          width={"48%"}
          height={56}
          backgroundColor={theme.colors.light}
          fontColor={theme.colors.title}
          fontFamily={theme.fonts.regular}
          fontSize={14}
          customPressableStyle={{
            borderWidth: 1,
            borderColor: theme.colors.grey,
          }}
          Icon={<Out width={24} height={24} />}
        />
      </View>
      <Input placeholder="Categoria" />
      <Button
        width={"100%"}
        height={56}
        label="Cadastrar"
        backgroundColor={theme.colors.green}
        fontSize={14}
        fontFamily={theme.fonts.medium}
        customPressableStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
});
