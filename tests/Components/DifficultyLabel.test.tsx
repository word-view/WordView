import * as React from "react";
import renderer from "react-test-renderer";
import DifficultyLabel from "../../Components/Home/DifficultyLabel";

it(`DifficultyLabel > starter renders`, () => {
  const tree = renderer
    .create(<DifficultyLabel difficulty="starter" />)
    .toJSON();
  expect(tree).toBeDefined();
});

it(`DifficultyLabel > intermidiate renders`, () => {
  const tree = renderer
    .create(<DifficultyLabel difficulty="intermidiate" />)
    .toJSON();
  expect(tree).toBeDefined();
});

it(`DifficultyLabel > advanced renders`, () => {
  const tree = renderer
    .create(<DifficultyLabel difficulty="advanced" />)
    .toJSON();
  expect(tree).toBeDefined();
});
