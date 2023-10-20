import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import {
  PressableComponent,
  StyleableComponent,
  TextableComponent,
} from "../types";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export interface UnderlineTextButtonProps
  extends StyleableComponent<ViewStyle>,
    PressableComponent,
    TextableComponent {
  pressableAlign: "flex-start" | "center" | "flex-end";
}

export default function UnderlineTextButton(props: UnderlineTextButtonProps) {
  const { isDesktop } = ResponsiveChecker();
  return (
    <View
      style={[
        styles.container,
        { width: isDesktop ? wp(30) : wp(100) },
        props.style,
      ]}
    >
      <Pressable
        style={{ alignSelf: props.pressableAlign }}
        onPress={props.onPress}
        accessibilityHint="UnderlineTextButtonPressable"
      >
        <Text style={[styles.linkText, { fontSize: isDesktop ? 12 : 15 }]}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  linkText: {
    fontSize: 12,
    color: "white",
    textAlign: "right",
    textDecorationLine: "underline",
  },
});
