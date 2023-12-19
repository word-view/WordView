import { Animated } from "react-native";

interface SpringOptions {
  hook: Animated.ValueXY | Animated.Value;
  to: {
    x: number;
    y: number;
  };
  native?: boolean;
}
export function Spring(options: SpringOptions) {
  const animation = Animated.spring(options.hook, {
    toValue: options.to,
    useNativeDriver: options.native ?? true,
  });
  return animation;
}
