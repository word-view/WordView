import { View, StyleSheet, StatusBar } from "react-native";
import { ChildrenableComponent, ReactiveComponent } from "../types";

export default function Header(
  props: ReactiveComponent & ChildrenableComponent
) {
  return (
    <>
      {!props.isDesktop && (
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            backgroundColor: "#353535",
          }}
        />
      )}
      <View style={[styles.header, props.isDesktop && { height: 60 }]}>
        {props.children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#353535",
    justifyContent: "center",
    flexDirection: "column",
    height: 50,
    width: "100%",
  },
});
