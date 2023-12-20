import { memo } from "react";
import { Icon } from "react-native-paper";

function ClockIcon() {
  return <Icon size={24} source={"clock"} />;
}

export default memo(ClockIcon);
