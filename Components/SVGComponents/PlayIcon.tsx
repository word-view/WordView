import * as React from "react";
import Svg, { Polygon } from "react-native-svg";

export default function PlayIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Polygon points="5 3 19 12 5 21 5 3"></Polygon>
    </Svg>
  );
}
