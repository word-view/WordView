import { formatTime } from "../modules/time/time";

it(`Seconds`, () => {
  let time = formatTime(1000);
  expect(time).toBe("00:01");
});

it(`Minutes`, () => {
  let time = formatTime(60000);
  expect(time).toBe("01:00");
});

it(`Hours`, () => {
  let time = formatTime(3600000);
  expect(time).toBe("01:00:00");
});
