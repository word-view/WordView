import React, { forwardRef, memo, useImperativeHandle, useRef } from "react";
import { StyleProp, ViewStyle } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import ResponsiveChecker from "../../../UI/Components/Backend/ResponsiveChecker";
import Button from "../../../UI/Components/Buttons/Button";

interface SyllableButtonProps {
  children: React.ReactNode;
  onPress: () => any;
  style?: StyleProp<ViewStyle>;
  correct?: boolean;
}

const SyllableButton = forwardRef((props: SyllableButtonProps, ref) => {
  const isDesktop = ResponsiveChecker().isDesktop;

  const shakeValue = useSharedValue(0);

  const shakeAnimation = () => {
    shakeValue.value = withRepeat(
      withSequence(
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(10, { duration: 50, easing: Easing.linear }),
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(10, { duration: 50, easing: Easing.linear }),
        withTiming(-10, { duration: 50, easing: Easing.linear }),
        withTiming(0, { duration: 50, easing: Easing.linear })
      ),
      1 // Number of times to repeat the sequence
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shakeValue.value }],
    };
  }, [shakeValue]);

  useImperativeHandle(ref, () => ({ shakeAnimation }));

  let textColor, buttonColor, pressable;

  switch (props.correct) {
    case true:
      textColor = "#000";
      buttonColor = "#58E8A8";
      pressable = false;
      break;
    default:
    case false:
      textColor = "#000";
      buttonColor = "#B9E8EE";
      pressable = true;
      break;
  }

  return (
    <Animated.View style={[animatedStyle]}>
      <Button
        pressable={pressable}
        color={{ text: textColor, button: buttonColor }}
        onPress={props.onPress}
        style={[{ width: wp(25) }, isDesktop && { width: wp(10) }]}
      >
        {props.children}
      </Button>
    </Animated.View>
  );
});

export default memo(SyllableButton);
