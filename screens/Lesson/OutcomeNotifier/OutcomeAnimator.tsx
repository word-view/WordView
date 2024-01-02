import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Animated } from "react-native";
import { Timing } from "../../../modules/animator";

interface FSAnimatorProps {
  inDuration: number;
  outDuration: number;
  children: any;
}

const FSAnimator = forwardRef((props: FSAnimatorProps, ref) => {
  const scaleValue = useRef(new Animated.Value(0.1)).current;

  useEffect(() => {
    Timing({ hook: scaleValue, to: 1 }, props.inDuration).start();
  }, []);

  function leaveOut(): Promise<void> {
    return new Promise((resolve) => {
      Timing({ hook: scaleValue, to: 0 }, props.outDuration).start(() =>
        resolve()
      );
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
