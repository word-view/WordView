import * as React from "react";
import Svg, { Polyline } from "react-native-svg";

export default function BackArrowIcon() {
  return (
    <Svg
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <Polyline points="15 18 9 12 15 6"></Polyline>
    </Svg>
  );
}
