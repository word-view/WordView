import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Animated } from "react-native";

interface LessonAnimatorProps {
  inDuration: number;
  outDuration: number;
  children: any;
}

const LessonAnimator = forwardRef((props: LessonAnimatorProps, ref) => {
  const scaleValue = useRef(new Animated.Value(0.5)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const scaleAnimation = Animated.timing(scaleValue, {
      toValue: 1,
      duration: props.inDuration,
      useNativeDriver: true,
    });

    const fadeInAnimation = Animated.timing(fadeValue, {
      toValue: 1,
      duration: props.inDuration,
      useNativeDriver: true,
    });

    Animated.parallel([scaleAnimation, fadeInAnimation]).start();
  }, []);

  function leaveOut() {
    const scaleAnimation = Animated.timing(scaleValue, {
      toValue: 0.25,
      duration: props.outDuration,
      useNativeDriver: true,
    });

    const fadeInAnimation = Animated.timing(fadeValue, {
      toValue: 0,
      duration: props.outDuration,
      useNativeDriver: true,
    });

    Animated.parallel([scaleAnimation, fadeInAnimation]).start();
  }

  useImperativeHandle(ref, () => ({ leaveOut }));

  return (
    <Animated.View
      style={{
        opacity: fadeValue,
        transform: [{ scale: scaleValue }],
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Animated.View>
  );
});

export default LessonAnimator;
