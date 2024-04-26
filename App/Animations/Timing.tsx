import { Animated } from 'react-native';

/**
 * Animates a component's value over time.
 *
 * @param {Animated.Value} hook - Value to be manipulated during.
 * @param {number} to - Target value of the animation.
 * @param {number} duration - Duration of the animation in milliseconds.
 * @param {boolean} [native=true] - Optional parameter to use the native driver for animation (defaults to true).
 * @param {(value: number) => number} [easing] - Optional easing function to customize animation.
 * @returns {Animated.CompositeAnimation} The created animation object.
 */
export function timing(
  hook: Animated.Value,
  to: number,
  duration: number,
  native?: boolean,
  easing?: (value: number) => number,
): Animated.CompositeAnimation {
  const animation = Animated.timing(hook, {
    toValue: to,
    duration: duration,
    easing: easing,
    useNativeDriver: native ?? true,
  });

  return animation;
}
