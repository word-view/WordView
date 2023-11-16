import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import {
  Animated,
  Easing,
  Falsy,
  RecursiveArray,
  RegisteredStyle,
  View,
  ViewStyle,
} from "react-native";
import { Surface, Text } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface LessonProgressBarProps {
  percentage: number;
  style?:
    | false
    | ViewStyle
    | RegisteredStyle<ViewStyle>
    | RecursiveArray<Falsy | ViewStyle | RegisteredStyle<ViewStyle>>;
}

export default function LessonProgressBar(props: LessonProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: props.percentage,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [props.percentage, animatedWidth]);

  return (
    <View style={{ width: "90%" }}>
      <Surface style={[styles.surface, props.style]}>
        <Animated.View
          style={[
            styles.animatedBar,
            {
              width: animatedWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </Surface>
      <View style={styles.barPercentageLabel}>
        <Text variant="titleMedium">{props.percentage}%</Text>
        <Text variant="titleMedium">{Math.abs(props.percentage - 100)}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  surface: {
    backgroundColor: "#413D45",
    width: "100%",
    borderRadius: 75,
    height: 10,
  },
  barPercentageLabel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(1),
  },
  animatedBar: {
    height: "100%",
    backgroundColor: "#63FF8F",

    borderRadius: 75,
  },
});
