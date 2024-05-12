import { Animated } from 'react-native';

export function runAnimationsInParallel(animations: Animated.CompositeAnimation[]) {
    Animated.parallel(animations).start();
}
