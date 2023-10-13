import * as React from "react";
import renderer from "react-test-renderer";
import CredentialsInput from "../../Components/Login&Register/CredentialsInput";

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