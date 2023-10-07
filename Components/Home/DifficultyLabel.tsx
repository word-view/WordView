import globalStyles from "../../globalStyles";
import { DifficultyLabelProps } from "../types";
import { Text, StyleSheet } from "react-native";

export default function DifficultyLabel({
  style,
  difficulty,
}: DifficultyLabelProps) {
  return (
    <Text style={[globalStyles.regularUIText, styles.difficultyLabel]}>
      {difficulty}
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
