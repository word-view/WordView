import { StyleSheet, View } from "react-native";
import React from "react";
import { Icon, Text } from "react-native-paper";
import { NavigationScreen } from "../Components/NavigationScreen";
import { withNavigation } from "react-navigation";
import { formatTime } from "../../modules/time/time";
import { timeLeft } from "../../store/lesson";
import RightCheckMark from "./Lesson/RightCheckMark";
import WrongCheckMark from "./Lesson/WrongCheckMark";

class Lesson extends NavigationScreen {
  randomColor = randomColor();

  timer: NodeJS.Timeout | undefined;
  timerSaver: NodeJS.Timeout | undefined;

  onEndTimer: Function | undefined;

  showingRight = false;
  showingWrong = false;

  showRight() {
    this.showingRight = true;
  }

  showWrong() {
    this.showingWrong = true;
  }

  startTimer(onEnd?: Function) {
    if (onEnd) this.onEndTimer = onEnd;

    this.timer = setInterval(() => {
      if (timeLeft.get() <= 0) {
        this.navigateTo("Home");
      }

      const time = timeLeft.get();
      timeLeft.set(time - 1000);

      this.setHeader();

      if (timeLeft.get() == 0) {
        this.onEndTimer?.();
        clearInterval(this.timer);
      }
    }, 1000);

    this.timerSaver = setInterval(() => {
      this.saveTimer();

      if (timeLeft.get() == 0) {
        clearInterval(this.timerSaver);
      }
    }, 10000);
  }

  saveTimer() {
    console.log("Saving timer state to the remote server");
  }

  stopTimer() {
    this.saveTimer();
    clearInterval(this.timer);
    clearInterval(this.timerSaver);
  }

  setHeader() {
    this.headerRight(
      <View style={styles.timerContainer}>
        <Text variant="titleMedium" style={{ marginRight: 5 }}>
          {formatTime(timeLeft.get())}
        </Text>
        <Icon source="clock" size={20} />
      </View>
    );
  }

  componentDidMount() {
    this.setHeader();

    this.headerStyle({
      borderBottomColor: this.randomColor,
      shadowColor: this.randomColor,
      backgroundColor: this.randomColor,
    });

    this.startTimer(() => {
      console.log("Timer finished!");
      // move lesson information to a store
      this.navigateTo("Statistics");
    });
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    return (
      <View style={[styles.lessonField, { backgroundColor: this.randomColor }]}>
        {this.showingRight && (
          <RightCheckMark onEnd={() => (this.showingRight = false)} />
        )}

        {this.showingWrong && (
          <WrongCheckMark onEnd={() => (this.showingWrong = false)} />
        )}
      </View>
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
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  lessonField: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    position: "absolute",
  },
});

export default withNavigation(Lesson);
