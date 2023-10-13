import { Text, StyleSheet, ScrollView } from "react-native";
import { ChildrenableComponent } from "../types";

// TODO: bring lesson rendering to here
export default function LessonsScroll(props: ChildrenableComponent) {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.lessonsScroll}
    >
      {props.children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lessonsScroll: {
    alignSelf: "center",
    width: "100%",
    height: "20%",
    marginTop: 10,
  },
});
