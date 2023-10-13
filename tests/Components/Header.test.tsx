import * as React from "react";
import renderer from "react-test-renderer";
import { Header } from "../../Components/Home/Header";

it(`Header renders`, () => {
  const tree = renderer.create(<Header color="#242424" />).toJSON();
  expect(tree).toBeDefined();
});

it(`Header renders > no color set`, () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toBeDefined();
});
