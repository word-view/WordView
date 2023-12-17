import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Text } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import globalStyles from "../../../../../globalStyles";
import { memo } from "react";

interface LabeledChildrenProps {
  text: string;
  children: any;
  style?: StyleProp<ViewStyle>;
}

function LabeledChildren(props: LabeledChildrenProps) {
  return (
    <View style={[styles.view, { zIndex: -1 }, props.style]}>
      {props.children}
      <Text
        variant="titleMedium"
        selectable={false}
        style={[globalStyles.textShadow, styles.caption, { color: "#fff" }]}
      >
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  caption: { marginTop: hp(2.5), fontWeight: "600" },
});

export default memo(LabeledChildren);
