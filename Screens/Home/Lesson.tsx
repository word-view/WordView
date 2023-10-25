import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";
import { NavigationScreen } from "../Components/NavigationScreen";
import { ScrollView } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { State } from "../Components/AdaptableScreen";

class Lesson extends NavigationScreen {
  randomColor = randomColor();

  componentDidMount() {
    this.headerRight(
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
    );

    this.headerStyle({
      borderBottomColor: this.randomColor,
      shadowColor: this.randomColor,
      backgroundColor: this.randomColor,
    });
  }

  render() {
    return (
      <ScrollView
        style={[styles.container, { backgroundColor: this.randomColor }]}
      ></ScrollView>
    );
  }
}

function randomColor() {
  const colors = ["#3469ba", "#3fd14d", "#e34b4b"];
  return colors[Math.floor(Math.random() * colors.length)];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default withNavigation(Lesson);
