import { StyleSheet, Text } from "react-native";
import globalStyles from "../../globalStyles";
import ResponsiveChecker from "../Backend/ResponsiveChecker";
import { ChildrenableComponent } from "../types";

export default function SectionText(props: ChildrenableComponent) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <Text
      style={[
        globalStyles.mediumUIText,
        styles.sectionText,
        !isDesktop && { marginLeft: 15 },
      ]}
    >
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    fontWeight: "400",
    color: "#CCCCCC",
    fontSize: 12,
    marginBottom: 10,
  },
});
