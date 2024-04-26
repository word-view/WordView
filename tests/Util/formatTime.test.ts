import { formatTime } from '../../App/Util/time';

it(`Format time 1 second`, () => {
  const time = formatTime(1000);
  expect(time).toBe('00:01');
});

it(`Format time 1 minute`, () => {
  const time = formatTime(60000);
  expect(time).toBe('01:00');
});

it(`Format time 1 hour`, () => {
  const time = formatTime(3600000);
  expect(time).toBe('01:00:00');
});

it(`Format time NaN`, () => {
  const time = formatTime(NaN);
  expect(time).toBe('00:00');
});
