import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Header } from "../Components/Home/Header";
import ActivityCircle from "../Components/Home/ActivityCircle";
import globalStyles from "../globalStyles";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "./types";
import images from "../images";
import SVGButton from "../Components/SVG/SVGButton";
import SettingsIcon from "../Components/SVG/SettingsIcon";
import { Lesson, getLessons } from "../modules/api";
import { currentLesson } from "../store/lesson";
import SectionLabel from "../Components/Text/SectionLabel";
import SectionText from "../Components/Text/SectionText";
import LessonsScroll from "../Components/Home/LessonsScroll";
import ScreenScroll from "../Components/Home/ScreenScroll";

export default function Home(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  const [lessons, setLessons] = useState([] as Lesson[]);
  getLessons("starter").then((data) => setLessons(data));

  function settingsButtonPress() {
    scrProps.navigation.navigate("Settings");
  }

  function activityCirclePress(lesson: Lesson, index?: number) {
    currentLesson.set(lesson);
    scrProps.navigation.navigate("Lesson");
  }

  return (
    <>
      <Header isDesktop={isDesktop} color="#353535">
        <View style={styles.wvTitleHolder}>
          <Image style={styles.wvIcon} source={images.wvIcon} />
          {isDesktop && (
            <Image style={styles.wvTitle} source={images.wvTitle} />
          )}
        </View>

        <SVGButton
          style={{ alignSelf: "flex-end", marginHorizontal: 15 }}
          onHoverAnimationDirection="top"
          onPress={settingsButtonPress}
          isDesktop={isDesktop}
        >
          <SettingsIcon />
        </SVGButton>
      </Header>
      <ScreenScroll>
        <SectionLabel>Aulas sugeridas</SectionLabel>
        <SectionText>
          Aulas simples para você entender como o app funciona
        </SectionText>

        <LessonsScroll>
          {lessons?.map((lesson, i) => (
            <ActivityCircle
              color="#63FF72"
              style={{ marginLeft: 15 }}
              textUnder={lesson.title}
              difficulty={lesson.difficulty}
              key={i}
              onPress={() => activityCirclePress(lesson, i)}
              isDesktop={isDesktop}
            >
              <Image style={globalStyles.full} source={images.cac} />
            </ActivityCircle>
          ))}
        </LessonsScroll>
      </ScreenScroll>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353535",
    position: "relative",
  },
  wvTitleHolder: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  wvIcon: {
    height: 34,
    width: 42,
    marginLeft: 15,
  },
  wvTitle: {
    height: 20,
    width: 120,
    marginLeft: 15,
  },
});
