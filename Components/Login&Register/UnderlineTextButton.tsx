import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinkButtonProps } from "../types";

export default function UnderlineTextButton({
  text,
  pressableAlign,
  pressAction,
  isDesktop = false,
  style,
}: LinkButtonProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable style={{ alignSelf: pressableAlign }} onPress={pressAction}>
        <Text style={[styles.linkText, { fontSize: isDesktop ? 12 : 15 }]}>
          {text}
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
