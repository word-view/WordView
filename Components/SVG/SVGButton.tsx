import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { useRef } from "react";
import { Speed, animateTiming } from "@wordview/animator";
import {
  ChildrenableComponent,
  PressableComponent,
  ReactiveComponent,
  StyleableComponent,
} from "../types";
import ResponsiveChecker from "../Backend/ResponsiveChecker";

function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export interface SVGButtonProps
  extends PressableComponent,
    ChildrenableComponent,
    StyleableComponent<ViewStyle> {}

export default function SVGButton(props: SVGButtonProps) {
  const isDesktop = ResponsiveChecker().isDesktop;

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
        accessibilityHint="SVGButtonPressable"
        style={[
          styles.button,
          !isDesktop && { width: 32, height: 32 },
          props.style,
        ]}
        onPress={async () => {
          await wait(Speed.Fastest / 2);
          props.onPress?.();
        }}
      >
        {props.children}

        <Animated.View
          style={[
            styles.rippleView,
            {
              backgroundColor: "white",
              opacity: opacityValue,
              transform: [{ scale: scaleValue }],
            },
          ]}
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
  rippleView: {
    alignSelf: "center",
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    position: "absolute",
  },
});
