import * as React from "react";
import renderer from "react-test-renderer";
import { testing } from "../store/state";
import App from "../App";

beforeEach(() => testing.set(true));

it(`App renders`, () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toBeDefined();
});
