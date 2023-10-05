import { getLessons } from "@wordview/api";

it(`List lessons by starter difficulty`, async () => {
  const { status, data } = await getLessons("starter", "dev");

  expect(status).toBe(200);
  expect(data).toBeDefined();
});
