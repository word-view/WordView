import React, { useRef, useEffect } from "react";
import { Animated } from "react-native";
import { Icon } from "react-native-paper";

interface RightCheckMarkProps {
  onEnd?: () => void;
}

export default function RightCheckMark(props: RightCheckMarkProps) {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      props.onEnd?.();
    }, 1750);
  }, []);

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <Icon source="checkbox-marked-circle-outline" color={"white"} size={72} />
    </Animated.View>
  );
}
