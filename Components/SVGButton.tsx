import { Animated, Easing, Pressable, StyleSheet } from "react-native";
import { SVGButtonProps } from "./types";
import { useRef } from "react";

function animateTiming(
    animateElement: any,
    toValue: number,
    duration: number,
    easing: (value: number) => number
) {
    Animated.timing(animateElement, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
        easing: easing,
    }).start();
}

export default function SVGButton({
    pressAction,
    children,
    style,
    onHoverAnimationDirection,
    isDesktop = false,
}: SVGButtonProps) {
    const translateY = useRef(new Animated.Value(0)).current;
    const translateX = useRef(new Animated.Value(0)).current;

    function onHoverIn() {
        animateTiming(translateY, -5, 100, Easing.linear);
        animateTiming(translateX, -5, 100, Easing.linear);
    }

    function onHoverOut() {
        animateTiming(translateY, 0, 100, Easing.linear);
        animateTiming(translateX, 0, 100, Easing.linear);
    }

    const maxOpacity = 0.12;
    const scaleValue = useRef(new Animated.Value(0.01)).current;
    const opacityValue = useRef(new Animated.Value(maxOpacity)).current;

    function onPressIn() {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 225,
            easing: Easing.bezier(0.0, 0.0, 0.2, 1),
            useNativeDriver: true,
        }).start();
    }
    function onPressOut() {
        Animated.timing(opacityValue, {
            toValue: 0,
            useNativeDriver: true,
        }).start(() => {
            scaleValue.setValue(0.01);
            opacityValue.setValue(maxOpacity);
        });
    }

    return (
        <Animated.View
            style={{
                transform:
                    onHoverAnimationDirection == "top"
                        ? [{ translateY: translateY }]
                        : [{ translateX: translateX }],
            }}
        >
            <Pressable
                onHoverIn={onHoverIn}
                onHoverOut={onHoverOut}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[
                    styles.button,
                    !isDesktop && { width: 32, height: 32 },
                    style,
                ]}
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
