import React, { useRef, useState } from "react";
import { Animated, Pressable, Text, View, StyleSheet } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { ActivitySquareProps } from "../types";
import PlayIcon from "../SVGComponents/PlayIcon";
import globalStyles from "../../globalStyles";
import { animateTiming, Speed } from "@wordview/animator";

const RAISE_ANIMATION_START_LOCATION = 10;

export default function ActivitySquare({
  children,
  color,
  style,
  isDesktop,
  textUnder,
  pressAction,
}: ActivitySquareProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(
    new Animated.Value(RAISE_ANIMATION_START_LOCATION)
  ).current;

  const [showingPlay, setShowingPlay] = useState(false);

  function onHoverIn() {
    setShowingPlay(true);
    animateTiming(opacity, 1, Speed.Faster / 1.25);
    animateTiming(translateY, 0, Speed.Fast / 1.25);
  }

  function onHoverOut() {
    animateTiming(opacity, 0, Speed.Faster);
    animateTiming(translateY, RAISE_ANIMATION_START_LOCATION, Speed.Fast);
    setShowingPlay(false);
  }

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.9];
  const scale = animation.interpolate({ inputRange, outputRange });

  return (
    <View style={style}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <Pressable
          onHoverIn={onHoverIn}
          onHoverOut={onHoverOut}
          onPress={pressAction}
          style={[
            styles.pressableCircle,
            {
              width: isDesktop ? hp(19) : hp(15),
              height: isDesktop ? hp(19) : hp(15),
            },
          ]}
        >
          {children}
          {isDesktop && showingPlay && (
            <Animated.View
              style={[
                styles.playIconView,
                { opacity: opacity, transform: [{ translateY: translateY }] },
              ]}
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
            styles.textUnder,
            { width: isDesktop ? hp(19) : hp(15) },
          ]}
        >
          {textUnder}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textUnder: {
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    fontSize: 15,
    fontWeight: "700",
  },
  playIconView: {
    width: "15%",
    height: "15%",
    margin: 25,
    position: "absolute",
  },
  pressableCircle: {
    backgroundColor: "#616161",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
