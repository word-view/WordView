import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Animated } from "react-native";
import { Timing, runAnimationsInParallel } from "../../../modules/animator";

interface AnimatorProps {
  inDuration: number;
  outDuration: number;
  children: any;
}

const Animator = forwardRef((props: AnimatorProps, ref) => {
  const scaleValue = useRef(new Animated.Value(0.5)).current;
  const fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    runAnimationsInParallel([
      Timing({ hook: scaleValue, to: 1 }, props.inDuration),
      Timing({ hook: fadeValue, to: 1 }, props.inDuration),
    ]);
  }, []);

  function leaveOut() {
    runAnimationsInParallel([
      Timing({ hook: scaleValue, to: 0.25 }, props.outDuration),
      Timing({ hook: fadeValue, to: 0 }, props.outDuration),
    ]);
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

export default Animator;
