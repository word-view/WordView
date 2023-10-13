import * as React from "react";
import renderer from "react-test-renderer";
import AnimatedPressable from "../../Components/Animated/AnimatedPressable";

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
