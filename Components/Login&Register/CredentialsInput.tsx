import { StyleSheet, View } from "react-native";
import { Input } from "react-native-elements";
import { CredentialsInputProps } from "../types";
import { useState } from "react";

export default function CredentialsInput({
  placeholder,
  placeholderTextColor,
  label,
  labelColor,
  secure = false,
  style,
  onChangeText,
}: CredentialsInputProps) {
  return (
    <View style={style}>
      <Input
        style={[styles.input]}
        placeholderTextColor={placeholderTextColor}
        containerStyle={styles.inputContainer}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder={placeholder}
        label={label}
        labelStyle={[
          styles.inputLabel,
          { color: labelColor, marginBottom: 10 },
        ]}
        secureTextEntry={secure}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#5D5D5D",
    padding: 15,
    borderRadius: 10,
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    width: 420,
  },
  inputLabel: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "normal",
    letterSpacing: 0.25,
  },
});
