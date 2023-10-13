import { Difficulty } from "../../modules/api";
import globalStyles from "../../globalStyles";
import { Text, StyleSheet, ViewStyle } from "react-native";
import { StyleableComponent } from "../types";

export interface DifficultyLabelProps extends StyleableComponent<ViewStyle> {
  difficulty: Difficulty;
}

export default function DifficultyLabel(props: DifficultyLabelProps) {
  return (
    <Text style={[globalStyles.regularUIText, styles.difficultyLabel]}>
      {props.difficulty}
    </Text>
  );
}

const styles = StyleSheet.create({
  difficultyLabel: {
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    fontSize: 12.5,
    fontWeight: "600",
    backgroundColor: "#60CC57",
    paddingHorizontal: 15,
    borderRadius: 20,
    opacity: 0.8,
  },
});
