import { StyleSheet, View, ViewStyle } from "react-native";
import { Input } from "react-native-elements";
import { StyleableComponent } from "../types";
import { useState } from "react";

export interface CredentialsInputProps extends StyleableComponent<ViewStyle> {
  placeholder: string;
  placeholderTextColor: string;
  label: string;
  labelColor: string;
  secure?: boolean;
  onChangeText?: (value: string) => void;
}

export default function CredentialsInput(props: CredentialsInputProps) {
  return (
    <View style={props.style}>
      <Input
        style={[styles.input]}
        placeholderTextColor={props.placeholderTextColor}
        containerStyle={styles.inputContainer}
        inputContainerStyle={{ borderBottomWidth: 0 }}
        placeholder={props.placeholder}
        label={props.label}
        labelStyle={[
          styles.inputLabel,
          { color: props.labelColor, marginBottom: 10 },
        ]}
        secureTextEntry={props.secure}
        onChangeText={props.onChangeText}
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
