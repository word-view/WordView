import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Word } from "../../../modules/api";
import WordManager from "../WordManager";
import { shuffleArray } from "../../../modules/xtensions/array";
import Animator from "./Animator";
import LabeledChildren from "./Components/LabeledChildren";
import WordImage from "./Components/WordImage";
import images from "../../../images";
import SyllableButton from "./Components/SyllableButton";
import ResponsiveChecker from "../../UI/Components/Backend/ResponsiveChecker";

interface WordSpellingProps {
  onFinish?: Function;
}

/**
 * A simple word spelling exercise
 */
export default function WordSpelling(props: WordSpellingProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  const leaveOutRef = useRef(null);

  const leftButtonRef = useRef(null);
  const middleButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  const [word, setWord] = useState({} as Word);

  const [left, setLeft] = useState("" as any);
  const [middle, setMiddle] = useState("" as any);
  const [right, setRight] = useState("" as any);

  const [leftCorrect, setLeftCorrect] = useState<boolean>(false);
  const [middleCorrect, setMiddleCorrect] = useState<boolean>(false);
  const [rightCorrect, setRightCorrect] = useState<boolean>(false);

  const [syllableCount, setSyllableCount] = useState(0);
  const [correctSyllableCount, setCorrectSyllableCount] = useState(0);

  useEffect(() => {
    setWord(WordManager.getCurrentWord());

    let shuffledOrder = shuffleArray([...(word.spelling ?? []), "tar"]);
    setSyllableCount(word.spelling?.length);

    setLeft(shuffledOrder[0]);
    setMiddle(shuffledOrder[1]);
    setRight(shuffledOrder[2]);
  }, [word]);

  function finishLesson() {
    if (leaveOutRef.current) {
      (leaveOutRef.current as any).leaveOut();
    }
  }

  function shakeLeftButton() {
    if (leftButtonRef.current) {
      (leftButtonRef.current as any).shakeAnimation();
    }
  }

  function shakeMiddleButton() {
    if (middleButtonRef.current) {
      (middleButtonRef.current as any).shakeAnimation();
    }
  }

  function shakeRightButton() {
    if (rightButtonRef.current) {
      (rightButtonRef.current as any).shakeAnimation();
    }
  }

  function guessSyllable(
    syllable: string,
    location: "left" | "middle" | "right"
  ) {
    if (word.spelling[correctSyllableCount] == syllable) {
      setCorrectSyllableCount(correctSyllableCount + 1);

      switch (location) {
        case "left":
          setLeftCorrect(true);
          break;
        case "middle":
          setMiddleCorrect(true);
          break;
        case "right":
          setRightCorrect(true);
          break;
      }

      if (correctSyllableCount + 1 == syllableCount) {
        finishLesson();
        props.onFinish?.();
      }
    } else {
      switch (location) {
        case "left":
          setLeftCorrect(false);
          shakeLeftButton();
          break;
        case "middle":
          setMiddleCorrect(false);
          shakeMiddleButton();
          break;
        case "right":
          setRightCorrect(false);
          shakeRightButton();
          break;
      }
    }
  }

  return (
    <Animator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={styles.layoutView}>
        <LabeledChildren text="______">
          <WordImage size={200} source={images.cac} />
        </LabeledChildren>

        <View style={[styles.alternativesView, isDesktop && { width: "50%" }]}>
          <SyllableButton
            onPress={() => guessSyllable(left, "left")}
            correct={leftCorrect}
            ref={leftButtonRef}
          >
            {left}
          </SyllableButton>
          <SyllableButton
            onPress={() => guessSyllable(middle, "middle")}
            correct={middleCorrect}
            ref={middleButtonRef}
          >
            {middle}
          </SyllableButton>
          <SyllableButton
            onPress={() => guessSyllable(right, "right")}
            correct={rightCorrect}
            ref={rightButtonRef}
          >
            {right}
          </SyllableButton>
        </View>
      </View>
    </Animator>
  );
}

const styles = StyleSheet.create({
  layoutView: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: hp(30),
  },
  alternativesView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});