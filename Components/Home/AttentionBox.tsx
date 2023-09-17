import { View } from "react-native";
import { AttentionBoxProps } from "../types";

export default function AttentionBox({
  children,
  level,
  style,
}: AttentionBoxProps) {
  let color;

  switch (level) {
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
        style,
      ]}
    >
      {children}
    </View>
  );
}
