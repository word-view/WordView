import { Animated } from "react-native";

interface TimingOptions {
  hook: Animated.Value;
  to: number;
  native?: boolean;
  easing?: (value: number) => number;
}

export function Timing(options: TimingOptions, duration: number) {
  const animation = Animated.timing(options.hook, {
    toValue: options.to,
    duration: duration,
    easing: options.easing,
    useNativeDriver: options.native ?? true,
  });

  return animation;
}
