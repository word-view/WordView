import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import RoundedButton from "../../Components/RoundedButton";
import { testing } from "../../store/state";

beforeEach(() => testing.set(true));

it(`UnderlineTextButton renders`, () => {
  const tree = renderer
    .create(<RoundedButton color="#ffffff" textColor="#000000" text="Click!" />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`UnderlineTextButton > onPress`, async () => {
  let pressed = false;

  const { getByA11yHint } = render(
    <RoundedButton
      color="#ffffff"
      textColor="#000000"
      text="click!"
      onPress={() => (pressed = true)}
    />
  );

  fireEvent.press(getByA11yHint("ButtonPressable"));
  expect(pressed).toBeTruthy();
});
