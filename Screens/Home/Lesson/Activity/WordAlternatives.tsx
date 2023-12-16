import { useEffect, useRef, useState } from "react";
import LessonAnimator from "./Components/LessonAnimator";
import { View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import DefaultButton from "../../../../Components/Buttons/Button";
import WordImage from "./Components/WordImage";
import { Word } from "../../../../modules/api";
import ResponsiveChecker from "../../../../Components/Backend/ResponsiveChecker";
import WordManager from "../WordManager";

interface WordAlternativesProps {
  onRight?: Function;
  onWrong?: Function;
}

/**
 * Shows a image and 3 alternatives to choose from.
 */
export default function WordAlternatives(props: WordAlternativesProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  let leaveOutRef = useRef(null);

  const [word, setWord] = useState({} as Word);

  useEffect(() => setWord(WordManager.getCurrentWord()), [word]);

  function right() {
    finishLesson();
    props.onRight?.();
  }
  function wrong() {
    finishLesson();
    props.onWrong?.();
  }

  function finishLesson() {
    if (leaveOutRef.current) {
      (leaveOutRef.current as any).leaveOut();
    }
  }

  return (
    <LessonAnimator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={[styles.layoutView]}>
        <WordImage
          size={250}
          source={word.image}
          style={{ marginBottom: hp(15) }}
        />

        <View
          style={[
            styles.alternativesView,
            !isDesktop && { flexDirection: "column", marginBottom: hp(10) },
          ]}
        >
          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={right}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            {word.name}
          </DefaultButton>

          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={wrong}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            Wall
          </DefaultButton>

          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={wrong}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            Car
          </DefaultButton>
        </View>
      </View>
    </LessonAnimator>
  );
}

const styles = StyleSheet.create({
  layoutView: {
    width: "100%",
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
  },
  alternativesView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
