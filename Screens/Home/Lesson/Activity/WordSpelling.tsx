import { useEffect, useRef, useState } from "react";
import LessonAnimator from "./Components/LessonAnimator";
import { View, StyleSheet } from "react-native";
import WordImage from "./Components/WordImage";
import images from "../../../../images";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LabeledChildren from "./Components/LabeledChildren";
import DefaultButton from "../../../../Components/Buttons/Button";
import { Word } from "../../../../modules/api";
import { shuffleArray } from "../../../../modules/xtensions/array";
import WordManager from "../WordManager";
import ResponsiveChecker from "../../../../Components/Backend/ResponsiveChecker";

interface WordSpellingProps {
  onFinish?: Function;
}

/**
 * A simple word spelling exercise
 */
export default function WordSpelling(props: WordSpellingProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  const leaveOutRef = useRef(null);

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
          break;
        case "middle":
          setMiddleCorrect(false);
          break;
        case "right":
          setRightCorrect(false);
          break;
      }
    }
  }

  return (
    <LessonAnimator inDuration={500} outDuration={400} ref={leaveOutRef}>
      <View style={styles.layoutView}>
        <LabeledChildren text="______">
          <WordImage size={200} source={images.cac} />
        </LabeledChildren>

        <View style={[styles.alternativesView, isDesktop && { width: "50%" }]}>
          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={() => guessSyllable(left, "left")}
            style={[{ width: wp(25) }, isDesktop && { width: wp(10) }]}
          >
            {left}
          </DefaultButton>
          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={() => guessSyllable(middle, "middle")}
            style={[{ width: wp(25) }, isDesktop && { width: wp(10) }]}
          >
            {middle}
          </DefaultButton>
          <DefaultButton
            color={{ text: "#000", button: "#B9E8EE" }}
            onPress={() => guessSyllable(right, "right")}
            style={[{ width: wp(25) }, isDesktop && { width: wp(10) }]}
          >
            {right}
          </DefaultButton>
        </View>
      </View>
    </LessonAnimator>
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
