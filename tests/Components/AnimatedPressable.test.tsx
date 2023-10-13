import * as React from "react";
import renderer from "react-test-renderer";
import AnimatedPressable from "../../Components/Animated/AnimatedPressable";
import { testing } from "../../store/state";

beforeEach(() => testing.set(true));

it(`AnimatedPressable renders`, () => {
  const tree = renderer
    .create(
      <AnimatedPressable
        animatedViewStyle={undefined}
        pressableStyle={undefined}
        onHoverIn={() => {}}
        onHoverOut={() => {}}
        accessibilityHint={"TestPressable"}
      />
    )
    .toJSON();

  expect(tree).toBeDefined();
});
