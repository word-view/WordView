import { StyleSheet, Text } from "react-native";
import globalStyles from "../../globalStyles";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import { ChildrenableComponent } from "../types";

export default function SectionLabel(props: ChildrenableComponent) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <Text
      style={[
        globalStyles.mediumUIText,
        styles.sectionLabel,
        !isDesktop && { marginLeft: 15 },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    fontWeight: "600",
  },
});
