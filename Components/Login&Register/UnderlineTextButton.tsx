import { Pressable, StyleSheet, Text, View } from "react-native";
import { LinkButtonProps } from "../types";

export default function UnderlineTextButton(props: LinkButtonProps) {
  return (
    <View style={[styles.container, props.style]}>
      <Pressable
        style={{ alignSelf: props.pressableAlign }}
        onPress={props.pressAction}
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
