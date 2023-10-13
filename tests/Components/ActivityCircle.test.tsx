import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import ActivityCircle from "../../Components/Home/ActivityCircle";

it(`ActivityCircle renders`, () => {
  const tree = renderer
    .create(<ActivityCircle color="#FFFFFF" onPress={() => {}} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`ActivityCircle > onPress`, () => {
  let pressed = false;

  const { getByA11yHint } = render(
    <ActivityCircle color="#ffffff" onPress={() => (pressed = true)} />
  );

  fireEvent.press(getByA11yHint("PressableCircle"));
  expect(pressed).toBeTruthy();
});

it(`ActivityCircle > textUnder`, () => {
  const { getAllByText } = render(
    <ActivityCircle color="#ffffff" textUnder="Text" />
  );

  const textUnder = getAllByText("Text");
  expect(textUnder).toHaveLength(1);
});

it(`ActivityCircle > difficultyLabel`, () => {
  const { getAllByText } = render(
    <ActivityCircle color="#ffffff" difficulty="starter" />
  );

  const diffText = getAllByText("starter");
  expect(diffText).toHaveLength(1);
});
