import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import Button from "../../Components/Button";

it(`Button renders`, () => {
  const tree = renderer
    .create(<Button color="#FFFFFF" textColor="#000000" text="Click!" />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`Button > onPress`, () => {
  let pressed = false;

  const { getByA11yHint } = render(
    <Button
      color="#FFFFFF"
      textColor="#000000"
      text="Click!"
      onPress={() => (pressed = true)}
    />
  );

  fireEvent.press(getByA11yHint("ButtonPressable"));
  expect(pressed).toBeTruthy();
});
