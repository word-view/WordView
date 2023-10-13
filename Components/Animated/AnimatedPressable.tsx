import {
  Animated,
  Pressable,
  type PressableStateCallbackType,
  type RegisteredStyle,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import React from "react";
import { ChildrenableComponent, PressableComponent } from "../types";

interface AnimatedPressableProps
  extends ChildrenableComponent,
    PressableComponent {
  animatedViewStyle:
    | false
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | RegisteredStyle<ViewStyle>
    | Animated.WithAnimatedObject<ViewStyle>
    | null
    | undefined;

  pressableStyle:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);

  onHoverIn: () => void;
  onHoverOut: () => void;

  accessibilityHint: string;
}

export default function AnimatedPressable(props: AnimatedPressableProps) {
  return (
    <Animated.View style={props.animatedViewStyle}>
      <Pressable
        accessibilityHint={props.accessibilityHint}
        onHoverIn={props.onHoverIn}
        onHoverOut={props.onHoverOut}
        onPress={props.onPress}
        style={props.pressableStyle}
      >
        {props.children}
      </Pressable>
    </Animated.View>
  );
}
