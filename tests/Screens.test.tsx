import * as React from "react";
import renderer from "react-test-renderer";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import PickLanguage from "../Screens/PickLanguage";
import Register from "../Screens/Register";
import Settings from "../Screens/Settings";
import Welcome from "../Screens/Welcome";

it(`Home renders`, () => {
  const tree = renderer
    .create(<Home navigation={undefined} testing={true} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`Login renders`, () => {
  const tree = renderer
    .create(<Login navigation={undefined} testing={true} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`PickLanguage renders`, () => {
  const tree = renderer
    .create(<PickLanguage navigation={undefined} testing={true} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`Register renders`, () => {
  const tree = renderer
    .create(<Register navigation={undefined} testing={true} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`Settings renders`, () => {
  const tree = renderer
    .create(<Settings navigation={undefined} testing={true} />)
    .toJSON();

  expect(tree).toBeDefined();
});

it(`Welcome renders`, () => {
  const tree = renderer
    .create(
      <Welcome
        onLayoutRootView={() => {}}
        navigation={undefined}
        testing={true}
      />
    )
    .toJSON();

  expect(tree).toBeDefined();
});
