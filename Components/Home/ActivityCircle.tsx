import React, { useRef, useState } from "react";
import {
  Animated,
  Pressable,
  Text,
  View,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import {
  PressableComponent,
  ReactiveComponent,
  StyleableComponent,
} from "../types";
import PlayIcon from "../SVG/PlayIcon";
import globalStyles from "../../globalStyles";
import { animateTiming, Speed } from "@wordview/animator";
import DifficultyLabel from "./DifficultyLabel";
import { Difficulty } from "@wordview/api";
import AnimatedPressable from "../Animated/AnimatedPressable";

const RAISE_ANIMATION_START_LOCATION = 10;

export interface ActivityCircleProps
  extends StyleableComponent<ViewStyle>,
    ReactiveComponent,
    PressableComponent {
  children?: any;
  color: string;
  textUnder?: string;
  difficulty?: Difficulty;
}

export default function ActivityCircle(props: ActivityCircleProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(
    new Animated.Value(RAISE_ANIMATION_START_LOCATION)
  ).current;

  const [showingPlay, setShowingPlay] = useState(false);

  function onHoverIn() {
    setShowingPlay(true);
    animateTiming(opacity, 1, Speed.Fastest / 1.25);
    animateTiming(translateY, 0, Speed.Fast / 1.25);
  }

  function onHoverOut() {
    animateTiming(opacity, 0, Speed.Fastest);
    animateTiming(translateY, RAISE_ANIMATION_START_LOCATION, Speed.Fast);
    setShowingPlay(false);
  }

  const animation = new Animated.Value(0);
  const inputRange = [0, 1];
  const outputRange = [1, 0.9];
  const scale = animation.interpolate({ inputRange, outputRange });

  return (
    <View style={props.style}>
      <AnimatedPressable
        animatedViewStyle={{ transform: [{ scale }] }}
        pressableStyle={[
          styles.pressableCircle,
          {
            width: props.isDesktop ? hp(19) : hp(15),
            height: props.isDesktop ? hp(19) : hp(15),
          },
        ]}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        onPress={props.onPress}
      >
        {props.children}
        {props.isDesktop && showingPlay && (
          <Animated.View
            style={[
              styles.playIconView,
              { opacity: opacity, transform: [{ translateY: translateY }] },
            ]}
          >
            <PlayIcon />
          </Animated.View>
        )}
      </AnimatedPressable>
      {props.textUnder != undefined && (
        <Text
          style={[
            globalStyles.regularUIText,
            styles.textUnder,
            { width: props.isDesktop ? hp(19) : hp(15) },
          ]}
        >
          {props.textUnder}
        </Text>
      )}
      {props.difficulty != undefined && (
        <DifficultyLabel difficulty={props.difficulty} />
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
  difficultyLabel: {
    alignSelf: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    fontSize: 12.5,
    fontWeight: "600",
    backgroundColor: "#60CC57",
    paddingHorizontal: 15,
    borderRadius: 20,
    opacity: 0.8,
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
