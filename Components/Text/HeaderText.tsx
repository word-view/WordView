import globalStyles from "../../globalStyles";
import { ChildrenableComponent } from "../types";
import { StyleSheet, Text } from "react-native";

export default function HeaderText(props: ChildrenableComponent) {
  return (
    <Text style={[globalStyles.mediumUIText, styles.headerText]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "800",
    marginHorizontal: 15,
    marginTop: 2,
  },
});
