import * as React from "react";
import renderer from "react-test-renderer";
import AttentionBox from "../../Components/Home/AttentionBox";
import { testing } from "../../store/state";

beforeEach(() => testing.set(true));

it(`AttentionBox > level (1) renders`, () => {
  const tree = renderer.create(<AttentionBox level={1} />).toJSON();
  expect(tree).toBeDefined();
});

it(`AttentionBox > level (2) renders`, () => {
  const tree = renderer.create(<AttentionBox level={2} />).toJSON();
  expect(tree).toBeDefined();
});
