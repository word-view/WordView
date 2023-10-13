import { Text, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import {
  PressableComponent,
  StyleableComponent,
  TextableComponent,
} from "./types";

export interface ButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent {
  color: string;
  textColor: string;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity
      accessibilityHint="ButtonPressable"
      style={[
        styles.button,
        props.style,
        {
          backgroundColor: props.color,
        },
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.buttonText, { color: props.textColor }]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 60,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
});
