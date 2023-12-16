import { View } from "react-native";
import { Icon, Text } from "react-native-paper";

interface TimerProps {
  time?: string;
}

export default function Timer(props: TimerProps) {
  return (
    <View
      style={{
        marginRight: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text variant="titleMedium" style={{ marginRight: 5, fontWeight: "600" }}>
        {props.time ?? "00:00"}
      </Text>
      <Icon size={24} source={"clock"} />
    </View>
  );
}
