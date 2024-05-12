import { Animated } from 'react-native';

/**
 * Animates a component's movement using a spring animation.
 *
 * @param {Object} to - Target position of the animation, with properties `x` and `y`.
 * @param {Animated.ValueXY | Animated.Value} hook - Value to be manipulated during the animation.
 * @param {boolean} native - Optional parameter to use the native driver for animation (defaults to true).
 * @returns {Animated.CompositeAnimation} The created animation object.
 */
export function springTo(
    to: { x: number; y: number },
    hook: Animated.ValueXY | Animated.Value,
    native?: boolean,
): Animated.CompositeAnimation {
    const animation = Animated.spring(hook, {
        toValue: to,
        useNativeDriver: native ?? true,
    });
    return animation;
}
