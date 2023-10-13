import { View, StyleSheet, ScrollView } from "react-native";
import { ChildrenableComponent } from "../types";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ResponsiveChecker from "../Backend/ResponsiveChecker";

export default function ScreenScroll(props: ChildrenableComponent) {
  const isDesktop = ResponsiveChecker().isDesktop;

  return (
    <View style={styles.container}>
      <ScrollView
        style={[styles.scrollView, isDesktop && { paddingHorizontal: 15 }]}
      >
        {props.children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
    position: "relative",
  },
  scrollView: {
    width: "100%",
    marginTop: hp(2.5),
    alignSelf: "center",
  },
});
