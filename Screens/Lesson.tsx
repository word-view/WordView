import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Header } from "../Components/Home/Header";
import { ScreenProps } from "./types";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import SVGButton from "../Components/SVG/SVGButton";
import BackArrowIcon from "../Components/SVG/BackArrowIcon";
import globalStyles from "../globalStyles";
import { currentLesson } from "../store/lesson";

function randomColor() {
  const colors = ["#3469ba", "#3fd14d", "#e34b4b"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Lesson({ navigation, testing = false }: ScreenProps) {
  const rColor = randomColor();
  const isDesktop = testing ? true : ResponsiveChecker().isDesktop;

  let lesson = currentLesson.get();

  useEffect(() => {
    navigation.setOptions({ title: lesson.title });
  });

  return (
    <View style={[styles.container, { backgroundColor: rColor }]}>
      <Header isDesktop={isDesktop}>
        <SVGButton
          style={styles.goBackButton}
          onHoverAnimationDirection="left"
          onPress={() => navigation.goBack()}
          isDesktop={isDesktop}
        >
          <BackArrowIcon />
        </SVGButton>

        <Text style={[globalStyles.mediumUIText, styles.timeText]}>5:00</Text>
      </Header>
    </View>
  );
}

const styles = StyleSheet.create({
  goBackButton: {
    alignSelf: "flex-start",
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
  },
  timeText: {
    fontWeight: "500",
    alignSelf: "flex-end",
    marginRight: 15,
  },
  container: {
    flex: 1,
    position: "relative",
  },
});
