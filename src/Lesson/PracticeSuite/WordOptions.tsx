import React, { useEffect, useRef, useState } from "react";
import LessonAnimator from "./Animator";
import { View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Word } from "../../../modules/api";
import WordManager from "../WordManager";
import WordImage from "./Components/WordImage";
import ResponsiveChecker from "../../UI/Components/Backend/ResponsiveChecker";
import Button from "../../UI/Components/Buttons/Button";

interface WordOptionsProps {
  onRight?: Function;
  onWrong?: Function;
}

/**
 * Shows a image and 3 alternatives to choose from.
 */
export default function WordOptions(props: WordOptionsProps) {
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
          <Button
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={right}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            {word.name}
          </Button>

          <Button
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={wrong}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            Wall
          </Button>

          <Button
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={wrong}
            marginTop={!isDesktop ? 2.5 : 0}
          >
            Car
          </Button>
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
