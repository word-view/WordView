import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Animated } from "react-native";

interface FSAnimatorProps {
  inDuration: number;
  outDuration: number;
  children: any;
}

const FSAnimator = forwardRef((props: FSAnimatorProps, ref) => {
  const scaleValue = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: props.inDuration,
      useNativeDriver: true,
    }).start();
  }, []);

  function leaveOut(): Promise<void> {
    return new Promise((resolve) => {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: props.outDuration,
        useNativeDriver: true,
      }).start(() => resolve());
    });
  }

  useImperativeHandle(ref, () => ({ leaveOut }));

  return (
    <Animated.View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ scale: scaleValue }],
      }}
    >
      {props.children}
    </Animated.View>
  );
});

export default FSAnimator;
