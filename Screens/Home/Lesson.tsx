import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { ScreenProps } from "../types";
import ResponsiveChecker from "../../Components/Backend/ResponsiveChecker";
import { currentLesson } from "../../store/lesson";
import { testing } from "../../store/state";
import { Icon, Text } from "react-native-paper";

export default function Lesson(scrProps: ScreenProps) {
  const rColor = randomColor();
  const isDesktop = ResponsiveChecker().isDesktop;

  let lesson = currentLesson.get();

  useEffect(() => {
    scrProps.navigation.setOptions({
      headerStyle: {
        borderBottomColor: rColor,
        shadowColor: rColor,
        backgroundColor: rColor,
      },
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 15,
          }}
        >
          <Text variant="titleMedium" style={{ marginRight: 5 }}>
            5:00
          </Text>
          <Icon source="clock" size={20} />
        </View>
      ),
    });
  });

  return <View style={[styles.container, { backgroundColor: rColor }]}></View>;
}

function randomColor() {
  const colors = ["#3469ba", "#3fd14d", "#e34b4b"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setPageTitle(title: string, nav: any) {
  if (testing.get()) return;
  nav.setOptions({ title: title });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});
