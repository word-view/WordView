import { View, StyleSheet, StatusBar } from "react-native";
import { ChildrenableComponent, ReactiveComponent } from "../types";

export function Header(
  props: ReactiveComponent & ChildrenableComponent & { color?: string }
) {
  return (
    <>
      {!props.isDesktop && (
        <View
          style={{
            paddingTop: StatusBar.currentHeight,
            backgroundColor: props.color,
          }}
        />
      )}
      <View
        style={[
          styles.header,
          { backgroundColor: props.color },
          props.isDesktop && { height: 60 },
        ]}
      >
        {props.children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    flexDirection: "column",
    height: 50,
    width: "100%",
  },
});
