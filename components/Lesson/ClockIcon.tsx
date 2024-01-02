import { memo } from "react";
import { Icon } from "react-native-paper";

function ClockIcon() {
  return <Icon size={24} source={"clock"} color="#fff" />;
}

export default memo(ClockIcon);
