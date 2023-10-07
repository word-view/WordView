import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  PressableComponent,
  ReactiveComponent,
  StyleableComponent,
  TextableComponent,
} from "../types";

export interface UnderlineTextButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent,
    ReactiveComponent {
  pressableAlign: "flex-start" | "center" | "flex-end";
}

export default function UnderlineTextButton(props: UnderlineTextButtonProps) {
  return (
    <View style={[styles.container, props.style]}>
      <Pressable
        style={{ alignSelf: props.pressableAlign }}
        onPress={props.onPress}
      >
        <Text
          style={[styles.linkText, { fontSize: props.isDesktop ? 12 : 15 }]}
        >
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    alignSelf: "center",
  },
  linkText: {
    fontSize: 12,
    color: "white",
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
