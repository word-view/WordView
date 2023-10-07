import { View, ViewStyle } from "react-native";
import { StyleableComponent } from "../types";

export interface AttentionBoxProps extends StyleableComponent<ViewStyle> {
  children?: any;
  level: 1 | 2;
}

export default function AttentionBox(props: AttentionBoxProps) {
  let color;

  switch (props.level) {
    case 1:
      color = "#292929";
      break;
    case 2:
      color = "#1A1919";
  }

  return (
    <View
      style={[
        {
          backgroundColor: color,
          borderRadius: 30,
          alignItems: "center",
          position: "absolute",
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
