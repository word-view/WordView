import { View } from "react-native";
import { Icon } from "react-native-paper";
import FSAnimator from "./OutcomeAnimator";
import { useEffect, useRef } from "react";
import { wait } from "../../../modules/time/time";
export default function FailOverlay() {
  let leaveOutRef = useRef(null);

  async function leaveOut() {
    if (leaveOutRef.current) {
      await (leaveOutRef.current as any).leaveOut();
    }
  }

  useEffect(() => {
    (async function timeout() {
      await wait(1500);
      await leaveOut();
    })();
  });

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#CA4D4D",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FSAnimator inDuration={250} outDuration={500} ref={leaveOutRef}>
        <Icon source="close-circle-outline" color="#fff" size={128} />
      </FSAnimator>
    </View>
  );
}
