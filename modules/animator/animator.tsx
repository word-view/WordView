import { Animated } from "react-native";

interface TimingOptions {
  hook: Animated.Value;
  to: number;
  native?: boolean;
}

export function Timing(options: TimingOptions, duration: number) {
  const animation = Animated.timing(options.hook, {
    toValue: options.to,
    duration: duration,
    useNativeDriver: options.native ?? true,
  });

  return animation;
}

export function runAnimationsInParallel(
  animations: Animated.CompositeAnimation[]
) {
  Animated.parallel(animations).start();
}
