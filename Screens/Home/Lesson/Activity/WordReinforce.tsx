import { useEffect, useRef } from "react";
import LessonAnimator from "./Components/LessonAnimator";
import { View, StyleSheet } from "react-native";
import images from "../../../../images";
import LabeledChildren from "./Components/LabeledChildren";
import { wait } from "../../../../modules/time/time";
import WordImage from "./Components/WordImage";

export default function WordReinforce() {
  let leaveOutRef = useRef(null);

  function finishLesson() {
    if (leaveOutRef.current) {
      (leaveOutRef.current as any).leaveOut();
    }
  }

  useEffect(() => {
    (async function timeout() {
      await wait(2500);
      finishLesson();
    })();
  });

  return (
    <LessonAnimator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={styles.layoutView}>
        <LabeledChildren text="Cactus">
          <WordImage size={200} source={images.cac} />
        </LabeledChildren>
      </View>
    </LessonAnimator>
  );
}

const styles = StyleSheet.create({
  layoutView: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
