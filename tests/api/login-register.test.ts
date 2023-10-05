import { login, register } from "@wordview/api";
import { randomString } from "./util";

let name = randomString(8);

it(`Register user`, async () => {
  const response = await register(
    `${name}@gmail.com`,
    `${name}`,
    `S_enha64`,
    "dev"
  );
  expect(response.status).toBe(201);
});

it(`Login user`, async () => {
  const response = await login(`${name}@gmail.com`, `S_enha64`, "dev");
  expect(response.status).toBe(200);
});
