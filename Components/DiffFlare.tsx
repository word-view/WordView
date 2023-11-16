import { StyleProp, View, ViewStyle } from "react-native";
import { Text } from "react-native-paper";

interface DiffFlareProps {
  type: "starter" | "intermidiate" | "advanced";
  style?: StyleProp<ViewStyle>;
}

export default function DiffFlare(props: DiffFlareProps) {
  let color;
  let label;

  switch (props.type) {
    case "starter":
      color = "#5EC956";
      label = "Iniciante";
      break;
    case "intermidiate":
      color = "#CABD56";
      label = "Intermediário";
      break;
    case "advanced":
      color = "#C95456";
      label = "Avançado";
      break;
  }

  return (
    <View
      style={[
        {
          backgroundColor: color,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          width: 100,
          height: 25,
          padding: 5,
        },
        props.style,
      ]}
    >
      <Text variant="titleSmall" style={{ fontWeight: "bold" }}>
        {label}
      </Text>
    </View>
  );
}
