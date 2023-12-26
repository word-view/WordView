import { View } from "react-native";
import { Text } from "react-native-paper";
import ClockIcon from "./ClockIcon";

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
      <Text
        variant="titleMedium"
        style={{ marginRight: 5, fontWeight: "600", color: "#fff" }}
      >
        {props.time ?? "00:00"}
      </Text>
      <ClockIcon />
    </View>
  );
}
