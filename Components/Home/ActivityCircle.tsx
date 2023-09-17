import React, { useRef, useState } from "react";
import { Animated, Pressable, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ActivitySquareProps } from "../types";
import PlayIcon from "../../SVGComponents/PlayIcon";
import globalStyles from "../../globalStyles";

const RAISE_ANIMATION_DURATION = 250;
const OPACITY_ANIMATION_DURATION = 300;
const RAISE_ANIMATION_START_LOCATION = 10;

function animateSpring(animateElement: any, toValue: number) {
    Animated.spring(animateElement, {
        toValue: toValue,
        useNativeDriver: true,
    }).start();
}

function animateTiming(animateElement: any, toValue: number, duration: number) {
    Animated.timing(animateElement, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: true,
    }).start();
}

export default function ActivitySquare({
    children,
    color,
    style,
    isDesktop,
    textUnder,
}: ActivitySquareProps) {
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(
        new Animated.Value(RAISE_ANIMATION_START_LOCATION)
    ).current;

    const [showingPlay, setShowingPlay] = useState(false);

    function onHoverIn() {
        setShowingPlay(true);
        animateTiming(opacity, 1, OPACITY_ANIMATION_DURATION / 1.25);
        animateTiming(translateY, 0, RAISE_ANIMATION_DURATION / 1.25);
    }

    function onHoverOut() {
        animateTiming(opacity, 0, OPACITY_ANIMATION_DURATION);
        animateTiming(
            translateY,
            RAISE_ANIMATION_START_LOCATION,
            RAISE_ANIMATION_DURATION
        );
        setShowingPlay(false);
    }

    const animation = new Animated.Value(0);
    const inputRange = [0, 1];
    const outputRange = [1, 0.9];
    const scale = animation.interpolate({ inputRange, outputRange });

    function onPressIn() {
        animateSpring(animation, 1);
    }
    function onPressOut() {
        animateSpring(animation, 0);
    }

    return (
        <View style={style}>
            <Animated.View style={{ transform: [{ scale }] }}>
                <Pressable
                    onHoverIn={onHoverIn}
                    onHoverOut={onHoverOut}
                    onPressIn={onPressIn}
                    onPressOut={onPressOut}
                    style={[
                        {
                            width: isDesktop ? hp(19) : hp(15),
                            height: isDesktop ? hp(19) : hp(15),
                            backgroundColor: "#616161",
                            borderRadius: 100,
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        },
                    ]}
                >
                    {children}
                    {isDesktop && showingPlay && (
                        <Animated.View
                            style={{
                                width: "15%",
                                height: "15%",
                                margin: 25,
                                opacity: opacity,
                                transform: [{ translateY: translateY }],
                                position: "absolute",
                            }}
                        >
                            <PlayIcon />
                        </Animated.View>
                    )}
                </Pressable>
            </Animated.View>
            {textUnder != undefined && (
                <Text
                    style={[
                        globalStyles.regularUIText,
                        {
                            width: isDesktop ? hp(19) : hp(15),
                            alignSelf: "center",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 5,
                            fontSize: 15,
                            fontWeight: "700",
                        },
                    ]}
                >
                    {textUnder}
                </Text>
            )}
        </View>
    );
}
