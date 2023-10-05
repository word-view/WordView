import { Animated, Easing, Pressable, StyleSheet } from "react-native";
import { SVGButtonProps } from "./types";
import { useRef } from "react";
import { Speed, animateTiming } from "@wordview/animator";

export default function SVGButton({
  pressAction,
  children,
  style,
  isDesktop = false,
}: SVGButtonProps) {
  const maxOpacity = 0.12;
  const scaleValue = useRef(new Animated.Value(0.01)).current;
  const opacityValue = useRef(new Animated.Value(maxOpacity)).current;

  function onPressIn() {
    animateTiming(
      scaleValue,
      1,
      Speed.Fastest,
      Easing.bezier(0.0, 0.0, 0.2, 1)
    );
  }

  function onPressOut() {
    animateTiming(opacityValue, 0, Speed.Fast, undefined, () => {
      scaleValue.setValue(0.01);
      opacityValue.setValue(maxOpacity);
    });
  }

  return (
    <Animated.View>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[styles.button, !isDesktop && { width: 32, height: 32 }, style]}
        onPress={pressAction}
      >
        {children}

        <Animated.View
          style={{
            alignSelf: "center",
            width: 48,
            height: 48,
            borderRadius: 48 / 2,
            transform: [{ scale: scaleValue }],
            opacity: opacityValue,
            backgroundColor: "white",
            position: "absolute",
          }}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
});
