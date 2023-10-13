import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Header } from "../Components/Home/Header";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import SVGButton from "../Components/SVG/SVGButton";
import BackArrowIcon from "../Components/SVG/BackArrowIcon";
import globalStyles from "../globalStyles";
import { currentLesson } from "../store/lesson";
import { testing } from "../store/state";

export default function Lesson(scrProps: ScreenProps) {
  const rColor = randomColor();
  const isDesktop = ResponsiveChecker().isDesktop;

  let lesson = currentLesson.get();

  useEffect(() => {
    if (!testing.get()) setPageTitle(lesson.title, scrProps.navigation);
  });

  function goBack() {
    scrProps.navigation.goBack();
  }

  return (
    <View style={[styles.container, { backgroundColor: rColor }]}>
      <Header isDesktop={isDesktop} color={rColor}>
        <View style={[styles.headerControlsView, { alignSelf: "flex-start" }]}>
          <SVGButton
            style={{ alignSelf: "flex-start", marginLeft: 15 }}
            onHoverAnimationDirection="left"
            onPress={goBack}
            isDesktop={isDesktop}
          >
            <BackArrowIcon />
          </SVGButton>
        </View>
        <View style={[styles.headerControlsView, { alignSelf: "flex-end" }]}>
          <Text style={[globalStyles.mediumUIText, styles.timer]}>5:00</Text>
        </View>
      </Header>
    </View>
  );
}

function randomColor() {
  const colors = ["#3469ba", "#3fd14d", "#e34b4b"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setPageTitle(title: string, nav: any) {
  nav.setOptions({ title: title });
}

const styles = StyleSheet.create({
  timer: {
    fontWeight: "600",
    marginHorizontal: 15,
    alignSelf: "center",
  },
  headerControlsView: {
    flexDirection: "row",
    position: "absolute",
    flex: 1,
  },
  goBackButton: {
    alignSelf: "center",
    marginLeft: 15,
  },
  timeText: {
    fontWeight: "500",
    alignSelf: "center",
    marginRight: 15,
  },
  container: {
    flex: 1,
    position: "relative",
  },
});
