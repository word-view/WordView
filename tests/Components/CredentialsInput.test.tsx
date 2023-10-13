import * as React from "react";
import renderer from "react-test-renderer";
import CredentialsInput from "../../Components/Login&Register/CredentialsInput";
import { testing } from "../../store/state";

beforeEach(() => testing.set(true));

it(`CredentialsInput renders`, () => {
  const tree = renderer
    .create(
      <CredentialsInput
        placeholder="PlaceholderText"
        placeholderTextColor="#FFFFFF"
        label="LabelText"
        labelColor="#FFFFFF"
      />
    )
    .toJSON();

  expect(tree).toBeDefined();
});
