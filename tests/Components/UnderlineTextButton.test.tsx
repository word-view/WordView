import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import UnderlineTextButton from "../../Components/Login&Register/UnderlineTextButton";

it(`UnderlineTextButton renders`, () => {
  const tree = renderer
    .create(<UnderlineTextButton pressableAlign="center" text="Click!" />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`UnderlineTextButton > onPress`, () => {
  let pressed = false;

  const { getByA11yHint } = render(
    <UnderlineTextButton
      pressableAlign="center"
      text="Click!"
      onPress={() => (pressed = true)}
    />
  );

  fireEvent.press(getByA11yHint("UnderlineTextButtonPressable"));
  expect(pressed).toBeTruthy();
});
