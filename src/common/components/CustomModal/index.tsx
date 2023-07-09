import React, { ReactNode } from "react";
import { Modal, Pressable, StyleSheet, View } from "react-native";

import Close from "../../../assets/svgs/close.svg";
import theme from "../../theme";
import TextField from "../TextField";

interface CustomModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  title?: string;
  children?: ReactNode;
}

export default function CustomModal({
  show,
  setShow,
  title = "Cadastrar transação",
  children,
}: CustomModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        setShow(!show);
      }}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <TextField
              text={title}
              color={theme.colors.title}
              fontFamily={theme.fonts.semiBold}
              fontSize={20}
            />
            <Pressable onPress={() => setShow(!show)}>
              <Close height={40} width={40} />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modal: {
    width: "100%",
    height: 446,
    backgroundColor: theme.colors.light,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  modalHeader: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
