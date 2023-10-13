import { render, fireEvent } from "@testing-library/react-native";
import * as React from "react";
import renderer from "react-test-renderer";
import SVGButton from "../../Components/SVG/SVGButton";
import { Speed } from "@wordview/animator";
import { wait } from "./util";
import { testing } from "../../store/state";

beforeEach(() => testing.set(true));

it(`UnderlineTextButton renders`, () => {
  const tree = renderer.create(<SVGButton />).toJSON();

  expect(tree).toBeDefined();
});

it(`UnderlineTextButton > onPress`, async () => {
  let pressed = false;

  const { getByA11yHint } = render(
    <SVGButton onPress={() => (pressed = true)} />
  );

  fireEvent.press(getByA11yHint("SVGButtonPressable"));

  await wait(Speed.Fast / 2);

  expect(pressed).toBeTruthy();
});
