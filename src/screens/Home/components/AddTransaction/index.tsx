import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import In from "../../../../assets/svgs/in.svg";
import Out from "../../../../assets/svgs/out.svg";
import Button from "../../../../common/components/Button";
import Input from "../../../../common/components/Input";
import { GlobalContext } from "../../../../common/context/GlobalContext";
import theme from "../../../../common/theme";

interface AddTransactionProps {
  setShow: (show: boolean) => void;
}

export default function AddTransaction({ setShow }: AddTransactionProps) {
  const { createTransaction, getTransactions, setTransactions } =
    useContext(GlobalContext);

  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function createTransactionHandler() {
    setLoading(true);
    createTransaction &&
      createTransaction({ name, value, operation, category, date: new Date() })
        .then(res => {
          if (res?.data) {
            getTransactions &&
              getTransactions()
                .then(res => {
                  if (res?.data) {
                    setTransactions && setTransactions(res?.data);
                    setLoading(false);
                    setShow(false);
                  }
                })
                .catch(err => {
                  console.log("Error", err);
                  setLoading(false);
                });
          }
        })
        .catch(err => {
          console.log("Error", err);
          setLoading(false);
        });
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Name"
        custonTextInputStyle={{ marginBottom: 8 }}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Input
        placeholder="Preço"
        custonTextInputStyle={{ marginBottom: 8 }}
        value={value}
        onChangeText={value => setValue(value)}
        isNumber
      />
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
            borderColor:
              operation === "in" ? theme.colors.text : theme.colors.grey,
          }}
          Icon={<In width={24} height={24} />}
          onPress={() => setOperation("in")}
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
            borderColor:
              operation === "out" ? theme.colors.text : theme.colors.grey,
          }}
          Icon={<Out width={24} height={24} />}
          onPress={() => setOperation("out")}
        />
      </View>
      <Input
        placeholder="Categoria"
        value={category}
        onChangeText={value => setCategory(value)}
      />
      <Button
        width={"100%"}
        height={56}
        label="Cadastrar"
        backgroundColor={theme.colors.green}
        fontSize={14}
        fontFamily={theme.fonts.medium}
        customPressableStyle={{ marginTop: 20 }}
        onPress={() => createTransactionHandler()}
        loading={loading}
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
