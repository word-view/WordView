import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../Components/Home/Header";
import ResponsiveChecker from "../Components/Backend/ResponsiveChecker";
import { ScreenProps } from "./types";
import SVGButton from "../Components/SVG/SVGButton";
import SettingsIcon from "../Components/SVG/SettingsIcon";
import { Lesson, getLessons } from "../modules/api";
import SectionLabel from "../Components/Text/SectionLabel";
import SectionText from "../Components/Text/SectionText";
import LessonsScroll from "../Components/Home/LessonsScroll";
import ScreenScroll from "../Components/Home/ScreenScroll";
import WVLogo from "../Components/Home/WVLogo";

export default function Home(scrProps: ScreenProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

  const [suggestedLessons, setSuggestedLessons] = useState([] as Lesson[]);
  getLessons("starter").then((data) => setSuggestedLessons(data));

  function settingsButtonPress() {
    scrProps.navigation.navigate("Settings");
  }

  return (
    <>
      <Header isDesktop={isDesktop} color="#353535">
        <View style={styles.wvTitleHolder}>
          <WVLogo />
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

        <LessonsScroll lessons={suggestedLessons} nav={scrProps.navigation} />
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
});
