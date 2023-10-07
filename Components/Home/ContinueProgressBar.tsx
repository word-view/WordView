import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import { ContinueProgressBarProps } from "../types";
import globalStyles from "../../globalStyles";

export default function ContinueProgressBar(props: ContinueProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: props.percentage,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [props.percentage]);

  const barWidth = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp",
  });

  return (
    <>
      <View
        style={[
          styles.bar,
          {
            width: props.isDesktop ? 400 : "130%",
            marginTop: props.isDesktop ? 15 : 30,
          },
          props.isDesktop && { marginLeft: 15 },
          props.style,
        ]}
      >
        <Animated.View
          style={[
            styles.innerBar,
            {
              width: barWidth, // Use the animated width
            },
          ]}
        />
      </View>
      <Text
        style={[
          globalStyles.regularUIText,
          styles.percentageLabel,
          props.isDesktop && { marginLeft: 15 },
        ]}
      >
        {`${props.percentage}% Completo`}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#6B6B6B",
    height: 10,
    borderRadius: 30,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  innerBar: {
    height: "100%",
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    borderRadius: 30,
  },
  percentageLabel: {
    marginTop: 5,
    alignSelf: "flex-start",
  },
});
